# Note and Task Manager

[Live Demo](https://shrutika80.github.io/Note-Management/)

## Overview
Note and Task Manager is a React application that allows users to manage notes and tasks effectively. Users can create, view, and organize notes, as well as track tasks with checkboxes. This project aims to provide a clean, responsive, and user-friendly interface for note-taking and task management.

## Technologies Used
- React: Frontend framework for building the user interface.
- CSS: For styling components. (CSS-in-JS libraries like styled-components or emotion can be used.)
- JavaScript (ES6+): Modern JavaScript features for functionality and user interactions.

## Project Setup
To get started with the project, follow these steps:

1. Clone the Repository
```
git clone https://github.com/yourusername/note-task-manager.git
cd note-task-manager
```
2. Install Dependencies

Make sure you have Node.js installed. Then run:

```
npm install
```
3. Start the Development Server

```
npm start
```
Open http://localhost:3000 in your browser to see the application.

## Project Structure
The project follows a well-organized structure to ensure maintainability and scalability:

```
note-task-manager/
├── public/
│   ├── index.html
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── NoteList.js
│   │   ├── NoteItem.js
│   │   ├── TaskItem.js
│   ├── pages/
│   │   ├── Home.js
│   ├── App.js
│   ├── index.js
│   ├── styles/
│   │   ├── App.css
│   │   ├── Note.css
│   │   ├── Task.css
├── .gitignore
├── package.json
└── README.md

```
## Usage

- **Viewing Notes**: The main page displays a list of notes. Each note shows a title and content.
- **Managing Tasks**: Check the checkboxes in the note content to mark tasks as complete. Completed tasks will be moved to the end of the list with a strikethrough.
- **Reorganizing Notes**: Drag and drop notes to reorganize them.

## Optional Feature
**Background Color Customization**: Users can change the background color of each note (Feature can be accessed from the note settings).

