import React from 'react';

const Homepage = ({ setScreen }) => {
  const activity = () => {
    setScreen('AddActivity');
  }

  return (
    <header className="Homepage">
      <h1 className="text-xl p-6">Diary LOL</h1>
      <button
        className="text-lg bg-neutral-300 hover:bg-neutral-700 hover:text-white px-4 py-2 m-2"
        onClick={activity}
      >
        Start
      </button>
      <div className="container w-100 mx-auto">
        <div className="row gap-2">
          <div className="columns-1 lg:columns-2 gap-2">
            <div className="w-full aspect-auto bg-slate-50 mb-2 flex justify-center items-center">
              <span className="text-lg">test a</span>
            </div>
            <div className="w-full aspect-auto bg-red-500 mb-2 flex justify-center items-center">
              <span className="text-lg">test b</span>
            </div>
            <div className="w-full aspect-auto bg-blue-500 mb-2 flex justify-center items-center">
              <span className="text-lg">test d</span>
            </div>
            <div className="w-full aspect-auto bg-stone-500 mb-2 flex justify-center items-center">
              <span className="text-lg">test h</span>
            </div>
            <div className="w-full aspect-auto bg-indigo-500 mb-2 flex justify-center items-center">
              <span className="text-lg">test e</span>
            </div>
            <div className="w-full aspect-auto bg-amber-500 mb-2 flex justify-center items-center">
              <span className="text-lg">test c</span>
            </div>
            <div className="w-full aspect-auto bg-teal-50 mb-2 flex justify-center items-center">
              <span className="text-lg">test f</span>
            </div>
            <div className="w-full aspect-auto bg-sky-500 mb-2 flex justify-center items-center">
              <span className="text-lg">test g</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Homepage;
