import { remove } from "firebase/database";
import React, { useEffect } from "react";
import {Navigate,Link} from 'react-router-dom';

class About extends React.Component{
    constructor(){
        super()
        this.state ={
            removeComponent: false

        }
    }
    go_home(){
        console.log('Hi')
     return   <Navigate to={'/'} />

    }
    componentWillUnmount(){
        console.log('Component has been deleted')
    }

    removeComponent =()=>{
        this.setState({
            removeComponent: true
        })
        if(this.state.removeComponent == true){
            
        }

    }
    render(){
      
    
        return(
            <div>
                <h1>This is About Page</h1>
                <button> <  Link to={'/'}>Go to Home</Link> </button>
                <h1>{this.props.count}</h1>
                <button onClick={this.removeComponent}>Delete</button>
                <button onClick={()=>this.props.get_data('Saqib')}>Send Data</button>
            </div>
        )
    }
}

export default About