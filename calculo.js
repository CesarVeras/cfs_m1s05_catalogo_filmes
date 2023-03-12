let totalMinutosAssistidos = 0;

export const setMinutosAssistidos = (minutos) => {
	totalMinutosAssistidos += minutos;
};

export const getMinutosAssistidos = () => {
	return totalMinutosAssistidos;
};

export const getHoras = () => {
	return Math.floor(totalMinutosAssistidos / 60);
};

export const getMinutos = () => {
	return totalMinutosAssistidos % 60;
};