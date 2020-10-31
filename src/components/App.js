import logo from '../logo.svg';
import '../App.css';
import { Component } from 'react';
import Contacts from './Contacts'

class App extends Component {
    constructor(props) {
        super(props);
        this.addContact = this.addContact.bind(this)
    }

    state = {
        contacts: [
            {
                name: 'Nmadr',
                phone: 123546789
            },
            {
                name: 'Kimdir',
                phone: 987654321
            },
            {
                name: 'Qanaqadr',
                phone: 789456123
            }
        ]
    }

    addContact(contact) {
        const { contacts } = this.state
        contacts.push(contact)

        this.setState({
            contacts
        })
    }

    render() {
        return (
            <div className="App">
                <Contacts
                    addContacts={ this.addContact }
                    contacts={this.state.contacts}
                />
            </div>
        );
    }
}

export default App;
