export const required = (value: any) => (value ? undefined : "Required");
export const requiredSelect = (value: any) => {
	return value && value !== "" ? undefined : "Required";
};

export const minSpiciness = 1;
export const maxSpiciness = 10;
export const spicinessScale = (value: any) =>
	value && (value < minSpiciness || value > maxSpiciness)
		? `Spiciness scale must be between ${minSpiciness} and ${maxSpiciness}`
		: undefined;

export const durationRegex = /^(?:[01]\d|2[0-3]):(?:[0-5]\d):(?:[0-5]\d)$/;
export const duration = (value: any) =>
	value && !durationRegex.test(value) ? "Invalid duration format" : undefined;
