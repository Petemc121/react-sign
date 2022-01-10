import React from "react";

export default function SignIn() {
  const handleSubmit = () => {};

  return (
    <div>
      <form className="sign-in-form" onSubmit={handleSubmit}>
        <input type="text" name="user_name" placeholder="Username/email" />
        <input type="text" name="user_password" placeholder="Password" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
