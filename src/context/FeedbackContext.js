import { createContext, useState } from "react";
import {v4 as uuidv4} from 'uuid';

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {

    // State that handles the feedback
    const [feedback, setFeedback] = useState([
    {
        id: 1,
        text: 'Iyiowo is destined for greatness',
        rating: 10
    },
    {
        id: 2,
        text: 'Iyiowo is destined for greatness',
        rating: 4
    },
    {
        id: 3,
        text: 'Iyiowo is destined for greatness',
        rating: 3
    }

])

    // State that handles FeedbackEdit
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })

    // Function that adds feedback
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
      }
    

    // Deletes feedback    
    const deleteFeedback = (id) => {
        if(window.confirm('Are you sure about this action?')){
        setFeedback(feedback.filter((item) => item.id !== id))
        }
    }

  // Function that edits feedback
  const editFeedback = (item) => {
    setFeedbackEdit({
        item, 
        edit: true
    })
  }

    return <FeedbackContext.Provider value={{
        feedback,
        feedbackEdit,
        deleteFeedback,
        addFeedback,
        editFeedback,

    }}
    >
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext;