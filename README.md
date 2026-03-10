# Node.js Basic Server Practice

This project is a small practice exercise focused on learning the **fundamentals of Node.js**, especially how to work with the built-in `http` module to create a basic web server.

The goal of this project was **not to build a visually polished website**. Instead, the focus was on understanding and practicing some core functional aspects of Node.js, such as:

- Creating an HTTP server
- Handling incoming requests
- Implementing simple routing based on the request URL
- Serving static HTML files
- Reading files using `fs/promises`
- Handling basic error cases (such as a 404 page)

## Project Idea

To make navigation between pages more interesting during testing, each page displays a memorable quote from the HBO TV show: *Game of Thrones* (2011-2019).  

These quotes serve only as sample content while navigating between routes such as:

- `/`
- `/quote01`
- `/quote02`
- `/quote03`

The purpose is simply to have visible content while interacting with the server routes.

## Important Note

This project was designed **purely as a learning exercise** for Node.js fundamentals.

Because of that:

- The **visual design and styling were not the focus**
- The site was **not intended for production**
- The project **was not deployed online**

Instead, it is meant to be **cloned and run locally** in order to explore how a simple Node.js server works.

## Running the Project

1. Clone the repository:

```bash
git clone <repository-url>
```

2. Navigate to the project folder:

```bash
cd <project-folder>
```

3. Run the server with Node.js:

```bash
node server.js
```

4. Open your browser and go to:

```bash
http://localhost:8080
```

From there, you can navigate between the different quote pages.
