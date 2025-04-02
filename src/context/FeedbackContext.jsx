import React, { createContext, useEffect, useState } from 'react'

export const FeedbackDataContext = createContext()

const FeedbackContext = ({children}) => {
    const [feedback, setfeedback] = useState(() => {
      const savedFeedback = localStorage.getItem("feedback")
      return savedFeedback ? JSON.parse(savedFeedback) : {}
    })

    useEffect(() => {
      localStorage.setItem("feedback",JSON.stringify(feedback))
    },[feedback])

    return (
      <FeedbackDataContext.Provider value={{feedback,setfeedback}}>
        {children}
      </FeedbackDataContext.Provider>
    )
}

export default FeedbackContext
