import React, {Component} from 'react';
import Article from "./Article";

class News extends Component {
	renderNews = () => {
		const {data} = this.props;

		let newsTemplate = null;

		if (data.length) {
			newsTemplate = data.map(function (item) {
				return <Article key={item.id} data={item}/>
			})
		} else {
			newsTemplate = <p> Новостей нету</p>
		}

		return newsTemplate;
	};


	render() {
		const { data } = this.props;

		return (
			<div className='news'>
				<div className="news__content">
					{ this.renderNews() }
				</div>
				{ data.length ? <p> Всего новостей: {data.length} </p> : null }
			</div>
		)
	}
}

export default News;
