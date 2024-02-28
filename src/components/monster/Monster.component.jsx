import './Monster.styles.css'
import { Component } from 'react'
import CardList from '../card-list/CardList.component'; 

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

    onSearchChange = (event)=> {
        const searchField = event.target.value.toLowerCase();
        this.setState({searchField})}

    render() {
        const {monsters, searchField} = this.state;
        const {onSearchChange} = this;

        const filteredMonsters = monsters.filter((monster) => {
            return monster.name.toLowerCase().includes(searchField);
        });

        return (
            <div>
                <input 
                    type="search" 
                    className='search-box' 
                    placeholder='search monsters' 
                    onChange={onSearchChange}  
                />
                <CardList monsters={filteredMonsters} />
            </div>
        )
    }
}

export default Monster