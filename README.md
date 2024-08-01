# Tasks API

A simple API that allows you to create, read, update and delete tasks.

## Requirements

- Node.js
- pnpm
- PostgreSQL

## Installation

1. Clone the repository
2. Run `pnpm install` to install the dependencies
3. Create a `.env` file based on the `.env.example` file.
4. Run `pnpm dlx prisma migrate deploy` to create the database tables.
5. Run `pnpm run start:dev` to start the development server or `pnpm run start` to start the production server.

## Endpoints

### Tasks
- `POST /tasks`: Create a new task
- `GET /tasks`: Get all tasks
- `GET /tasks/:id`: Get a task by ID
- `PATCH /tasks/:id`: Update a task by ID
- `DELETE /tasks/:id`: Delete a task by ID

### Documentation
To view the API documentation, visit the `/swagger` endpoint.

### Health Check
To check the health of the API, visit the `/` endpoint.