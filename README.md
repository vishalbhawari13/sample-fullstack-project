# Fullstack Sample Project (Spring Boot + React + MySQL)

## What is included
- `backend/` - Spring Boot (Maven) backend exposing REST API at `/api/users`.
- `frontend/` - Minimal React app that talks to backend.
- `mysql-init/init.sql` - initial DB creation and sample data.
- `docker-compose.yml` - brings up MySQL, backend, and frontend.
- `Jenkinsfile` - Declarative Pipeline to build and run the project.

## Quick run (local)
Requirements: Docker & Docker Compose, JDK 17, Maven, Node (for local dev)

1. Build with Docker Compose:
   ```
   docker-compose up -d --build
   ```
2. Open frontend: http://localhost:3000
   Backend API: http://localhost:8080/api/users

## Push to Git (example)
Assuming you have a GitHub repo already created:

```
cd /path/to/project
git init
git add .
git commit -m "Initial commit - fullstack sample"
git remote add origin git@github.com:YOUR_USER/YOUR_REPO.git
git push -u origin master
```

## Jenkins setup (high level)
1. Install Jenkins with Docker on the build agent (or install Docker on the Jenkins host).
2. Create credentials for the Git repo (SSH key or username/password).
3. Create a Pipeline job pointing to your Git repo (Jenkinsfile in repo).
4. Ensure the Jenkins agent has Docker, Docker Compose, Maven and Node available (or use Docker-in-Docker).
5. Run the pipeline. It will:
   - Checkout code
   - Build backend (mvn package)
   - Build frontend (npm build)
   - Run `docker-compose up -d --build`

Note: For pushing Docker images to a registry, add credentials and `docker login` steps in the Jenkinsfile.

