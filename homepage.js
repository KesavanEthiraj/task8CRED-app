import {Button,Form} from 'react-bootstrap'
import React from "react";
import { Component } from 'react'
import {useHistory, useLocation, useParams,useRouteMatch} from "react-router-dom"
import './task.css';


function Homepage() {
    const hist=useHistory();
    return (
        <div>
            <Button class="btn btn-secondary" onClick={hist.goBack}> Back</Button>
               <Button class="btn btn-secondary"onClick={hist.goForward}> Forward</Button>
             <p className="class7">  Welcome you all </p>
             <p className="class7">  Click Post to get user details </p>
              <br></br>
               
               
        </div>
    )
}



export default Homepage

