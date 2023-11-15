import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import './SignUp.css';
import { Link } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const SignUp = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const confirmPasswordRef = useRef('');
    const [successMsg, setSuccessMsg] = useState('');

    // Firebase email-password authentcation hook
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    // Signup form submit handler
    const formSubmitHandler = event => {
        event.preventDefault();

        // input fields value
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const confirmPass = confirmPasswordRef.current.value;

        if(password === confirmPass) {
            createUserWithEmailAndPassword(email, password);
            
        }
    }

    return (
        <div className='mx-auto row container form-page-bg'>
            <div className='d-flex justify-content-center align-items-center vh-100'>
                <Form onSubmit={formSubmitHandler} className='col-12 col-md-6 p-3 shadow-lg bg-body-tertiary rounded'>
                    <h1 className='text-center my-4'>Please Register First</h1>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" ref={emailRef} placeholder="Enter Your Email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="password" ref={passwordRef} placeholder="Password" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                        <Form.Control type="password" ref={confirmPasswordRef} placeholder="Confirm Password" required />
                    </Form.Group>
                    <Button className='appointment-btn' variant="primary" type="submit">
                        Register
                    </Button>
                    <p className='my-2'>Already have an Account? <Link to='/login'>Login</Link></p>
                </Form>
            </div>
        </div>
    );
};

export default SignUp;