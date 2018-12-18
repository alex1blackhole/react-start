import React, {Component} from 'react';
import './App.css';
import Add from "./Add";
import News from "./News";

class App extends Component {

	constructor() {
		super();
		this.state = {
			news: null,
			loader: false
		};
	}

	componentDidMount() {
		const url = 'http://localhost:3000/myNews.json';

		this.setState({
			loader: true
		});

		fetch(url)
			.then(response => response.json())
			.catch(error => console.log(error))

			.then(data => {
				this.setState({
					loader: false,
					news: data
				})
			})
	};

	handleAddNews = (data) => {
		const newNews = [data, ...this.state.news];

		this.setState({news: newNews})
	};

	render() {
		const {news, loader} = this.state;

		return (
			<div className="App">
				<Add onAddNews={this.handleAddNews}/>
				<h1>Новости</h1>
				{loader && <p>Загрузка</p>}
				{Array.isArray(news) && <News data={news}/>}
			</div>
		);
	}
}

export default App;
