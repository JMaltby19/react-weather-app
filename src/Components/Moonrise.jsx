const Moonrise = (props) => {
	return <p>{new Date(props.moonrise * 1000).toLocaleTimeString()}</p>;
};

export default Moonrise;
