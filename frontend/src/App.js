import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import SearchAndResults from "./components/SearchAndResults/SearchAndResults";
import Login from "./components/Login/Login";
import RoleTypeSelection from "./components/RoleTypeSelection/RoleTypeSelection";
import UserRegistration from "./components/UserRegistration/UserRegistration";
import ServiceRegistration from "./components/ServiceRegistration/ServiceRegistration";
import UserDetails from "./components/UserDetails/UserDetails";
import ServiceDetails from "./components/ServiceDetails/ServiceDetails";

const App = () => {
	return (
		<Router>
			<Routes>
				{/* PRE REGISTRATION */}
				<Route path="/" element={<LandingPage />} />
				<Route path="/app" element={<SearchAndResults />} />
				<Route path="/app/login" element={<Login />} />
				<Route path="/app/role" element={<RoleTypeSelection />} />
				<Route path="/app/user/register" element={<UserRegistration />} />
				<Route path="/app/service/register" element={<ServiceRegistration />} />
				{/* POST REGISTRATION */}
				<Route path="/app/user/:username/details" element={<UserDetails />} />
				<Route
					path="/app/service/:username/details"
					element={<ServiceDetails />}
				/>
			</Routes>
		</Router>
	);
};

export default App;