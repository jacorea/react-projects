import './Monster.styles.css'
import { Component } from 'react'

class Monster extends Component {
    constructor() {
        super();

        this.state = { 
            monsters: [],
            searchField: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response)=> response.json())
        .then((users) => this.setState({monsters: users}))
    }

    render() {
        const filteredMonsters = this.state.monsters.filter((monster) => {
            return monster.name.toLowerCase().includes(this.state.searchField);
        });

        return (
            <div>
                <input 
                    type="search" 
                    className='search-box' 
                    placeholder='search monsters' 
                    onChange={(event)=> {
                    const searchField = event.target.value.toLowerCase();
                    this.setState({searchField})}}  
                />
                {filteredMonsters.map((monster)=> {
                    return (
                        <div key={monster.id}>
                            <h1>{monster.name}</h1>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Monster