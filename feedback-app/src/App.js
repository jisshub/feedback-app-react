import React, { useState } from 'react'
import Header from './components/Header'
import PropTypes from 'prop-types'
import FeedbackItem from './components/FeedbackItem'
import FeedbackData from './data/FeedbackData'
import FeedbackList from './components/FeedbackList'

export default function App() {
  const [feedback, setFeedback] = useState(FeedbackData)
  return (
    <>
        <Header/>
        <div className='container'> 
            <h2>Hello World</h2>
        </div>
        <FeedbackList feedback={feedback} />
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