import React from 'react'
import './Names.css'
import NameCard from './../NameCard/NameCard'

function NameLib({suggestedWords}){

 const words  = suggestedWords.map((suggestedWord)=>{
    return <NameCard key={suggestedWord} suggestedWord= {suggestedWord}/>;

 });
    return(
        <div className ='Word-list'> {words}</div>
    )

}

export default NameLib