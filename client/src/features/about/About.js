import React from 'react';
import { render } from 'react-dom';
// import React, { useState } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
//this was just a test on react-bootstrap.  not working.
// also don't understand the folder structure and adding 
// assets from other folders.  -- images folder -- 

    export function About() {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    <div style={{
       backgroundImage: `url("./images/blackandwhitebooks.jpg")`,backgroundRepeat: 'no-repeat',width:'250px',height:'250px',color:'white'
    }}>
      Nice Snippets
    </div>
        function validateFormFields() {
            return username.length > 0 && password.length > 0;
        }
        
        function handleSubmit(event) {
            event.preventDefault();
        }
        return (
            <div className="Login">
            <h1> Welcome to Beyond Words Book Club </h1>
                <form onSubmit={handleSubmit}>
                    <FormGroup controlId="Username" bsSize="large">
                        <ControlLabel>username  </ControlLabel>
                        <FormControl autoFocus type="text" value={username} 
                        onChange={e => setUserName(e.target.value)}/>
                    </FormGroup>
                    <FormGroup controlId="password" bsSize="large">
                        <ControlLabel>Password</ControlLabel>
                        <FormControl value={password} 
                        onChange={e => setPassword(e.target.value)} type="password"/>
                    </FormGroup>
                    <Button block bsSize="large" disabled={!validateFormFields()} type="submit">Login
                    </Button>
                </form>
            </div>
    );
}
render(<Login />, document.getElementById('root'));