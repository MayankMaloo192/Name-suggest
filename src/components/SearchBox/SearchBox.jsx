import React from 'react';
import './SearchBox.css'

const SearchBox = ({InputChange})=>{
    
    return(
        <div className ='search-conatiner'>
            <input onChange={(event)=>InputChange(event.target.value)} type="text" placeholder='Search Something' className='search-box' />
        </div>
    );
}



export default SearchBox;