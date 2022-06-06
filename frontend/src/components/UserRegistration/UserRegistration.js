import React, { useState } from "react";
import "./UserRegistration.css";
import axios from "axios"

const UserRegistration = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [firstName, setFirstName] = useState("");
	const [secondName, setSecondName] = useState("");
	const [thirdName, setThirdName] = useState("");
	const [mobileNumber, setMobileNumber] = useState("");
	const [mailId, setMailId] = useState("");
	const [address, setAdress] = useState("");
	const [bio, setBio] = useState("");
	const [dpPublicId, setDpPublicId] = useState("");
	const [dpUrl, setDepUrl] = useState("");
	const [cpPublicId, setCpPublicId] = useState("");
	const [cpUrl, setCpUrl] = useState("");

	let submissionObject = {};

	const URL = `https://${window.location.hostname}:1338/app/v1/user/register`

	const submitHandler = async (e) => {
		e.preventDefault();
		submissionObject = {
			username,
			fullName: {
				firstName,
				secondName,
				thirdName,
			},
			mobileNumber,
			mailId,
			address,
			bio,
			displayPhoto: {
				publicId: dpPublicId,
				url: dpUrl,
			},
			coverPhoto: {
				publicId: cpPublicId,
				url: cpUrl,
			},
		};
		try {
			const response = await axios.post(URL, submissionObject)
		} catch (error) {
			console.log(error)
		}
	};

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
					/>
					<input
						type="password"
						value={password}
						onChange={(e) => {
							setPassword(e.target.value);
						}}
					/>
					<input
						type="text"
						value={firstName}
						onChange={(e) => {
							setFirstName(e.target.value);
						}}
					/>
					<input
						type="text"
						value={secondName}
						onChange={(e) => {
							setSecondName(e.target.value);
						}}
					/>
					<input
						type="text"
						value={thirdName}
						onChange={(e) => {
							setThirdName(e.target.value);
						}}
					/>
					<input
						type="text"
						value={mobileNumber}
						onChange={(e) => {
							setMobileNumber(e.target.value);
						}}
					/>
					<input
						type="text"
						value={mailId}
						onChange={(e) => {
							setMailId(e.target.value);
						}}
					/>
					<input
						type="text"
						value={address}
						onChange={(e) => {
							setAdress(e.target.value);
						}}
					/>
					<input
						type="text"
						value={bio}
						onChange={(e) => {
							setBio(e.target.value);
						}}
					/>
					<input
						type="text"
						value={dpPublicId}
						onChange={(e) => {
							setDpPublicId(e.target.value);
						}}
					/>
					<input
						type="text"
						value={dpUrl}
						onChange={(e) => {
							setDepUrl(e.target.value);
						}}
					/>
					<input
						type="text"
						value={cpPublicId}
						onChange={(e) => {
							setCpPublicId(e.target.value);
						}}
					/>
					<input
						type="text"
						value={cpUrl}
						onChange={(e) => {
							setCpUrl(e.target.value);
						}}
					/>
					<button className="submit-btn" onSubmit={submitHandler}>
						Submit Details
					</button>
				</div>
			</div>
		</>
	);
};

export default UserRegistration;
