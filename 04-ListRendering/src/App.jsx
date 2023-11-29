import User from "./components/User";

const users = [
  { "first name": "Adarsh", "last name": "Rangare", id: "007" },
  { "first name": "Sohan", "last name": "Choudhary", id: "001" },
  { "first name": "Harshad", "last name": "Mehta", id: "003" },
];

const App = () => {
  return (
    <>
      <div className="withoutLoop">
        <h2>Without Loop</h2>
        <User
          firstName={users[0]["first name"]}
          lastName={users[0]["last name"]}
          UserId={users[0]["id"]}
        />
        <User
          firstName={users[1]["first name"]}
          lastName={users[1]["last name"]}
          UserId={users[1]["id"]}
        />
        <User
          firstName={users[2]["first name"]}
          lastName={users[2]["last name"]}
          UserId={users[2]["id"]}
        />
      </div>

      <div className="withloop">
        <h2>With Loop</h2>
        {
          // explicitly

          // users.map((user)=>{
          // return <User firstName = {user["first name"]} lastName = {user["last name"]}  userId={user["id"]} />
          // })

          // implicitly
          users.map((user) => (
            <User
              firstName={user["first name"]}
              lastName={user["last name"]}
              userId={user["id"]}
              key={user.id}
              // Key helps to differenctiate to different items
              // Key should be always unique
              // By providing Key Application can be more obtimised
              // We should never use index as key in dynamic apps
            />
          ))
        }
      </div>
    </>
  );
};

export default App;
