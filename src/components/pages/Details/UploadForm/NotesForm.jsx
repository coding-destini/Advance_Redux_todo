import { useState } from "react";
import "./notesForm.css";
import { organizeNotes } from "../../../../feature/Todo/TodoSlice";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

const people = [
  {
    name: "Leslie Alexander",
    email: "leslie.alexander@example.com",
    role: "Co-Founder / CEO",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    lastSeen: "3h ago",
    lastSeenDateTime: "2023-01-23T13:23Z",
  },
  {
    name: "Michael Foster",
    email: "michael.foster@example.com",
    role: "Co-Founder / CTO",
    imageUrl:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    lastSeen: "3h ago",
    lastSeenDateTime: "2023-01-23T13:23Z",
  },
  {
    name: "Dries Vincent",
    email: "dries.vincent@example.com",
    role: "Business Relations",
    imageUrl:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    lastSeen: null,
  },
  {
    name: "Lindsay Walton",
    email: "lindsay.walton@example.com",
    role: "Front-end Developer",
    imageUrl:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    lastSeen: "3h ago",
    lastSeenDateTime: "2023-01-23T13:23Z",
  },
  {
    name: "Tom Cook",
    email: "tom.cook@example.com",
    role: "Director of Product",
    imageUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    lastSeen: null,
  },
];

const NotesForm = () => {

  const [note,setNote] = useState([]);
  const id =  useParams();
  console.log("Id in Upload notes form" , id)
  
  
  const handleAddData =()=>{
  
}
  return (
    <>
      <div
        className="selectedImageList flex flex-wrap scroll-container "
        style={{ width: "100%", height:"40rem", overflow: "hidden" }}
      >
        <div className="w-full sm:w-3/4 md:w-2/3 lg:w-3/4 xl:w-2/3 pr-4 mb-4 overflow-auto">
    <ul role="list" className="divide-y scroll-container divide-gray-100" style={{ maxHeight: "38rem" }}>
            {people.map((person) => (
              <li
                key={person.email}
                className="flex justify-between gap-x-6 py-5"
              >
                <div className="flex min-w-0 gap-x-4">
                  <img
                    className="h-12 w-12 flex-none rounded-full bg-gray-50"
                    src={person.imageUrl}
                    alt=""
                  />
                  <div className="min-w-0 flex-auto">
                    <p className="text-sm font-semibold leading-6 text-gray-900">
                      {person.name}
                    </p>
                    <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                      {person.email}
                    </p>
                  </div>
                </div>
                <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                  <p className="text-sm leading-6 text-gray-900">
                    {person.role}
                  </p>
                  {person.lastSeen ? (
                    <p className="mt-1 text-xs leading-5 text-gray-500">
                      Last seen{" "}
                      <time dateTime={person.lastSeenDateTime}>
                        {person.lastSeen}
                      </time>
                    </p>
                  ) : (
                    <div className="mt-1 flex items-center gap-x-1.5">
                      <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                        <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      </div>
                      <p className="text-xs leading-5 text-gray-500">Online</p>
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Form to upload images and notes */}
        <div className="w-full sm:w-1/4 md:w-1/3 lg:w-1/4 xl:w-1/3 pl-4 mb-4">
          <form
            action=""
            className="flex flex-col"
            style={{ alignItems: "center", width: "100%", margin: "auto" }}
          >
            <div className="note mb-4 w-full">
              <input
                type="text"
                placeholder="Add notes here"
                className="w-full form border"
                required
                onChange={(e)=>setNote(e.target.value)}
              />
            </div>
            <div className="upload flex w-full">
              <label
                className="custum-file-upload w-full h-20"
                htmlFor="file"
                required
              >
                <div className="icon">
                  <i
                    className="fa-solid fa-cloud-arrow-up text-sm"
                    style={{ fontSize: "2rem" }}
                  ></i>
                </div>
                <div className="text">
                  <span>Click to upload image</span>
                </div>
                <input type="file" id="file" />
              </label>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-2 rounded" onClick={handleAddData} >
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default NotesForm;
