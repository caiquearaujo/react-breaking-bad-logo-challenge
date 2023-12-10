import elements from '@/config/elements';

const breakify = (text: string) => {
	const found = elements.filter(el => text.startsWith(el));

	if (found.length === 0) {
		return [undefined, text];
	}

	const prefix = found.sort((a, b) => b.length - a.length)[0];
	return [prefix, text.replace(prefix, '')];
};

export default breakify;
