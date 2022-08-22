import React, { useContext, useState } from "react";
import { Input, Stack, Button, Box } from "@chakra-ui/react";
import axios from "axios";
import { AppContext } from "../context/AppContext";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const [state, dispatcher] = useContext(AppContext);
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		const init = {
			email,
			password,
		};

		axios
			.post("https://reqres.in/api/login", init)
			.then((res) => {
				dispatcher({
					type: "LOGIN_SUCCESS",
					payload: {
						token: res.token,
					},
				});
				navigate("/dashboard");
			})
			.catch((error) => {
				console.log(error);
			});
	};
	return (
		<Stack spacing={3} m="100px auto" w="500px">
			<Input
				type="email"
				placeholder="email"
				value={email}
				size="md"
				onChange={(e) => setEmail(e.target.value)}
			/>
			<Input
				type="password"
				placeholder="password"
				value={password}
				size="md"
				onChange={(e) => setPassword(e.target.value)}
			/>

			<Button mt={4} colorScheme="teal" onClick={handleSubmit}>
				Submit
			</Button>

			<Box>
				<Link to="/">Go Back to Home Page</Link>
			</Box>
		</Stack>
	);
};

export default Login;
