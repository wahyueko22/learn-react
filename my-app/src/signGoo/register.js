
import React, { useEffect, useState } from "react";
import "./register.css";

function Register() {

    return (
        <div class="container">
            <div class="login-form">
                <h2>Login</h2>
                <div class="form-group">
                    <label for="username">Username</label>
                    <input type="text" id="username" name="username" placeholder="Enter your username" required/>
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" id="password" name="password" placeholder="Enter your password" required/>
                </div>
                <button  onClick={signInWithGoogle}>Register</button>
            </div>
        </div>
    );
}

export default Register;