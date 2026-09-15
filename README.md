# FocusForge Productivity

FocusForge is a small task-management app built with React, Vite, Express, and PostgreSQL through Prisma.

## Run locally

1. In `server`, install dependencies, configure `DATABASE_URL`, run the Prisma migration, and start the API:

   ```bash
   npm install
   npx prisma migrate dev --name init
   npm start
   ```

2. In `client`, install dependencies and start Vite:

   ```bash
   npm install
   npm run dev
   ```

The API runs on port `5000` and the client runs on Vite's development port.

## Product improvement

The original Motivation Mode showed a random quote and refreshed it every five seconds. It was replaced with a task progress tracker that reports completed tasks, remaining tasks, and completion percentage using the task data already loaded by the dashboard. See [Changes.md](Changes.md) for the investigation and reasoning.