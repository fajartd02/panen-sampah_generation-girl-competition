import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const registerAccount = async() => {
        const fullName = firstName + " " + lastName;
        try {
            await axios.post('http://localhost:5000/auth/register', {
                name: fullName,
                email: email,
                password: password,
                confPassword: confPassword
            });
            console.log('success!');
            navigate('/');
        } catch(err) {
            console.log(err);
            setError('Password Tidak Match!');
            
        }
  }

  return (
    <section className="section">
      <div className="container mt-5">
        <div className="row">
          <div className="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4">
            <div className="login-brand text-center pb-4">
              <a href="index.html">
                <img src="assets/img/logo-full.png" alt="logo" width="250" />
              </a>
            </div>
            <div className="card card-primary p-3 center">
              <div className="card-body">
                <h5
                  className="card-title pb-4 mt-2 font-weight-light text-danger"
                  style={{ fontSize: "16px" }}
                >
                  Register
                </h5>
                <form method="POST">
                  <div className="row">
                    <div className="form-group col-6">
                      <label htmlFor="first_name" style={{ fontSize: "16px" }}>
                        First Name
                      </label>
                      <input
                        style={{ fontSize: "16px" }}
                        onChange={(e) => setFirstName(e.target.value)}
                        id="first_name"
                        type="text"
                        className="form-control"
                        name="first_name"
                        autoFocus
                      />
                    </div>
                    <div className="form-group col-6">
                      <label htmlFor="last_name" style={{ fontSize: "16px" }}>
                        Last Name
                      </label>
                      <input
                        style={{ fontSize: "16px" }}
                        onChange={(e) => setLastName(e.target.value)}
                        id="last_name"
                        type="text"
                        className="form-control"
                        name="last_name"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="email" style={{ fontSize: "16px" }}>
                      Email
                    </label>
                    <input
                      style={{ fontSize: "16px" }}
                      onChange={(e) => setEmail(e.target.value)}
                      id="email"
                      type="email"
                      className="form-control"
                      name="email"
                    />
                    <div className="invalid-feedback"></div>
                  </div>
                  <div className="form-group">
                    <label
                      htmlFor="password"
                      className="d-block"
                      style={{ fontSize: "16px" }}
                    >
                      Password
                    </label>
                    <input
                      style={{ fontSize: "16px" }}
                      id="password"
                      type="password"
                      onChange={(e) => setPassword(e.target.value)}
                      className="form-control pwstrength"
                      data-indicator="pwindicator"
                      name="password"
                    />
                    <div id="pwindicator" className="pwindicator">
                      <div className="bar"></div>
                      <div className="label"></div>
                    </div>
                  </div>

                  <div className="form-group">
                    <label
                      htmlFor="confPassword"
                      className="d-block"
                      style={{ fontSize: "16px" }}
                    >
                      Confirm Password
                    </label>
                    <input
                      style={{ fontSize: "16px" }}
                      id="password"
                      type="password"
                      onChange={(e) => setConfPassword(e.target.value)}
                      className="form-control pwstrength"
                      data-indicator="pwindicator"
                      name="confPassword"
                    />
                    <div id="pwindicator" className="pwindicator">
                      <div className="bar"></div>
                      <div className="label"></div>
                    </div>
                  </div>

                  <h5
                  className="card-title font-weight-light text-danger text-center"
                  style={{ fontSize: "16px" }}
                >
                  {error}
                </h5>

                  <div className="form-group">
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        name="agree"
                        className="custom-control-input"
                        id="agree"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="agree"
                        style={{ fontSize: "16px" }}
                      >
                        I agree with the terms and conditions
                      </label>
                    </div>
                  </div>
                  <div className="form-group">
                    <button
                      type="button"
                      className="btn btn-primary btn-lg btn-block"
                      style={{ fontSize: "16px" }}
                      onClick={registerAccount}
                    >
                      {" "}
                      Register{" "}
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="mt-1 text-muted text-center">
              {" "}
              Already have an account?{" "}
              <a
                href="login.html"
                style={{ color: "#F0968D", textDecoration: "underline" }}
              >
                Log in
              </a>
            </div>
            <div className="text-center pt-4 pb-4">
              {" "}
              Copyright © 2022 Panen Sampah{" "}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Register;
