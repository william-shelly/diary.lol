const Detail = ({ currentActivity }) => {

  return (
    <div className="Detail">
      <h1 className="text-xl my-6">{currentActivity.title}</h1>
      <p className="text-base px-6 pb-6">{currentActivity.description}</p>
    </div>
  )
}

export default Detail;
