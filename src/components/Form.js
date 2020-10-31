import React, { Component } from "react";
import PropTypes from "prop-types";
import '../App.css'

class Form extends Component {
    static propTypes = {
        addContacts: PropTypes.func
    }

    state = {
        name: '',
        phone: ''
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault()
        this.props.addContacts({
            ...this.state
        })

        this.setState({
            name: '',
            phone: ''
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={ this.onSubmit }>
                    <input
                        name="name"
                        id="name"
                        value={ this.state.name }
                        onChange={ this.onChange }
                        placeholder="Ismingizni kiriting..."
                    />
                    <br/>
                    <input
                        name="phone"
                        id="phone"
                        value={ this.state.phone }
                        onChange={ this.onChange }
                        placeholder="Telefon raqamingiz..."
                    />
                    <button>Qoshish</button>
                </form>
            </div>
        );
    }
}

export default Form;