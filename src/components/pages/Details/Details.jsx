import Navbar from "../../Navbar/Navbar";
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import UploadForm from "./UploadForm/UploadForm";
import Addbtn from "./AddBTN/Addbtn";

const Details = () => {
  // Getting Id from params
  const { id } = useParams();

  // From Reducer
  const SelectedTask = useSelector((state) =>
    state.todos.find((task) => task.id === id)
  );

  console.log(SelectedTask);

  return (
    <div>
      <Navbar />
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>

      {/* -----Detail Code Start */}
      <div>
        {
          <div className="main">
            <div className="flex justify-around gap-x-50  sm:gap-x-20 py-5" style={ { marginTop: "7rem" } } >
              <Link to="/todo">
                <button
                  style={{
                    backgroundColor: "blue",
                    color: "white",
                    padding: "0.5rem 1rem",
                    borderRadius: "20px",
                    marginTop: "30px",
                  }}
                >
                  Back
                </button>
              </Link>
              <Link to="#">
                <button
                  style={{
                    backgroundColor: "blue",
                    color: "white",
                    padding: "0.5rem 1rem",
                    borderRadius: "20px",
                    marginTop: "30px",
                  }}
                >
                 Edit
                </button>
              </Link>
            </div>

            <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-12 sm:px-6 sm:py-24 lg:max-w-6xl lg:grid-cols-2 lg:px-8">
              <div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">
                  {SelectedTask.taskName}
                </h2>
                <p className="mt-4 text-gray-500">
                  Embrace daily tasks with precision and dedication, just like a
                  walnut wood card tray meticulously crafted to perfectly
                  organize Focus cards. Let the steel divider symbolize the
                  separation between your active endeavors and the new
                  challenges, or use it as a testament to archive important
                  achievements and task lists.
                </p>
                <dl className="mt-8 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                  {SelectedTask.plans.map((plan, index) => (
                    <div key={index} className="border-t border-gray-200 pt-4">
                      <dt className="font-medium text-gray-900">{plan}</dt>
                      <dd className="mt-2 text-sm text-gray-500">{plan}</dd>
                    </div>
                  ))}
                </dl>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-8">
                {SelectedTask.notes.length > 0  ? (
                  SelectedTask.notes.map((note, index) => (
                    <div key={index} className="mynotes">
                      <img
                        src={note.image}
                        alt="Note"
                        className="rounded-lg bg-gray-100"
                      />
                      <h3 className="mt-2 text-sm font-medium text-gray-900">
                        {note.text}
                      </h3>
                    </div>
                  ))
                ) : (
                  <Addbtn />
                )}
              </div>
            </div>
          </div>
        }
      </div>

      {/* -----Detail Code End */}

      <div
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
    </div>
  );
};

export default Details;
