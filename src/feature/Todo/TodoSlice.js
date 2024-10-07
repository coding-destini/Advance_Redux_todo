import { createSlice, nanoid } from "@reduxjs/toolkit";




const initialState ={
  todos : [
    {
      id: "1",
      taskName: "Plan a Vacation",
      plans: ["Book flights", "Reserve hotel", "Create itinerary"],
      priority: "High",
      completionDate: "2023-12-31",
      notes: [
        { text: "Explore travel blogs for recommendations", image: "https://images.unsplash.com/photo-1489440543286-a69330151c0b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHRyYXZlbCUyMGJsb2d8ZW58MHwwfDB8fHww" },
        { text: "Check weather forecast for destination", image: "https://images.unsplash.com/photo-1497942304796-b8bc2cc898f3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fHRyYXZlbCUyMGJsb2d8ZW58MHwwfDB8fHww" },
        { text: "Plan sightseeing itinerary for each day", image: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dHJhdmVsJTIwYmxvZ3xlbnwwfHwwfHx8MA%3D%3D" },
        { text: "Pack essentials for the trip", image: "https://images.unsplash.com/photo-1479888230021-c24f136d849f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fHRyYXZlbCUyMGJsb2d8ZW58MHx8MHx8fDA%3D" },

      ],
    },
    {
      id: "2",
      taskName: "Prepare for Exam",
      plans: ["Review notes", "Complete practice exams", "Organize study materials"],
      priority: "Moderate",
      completionDate: "2023-12-15",
      notes : [
        {
          text : "",
          image : ""
        }
      ]
    },
  ]
}

export const todoSlice = createSlice({
    name : "Todo",
    initialState,
    reducers : {
        
        // --------Add Todo -----------
           addTodo : (state, action)=>{
            console.log(action.payload)
            const taskId = nanoid();
              const {
              taskName,
              plans,
              priority,
              completionDate,
              notes,
              } = action.payload;


              const newTask = {
                id : taskId,
                taskName,
                plans : plans || [],
                priority,
                completionDate,
                notes : notes || []
              }

             return {
        ...state,
        todos: [...state.todos, newTask],
      }
        },

        //---------Remove Todo ---------
        deleteTodo : (state,action)=>{
          const UpdatedTodo = state.todo.filter((Item)=>{
            return Item.id !== action.payload
          }) 
          return {
            ...state,
            todos: UpdatedTodo
          }
        },

        //-------Edit Todo -----------
        editTodo : (state,action)=>{
          console.log( state)
          const {id, data} = action.payload;
          const updatedTodo = state.todos.map((item)=>{
          return   item.id === id ? {...item, taskName : data} : item
          })
          return {
            ...state,
            todos : updatedTodo
          }
        },

        //-----Organize Notes ---------
        organizeNotes: (state, action) => {
          const { note, img, id } = action.payload;
          const updatedTodos = state.todos.map((todo) =>
            todo.id === id ? { ...todo, notes: { text: note, image: img } } : todo
          );
          return {
            ...state,
            todos: updatedTodos,
          };
        },
        

    }
})


export const {addTodo,deleteTodo,editTodo,organizeNotes} = todoSlice.actions
export default todoSlice.reducer