export const colourMappingBasedonTotal = (position, neutral, negative) => {
	const coloursCandidate = ['#67B7DC', '#FFA500', '#EA5F5F'];
	if (position > neutral && position > negative) {
		return coloursCandidate[0];
	}
	if (neutral > position && neutral > negative) {
		return coloursCandidate[1];
	}
	return coloursCandidate[2];
};
