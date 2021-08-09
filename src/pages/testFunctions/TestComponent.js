import React from 'react';
const { useState } = require('React');

module.exports = () => {
	const [counter, setCounter] = useState(0);

	const handleCounter = () => {
		setCounter(counter + 1);
	};

	return (
		<div>
			<input value={counter} />
			<button onClick={handleCounter}>Add One</button>
		</div>
	);
};
