import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {
  render() {
    const{pokemons,toggle} = this.props
    let showAll= pokemons.map(p=>(
      <PokemonCard key={p.id} pokemon={p} toggle={toggle}/>
    ))
    return (
      <Card.Group itemsPerRow={6}>
        <h1>Hello From Pokemon Collection</h1>
      {showAll}
      </Card.Group>
    )
  }
}

export default PokemonCollection
