import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Login from './Login'
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widgets from './Widgets';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser, login, logout } from "./features/userSlice";
import {
  auth,
  onAuthStateChanged,
} from './firebase';

function App() {
  //after setup userSlice.js then create useSeletor for user
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        // user is logged in
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoURL,
        })
        );
      } else {
        dispatch(logout());
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <div className='app'>
      {!user ? (
        <Login />
      ) : (
        <div className='app__body'>
          <div className="app__navbar">
            <Header />
          </div>
          <div className="app__content">
            <Sidebar />
            <Feed />
              {/*  */}
            <Widgets />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
