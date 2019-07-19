import React, {useState, useEffect} from 'react';
import {axiosWithAuth} from './axiosWithAuth';
import useTokenHook from './customHooks/tokenHook';
import Register from './components/register';
import RecipeCard from './components/recipeCard'
import './App.css';
import styled from 'styled-components';

const CardList = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
`

function App() {

  const [token, setToken] = useState('');
  const [info, setInfo] = useState([]);

  useEffect(() => {
    if(token){
      axiosWithAuth()
      .get(
        `http://localhost:5000/api/restricted/data`, token)
      .then(res => setInfo(res.data))
      .catch(err => console.log(err))
    } else{
      setInfo([]);
    }
  }, [token])


  return (
    <div className="App">
      <Register token={token} setToken={setToken}/>
      {token && <h2>Secret Recipes From The Great Unknown</h2>}
      {info ? (<CardList>
        {info.map(recipe => {
          return <RecipeCard recipe={recipe} key={recipe.name}/>
        })}
      </CardList>) : <h3>Register To see some delicious recipes</h3>}
    </div>
  );
}

export default App;
