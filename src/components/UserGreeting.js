import React from 'react';

function UserGreeting(props) {
	let msg = 'You Passed the Quiz. Congratulations :)';

	if (props.correct < props.incorrect) {
		msg = 'You Failed :(  Better Luck next time';
	}
	return (
		<div>
			<h2 className='userGreeting'>{msg}</h2>
		</div>
	);
}

export default UserGreeting;
