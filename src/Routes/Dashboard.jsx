import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AppContext } from "../context/AppContext";
import { Box, Text } from "@chakra-ui/react";
import Pagination from "../Components/Pagination";

const Dashboard = () => {
	const [page, setPage] = useState(1);
	const [total, setTotal] = useState(1);

	const [state, dispatcher] = useContext(AppContext);

	const handlePageChange = () => {
		setPage(page);
	};

	useEffect(() => {
		axios
			.get(
				`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?page=${page}&limit=10`
			)
			.then((res) => {
				setTotal(res.data.totalPages);
				dispatcher({
					type: "GET_PRODUCTS_SUCCESS",
					payload: {
						data: res.data.data,
					},
				});
			});
	}, [page]);

	return (
		<Box>
			<Box>
				{state.data?.map((ele) => {
					<Text>Hello</Text>;
				})}
			</Box>

			<Box>
				<Pagination
					total={total}
					current={page}
					handlePageChange={handlePageChange}
				/>
			</Box>
		</Box>
	);
};

export default Dashboard;
