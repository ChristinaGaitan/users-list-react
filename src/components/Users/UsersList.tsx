import Card from '../UI/Card'
import classes from './UsersList.module.css'

interface User {
  name: string
  age: string
}

interface Props {
  users: User[]
}

const UsersList = (props: Props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user: User) => {
          <li>{user.name} ({user.age} years old)</li>
        })}
      </ul>
    </Card>
  )
}

export default UsersList;
