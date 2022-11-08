import React from 'react'
import FeedbackItem from './FeedbackItem'

export default function 
({feedback}) {

    if (!feedback && feedback.length === 0) {
        return (
            <div>
                No Feedback Yet
            </div>
        )
    }
    return (
        <div className='feedback-list'>
            {feedback.map((item) => (
               <FeedbackItem key={item.id} item={item}/>
            ))}
        </div>
    )
}
