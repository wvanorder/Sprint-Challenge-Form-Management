import React from 'react';
import styled from 'styled-components';

const RecipeCard = props => {
    return(
        <div>
            <h2>{props.recipe.name}</h2>
            <h3>When to serve: {props.recipe.course}</h3>
            <h4>How to make this bad boy: {props.recipe.technique}</h4>
        </div>
    )
};

export default RecipeCard;