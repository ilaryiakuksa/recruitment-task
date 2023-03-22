import styled from "styled-components";

interface TextInputProps {
	input: {
		value: string | number;
		onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
		onBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
	};
}

export const TextInput = styled.input.attrs<TextInputProps>(({ input }) => ({
	value: input.value,
	onChange: input.onChange,
	onBlur: input.onBlur,
}))<TextInputProps>`
	padding: 5px;
	border: 1px solid #ccc;
	border-radius: 4px;
	font-size: 14px;
`;
