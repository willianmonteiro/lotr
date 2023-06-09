# The Lord of the Rings

This project is a front-end application built around the Lord of the Rings API, which provides access to collections of data related to the iconic fantasy series created by J.R.R. Tolkien. The application serves as a showcase for utilizing the API to retrieve and display various information about the characters, movies, and quotes from the Lord of the Rings universe.

## Features

- User-friendly interface for browsing and exploring Lord of the Rings data.
- Integration with the Lord of the Rings API to fetch and present data.
- Search functionality to find specific characters, movies, or quotes.
- Interactive and responsive design for seamless user experience across different devices..

## Installation and Usage
To run the project locally, follow these steps:

- Clone the repository: git clone <https://github.com/willianmonteiro/willian_Project.git>
- Navigate to the project directory: `cd willian_Project`
- Install the dependencies: `npm install or yarn install`
- Start the development server: `npm run dev or yarn dev`
- Open your web browser and visit http://localhost:5173 to view the application.


## Project Structure

The project follows a two-layered architecture, consisting of the `/src/app` and `/src/presenter` directories.

In the `/src/app` directory, you will find all the logic-related code written in JavaScript, independent of any specific framework or library. This includes:

- `Domain:` Contains the domain-specific logic and entities of the application.
- `Data:` Handles data-related operations such as fetching data from APIs or interacting with databases.
- `Infra:` Includes the configuration for external APIs or libraries, such as setting up Axios for making HTTP requests.

On the other hand, the `/src/presenter` directory is dedicated to React-specific code and components. It contains the following:

- `Assets:` Stores any static assets, such as images or CSS files.
- `Components:` Contains reusable components that can be used across different screens or features of the application.
- `Routing Configuration:` Handles the configuration of routes and navigation within the application.
- `Screens:` Represents the different screens or pages of the application. Each screen may have its own folder with associated components and services.
- `Services:` Contains hooks that provide specific functionality or data to the components. These hooks interact with the logic layer (`/src/app`) rather than accessing the logic directly. They implement specific use cases or user journeys, such as retrieving a list of movies or displaying movie details.

This architecture promotes separation of concerns and code reusability. The logic layer (`/src/app`) focuses on the business logic and data handling, while the presentation layer (`/src/presenter`) deals with UI components, routing, and screen composition. The use of hooks in the services enables components to access the necessary functionality without directly interacting with the logic layer.

By structuring the project in this way, it becomes easier to maintain, test, and extend the application while keeping a clear separation between different aspects of the codebase.