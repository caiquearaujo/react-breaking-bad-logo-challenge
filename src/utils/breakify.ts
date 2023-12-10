import elements from '@/config/elements';

const breakify = (text: string) => {
	const lowered = text.toLowerCase();

	const found = elements.filter(el => lowered.startsWith(el.toLowerCase()));

	if (found.length === 0) {
		return [undefined, text];
	}

	const prefix = found.sort((a, b) => b.length - a.length)[0];
	return [prefix, lowered.replace(prefix.toLowerCase(), '')];
};

export default breakify;
