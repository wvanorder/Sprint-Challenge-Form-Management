import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
    width: 575px;
    height: 450px;
    border: 1px solid white;
    margin: 15px 15px;
`

const RecipeCard = props => {
    return(
        <Card>
            <h2>{props.recipe.name}</h2>
            <h3>When to serve: {props.recipe.course}</h3>
            <h4>How to make this bad boy: {props.recipe.technique}</h4>
        </Card>
    )
};

export default RecipeCard;