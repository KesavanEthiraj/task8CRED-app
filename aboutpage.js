import React from "react";
import { Component } from 'react'
import {useHistory}from "react-router-dom"
import {Button,Form} from 'react-bootstrap'

function Aboutpage() {
    const hist=useHistory();
    return (
        <div>
          <Button class="btn btn-secondary" onClick={hist.goBack}> Back</Button>
               <Button class="btn btn-secondary"onClick={hist.goForward}> Forward</Button>
               <p className="class7"> About Me</p>
               <p className="class7">  Click Post to get user details </p>

                 <br></br>
                 
        </div>
    )
}



export default Aboutpage

