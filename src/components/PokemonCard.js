import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  render() {
    const {pokemon,toggle} = this.props
    const { isClicked } = pokemon
    return (
      <Card>
        <div>
          <div className="image" onClick={()=>{toggle(pokemon)}}>
            <img alt="oh no!" src={isClicked?pokemon.sprites.back:pokemon.sprites.front} />
          </div>
          <div className="content">
            <div className="header">{pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
            HP: {pokemon.stats.find(s => s.name === 'hp').value}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
