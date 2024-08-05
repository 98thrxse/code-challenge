import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

export const initializeDb = async () => {
    const db = await open({
        filename: './database.db',
        driver: sqlite3.Database
    });

    await db.exec(`
        CREATE TABLE IF NOT EXISTS resources (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            description TEXT
        )
    `);

    return db;
};
