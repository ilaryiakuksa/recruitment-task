import styled from "styled-components";

interface SelectProps {
	input: {
		value: string;
		onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
		onBlur: (event: React.FocusEvent<HTMLSelectElement>) => void;
	};
}

export const Select = styled.select.attrs<SelectProps>(({ input }) => ({
	value: input.value,
	onChange: input.onChange,
	onBlur: input.onBlur,
}))<SelectProps>`
	padding: 5px;
	border: 1px solid #ccc;
	border-radius: 4px;
	font-size: 14px;
`;
