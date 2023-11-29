import UserList from "./Components/UserList";
import { useState } from "react";
const App = () => {
//   console.log("App Render");
  const userObj = [
    {
      id: 1,
      firstName: "Adarsh",
      lastName: "Rangare",
      location: "Indore",
      age: 25,
    },
    {
      id: 2,
      firstName: "Yatin",
      lastName: "Choudhary",
      location: "Mumbai",
      age: 24,
    },
    {
      id: 3,
      firstName: "Manav",
      lastName: "Deshmukh",
      location: "Indore",
      age: 25,
    },
  ];

  const [users, setUsers] = useState(userObj);
  function increaseAge(id) {
    console.log(id, " is get called");

    setUsers((prevState) => {
      const newUsers = prevState.map((user) => {
        if (user.id == id) {
          return { ...user, age: user.age + 1 };
        } else {
          return user;
        }
      });

      console.log(newUsers);

      return [...newUsers];
    });
  }
  // this function will be used in User Component
  // so we can not directly pass to User from App.
  // have have to pass it to UserList and from UserList have to pass to User Component.
  // This is called "Props Drilling"

  function deleteUser(id){
    console.log(id, "user Deleted");

    setUsers((prevUsers)=>{

        return prevUsers.filter((user)=>{
            return user.id != id;
        })

    })

  }

  return (
    <>
      <UserList
        users={users}
        increaseAge={increaseAge}
        deleteUser={deleteUser}
      />
    </>
  );
};

export default App;
