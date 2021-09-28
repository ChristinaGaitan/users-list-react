import { useState } from 'react';
import Card from '../UI/Card'
import Button from '../UI/Button';
import classes from './AddUser.module.css'
import ErrorModal from '../UI/ErrorModal';

interface Props {
  onAddUser: Function;
}

const AddUser = (props: Props) => {
  const [enteredUsername, setEnteredUsername] = useState<string>('');
  const [enteredAge, setEnteredAge] = useState<string>('');

  const addUserHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      return;
    }

    if(+enteredAge < 1) {
      return
    }

    props.onAddUser(enteredUsername, enteredAge)

    setEnteredUsername('')
    setEnteredAge('')
  };

  const usernameChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredUsername(event.target.value)
  };

  const ageChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredAge(event.target.value)
  };

  return (
    <div>
      <ErrorModal title='An error ocurred!' message='Something went wrong!' />
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" value={enteredUsername} onChange={usernameChangeHandler} />
          <label htmlFor="age">Age (years)</label>
          <input id="age" type="number" value={enteredAge} onChange={ageChangeHandler} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
