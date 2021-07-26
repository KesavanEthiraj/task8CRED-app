import {Button,Form, Table} from 'react-bootstrap'
import React from "react";
import { Component } from 'react'
import {useHistory, useLocation, useParams,useRouteMatch} from "react-router-dom"
import './task.css';
import {useState, useEffect} from 'react'
import { Modal } from  'react-bootstrap'


function Profile() {
    const hist=useHistory();
    const [state, setState]=useState({
        Name:"Kesavan",
         email:"xxxx@gmail.com",
         Phone:"xxxxxxxxxx",
         state:"Tamilnadu",
         nationality:"Indian",   
         show:false
})

const postfun = ({ target: { name, value } }) => {
       
    setState({...state, [name]: value });}

    const handleSubmi=(e)=>{
e.preventDefault();
        console.log("handle")
        setState({...state,show:!state.show })
    }
const editprofile=()=>{
    setState({...state,show:!state.show })
}
    return (
        <div>
            <Button class="btn btn-secondary" onClick={hist.goBack}> Back</Button>
               <Button class="btn btn-secondary"onClick={hist.goForward}> Forward</Button>
             <div className="picture">
                 <div>
                     <Modal show={state.show}>
                 
                 <Form onSubmit={handleSubmi} >
               <lable > Name:  </lable>
               <input type="text" name="Name" value={state.Name} onChange={postfun}/>
               <lable> email :  </lable>
               <input type="text" name="email" value={state.email} onChange={postfun}/>
               <lable > Phone:  </lable>
               <input type="text" name="Phone" value={state.Phone} onChange={postfun}/>
               <lable> state :  </lable>
               <input type="text" name="state" value={state.state} onChange={postfun}/>
               <lable> nationality :  </lable>
               <input type="text" name="nationality" value={state.nationality} onChange={postfun}/>
               <Button variant="success" type="submit"> Submit</Button> 
               </Form>
 </Modal> </div> <div>
 <Button variant="primary" onClick={editprofile} variant="success">Edit Profile</Button>
 </div>
                 <table>
                     <tbody>
                         <tr> 
                             <td> 
                             <img src="https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_1280.png" alt="Girl in a jacket" width="200" height="200"></img>
                             </td>
                             <td> 
                                 <Table striped bordered hover variant="dark"> 
                                     <tbody> 
                                         <tr>
                                         <td>Name</td><td>{state.Name}</td></tr>
                                       <tr>  <td>email</td><td>{state.email}</td></tr>
                                        <tr> <td>Phone</td><td>{state.Phone}</td> </tr>
                                       <tr>  <td>state</td><td>{state.state}</td> </tr>
                                        <tr> <td>nationality</td><td>{state.nationality}</td>
                                         </tr>
                                     </tbody>
                                 </Table>
                             </td>
                         </tr>
                     </tbody>
                 </table>
             </div>
              <br></br>
               
               
        </div>
    )
}



export default Profile