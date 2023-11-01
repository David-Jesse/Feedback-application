import FeedbackItem from "./FeedbackItem"

function FeedbackList({feedback, handleDelete}) {
    if(!feedback || feedback.length === 0) {
        return <p>No feedback yet</p>
    }
    
  return (
    <div className="feedback-list">
      {feedback.map((item, id) => (
        <FeedbackItem key={item.id} id={id} item={item} handleDelete={handleDelete}/>
      ))}
    </div>
  )
}

export default FeedbackList
