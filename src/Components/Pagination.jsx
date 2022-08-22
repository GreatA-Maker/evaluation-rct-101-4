import React from "react";

const Pagination = ({ handlePageChange, total, current }) => {
	let pages = new Array(total).fill(0).map((acc, index) => {
		return (
			<button
				key={index + 1}
				disabled={index === current}
				onClick={() => handlePageChange(index + 1)}
			>
				{index + 1}
			</button>
		);
	});
	return <div>{pages}</div>;
};

export default Pagination;
