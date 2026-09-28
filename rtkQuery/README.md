# RTK Query Data Fetching

A React + TypeScript project that fetches related data from a fake backend using **RTK Query** and **json-server**.

This project is part of my frontend learning journey in the [`frontend-mastery`](https://github.com/talha0603/frontend-mastery) repository.

![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=FFD62E)
![Redux Toolkit](https://img.shields.io/badge/RTK_Query-764ABC?style=flat&logo=redux&logoColor=white)
![JSON Server](https://img.shields.io/badge/json--server-000000?style=flat&logo=json&logoColor=white)

## Demo

![RTK Query Data Fetching](./Data%20Fetching.png)

## Overview

This app demonstrates API data fetching with **RTK Query** and relationship handling between resources.

It loads:
- Profile data
- Posts data
- Comments data

Comments are shown under their related post using `postId`.

**Flow:**

```text
db.json → json-server → RTK Query hooks → App → PostCard (with related comments)
```

## Features

- Fake REST API with json-server
- Fetch multiple endpoints with RTK Query
- Profile, Posts, and Comments integration
- Related data bonding (`comment.postId === post.id`)
- Loading and error handling
- TypeScript types for API models
- Clean card-based UI

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
│   │   ├── post.ts
│   │   ├── comment.ts
│   │   └── profile.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── Data Fetching.png
├── index.html
└── package.json
```

## What I Learned

- Creating a fake backend with json-server
- Building an API service with `createApi`
- Using multiple endpoints (`getPosts`, `getComments`, `getProfile`)
- Using RTK Query hooks in React components
- Handling loading and error states
- Connecting related data with foreign keys (`postId`)
- Rendering nested UI (comments inside post cards)
- Defining TypeScript types for API responses

## Getting Started

### Prerequisites

- Node.js installed

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

1. `db.json` stores `posts`, `comments`, and `profile`
2. `json-server` exposes them as REST endpoints
3. `api.ts` defines RTK Query endpoints for each resource
4. `App.tsx` fetches profile, posts, and comments
5. Comments are filtered by `postId` and passed into each `PostCard`

### Relationship Logic

```ts
comments.filter((comment) => comment.postId === post.id)
```

## Example API Endpoints

- `http://localhost:3000/posts`
- `http://localhost:3000/comments`
- `http://localhost:3000/profile`

## Author

**Talha**  
GitHub: [talha0603](https://github.com/talha0603)

## License

This project is for learning purposes.
