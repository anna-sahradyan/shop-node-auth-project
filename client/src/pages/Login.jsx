import React, {useState} from 'react';
import {Button, Container, Form, Input, Title, Wrapper, Link,Error} from "../components/styledContainer/loginStyle";
import {useDispatch, useSelector} from "react-redux";
import {login} from "../store/serverCalls";
import {selectUser} from "../store/userSlice";

const Login = () => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const {isFetching, error} = useSelector((state) => state.user)
    const dispatch = useDispatch();
    const handelClick = (e) => {
        e.preventDefault();
        login(dispatch, {userName, password})
        console.log(userName, password)
    }
    return (
        <>
            <Container>
                <Wrapper>
                    <Title>SIGN IN </Title>
                    <Form onSubmit={(e) => e.preventDefault()}>
                        <Input placeholder={'username'} onChange={(e) => setUserName(e.target.value)}/>
                        <Input type={"password"} placeholder={'password'}
                               onChange={(e) => setPassword(e.target.value)}/>
                        <Button onClick={handelClick} disabled={isFetching}>LOGIN</Button>
                        {error && <Error> Something went wrong...</Error>}
                        <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
                        <Link>CREATE A NEW ACCOUNT</Link>

                    </Form>

                </Wrapper>
            </Container>
        </>
    );
};

export default Login;