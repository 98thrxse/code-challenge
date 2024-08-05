import { Request, Response } from 'express';
import { initializeDb } from '../database';
import { Resource } from '../models/resource';

export const createResource = async (req: Request, res: Response) => {
    const db = await initializeDb();
    const { name, description } = req.body;
    const result = await db.run(`INSERT INTO resources (name, description) VALUES (?, ?)`, [name, description]);
    res.status(201).json({ id: result.lastID, name, description });
};

export const listResources = async (req: Request, res: Response) => {
    const db = await initializeDb();
    const resources: Resource[] = await db.all(`SELECT * FROM resources`);
    res.status(200).json(resources);
};

export const getResource = async (req: Request, res: Response) => {
    const db = await initializeDb();
    const { id } = req.params;
    const resource = await db.get(`SELECT * FROM resources WHERE id = ?`, [id]);
    if (resource) {
        res.status(200).json(resource);
    } else {
        res.status(404).json({ message: 'Resource not found' });
    }
};

export const updateResource = async (req: Request, res: Response) => {
    const db = await initializeDb();
    const { id } = req.params;
    const { name, description } = req.body;
    const result = await db.run(`UPDATE resources SET name = ?, description = ? WHERE id = ?`, [name, description, id]);

    if (result && result.changes !== undefined && result.changes > 0) {
        res.status(200).json({ id, name, description });
    } else {
        res.status(404).json({ message: 'Resource not found' });
    }
};

export const deleteResource = async (req: Request, res: Response) => {
    const db = await initializeDb();
    const { id } = req.params;
    const result = await db.run(`DELETE FROM resources WHERE id = ?`, [id]);

    if (result && result.changes !== undefined && result.changes > 0) {
        res.status(200).json({ message: 'Resource deleted' });
    } else {
        res.status(404).json({ message: 'Resource not found' });
    }
};
