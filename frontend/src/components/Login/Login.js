import React, { useState, useRef } from "react";
import Helmet from "react-helmet";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	return (
		<>
			<div className="card-container">
				<div className="card">
					<input
						type="text"
						value={username}
						onChange={(e) => {
							setUsername(e.target.value);
						}}
						className="username"
					/>
					<input
						type="password"
						value={password}
						onChange={(e) => {
							setPassword(e.target.value);
						}}
						className="password"
					/>
					<button type="submit" className="login-btn">
						Login
					</button>
					<div className="already-question">New to weserve? Register!</div>
					<Link to="/app/role" className="register-btn">
						Register
					</Link>
				</div>
			</div>
		</>
	);
};

export default Login;

