import React, { useState } from 'react'
import Header from './components/Header'
import PropTypes from 'prop-types'
import FeedbackItem from './components/FeedbackItem'
import FeedbackData from './data/FeedbackData'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'

export default function App() {
  const [feedback, setFeedback] = useState(FeedbackData)
  const deleteFeedback=(id)=>{
    if (window.confirm('Are you sure you want to delete ?')) {
      setFeedback(feedback.filter((eachItem)=> eachItem.id!==id))
    }
  } 
  return (
    <>
        <Header/>
        <div className='container'> 
            {/* <h2>Hello World</h2> */}
        </div>
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
    </>
  )
}

Header.defaultProps = {
  text: 'Feedback UI',
  bgColor: 'rgba(0,0,0,0.5)',
  textColor: '#ff6a95'
}

Header.propTypes={
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
}