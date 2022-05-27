import React, { useState } from 'react';


function Services() {
    const [name, setName] = useState('Saqib Ali');
    const [email, setEmail] = useState('');
    const [num, setNum] = useState(0);
    let [list,setList] = useState([{name: 'Saqib',subject:'React'},{name:'Jhon Wick',subject:'Assisination'}])
    let [obj, setObj] = useState({name: 'Saqib',fName:'Maqbool Hussain'})
    
    let Check_data =()=>{
        console.log(
            name,
            email
        )
    }
    console.log(num)
  return (
    <div className='container'>
    <ul>
        {list.map((item,index)=>{
            return <li index>{`Name: ${item.name} Subject: ${item.subject}`}</li>
        })}
    </ul>

        
    </div>
  )
}

export default Services