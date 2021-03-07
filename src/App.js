import React,{useEffect} from 'react';
import   './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import ProfileScreen from './screens/ProfileScreen';
import { auth } from './firebase';
import { login, logout, selectUser } from './features/userSlice';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const user = useSelector(selectUser);
 const dispatch = useDispatch();
  useEffect(() => {
  const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if(userAuth){
        console.log(userAuth);
        dispatch(login({
          uid:userAuth.uid,
          email: userAuth.email
        })
        )
      }
      else{
        dispatch(logout());
      }
    });
    return unsubscribe;
  }, [dispatch])

  return (
    <div className="App">
      <Router>
        {!user ? (
          <LoginScreen />
        ):(
          <Switch>
            
          <Route exact path="/">
          <HomeScreen />
          </Route>

          <Route path="/Profile">
              <ProfileScreen />
            </Route>
        </Switch>
        )}
    </Router>
          </div>
  );
}

export default App;
