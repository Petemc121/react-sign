import { useState } from "react";

export default function Register() {
  const [form, setForm] = useState({
    user_name: undefined,
    user_email: undefined,
    user_password: undefined,
  });

  function validEmail(email) {
    if (
      String(email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        ) !== null
    ) {
      return true;
    } else {
      return false;
    }
  }

  async function addMember() {
    const body = form;
    const response = await fetch("http://localhost:5000/members", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(body),
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(form).every((value) => value !== undefined) === true) {
      if (form.user_name.length < 8) {
        alert("username must be at least 8 characters");
        return;
      }
      if (!validEmail(form.user_email)) {
        alert("Email is not valid.");
        return;
      }
      if (form.user_password.length < 8) {
        alert("password must be at least 8 characters");
        return;
      }

      try {
        addMember();
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("please fill all fields");
      return;
    }
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setForm((values) => ({ ...values, [name]: value }));
  };

  return (
    <div>
      <div>
        <form className="sign-in-form" onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            type="text"
            name="user_name"
            placeholder="Username/email"
          />
          <input
            onChange={handleChange}
            type="text"
            name="user_email"
            placeholder="Username/email"
          />
          <input
            onChange={handleChange}
            type="text"
            name="user_password"
            placeholder="Password"
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
