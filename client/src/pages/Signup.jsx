import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_PROFILE } from '../utils/mutations';
import Auth from '../utils/auth';

const Signup = () => {
  const [userFormData, setUserFormData] = useState({ name: '', email: '', password: '' });
  const [validated] = useState("false");
  const [showAlert, setShowAlert] = useState(false);

  const [addUser, { error }] = useMutation(ADD_PROFILE);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      // console.log(addUser)
      const response = await addUser({ userFormData });
      
      if (!response.ok) {
        throw new Error('something went wrong!');
      }
      console.log(response);
      const { token, user } = await response.json();
      console.log(user);
      Auth.login(token);
    } catch (err) {
      console.error(err);
      setShowAlert(true);
    }

    setUserFormData({
      name: '',
      email: '',
      password: '',
    });
  };

  return (
    <>
      <form noValidate validated={validated} onSubmit={handleFormSubmit}>
        {showAlert && <div>Something went wrong with your signup!</div>}

        <div>
          <label htmlFor='name'>name</label>
          <input
            type='text'
            placeholder='Your name'
            name='name'
            onChange={handleInputChange}
            value={userFormData.name}
            required
          />
        </div>

        <div>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            placeholder='Your email address'
            name='email'
            onChange={handleInputChange}
            value={userFormData.email}
            required
          />
        </div>

        <div>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            placeholder='Your password'
            name='password'
            onChange={handleInputChange}
            value={userFormData.password}
            required
          />
        </div>

        <button disabled={!(userFormData.name && userFormData.email && userFormData.password)} type='submit'>
          Submit
        </button>
      </form>
    </>
  );
};

export default Signup;
