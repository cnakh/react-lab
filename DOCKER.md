# Local Docker Environment Setup

This project uses Docker Compose to manage the local development infrastructure (Laravel backend, React frontend via Vite, and the database).

## Prerequisites

Ensure you have the following installed on your machine:

- [Docker Desktop](https://docker.com) (Mac/Windows) or Docker Engine (Linux).
- Docker Compose v2+.

## Getting Started

1. **Clone the repository and enter the directory:**

   ```bash
   git clone <repo-url>
   cd <project-folder>
   ```

2. **Initialize your local environment file:**

   ```bash
   cp .env.example .env
   ```

   _(Ensure your `DB_HOST` in `.env` is set to your database service name, e.g., `mysql` or `mariadb`, rather than `127.0.0.1`)_

3. **Build and start the containers:**

   ```bash
   docker compose up -d --build
   ```

4. **Install dependencies inside the container:**

   ```bash
   docker compose exec app composer install
   docker compose exec app npm install
   ```

5. **Generate your application key & run migrations:**
   ```bash
   docker compose exec app php artisan key:generate
   docker compose exec app php artisan migrate --seed
   ```

## Useful Commands

- **Stop the environment:** `docker compose down`
- **View live logs:** `docker compose logs -f`
- **Restart containers:** `docker compose restart`
- **Access the application shell:** `docker compose exec app bash`

## Accessing the App

- **Web Application:** [http://localhost:8000](http://localhost:8000)
- **Vite Dev Server (HMR):** Runs internally on port `5173`
