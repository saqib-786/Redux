import React from 'react';

class Cards extends React.Component{
    render(){
        console.log(this.props)
        return(
            <div className='card'>
                <h1>Hello World</h1>
                <img src={this.props.img}/>
                
            </div>
        )
    }
}

export default Cards