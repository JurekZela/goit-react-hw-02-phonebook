import { Formik, Field, Form } from 'formik';
import { Button } from './Phonebook-styled';

export const Basic = () => (
    <div>
      <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));
        }}
      >
        <Form>
          <label htmlFor="name">Name</label>
          <Field id="name" name="name" placeholder="name" />
  
          <label htmlFor="number">Number</label>
          <Field id="number" name="number" />

          <Button type="submit">Add contact</Button>
        </Form>
      </Formik>
    </div>
  );