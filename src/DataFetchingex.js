import React, { useEffect, useState } from 'react'


const URL = "https://jsonplaceholder.typicode.com/users";
function DataFetchingex() {
const [user,setUSer] = useState([]);
const [loading,setLoading] = useState(false);
const [isError,setIsError] = useState({status:false,msg:''});
// const fetchData = async (apiURL) => {
//  const response =await fetch (apiURL);
//  const data = await response.json();//Changed the json formate data
//  setUSer(data);
// }
const fetchData = async (apiURL) => {
    setLoading(true);
    setIsError({status:false,mag:""});
    try{
    const response =await fetch (apiURL);
    const data = await response.json();//Changed the json formate data
    setUSer(data);
    setLoading(false);
    setIsError({status:false,mag:""});
    if(response.status === 404){
    throw new Error ("data not found");
    }
   }catch (error) {
  setLoading(false);
//   setIsError({status:true,mag:"something went wrong Please try again"})
setIsError({status:true,mag: error.message||"something went wrong Please try again"})

}
};



useEffect(() => {
    fetchData(URL);
},[]);

if(loading){
    return(
        <div>
           <h1> loading....</h1>
        </div>
    );
}

if(isError.status){
    return(
        <div>
        <h1 style= {{color:'red'}}>{isError?.msg}</h1>
        </div>
    )
}
  return (
    <div>
       <h1>DataFetchingex</h1> 
       <ul>
        {
            user.map((eachItem,id) => {
             return(
                <li key={id}>
                    <div>{eachItem.email}</div>
                     <div>{eachItem.name}</div>
                 </li>
             )
            })
        }
       </ul>
     </div>
  )
}

export default DataFetchingex