import { useState } from 'react';
import Detail from './Activities/Detail'

const Activities = ({ activities }) => {

  const [showActivities, setShowActivities] = useState(false)
  const [currentActivity, setCurrentActivity] = useState({})

  let button;

  if (showActivities) {
    button = <p className="p-4">test</p>;
  } else {
    button = <div></div>;
  }

  return (
    <div className="Activities">
      <div className="container w-100 mx-auto">
        <div className="flex flex-row">
          <div className="basis-1/4 gap-2">
            <ul className="List">
              {activities.map((activity, index) => {
                return <li
                  key={index}
                  onClick={() => {
                    setCurrentActivity(activity)
                  }}
                >{activity.title}</li>
              })}
            </ul>
          </div>
          <div className="basis-3/4 gap-2">
            <Detail showActivities={showActivities} currentActivity={currentActivity} />

            <button
              className="block mx-auto mb-2 text-lg rounded bg-green-700 hover:bg-white text-white border-green-700  hover:text-green-700 hover:border-green-700 border-2 border-solid px-4 py-2 m-2 uppercase"
              onClick={() =>
                {
                  setShowActivities(!showActivities)
                }
              }
            >
              Show Activity
            </button>
            {button}
            <p>
              <a href="https://www.youtube.com/watch?v=VquX088paco">Video</a>
            </p>
            <p>Left off at 3:39:48</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Activities;
