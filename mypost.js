import React from "react";
import { Component } from 'react'
import {useState, useEffect} from 'react'
import {useHistory, useLocation, useParams,useRouteMatch} from "react-router-dom"
import axios from 'axios'
import {Table,Button} from 'react-bootstrap'



function Mypost() {
    const params=useParams()
    const hist=useHistory()
    const [state, setState]=useState({
        post:[],
         id:"",
           id2:"",
            id1:"",
            comments:"",
            id2:"",
            user:""

        })
        const username="https://jsonplaceholder.typicode.com/users"
const comment="https://jsonplaceholder.typicode.com/posts"
        const URL="https://jsonplaceholder.typicode.com/posts"
      //  const {data} = await axios.get(`${URL}/${params.id}`)
      useEffect(async() => {         
        const posts= await getpost ()
        console.log(posts)
        setState({...state, post:posts})
        
  
    }, []) 
    const getpost=async()=>{
       
        try{
        const {data} = await axios.get(`${URL}/${params.id}`)
        console.log(data)
        console.log(params)
       return data
        
       }
       catch(err){
  console.log(err)
       }}


       //Comment fun start
const commnetfun =async (userID,id)=>{
  
    try{
        const response=await axios.get(`${comment}/${id}/${"comments"}`)
       
        setState({...state,
           comments:response.data,
            id2:id,
            id1:""
        });
        
    
       }
       catch(err){
  console.log(err)
       }
  
  } 

  const close=()=>{
      setState({
          ...state, comments:"",id1:""
      })
  }
  ///comment fun end
      
  
  ///Getuser start
const getuserfun =async (userId,id)=>{
    try{
        const response=await axios.get(`${username}/${userId}`)
      
        setState({...state,
            user:[response.data],
            id1:id,
            id2:"",
            comments:""
        });
       }
       catch(err){
  console.log(err)
       }

  }

///getuser End
    return (
        <div>
    
    <Button class="btn btn-secondary" onClick={hist.goBack}> Back</Button>
               <Button class="btn btn-secondary"onClick={hist.goForward}> Forward</Button>
               <br></br>
               { 
               
                       <div>
                           <Table>
                               <thead> 
                               <th>Id</th> <th>User id</th> <th>Title</th><th>Body</th><th>Action</th>
                               </thead>
                               <tbody>
                <tr><td>{state.post.id}</td><td>{state.post.userId}</td><td>{state.post.title}</td><td>{state.post.body}</td>
                
                    <td>
                                <Button class="btn btn-info" onClick={()=>commnetfun(state.post.userId,state.post.id)}>Comments</Button>
                               
                                   <Button class="btn btn-info" onClick={()=>getuserfun(state.post.userId,state.post.id)}>GetUser</Button>
                               
                                </td>

                                </tr>

                                <tr  >
                                    <td  colSpan="5">
                                {state.id1 ? <div> {state.user.map((user)=>{
                                    
                                   let strig=JSON.stringify(user)
                                return(
                                    <div className="class1">
                                    {strig}
                                    </div>

                                )
                            })} <Button variant="primary" onClick={close}> Close </Button></div>:<p></p>}
                             
                            </td>
                            </tr>

                                <tr >
                                    <td colSpan="5">
                                {state.comments ? <div>{
                                 state.comments.map(({name,id,email,body})=>{
                                   return(
                                          <div className="class1"> <p>name={name}</p>
                                            <p>id:{id}</p>
                                            <p>email={email}</p>
                                            <p>body={body}</p>
                                            </div> 
                                            
                                        )
                            })} <Button variant="primary" onClick={close}> Close </Button></div>:<p></p>}
                             
                            </td>
                            </tr>
               
                </tbody>
               
               </Table>
               </div>
               
               }
                
        </div>
    )
}



export default Mypost

