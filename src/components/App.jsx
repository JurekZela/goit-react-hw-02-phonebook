import { Component } from 'react'
import { PhoneBookForm } from './Phonebook/Phonebook';
import { Card, Title, ListContact } from '../GlobalStyled';

export class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
    name: '',
    number: ''
  }

    render() {
      const { name, number, filter, contacts } = this.state;
      return (
      <Card>
        <PhoneBookForm />
        <Title>Contacts</Title>
          <ul>
            {
            contacts.map(({ id, name, number }) => {
              return (
              <ListContact key={id}>{name}: {number}</ListContact>
              )
            })
            }
            </ul>
        </Card>
      )
    }
      };