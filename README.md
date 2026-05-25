# EmployeeCrudOperations

This repository contains a Spring Boot backend and a React frontend.

## Structure

- `pom.xml` - Spring Boot Maven project descriptor
- `src/main/java/...` - backend Java source
- `src/main/resources` - backend resources and configuration
- `frontend/` - React UI application
- `frontend/vite-project/` - supplementary Vite sample project

## Get started

### Backend

From the repository root:

```bash
./mvnw spring-boot:run
```

### Frontend

From the `frontend` directory:

```bash
cd frontend
npm install
npm start
```

### Build

```bash
./mvnw clean package
cd frontend
npm run build
```

## Notes

- `target/` and `node_modules/` should not be committed.
- The root `.gitignore` now ignores generated build output for both backend and frontend.
