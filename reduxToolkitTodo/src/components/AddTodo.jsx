// // import { useState } from "react"
// // import { useDispatch } from "react-redux"
// // import { addTodo } from "../features/todo/todoSlice.js"

// // const AddTodo = () => {
// //   const [input, setInput] = useState("")
// //   const dispatch = useDispatch()

// //   const addTodoHandler = (e) => {
// //     e.preventDefault()
// //     if (!input.trim()) return
// //     dispatch(addTodo(input.trim()))
// //     setInput("")
// //   }

// //   return (
// //     <div className="mb-6 rounded-2xl border b-[#d5e0dc] bg-white p-4 shadow-sm">
// //       <form
// //         onSubmit={addTodoHandler}
// //         className="flex flex-col gap-3 sm:flex-row sm:items-center"
// //       >
// //         <input
// //           type="text"
// //           placeholder="Enter name of your todo"
// //           value={input}
// //           onChange={(e) => setInput(e.target.value)}
// //           className="box-border w-full flex-1 rounded-xl border b-[#d5e0dc] bg-panel-[#f7faf9] px-4 py-3 t-[#0f1c1a] outline-none focus:border-accent-[#0f766e] focus:outline-none focus:ring-0"
// //         />
// //         <button
// //           type="submit"
// //           className="rounded-xl bg-panel-[#0f766e] px-5 py-3 font-semibold whitespace-nowrap text-white outline-none h:bg-[#115e59] focus:outline-none focus:ring-0"
// //         >
// //           Add Todo
// //         </button>
// //       </form>
// //     </div>
// //   )
// // }

// // export default AddTodo

// import { useState } from "react"
// import { useDispatch } from "react-redux"
// import { addTodo } from "../features/todo/todoSlice.js"

// const AddTodo = () => {
//   const [input, setInput] = useState("")
//   const dispatch = useDispatch()

//   const addTodoHandler = (e) => {
//     e.preventDefault()
//     if (!input.trim()) return
//     dispatch(addTodo(input.trim()))
//     setInput("")
//   }

//   return (
//     <div className="mb-6 rounded-2xl border border-[#d5e0dc] bg-white p-4 shadow-sm">
//       <form
//         onSubmit={addTodoHandler}
//         className="flex flex-col gap-3 sm:flex-row sm:items-center"
//       >
//         <input
//           type="text"
//           placeholder="Enter name of your todo"
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           className="box-border w-full flex-1 rounded-xl border border-[#d5e0dc] bg-[#f7faf9] px-4 py-3 text-[#0f1c1a] outline-none focus:border-[#0f766e] focus:outline-none focus:ring-0"
//         />
//         <button
//           type="submit"
//           className="rounded-xl bg-[#0f766e] px-5 py-3 font-semibold whitespace-nowrap text-white outline-none hover:bg-[#115e59] focus:outline-none focus:ring-0"
//         >
//           Add Todo
//         </button>
//       </form>
//     </div>
//   )
// }

// export default AddTodo

import { useState } from "react"
import { useDispatch } from "react-redux"
import { addTodo } from "../features/todo/todoSlice.js"

const AddTodo = () => {
  const [input, setInput] = useState("")
  const dispatch = useDispatch()

  const addTodoHandler = (e) => {
    e.preventDefault()
    if (!input.trim()) return
    dispatch(addTodo(input.trim()))
    setInput("")
  }

  return (
    <div className="mb-6 rounded-2xl border border-[#d5e0dc] bg-white p-4 shadow-sm">
      <form
        onSubmit={addTodoHandler}
        className="flex flex-col gap-3 sm:flex-row sm:items-center"
      >
        <input
          type="text"
          placeholder="Enter name of your todo"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="box-border w-full flex-1 rounded-xl border border-[#d5e0dc] bg-[#f7faf9] px-4 py-3 text-[#0f1c1a] outline-none focus:border-[#0f766e] focus:outline-none focus:ring-0"
        />
        <button type="submit" className="add-todo-btn">
  Add Todo
</button>
      </form>
    </div>
  )
}

export default AddTodo