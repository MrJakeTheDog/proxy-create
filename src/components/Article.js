import React, {Component} from 'react'
import Table from './Table'
import _ from 'lodash'
import 'bootstrap/dist/css/bootstrap.min.css'

class Article extends Component {

    async componentDidMount() {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        //.catch(error => alert('Data base is not find!', error))
        const data = await response.json()
        
        console.log(data)

        this.setState({
            data:data
        })
    }
    componentDidCatch() {
        this.setState({ hasError: true});
    }

    state = {
        isOpen: false,
        data: [],
        sort: 'asc',
        sortField: 'id',
        hasError: false
        }

    onSort = ({target: {value}}) => {
        const clonedData = this.state.data.concat()
        const sortType = 'asc'
        const orderedData = _.orderBy(clonedData, value, sortType)
        
        console.log(value)

        this.setState({
            data: orderedData,
            sort: sortType,
            value
        })
    }
    
    render() {
        const body = this.state.isOpen && <Table data={this.state.data} />
        const hasData = <Table data />
        if (this.state.hasError || hasData) {
        return (
            <div>
                    <p>Error, database not found</p>
                </div>
           )
            } else { 
                return (
                
                
                <div>
                <h2>Change Data Base to : 
                    <button onClick={this.handleClick}>
                        {this.state.isOpen ? 'close' : 'open'}
                    </button>
                </h2>

                <h4>
                    Sorted by : 
                    <select onChange ={this.onSort} id = "dropdown" ref = {(input)=> this.menu = input}>
                        <option value="id">ID</option>
                        <option value="userId">User ID</option>
                        <option value="title">Title</option>
                        <option value="body">Body</option>
                    </select>
                </h4>
                
                {body}
        </div> 
                )
            }
    } 
    handleClick = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}

export default Article