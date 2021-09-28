import { useState } from 'react';
import AddUser from './components/Users/AddUser'
import UsersList, { User} from './components/Users/UsersList'

function App() {
  const [usersList, setUsersList] = useState<User[]>([])

  const addUserHandler = (userName: string, userAge: string) => {
    setUsersList((prevUsersList: User[]) => {
      const newUser = {name: userName, age: userAge, id: Math.random().toString()}
      return [...prevUsersList, newUser];
    });
  }

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
