import React, { Component } from 'react'


function metaMask(){

}

export default class MetaMask extends Component {
    constructor(){
        super()
        this.state ={
            erroMessage:  "",
            accountNum: '',
            userBalance: ''
        }
    }
    metaMask =()=>{
       
        if(window.ethereum){
        window.ethereum.request({method: 'eth_requestAccounts'})
        .then(result =>{
            this.accountHandler(result[0])
        })
        }else{
            this.setState({
                erroMessage: 'Please install Meta Mask'
            })
        }
    }
    accountHandler=(acc)=>{
        this.setState({
            account: acc
        })


    }

    userBalance =()=>{
        window.ethereum.request({method:'eth_getBalance'})
        .then(balance =>{
            this.setState({
                userBalance: balance
            })
        })
    }
  render() {
     
    return (
      <div id='wallet'>
          <p className='text-light h6'>{`Your Account Number: ${this.state.accountNum}`}</p>
          <p className='text-light'>{`Your Current Balance: ${this.state.userBalance}`}</p>

          <p className='h5' style={{color:'red'}}>{this.state.erroMessage}</p>
          <button className='btn btn-outline-light ' onClick={this.metaMask}>Connect Meta Mask</button>

      </div>
    )
  }
}
