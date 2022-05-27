import {get,child, getDatabase,ref} from 'firebase/database'


const get_data =(data)=>{
    return(dispatch)=>{
        dispatch({
            type: 'SETDATA',
            data: data
        })
    }

}



function firebaseData(){
 return(dispatch)=>{
     const db_ref = ref(getDatabase());
     get(child(db_ref,'Users')).then((snapshot)=>{
         if(snapshot.exists()){
             console.log(snapshot.val())
         }else{
             console.log('No data avaliable')
         }
     })
     .catch((error)=>{
         console.log(error)
     })

 }
    


}





export {

    get_data,
    firebaseData
    
}