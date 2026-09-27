import { useSelector, useDispatch } from "react-redux"
import { removeTodo } from "../features/todo/todoSlice.js"

const Todos = () => {
  const todos = useSelector((state) => state.todo.todos)
  // if your store uses reducer: todoReducer directly, use: state.todos
  const dispatch = useDispatch()

  return (
    <section className="rounded-2xl border border-line bg-panel/90 p-4 shadow-[0_10px_40px_-24px_rgba(15,28,26,0.45)] backdrop-blur">
      <div className="mb-4 flex items-end justify-between gap-3">
        <h2 className="font-display text-2xl font-bold text-ink">Todos</h2>
        <span className="text-sm text-muted">{todos?.length ?? 0} items</span>
      </div>

      <ul className="space-y-3">
        {todos?.map((todo) => (
          <li
            key={todo.id}
            className="flex items-center justify-between gap-4 rounded-xl border border-line bg-white px-4 py-3 transition hover:border-accent/40"
          >
            <span className="text-[15px] leading-snug text-ink">{todo.text}</span>
            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              className="rounded-lg px-3 py-1.5 text-sm font-semibold text-danger transition hover:bg-danger/10"
              aria-label={`Remove ${todo.text}`}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Todos