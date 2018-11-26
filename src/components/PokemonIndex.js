import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
// import { Search } from 'semantic-ui-react'
// import _ from 'lodash'

class PokemonIndex extends React.Component {
  state = {
    pokemons: [],
    searchTerm: ''
  }
  componentDidMount(){
    fetch('http://localhost:3000/pokemon')
    .then(res=>res.json())
    .then(data=>{this.setState({pokemons: data})})
  }
  handleSubmit=(pokemon)=>{
    this.setState({...this.state.pokemons,pokemon})
  }
  handleSearchChange = (e) => {
   this.setState({ [e.target.name]: e.target.value })
 }
  toggle=(pokemon)=>{
    const col = this.state.pokemons
    const i = col.indexOf(pokemon)
    this.setState({
      pokemons: [
        ...col.slice(0, i),
        { ...pokemon, isClicked: !pokemon.isClicked },
        ...col.slice(i + 1)
      ]
    })

  }
  render() {
    const search = this.state.pokemons.filter(p =>
      p.name.includes(this.state.searchTerm)
    )
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
      <div>
      <input type="text" name='searchTerm' value={this.state.searchTerm} onChange={this.handleSearchChange} />
      Search
      </div>
        <br />
      {this.state.searchTerm===''?<PokemonCollection pokemons={this.state.pokemons} toggle={this.toggle}/>:<PokemonCollection pokemons={search} toggle={this.toggle}/>}
        <br />
      <PokemonForm handleSubmit={this.handleSubmit}/>
      </div>
    )
  }
}

export default PokemonIndex
