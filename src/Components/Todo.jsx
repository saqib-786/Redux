import React from 'react';
import './style.css'

class TODO extends React.Component{
    constructor(){
        super()
        this.state = {
            todos:[{title:'Hi',edit:false},{title:'Hello',edit:false},{title:'How are you?',edit:false}],
            value: ''

        }
    }
    add_todo =()=>{
        var obj = {
            title: this.state.value,
            edit: false
        }

        this.setState({
            todos: [...this.state.todos,obj],
            value: ''
        })

        
    }


    delet_all =()=>{
        this.state.todos.splice(0,)
        this.setState({
            todos:this.state.todos
        })
    }
    edit_todo=(index,text)=>{
        this.state.todos[index].edit = true;
        this.setState({
            todos: this.state.todos
        })

    }
value_change =(e,i)=>{
    this.state.todos[i].title = e.target.value;
    this.setState({
        todos: this.state.todos
    })

}


update =(index)=>{
    this.state.todos[index].edit = false;
    this.setState({
        todos: this.state.todos
    })

}


delete_todo =(index)=>{
    this.state.todos.splice(index,1);
    this.setState({
        todos: this.state.todos
    })
    console.log('working..')
}
    render(){
        return(
            <div id='container'>
                <h1 style={{textAlign:'center'}}>TODO APP</h1>

                <div id='user_input'>
                    <input value={this.state.value} onChange={(e)=>this.setState({value:e.target.value})} id='todo' placeholder='Enter TODO' />
                    <button onClick={this.add_todo} className='btn'>ADD TODO</button>
                    <button onClick={this.delet_all} className='btn'>DELETE ALL</button>
                </div>


                <div id='todo_list'>
                <ul>
                  
                  {this.state.todos.map((item,index)=>{
                      return <li key={index} className='todos'>{item.edit ? <input onChange={(e)=>this.value_change(e,index)} value={item.title} placeholder='Enter new Value' />: item.title}
                      <div > {item.edit ? <button onClick={()=>this.update(index)}>UPDATE</button> :  <button onClick={()=>this.edit_todo(index,item)} style={{margin:'5px'}}>EDIT</button>}  <button onClick={()=>this.delete_todo(index)}>DELETE</button> </div>
                      </li>
                  })}
              </ul>
                </div>

            </div>
        )
    }
}
export default TODO