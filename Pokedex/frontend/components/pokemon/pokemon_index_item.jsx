import { Link } from 'react-router-dom';
import React from 'react';

export default class PokemonIndexItem extends React.Component {

  render(){
    const poke = this.props.pokemon;
    return(
    <Link to={`/pokemon/${poke.id}`}>
        <li key={poke.id}>
        <img className="poke-img" src={poke.image_url}></img>
        {poke.name}
      </li>
    </Link>
  );
  }
}
