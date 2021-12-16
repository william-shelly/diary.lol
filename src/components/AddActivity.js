import React, { useState } from 'react';

const AddActivity = ({ storeActivity }) => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const saveActivity = () => {
    storeActivity({ title, description })
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
              <label htmlFor="activity_title">Title: {title}</label>
              <input
                id="activity_title"
                className="block mx-auto mb-2 rounded border-gray-400 hover:border-gray-800 border-2 border-solid w-full max-w-xl p-2"
                onChange={event => setTitle(event.target.value)}
              />
              <label htmlFor="activity_description">Description</label>
              <textarea
                id="activity_description"
                className="block mx-auto mb-2 rounded border-gray-400 hover:border-gray-800 border-2 border-solid w-full max-w-xl p-2"
                onChange={event => setDescription(event.target.value)}
                ></textarea>
              <button
                className="block mx-auto mb-2 text-lg rounded bg-green-700 hover:bg-white text-white border-green-700  hover:text-green-700 hover:border-green-700 border-2 border-solid hover:text-white px-4 py-2 m-2 uppercase"
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
