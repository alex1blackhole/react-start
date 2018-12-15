import React, {Component} from 'react';
import './App.css';
import Add from "./Add";
import News from "./News";
import myNews from './myNews'

class App extends Component {

	constructor() {
		super();
		this.state = {
			news: myNews,
			loader:false
		};
	}

	handleAddNews = (data) => {
		const newNews = [data, ...this.state.news];

		this.setState({news: newNews})
	};

	componentDidMount() {
		const url = 'https://jsonplaceholder.typicode.com/users';

		fetch(url)
			.then(response => response.json())
			.then(data => console.log(data))
			.catch(error => console.log(error))
	};

    render() {
		const { news , loader } = this.state;

	    return (
            <div className="App">
                <Add onAddNews={this.handleAddNews}/>
                <h1>Новости</h1>
	            <News data={this.state.news}/>
            </div>
        );
    }
}

export default App;
