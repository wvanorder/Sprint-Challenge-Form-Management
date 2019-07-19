import React, {useState, useEffect} from 'react';
import {
  BrowserRouter,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import axios from 'axios';
import {axiosWithAuth} from './axiosWithAuth';
import useTokenHook from './customHooks/tokenHook';
import Register from './components/register';
import RecipeCard from './components/recipeCard'
import './App.css';
import styled from 'styled-components';

function App() {

  const [token, setToken] = useState(localStorage.getItem('token'));
  const [info, setInfo] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get(
        `http://localhost:5000/api/restricted/data`, token)
      .then(res => setInfo(res.data))
      .catch(err => console.log(err));
  }, [token]);


  return (
    <div className="App">
      <Register token={token} setToken={setToken}/>
      {token && <h2>Secret Recipes From The Great Unknown</h2>}
      <div>
        {info.map(recipe => {
          return <RecipeCard recipe={recipe} />
        })}
      </div>
    </div>
  );
}

export default App;
