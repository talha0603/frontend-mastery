# Redux Toolkit Todo

A simple and clean Todo application built with **React**, **Vite**, and **Redux Toolkit**.

This project is part of my frontend learning journey in the [`frontend-mastery`](https://github.com/talha0603/frontend-mastery) repository.

---

## Overview

This app demonstrates how to manage global state using Redux Toolkit. Users can add todos, view the list from the Redux store, and remove items in real time.

---

## Features

- Add new todo items
- Display todos from Redux global state
- Remove todos with one click
- Clean and responsive UI
- Built with modern React practices

---

## Tech Stack

| Technology | Purpose |
|---|---|
| React | UI library |
| Vite | Development & build tool |
| Redux Toolkit | State management |
| React-Redux | React bindings for Redux |
| Tailwind CSS | Styling |

---

## Project Structure

```text
reduxToolkitTodo/
├── src/
│   ├── app/
│   │   └── store.js
│   ├── features/
│   │   └── todo/
│   │       └── todoSlice.js
│   ├── components/
│   │   ├── AddTodo.jsx
│   │   └── Todos.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
├── index.html
├── package.json
└── vite.config.js
```

---

## What I Learned

- Creating a Redux store with `configureStore`
- Building slices using `createSlice`
- Using `useDispatch` to send actions
- Using `useSelector` to read state
- Wrapping the app with Redux `<Provider>`
- Understanding Redux state shape (`state.todo.todos`)

---

## Getting Started

### Prerequisites

- Node.js installed on your machine

### Installation

```bash
cd reduxToolkitTodo
npm install
```

### Run the project

```bash
npm run dev
```

Open the local URL from the terminal (usually `http://localhost:5173`).

---

## Available Scripts

```bash
npm run dev       # Start development server
npm run build     # Build for production
npm run preview   # Preview production build
```

---

## How It Works

1. `todoSlice.js` contains the todo state and reducers (`addTodo`, `removeTodo`)
2. `store.js` registers the todo reducer in the Redux store
3. `AddTodo.jsx` dispatches the `addTodo` action
4. `Todos.jsx` reads todos with `useSelector` and dispatches `removeTodo`

---

## Author

**Talha**  
GitHub: [talha0603](https://github.com/talha0603)

---

## License

This project is for learning purposes.
