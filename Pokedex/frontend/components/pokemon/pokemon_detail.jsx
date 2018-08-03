import React from 'react';


export default class PokemonDetail extends React.Component {

  componentDidMount(){
    this.props.requestSinglePokemon(this.props.pokeId);
  }

  componentWillReceiveProps(newProps){
    if (newProps.pokeId !== this.props.pokeId){
      this.props.requestSinglePokemon(newProps.match.params.pokemonId);
    }
  }

  render(){
    if (this.props.pokemon === 'undefined') return;
    return(
      <div>
        <img src={this.props.pokemon.image_url}></img>
        <h1>{this.props.pokemon.name}</h1>
        <h3>Type: {this.props.pokemon.poke_type}</h3>
        

      </div>
    );
  }
}
