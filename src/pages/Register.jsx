import React from 'react'
import { Footer, Navbar } from "../components";
import { Link, useNavigate} from 'react-router-dom';
import {database} from '../firebase-config';
import {createUserWithEmailAndPassword} from 'firebase/auth';




const Register = () => {
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();

        
        const email = e.target.Email.value
        const password = e.target.Password.value
        try {
            const authData = await createUserWithEmailAndPassword(database, email, password);
            console.log(authData, 'authData');
            navigate("/login");
            alert("Account has been created successfully");
          } catch (error) {
            console.error('Error creating user:', error);
            if (error.code === "auth/weak-password") {
              alert("Password must contain at least 6 characters");
            } else {
              alert("An error occurred while creating the account. Please try again.");
            }
            // Handle error, e.g., show an error message to the user
          }

        // console.log("Full Name:", e.target.Name.value);
        // console.log("Email:", e.target.Email.value);
        // console.log("Password:", e.target.Password.value);
    }
    return (
        <>
            <Navbar />
            <div className="container my-3 py-3">
                <h1 className="text-center">Register</h1>
                <hr />
                <div className="row my-4 h-100">
                    <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
                    <form onSubmit={(e) => handleSubmit(e)}>
                            <div className="form my-3">
                            <label htmlFor="someId">Full Name</label>

                                <input
                                    type="text"
                                    className="form-control"
                                    id="Name"
                                    placeholder="Enter Your Name"
                                />
                            </div>
                            <div className="form my-3">
                                <label  htmlFor="Email">Email address</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="Email"
                                    placeholder="name@example.com"
                                />
                            </div>
                            <div className="form  my-3">
                                <label htmlFor="Password">Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="Password"
                                    placeholder="Password"
                                />
                            </div>
                            <div className="my-3">
                                <p>Already has an account? <Link to="/login" className="text-decoration-underline text-info">Login</Link> </p>
                            </div>
                            <div className="text-center">
                                <button className="my-2 mx-auto btn btn-dark" type="submit" >
                                    Register
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Register