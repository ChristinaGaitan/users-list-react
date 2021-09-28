import { useState } from 'react';
import Card from '../UI/Card'
import Button from '../UI/Button';
import classes from './AddUser.module.css'

interface Props {}

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

    console.log('username', enteredUsername)
    console.log('age', enteredAge)

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
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" value={enteredUsername} onChange={usernameChangeHandler} />
        <label htmlFor="age">Age (years)</label>
        <input id="age" type="number" value={enteredAge} onChange={ageChangeHandler} />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
