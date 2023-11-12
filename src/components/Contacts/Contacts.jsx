import { ListContact } from './Contacts-styled';

export const ContactList = ({ list }) => {
    return (
        <ul>
        {
        list.map(({ id, name, number }) => {
          return (
          <ListContact key={id}>{name}: {number}</ListContact>
          )
        })
        }
        </ul>
    )
}