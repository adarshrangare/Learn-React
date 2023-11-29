// import './LoginForm.css'

const LoginForm = () => {
  return (
    <>
      <h2>Login to Your Account</h2>
      <div className="container">
        <label htmlFor="email">Email: </label>
        <input type="email" id="email" placeholder="Enter Your Email" />
        <br />
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          id="password"
          placeholder="Enter Your Password"
        />
        <br />
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            console.log(e.target.value);
          }}
        >
          Login
        </button>

        <br />
        <div className="register">
          Don't have Account?{" "}
          <span className="registration">Register Here</span>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
