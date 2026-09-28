# RTK Query Data Fetching

A React + TypeScript project that fetches data from a fake backend using **RTK Query** and **json-server**.

This project is part of my frontend learning journey in the [`frontend-mastery`](https://github.com/talha0603/frontend-mastery) repository.

![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=FFD62E)
![Redux Toolkit](https://img.shields.io/badge/RTK_Query-764ABC?style=flat&logo=redux&logoColor=white)
![JSON Server](https://img.shields.io/badge/json--server-000000?style=flat&logo=json&logoColor=white)

## Demo

![RTK Query Data Fetching](./Data%20Fetching.png)

## Overview

This app demonstrates how to fetch and display API data using **RTK Query**.  
A fake backend is created with **json-server**, which reads data from `db.json`.

**Flow:**

```text
db.json → json-server → useGetPostsQuery() → map() → PostCard
```

## Features

- Fake REST API with json-server
- Data fetching with RTK Query
- Loading and error handling
- TypeScript types for API data
- Reusable `PostCard` component
- Clean UI for fetched posts

## Tech Stack

| Technology | Purpose |
|---|---|
| React | UI library |
| TypeScript | Type safety |
| Vite | Dev server & build tool |
| Redux Toolkit (RTK Query) | API fetching & caching |
| React-Redux | Connect React with Redux |
| json-server | Fake backend API |

## Project Structure

```text
rtkQuery/
├── src/
│   ├── components/
│   │   └── PostCard.tsx
│   ├── DB/
│   │   └── db.json
│   ├── redux/
│   │   └── api.ts
│   ├── types/
│   │   └── post.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── Data Fetching.png
├── index.html
└── package.json
```

## What I Learned

- Why we use json-server as a fake backend
- Creating an API service with `createApi`
- Using `fetchBaseQuery` with a base URL
- Defining endpoints (`getPosts`)
- Using auto-generated hooks like `useGetPostsQuery`
- Handling `isLoading`, `isError`, and `data`
- Mapping API data into UI cards
- Defining TypeScript types for API responses
- Connecting the app with `ApiProvider`

## Getting Started

### Prerequisites

- Node.js installed
- json-server installed (local or global)

### Installation

```bash
cd rtkQuery
npm install
npm install json-server
```

### Start fake API (Terminal 1)

```bash
npx json-server --watch src/DB/db.json --port 3000
```

### Start React app (Terminal 2)

```bash
npm run dev
```

Open the local URL shown in the terminal (usually `http://localhost:5173`).

## Available Scripts

```bash
npm run dev       # Start Vite development server
npm run build     # Build for production
npm run preview   # Preview production build
```

## How It Works

1. `db.json` stores fake data (`posts`, `comments`, `profile`)
2. `json-server` turns that file into a REST API on port `3000`
3. `api.ts` creates RTK Query endpoints (example: `GET /posts`)
4. `App.tsx` calls `useGetPostsQuery()` to fetch posts
5. Each post is rendered using the `PostCard` component

## Example API Endpoints

After running json-server:

- `http://localhost:3000/posts`
- `http://localhost:3000/comments`
- `http://localhost:3000/profile`

## Author

**Talha**  
GitHub: [talha0603](https://github.com/talha0603)

## License

This project is for learning purposes.
