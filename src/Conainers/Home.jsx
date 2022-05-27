import React from "react";
import './style.css'
import Nav from "../Components/Nav";
import Sectoin_1 from "../Components/Section_1";
import {connect} from 'react-redux';
import { get_data, firebaseData } from "../Store/Action";
import {firebase,database} from '../Config/Firebase';
import {ref,push,set, child,get, getDatabase} from 'firebase/database';



class Home extends React.Component{
    constructor(){
        super()
        this.state ={
            email: '',
            password: ''
        }
    }
    
    componentDidMount(){

        firebaseData()
    //   const db_ref = ref(getDatabase())
    //   get(child(db_ref,'Users')).then((snapshot)=>{
    //       if(snapshot.exists()){
    //           console.log(snapshot.val())
    //       }else{
    //           console.log('NO DATA AVAILABE')
    //       }
    //   })
    // .catch((error)=>{
    //     console.log(error)
    // })
        

    }
    send_data=()=>{
        firebase.database().ref('Todos').on('child_add',(data)=>{
            console.log(data)

        })
    }
    change_data =(text)=>{

        const key = push(ref(database)).key
    
        set(ref(database,'Users/'+ key),{
            userEmail: this.state.email,
            userPassword: this.state.password
        })

    

    }
    render(){
        console.log(this.props)
        let obj = {
            name: 'Bilal',
            email: 'bilal@gmail.com'
        }
        
        return(
            <div>

                <div className="container-fluid bg">
                    <div className="row">
                        <div className="col">
                            <Nav/>
                            <div className="d-flex justify-content-center flex-column h-100 align-items-center mt-5">
                                <h1 className="text-center text-light mt-5">Free HTML CSS Responsive Templetes</h1>
                                
                            </div>


                        </div>
                    </div>
                </div>

                <div className="container mt-5">
                    <div className="row">
                        <div className="col mt-5">
                        <Sectoin_1/>

                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h1>{this.state.email}</h1>
                            <h1>{this.state.password}</h1>
                            <label className="form-label" htmlFor="">Email</label>
                            <input onChange={(e)=>this.setState({email:e.target.value})} className="form-control w-25" placeholder="Enter your name" type="text" name="email" id="" />
                            <label htmlFor="">Password</label>
                            <input onChange={(e)=>this.setState({password:e.target.value})} className="form-control w-25" placeholder="Enter your password" type="text" name="password" id="" />
                            <button onClick={this.change_data} className="btn btn-dark mt-2">Login</button>

                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

const mapStateToProps =(state)=>({
    data: state.data,
    name: state.name
    
})


const mapDispatchToProps =(dispatch)=>({
    // get_data: (data)=> dispatch(get_data(data)),
    firebaseData: (data)=> dispatch(firebaseData())
    
    



})




export default connect(mapStateToProps,mapDispatchToProps) (Home)