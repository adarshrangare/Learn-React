

const User = ({id,email,name,phone, address:{city}}) => {
  return (
    <div>
            Name : {name}
            <br />
            Number: {phone}
            <br />
            Email: {email}
            <br />
            City: {city}
            <hr />
            <br />
        </div>
  )
}

export default User