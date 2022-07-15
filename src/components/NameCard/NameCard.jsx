import React from 'react'
import './NameCard.css'

function NameCard({suggestedWord}){
    return(
        <div className ='name-card-result'>
            <p>{suggestedWord}</p>
        </div>

    )
}
export default NameCard