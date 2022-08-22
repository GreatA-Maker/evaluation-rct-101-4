import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
	const [state, dispatcher] = useContext(AppContext);
	if (!state.isAuth) {
		return <Navigate to="/login" />;
	}

	return children;
};

export default PrivateRoute;
