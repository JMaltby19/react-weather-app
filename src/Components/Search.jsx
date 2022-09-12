const Search = ({ newLocation, search, location }) => {
	return (
		<div className="search">
			<input
				value={location}
				onChange={newLocation}
				onKeyPress={search}
				placeholder="Enter Location"
				type="text"
			/>
		</div>
	);
};

export default Search;
