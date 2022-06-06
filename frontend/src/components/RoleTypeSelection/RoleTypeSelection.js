import React from "react";
import { Link } from "react-router-dom";
import "./RoleTypeSelection.css";

const RoleTypeSelection = () => {
	return (
		<>
			<div className="card-container">
				<div className="user-card">
					<Link to="/app/user/register" className="user-register-link">USER</Link>
				</div>
				<div className="service-card">
					<Link to="/app/service/register" className="service-register-link">WORKER</Link>
				</div>
			</div>
		</>
	);
};

export default RoleTypeSelection;
