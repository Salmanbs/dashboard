"use client";
import React, { useState, useEffect } from "react";
import Style from "./Login.module.css";
function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    setEmail("");
    setPassword("");
    alert("Use Google Login");
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={Style.loginformDiv}>
        <div className={Style.FeildsDivs}>
          <label>Email address</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </div>
        <div className={Style.FeildsDivs}>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
        </div>

        <div>
          <a className={Style.forgetpassword}>Forgot password?</a>
        </div>

        <button type="submit" className={Style.signinbtn}>
          Sign in
        </button>
      </form>
    </div>
  );
}
export default LoginForm;
