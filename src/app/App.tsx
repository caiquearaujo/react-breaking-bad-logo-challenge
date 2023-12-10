import WordWrapper from '@/components/WordWrapper';
import React from 'react';

const App: React.FunctionComponent = () => {
	const [first, setFirst] = React.useState<string>('');
	const [last, setLast] = React.useState<string>('');

	return (
		<div className="w-full h-screen flex flex-col items-center justify-center">
			<WordWrapper word={first} />
			<WordWrapper word={last} />
			<form className="mt-9 flex flex-col">
				<input
					className="p-2 border rounded-md mb-2"
					type="text"
					placeholder="First name"
					value={first}
					onChange={e => setFirst(e.target.value)}
				/>
				<input
					className="p-2 border rounded-md"
					type="text"
					placeholder="Last name"
					value={last}
					onChange={e => setLast(e.target.value)}
				/>
			</form>
		</div>
	);
};

export default App;
