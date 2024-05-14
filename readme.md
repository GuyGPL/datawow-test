# Project Information

This project is a free concert ticket application built with Next.js for frontend and Nest.js for backend.

## Frontend

The frontend of the application is developed using Next.js, featuring a responsive design presentation (currently not fully integrated with the backend).

Below is the structure of the frontend directory:

-   **app:** This folder contains the Next.js application. It uses the `pages` directory to handle routing.
-   **contexts** Contains context management to efficiently manage and share state across application
-   **components:** Contains reusable React components used across the application.
-   **containers:** Contains container components for each page. Container components are responsible for fetching data and passing it down to presentational components.
-   **enums:** Contains enums used throughout the frontend application.
-   **hooks:** Contains custom hooks used for processing data and call service. (not integrate with components just for architecture idea propose)
-   **service:** Contains files to call APIs to the backend, separated by backend resource.
-   **types:** Contains DTO types used in the frontend, separated by backend resource

### Setting up Frontend

To set up the frontend:

1. Navigate to the `frontend` directory.
2. Run `yarn install` or `npm install` to install dependencies.
3. After installation, you can run the service locally using `yarn dev`.

### Libraries/Packages Used

-   **Tanstack Query:** For data fetching .
-   **Zod:** For data validation.
-   **React Icons:** For displaying icons.
-   **Axios:** For making HTTP requests.

## Backend

The backend of the application is built using Nest.js.

### Overview of Backend Architecture

The backend architecture adheres to the principles of the Onion Architecture pattern, which organizes the codebase into three main layers:

-   Controller Layer: Controllers handle incoming HTTP requests, translate them into application-specific actions, and delegate business logic to the service layer. They are responsible for request handling and response generation.

-   Service Layer: Services contain the application's business logic. They orchestrate high-level operations, apply business rules, and interact with the repository layer for data access. Services are responsible for implementing domain-specific operations and ensuring proper validation and error handling.

-   Repository Layer: Repositories abstract data access and communication with the database. They encapsulate database operations, such as querying, updating, and deleting data. Repositories provide a clean interface for interacting with the database, decoupling the application from specific database implementations.

Below is the structure of the frontend directory:

-   **app**: Contains folders organized by resources, where each folder represents a different domain or feature of the application. Each resource folder typically includes controllers, services, and repositories specific to that resource.

-   **enums** : Houses enumerations used throughout the backend. Enumerations provide a way to define a set of named constants representing discrete values.

-   **exception** : Contains an exception filter responsible for formatting error responses. This filter intercepts exceptions thrown during request processing and transforms them into a consistent error format before sending them back to the client.

-   **validation** : Holds validators implemented using Zod. Zod is used for data validation, ensuring that incoming requests adhere to the expected schema and format.

### Setting up Backend

1. Navigate to the `backend` directory.
2. Run `yarn install` or `npm install` to install dependencies.
3. (optional) Navigate to `docker` directory and run `docker-compose up` to create postgresDB container
4. check .env file for connection with your database (postgres)
5. After installation, you can run the service locally using `yarn start:dev`.

## Unit Tests

1. Navigate to the `backend` directory.
2. Run all unit tests by using `yarn test`

## Questions

-   Express your opinion about how to optimize your website in case that this website contains intensive data and when more people access, the lower speed you get?

    -   first identified which part of the application making app slower Database queries are a common source of slowdowns in many applications. In that case we

    1. can do query optimization make sure all query have index
    2. can use caching by storing commonly accessed data in memory can reduce DB workloads.

        if frontend or backend is a bottlenecks we can use load balancing for horizontal scaling to distribute the workload

-   Express your opinion about how to handle when many users want to reserve the ticket at the same time? We want to ensure that in the concerts there is no one that needs to stand up during the show.

    -   we can implement rate limit to limit the number of reservation requests accepted within a specific time frame. This helps prevent overwhelming the system with a sudden influx of booking requests and ensures a smoother experience for all users.
    -   implement locking ticket mechanism so when user it it reservation process system can lock the selected tickets temporarily to prevent other users from reserving them concurrently.
    -   implementing an appropriate isolation level in the database can help prevent users from selecting the same seat simultaneously
