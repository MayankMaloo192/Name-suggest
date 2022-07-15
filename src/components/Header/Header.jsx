import React from'react'
import './Header.css'

const Header = ({headTitle , isExpanded})=>{
    return(
        
        <div className='head-component'>
            <img src="https://user-images.githubusercontent.com/26179770/106359099-693e3380-6336-11eb-8069-9e36f25de5ca.png" 
            alt="headerImage" className={`head-image
             ${isExpanded?'head-image-expanded':'head-image-shrinked'}`
             } />
             
            <h1 className={`head-text
             ${isExpanded?'head-text-expanded':'head-text-shrinked'}`
             }>{ headTitle}</h1>
        </div>
    );
}

export default Header