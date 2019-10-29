import React from "react";

const Style = {
	input: {
		maxWidth: '300px',
		margin: '20px auto'
	}
}

const SearchBox = ({ searchChange }) => {
	return (
		<div className="form-group">
			<input
				className="form-control"
				type="search"
				placeholder="Search Robots.."
				style={Style.input}
				onChange={searchChange}
			/>
		</div>
	);
};

export default SearchBox;
