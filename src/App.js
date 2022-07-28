import React, { Suspense, lazy } from 'react'
import { Route, Routes,Navigate,useNavigate } from 'react-router-dom';
import './App.css';

let SignIn = lazy(() => import('./page/SignIn/SignIn'));
let SignUp = lazy(() => import('./page/SignUp/SignUp'));
let NotFound = lazy(() => import ('./page/NotFound/NotFound'));
let Connected = lazy(() => import('./page/Connected/Connected'));

let loggedIn=false;

export default function App(){
  let navigation = useNavigate()  
  function SetStatus(){
    loggedIn=!loggedIn;
    faireRedirection("/")
    console.log(loggedIn);
  }
  function faireRedirection(url){
    navigation(url);
  }
    return (
        <Suspense fallback={<h1 className="chargement">########...Chargement...########</h1>}>
          <Routes>
            <Route path="*" element={<NotFound/>}/>
            <Route exact path="/signin" element={loggedIn ? <Navigate to="/list"/> : <SignIn Deconnection={SetStatus}/>}/>
            <Route exact path="/signup" element={loggedIn ? <Navigate to="/list"/> : <SignUp Deconnection={SetStatus}/>}/>
            <Route exact path="/list" element={loggedIn ? ( <Connected Deconnection={SetStatus}/>) : <Navigate to="/"/>} />

            <Route exact path="/" element={loggedIn ? <Navigate to="/list"/> : <Navigate to="/signin" />}/>
          </Routes>
        </Suspense>   
    )
}
