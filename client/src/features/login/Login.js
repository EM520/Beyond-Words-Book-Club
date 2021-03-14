import React from 'react';
import { render } from 'react-dom';
import React, { useState } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";

    export default function Login() {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
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