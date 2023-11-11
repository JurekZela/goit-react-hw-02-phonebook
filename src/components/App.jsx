import { Formik } from 'formik';
import { nanoid } from 'nanoid'
import { Button,  StyledForm, StyledField, StyledLabel } from './Phonebook/Phonebook-styled';


export const App = () => {
  return (
      <Formik
        initialValues={{
          name: '',
          number: '',
          contacts: [],
        }}
        onSubmit={async (values, actions) => {
          await new Promise((r) => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));
          values.id = nanoid();
          actions.resetForm();
          this.contacts.push(...values)
        }}
      >
        <StyledForm>
          <StyledLabel>
            Name
            <StyledField  name="name" placeholder="Phil Collins" required  />
            </StyledLabel>
  
          <StyledLabel>
            Number
            <StyledField type="number"  name="number" placeholder="+48-000-000-000" required  />
            </StyledLabel>       

          <Button type="submit">Add contact</Button>
        </StyledForm>    
      </Formik>
  )
      };