# TaskReb---Todo-App

This is a simple Todo List application built with React and Tailwind CSS. The app allows users to add, edit, delete, and mark tasks as completed. The todos are stored in the local storage of the browser, so they persist even after the page is refreshed.

## Features

- Add new todos
- Edit existing todos
- Delete todos
- Mark todos as completed
- Persist todos in local storage

## Technologies Used

- React
- Tailwind CSS
- React Icons
- UUID

## Getting Started

To get started with this project, follow the steps below:

### Prerequisites

Make sure you have the following installed on your local machine:

- Node.js
- npm (or yarn)

### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/yourusername/todo-list-app.git
    cd todo-list-app
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

    or if you are using yarn:

    ```bash
    yarn install
    ```

3. **Run the application:**

    ```bash
    npm start
    ```

    or if you are using yarn:

    ```bash
    yarn start
    ```

    The application will start on `http://localhost:3000`.

## Project Structure

The project has the following structure:

```plaintext
todo-list-app/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── Components/
│   │   └── Navbar.jsx
│   ├── App.jsx
│   ├── index.css
│   ├── index.jsx
│   └── ...
├── .gitignore
├── package.json
├── README.md
└── ...
```
 ## Components

- Navbar.jsx: Contains the navigation bar component.
- App.jsx: Contains the main logic and structure of the Todo List application.

# Usage
 ## Add a Todo
- Type your todo in the input field under "Add a Todo".
- Click the "Save" button.
## Edit a Todo
- Click the edit button (pencil icon) next to the todo you want to edit.
- The todo will be loaded into the input field.
- Make your changes and click the "Save" button.
## Delete a Todo
- Click the delete button (trash icon) next to the todo you want to delete.
- Confirm the deletion in the popup dialog.
## Mark a Todo as Completed
- Click the checkbox next to the todo you want to mark as completed.
# Code Explanation
 ## State Management
- `todos`: Array of todo objects.
- `todo`: Current todo being added or edited.
- `editId`: ID of the todo being edited (null if adding a new todo).
 ## useEffect
The `useEffect` hook is used to load todos from local storage when the component mounts.

```javascript

useEffect(() => {
  let todos = JSON.parse(localStorage.getItem("todos"));
  setTodos(todos);
}, []);
```

 ## Handlers
- `handleAdd`: Adds a new todo or updates an existing one.
- `handleEdit`: Loads the selected todo into the input field for editing.
- `handleDelete`: Deletes the selected todo after confirmation.
- `handleChange`: Updates the current todo input value.
- `handleCheckBox`: Toggles the completion status of a todo.
 ## Local Storage
The saveToLocalStorage function saves the todos array to local storage.

```javascript

const saveToLocalStorage = () => {
  localStorage.setItem("todos", JSON.stringify(todos));
};
```
 ## Styling
The application is styled using Tailwind CSS. The utility-first approach of Tailwind CSS allows for easy and quick styling directly in the JSX.


Feel free to contribute to this project by creating issues or submitting pull requests. For any questions, please contact [skrebelkabir@gmail.com](mailto:skrebelkabir@gmail.com)

Happy coding!


Copy and paste the above markdown content into your `README.md` file to provide a comprehensive overview of your Todo List application.






