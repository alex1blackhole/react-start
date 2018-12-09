import React, {Component} from 'react';
import './App.css';

class Add extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            text:'',
            Bigtext:'',
            checkbox:false
        };

    }

	handleChange = (event) => {
		const { id, value } = event.currentTarget;

		this.setState({ [id]: value })
	};

    handleCheckboxChange = (event) => {
    	this.setState ({
		    checkbox : event.currentTarget.checked
	    })
    };

	validate = () => {
		const { name, text , checkbox} = this.state;

		if (name.trim() && text.trim() && checkbox) {
			return true
		}
		return false
	};

	btnClick = (event) => {
		event.preventDefault();
		const {name, text, bigText} = this.state;

		this.props.onAddNews({
			id: +new Date(),
			author: name,
			text,
			bigText,
		})
	};

    render() {
        const { name, text , checkbox} = this.state;


        return (
            <form className="form">
                <div className="form__header">
                    Добавить новость
                </div>
                <div className="form__content">

                    <label htmlFor="" className="label">Автор</label>

                    <input onChange={this.handleChange} id='name' value={name}
                           type="text" className='input'/>

                    <label htmlFor="" className="label">Текст</label>

                    <textarea onChange={this.handleChange} id='text' value={text}
                              className="textarea">
                    </textarea>

                    <input onChange={this.handleCheckboxChange} type="checkbox" id='checkbox'
                           value={checkbox} />
	                <label htmlFor="checkbox" >Ознакомлен с правилами</label>
                    <button className="button" onClick={this.btnClick} disabled={!this.validate()}> Показать алерт </button>

                </div>
            </form>
        )
    }
}

export default Add;
