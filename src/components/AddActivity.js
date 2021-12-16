import React from 'react';

const AddActivity = ({ setScreen }) => {
  const saveActivity = () => {
    setScreen('homepage');
  }

  return (
    <div className="AddActivity">
      <header className="">
        <h1 className="text-xl p-6">Activity</h1>
      </header>
      <div className="container w-100 mx-auto">
        <div className="row gap-2">
          <div className="columns-1 gap-2">
            <div className="w-full aspect-auto bg-slate-50 mb-2 flex justify-center items-center flex-col">
              <label>Label</label>
              <input className="block mx-auto mb-2 rounded border-gray-400 hover:border-gray-800 border-2 border-solid w-100"/>
              <label>Description</label>
              <textarea className="block mx-auto mb-2 rounded border-gray-400 hover:border-gray-800 border-2 border-solid w-100"></textarea>
              <button
                className="block mx-auto mb-2 text-lg bg-neutral-300 hover:bg-neutral-700 hover:text-white px-4 py-2 m-2"
                onClick={saveActivity}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddActivity;
