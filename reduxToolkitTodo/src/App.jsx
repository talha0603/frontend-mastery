import AddTodo from "./components/AddTodo.jsx"
import Todos from "./components/Todos.jsx"

function App() {
  return (
    <main className="min-h-screen px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-2xl">
        <header className="mb-10">
          <p className="mb-3 text-sm font-medium tracking-[0.18em] text-accent uppercase">
            Redux Toolkit
          </p>
          <h1 className="font-display text-4xl leading-none font-extrabold text-ink sm:text-5xl">
            Learning Redux Toolkit
          </h1>
          <p className="mt-3 max-w-md text-base text-muted">
            Add tasks, remove them, and watch state update through the store.
          </p>
        </header>

        <section className="space-y-6">
          <AddTodo />
          <Todos />
        </section>
      </div>
    </main>
  )
}

export default App