import React from 'react'
import './App.css'
import Header from'./../Header/Header'
import SearchBox from './../SearchBox/SearchBox'
import NameBar from './../Names/Names'


const name = require('@rstacruz/startup-name-generator')

class App extends React.Component{
    state = {
        headerText:'Name this!',
        isExpanded: true,
        suggestedWords:[]
    };

     handleChange = (text)=>{
        // console.log(name(text));
        
    
     this.setState({isExpanded:!(text.length>0),
        suggestedWords:text.length>0?name(text):[]});

    };
    
    render(){
       
        return (
            <div>
                <Header headTitle = {this.state.headerText}
                       isExpanded = {this.state.isExpanded}
                 />
                <SearchBox InputChange = {this.handleChange}/>
                <NameBar suggestedWords ={this.state.suggestedWords}/>
                
            </div>
        );

    }
}
export default App