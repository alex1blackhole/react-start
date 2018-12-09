import React, {Component} from "react";

class Article extends Component {

    constructor() {
        super();
        this.state = {
            visible:false,
        }
    }

    MoreClick = (event) => {
        event.preventDefault();
        this.setState({
            visible: true
        })
    };


    render() {
        const {author, text, bigText} = this.props.data;
        const { visible } = this.state;

        return (
            <div className='article'>
                <p className="news__author">{author}:</p>
                <p className="news__text">{text}</p>

                { !visible && <a href="/" onClick={this.MoreClick} className='news__link'>Подробнее</a> }
                { visible && <p className="news__big-text">{bigText}</p> }

            </div>
        )
    }
}

export default Article;
