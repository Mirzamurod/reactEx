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
                name: 'Alex',
                phone: 123546789
            },
            {
                name: 'Janifer',
                phone: 987654321
            },
            {
                name: 'Jason',
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
