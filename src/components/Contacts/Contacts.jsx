import { ListContact } from './Contacts-styled';

export const Contacts = ({ list }) => {
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