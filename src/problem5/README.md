# Problem5

This is a simple CRUD application built with TypeScript, Express.js and SQLite for data persistence. Use tools like Postman or Insomnia to test the API endpoints with a graphical interface.

## Start the Application

1. Development Mode: Uses nodemon to automatically restart the server on file changes. Ideal for development.
    ```
    npm run dev
    ```

2. Production Mode: Uses ts-node to run the server directly. Suitable for production or if you don’t need automatic restarts.
    ```
    npm run start
    ```

## Example Requests

1. Create a Resource:
    ```
    curl -X POST http://localhost:3000/api/resources -H "Content-Type: application/json" -d '{"name": "Resource 1", "description": "This is resource 1"}'
    ```

2. List All Resources:
    ```
    curl http://localhost:3000/api/resources
    ```

3. Get Details of a Resource:
    ```
    curl http://localhost:3000/api/resources/1
    ```

4. Update a Resource:
    ```
    curl -X PUT http://localhost:3000/api/resources/1 -H "Content-Type: application/json" -d '{"name": "Updated Resource 1", "description": "This is the updated resource 1"}'
    ```

5. Delete a Resource:
    ```
    curl -X DELETE http://localhost:3000/api/resources/1
    ```

## API Endpoints

- `POST /api/resources` - Create a new resource.
- `GET /api/resources` - List all resources.
- `GET /api/resources/:id` - Get details of a resource.
- `PUT /api/resources/:id` - Update a resource.
- `DELETE /api/resources/:id` - Delete a resource.
