import User from "./User";
import { v4 as uuid } from "uuid";
const UserList = ({ users, increaseAge, deleteUser }) => {
//   console.log("UserList Render");
  return (
    <>
      {users.map((user) => {
        
        console.log(user.id)
        return(
        
        <div key={user.id} className="userCard">
          <User {...user} increaseAge={increaseAge} deleteUser={deleteUser} />
        </div>
      )})}
    </>
  );
};

export default UserList;
