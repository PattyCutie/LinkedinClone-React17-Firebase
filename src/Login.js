import React, { useState } from "react";
import "./Login.css";
import { useDispatch } from "react-redux";
import { login } from "./features/userSlice";
import {
    auth,
    createUserWithEmailAndPassword,
    updateProfile,
    signInWithEmailAndPassword,
} from "./firebase";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [profilePic, setProfilePic] = useState("");
    const dispatch = useDispatch();

    const loginToApp = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password).catch((err) => {
            alert(err);
        });
    };

    const register = () => {
        if (!name) {
            return alert("Please enter your full name");
        }

        console.log("register the user");

        //create user with firebase Authenticate
        createUserWithEmailAndPassword(auth, email, password)
            .then((userAuth) => {
                updateProfile(userAuth.user, {
                    displayName: name,
                    photoURL: profilePic,
                }).then(dispatch(login({
                    email: userAuth.email,
                    uid: userAuth.uid,
                    displayName: name,
                    photoUrl: profilePic,
                })
                )
                )
                    .catch((error) => {
                        alert(error);
                        console.log("user not update");
                    });
            })
            .catch((error) => {
                alert(error);
            });
    };

    return (
        <div className="login">
            <h1>Please Login or Register to LinkedIn Clone</h1>
            <div className="crop__container">
                <img
                    src="https://www.edigitalagency.com.au/wp-content/uploads/linkedin-logo-gif-funny-man-suitcase.gif"
                    alt=""
                />
            </div>
            <form>
                <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="FullName (required for register)"
                    type="text"
                />
                <input
                    value={profilePic}
                    onChange={(e) => setProfilePic(e.target.value)}
                    placeholder="Profile Picture URL (optional)"
                    type="url"
                />
                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    type="email"
                    id="loginInput"
                />
                <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    type="password"
                />
                <button type="submit" onClick={loginToApp}>
                    Sign In
                </button>
            </form>
            <p>
                Not a member ?{" "}
                <span className="login__register" onClick={register}>
                    Register Now :)
                </span>
            </p>
        </div>
    );
}

export default Login;
