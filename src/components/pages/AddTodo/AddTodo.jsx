import { CalendarDaysIcon, HandRaisedIcon } from "@heroicons/react/24/outline";
import Navbar from "../../Navbar/Navbar";
import { addTodo } from "../../../feature/Todo/TodoSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const AddTodo = () => {
  const dispatch = useDispatch();
  const [newTask, setNewTask] = useState("");
  const [plans, setPlans] = useState([]);
  const [priority, setPriority] = useState("Low");
  const [completionDate, setCompletionDate] = useState("");

  const handleAddTask = () => {
    // Construct your task object with all the details
    const task = {
      taskName: newTask,
      plans: plans, 
      priority: priority,
      completionDate: completionDate,
    };
    if (!newTask) {
      toast.error("Task Field should not be empty");
      return;
    }

    dispatch(addTodo(task));
    toast.success("Task Added");
    // Reset all fields after adding the task
    setNewTask("");
    // setPlans([]);
    // setPriority("Low");
    // setCompletionDate("");
  };

  const handleAddPlan = () => {
    setPlans([...plans, "aa"]);
    console.log("My Plans", plans);
  };

  const handlePlanChange = (index, value) => {
    const updatedPlans = [...plans];
    updatedPlans[index] = value;
    setPlans(updatedPlans);
  };

  const handleRemovePlan = (indexToRemove) => {
    const updatedPlans = plans.filter((_, index) => index !== indexToRemove);
    setPlans(updatedPlans);
  };

  return (
    <div className="flex justify-center">
      <Navbar />
      <div className="relative isolate overflow py-16 sm:py-24 lg:py-32  mt-10"  >
  
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex justify-between gap-x-4">
        <Link to='/todo'>
        <button
              style={{
                backgroundColor: 'blue',
                color: 'white',
                padding: '0.5rem 1rem',
                borderRadius: '20px',
              }}
            >
              Back
            </button>
        </Link>
        <Link to='#'>
           <button
              style={{
                backgroundColor: 'blue',
                color: 'white',
                padding: '0.5rem 1rem',
                borderRadius: '20px',
              }}
            >
              Add field
            </button>
            </Link>
          </div>
          <div
            className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-16 lg:max-w-none  lg:grid-cols-2 "
            style={{ marginTop: "8rem" }}
          >
            <div className="max-w-xl lg:max-w-lg ">
              <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
                Add Your Daily Tasks.
              </h2>
              <p className="mt-4 text-lg leading-8 text-black">
                Stay organized and boost your productivity with our intuitive
                to-do app. Easily add, manage, and complete your daily tasks.
                Take control of your schedule and accomplish more every day.
              </p>

              <div className="mt-6 flex max-w-md gap-x-4">
                <label htmlFor="task-address" className="sr-only">
                  task address
                </label>
                <input
                  id="mytask"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  type="task"
                  autoComplete="task"
                  required
                  className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset  focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                  placeholder="Enter your task"
                />
                <button
                  type="submit"
                  className="flex-none rounded-md bg-blue-500 px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                  onClick={handleAddTask}
                >
                  Add My Task
                </button>
              </div>
            </div>
            <div className="mt-6 flex flex-col max-w-md gap-x-4">
              
              
              {/*---------   Add plans section start----------*/}
              <div>
                <label className="block text-sm font-medium text-black">
                  Plans to Achieve
                </label>
                {plans.map((plan, index) => (
                  <div key={index} className="flex mt-2 relative">
                    <input
                      type="text"
                      value={plan}
                      onChange={(e) => handlePlanChange(index, e.target.value)}
                      className="flex-auto min-w-0 rounded-md border-0 bg-white/5 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                      placeholder={`Subplan ${index + 1}`}
                    />
                    {index > 0 && (
                      <button
                        type="button"
                        onClick={() => handleRemovePlan(index)}
                        className="absolute right-0 top-1/2 text-lg -translate-y-1/2 p-1 text-gray-500 hover:text-red-500 focus:outline-none"
                      >
                        <i class="fa-solid fa-square-minus  " ></i>
                      </button>
                    )}
                  </div>
                ))}
                <button
                  type="button"
                  onClick={handleAddPlan}
                  className="mt-2 text-sm text-blue-500 focus:outline-none hover:underline"
                >
                  + Add Plan
                </button>
              </div>
              {/*---------   Add plans section end----------*/}


              {/*--------- Priority dropdown start-------------*/}
              <div className="mt-4">
                <label className="block text-sm font-medium text-black">
                  Priority
                </label>
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="min-w-0 rounded-md border-0 bg-white/5 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                >
                  <option value="Low">Low</option>
                  <option value="Moderate">Moderate</option>
                  <option value="High">High</option>
                </select>
              </div>
              {/*--------- Priority dropdown start-------------*/}


              {/*---------- Completion date calendar start--------*/}
              <div className="mt-4">
                <label className="block text-sm font-medium text-black">
                  Completion Date
                </label>
                <input
                  type="date"
                  value={completionDate}
                  onChange={(e) => setCompletionDate(e.target.value)}
                  className="min-w-0 rounded-md border-0 bg-white/5 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                />
              </div>
              {/*---------- Completion date calendar end ---------*/}

            </div>
          </div>
        </div>
        <div
          className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
          aria-hidden="true"
        >
          <div
            className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default AddTodo;
