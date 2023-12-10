import breakify from '@/utils/breakify';
import React from 'react';

export type WordWrapperProps = {
	word: string;
};

const WordWrapper: React.FC<WordWrapperProps> = ({ word }) => {
	const [one, two] = breakify(word);

	return (
		<div className="flex items-center m-1">
			{one && (
				<span className="text-5xl p-4 bg-green-600 text-white font-bold mr-1">
					{one}
				</span>
			)}
			{two && <span className="text-3xl">{two}</span>}
		</div>
	);
};

export default WordWrapper;
