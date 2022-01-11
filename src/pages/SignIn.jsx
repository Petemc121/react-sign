import React from "react";
import { Link } from "react-router-dom";

export default function SignIn() {
  const handleSubmit = () => {};

  return (
    <div>
      <form className="sign-in-form" onSubmit={handleSubmit}>
        <input type="text" name="user_name" placeholder="Username/email" />
        <input type="text" name="user_password" placeholder="Password" />
        <button type="submit">Submit</button>
        <Link to="/register"> Register</Link>
      </form>
    </div>
  );
}
