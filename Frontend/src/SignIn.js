import React from 'react';
import {BrowserRouter,Route,Link} from 'react-router-dom'


const SignIn = ()=>{
    return(
        <div class="form-container">
        <form id="signin-form">
        <ul class="form-items">
        <li>
        <h1>Register</h1>
        </li>
        <li>
        <label for="email">Name</label>
        <input type="text" name="name" id="name" />
        </li>
        <li>
        <label for="email">Email</label>
        <input type="email" name="email" id="email" />
        </li>
        <li>
        <label for="password">Password</label>
        <input type="password" name="password" id="password" />
        </li>
        <li>
              <label for="repassword">Re-Enter Password</label>
              <input type="password" name="repassword" id="repassword" />
            </li>
        <li>
        <button type="submit" class="primary">Register</button>
        </li>
        <li>
        <div>
        New User?
        <a href="/Register"> </a>
        </div>
        </li>
        </ul>
        </form>
        </div>
        )
    }

 

export default SignIn;

