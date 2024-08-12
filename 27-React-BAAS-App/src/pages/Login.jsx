import axios from "axios";
import React from "react";
import { Form, redirect } from "react-router-dom";
import { BASE_URL } from "../utils/constants";

// console.log(import.meta.env.VITE_APP_SUPABASE_KEY);

export async function loginAction({ request }) {
  // console.log({request});
  const data = await request.formData();
  const credentials = {
    email: data.get("email"),
    password: data.get("password"),
  };

  try {
    const response = await axios.post(
      `${BASE_URL}//auth/v1/token?grant_type=password`,
      credentials,
      {
        headers: {
          apikey: import.meta.env.VITE_APP_SUPABASE_KEY,
        },
      }
    );
    console.log(response);
    if (response.data) {
      return redirect("/");
    }
  } catch (error) {
    console.log(error);
    if (error) {
      alert(error?.response?.data?.error_description);
    }
  }

  return null;
}

const Login = () => {
  return (
    <Form className="" method="POST" action="/login">
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Enter your email"
        className="block"
      />
      <input
        type="password"
        name="password"
        id="password"
        placeholder="Enter your password"
        className="block"
      />
      <button>Login</button>
    </Form>
  );
};

export default Login;
