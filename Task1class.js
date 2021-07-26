import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios'
import {Table} from 'react-bootstrap'
import {Button,Form} from 'react-bootstrap'
import './task.css';

import {
    Link,
  } from "react-router-dom";
import { useHistory } from 'react-router-dom';
const URL="https://jsonplaceholder.typicode.com/posts"
const username="https://jsonplaceholder.typicode.com/users"
const comment="https://jsonplaceholder.typicode.com/posts"
function Post() {
   const hist=useHistory();
    const [state, setState]=useState({
             post:[],
              id:"",
              userid:"",
              usertitle:"",
              Body:"",
              name1:[],
              user:[""],
             id1:"",
             id2:"",
             comments:[""]
    })
    useEffect(async() => {         
        const posts= await getpost ()
        const names= await getnames()
       
        setState({...state, post:posts, name1:names})
  
    }, []) 
   const getpost=async()=>{
        try{
        const {data}=await axios.get(URL)
        
       return data
        
       }
       catch(err){
  console.log(err)
       }}
const getnames=async()=>{
       try{
        const {data}=await axios.get(username)
        return (data)
       }
       catch(err){
  console.log(err)
       }}
    
/////

   const handleSubmi = (e) => {
    console.log ("hi")
        e.preventDefault();
        
        state.id ? Editfun() :  newpost()
       
      };

     const newpost=async()=>{
      
        try{
        const {userid,usertitle,Body}=state;
        const {data}= await axios.post(URL,{
            userId:userid,
            title:usertitle,
            body:Body
        })
     
        const post=[...state.post]
      post.push(data)
    
      setState({...state, post:post, userid:"",usertitle:"" ,Body:""});
      }
      catch(err){
          console.log(err)
      }
      
    };



     const Editfun= async()=> {
        const {post,id,userid,usertitle,Body}=state
        
        try{
        const {data}= await axios.put(`${URL}/${id}`,{
            userId:userid,
            title:usertitle,
            body:Body
        })
        const index = state.post.findIndex((post) => post.id === id);
        post[index] = data;
       
        setState({...state,post, userid:"",usertitle:"" ,Body:""});
        
       }
       catch(err){
           console.log(err)
       }
    }

      const postfun = ({ target: { name, value } }) => {
       
       setState({...state, [name]: value });}

/////

//Edit Start
const selectfun=(id)=>{
    const idmap=state.post.filter((ele)=>ele.id==id)
   
    setState({...state,
        id:idmap[0].id,
        userid:idmap[0].userId,
        usertitle:idmap[0].title,
        Body:idmap[0].body
    })
}
//Edit End

/// Delete start
const deletefun=async(postid)=>{
    await axios.delete(`${URL}/${postid}`)

    let post = [...state.post];
    post = post.filter(({ id }) => id !== postid);
    setState({...state,post});
    
}

///delete End


/// userid find start
const useridfun = ({ target: { name, value } }) => {
    
    state.name1.map(({id,name})=>{
      if(name==value){
          setState({...state,
              userid:id,

          })
      }
      
    })}

///user id find end

    return (
        <div>
           <Button class="btn btn-secondary" onClick={hist.goBack}> Back</Button>
               <Button class="btn btn-secondary"onClick={hist.goForward}> Forward</Button>
          {  <div className="form">
            <Form onSubmit={handleSubmi} >
               
                <lable > UserID :  </lable>
                
                <select name="names" id="user" onChange={useridfun}>
                
                        {state.name1.map(({id,name})=>{
                            return(
  <option value={name}>{name}</option>
                            )
})}  
</select>
                <lable > Title:  </lable>
                <input type="text" name="usertitle" value={state.usertitle} onChange={postfun}/>
                <lable> Body :  </lable>
                <input type="text" name="Body" value={state.Body} onChange={postfun}/>
                <button variant="success" type="submit"> Submit</button> 
                </Form>
                 </div>}
          <Table striped bordered hover variant="dark">
                    <thead>
                        <tr width="1000px">
                            <td className="class2" >
                       <th className="class2"> User Id </th > <th className="class2"> Id </th> <th className="class3"> Title </th> <th className="class4"> Body </th> <th> Action </th> 
                       
                        </td>
                        </tr>

                    </thead>
                    <tbody>
                    {state.post.map(({userId,id,title,body})=>{
                      
                        
                        return(
                            
                            <tr key={id}>
                            <tr key={id} >
                                
                                <td className="class2"> <Link to ={`/post/${id}`}>{userId}</Link></td>
                                <td className="class2">{id}</td>
                                <td className="class3">{title}</td>
                                <td className="class4"> {body}</td>
                                <td><td><Button variant="danger" onClick={()=>deletefun(id)}>delete</Button>
                               
                                <Button variant="primary" onClick={()=>selectfun(id)}>Edit</Button></td> <td className="link"> <Link to ={`/post/${id}`}> Click Here For Details</Link></td> </td>
                            </tr>

                            </tr>
                        
                        )
                    })}
                        
                        
                    </tbody>
                </Table>  
          
        </div>
    )
        }

export default Post
