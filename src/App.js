import React, {Component} from 'react';
import './App.css';
import Add from "./Add";
import News from "./News";
import myNews from './myNews'

class App extends Component {

	state = {
		news: myNews
	};

	handleAddNews = (data) => {
		const newNews = [data, ...this.state.news];

		this.setState({news: newNews})
	};

    render() {

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
