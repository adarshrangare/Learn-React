const User = ({ firstName, lastName, userId }) => {
  return (
    <>
      <div>
        {userId} {firstName} {lastName}
      </div>
    </>
  );
};

export default User;
