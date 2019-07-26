const timeout = (delay) => {
	let id;

	const promise = new Promise((resolve) => {
		id = setTimeout(resolve, delay);
	});

	promise.clear = () => {
		if (id) {
			clearTimeout(id);
		}
	}

	return promise;
};



export default timeout;