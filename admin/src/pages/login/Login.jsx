import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {login} from "../../store/serverCalls";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const handelClick = (e) => {
        e.preventDefault();
        login(dispatch({username, password}));

    }
    return (
        <div>
            <input type="text" placeholder={"username"} onChange={(e) => setUsername(e.target.value)}/>
            <input type="password" placeholder={"password"} onChange={(e) => setPassword(e.target.value)}/>
            <button onClick={handelClick}>Login</button>
        </div>
    );
};

export default Login;