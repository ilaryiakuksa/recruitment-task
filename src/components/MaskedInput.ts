import styled from "styled-components";
import InputMask from "react-input-mask";

interface MaskedInputProps {
	input: {
		value: string;
		onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
		onBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
	};
	mask: string;
}

export const MaskedInput = styled(InputMask).attrs<MaskedInputProps>(
	({ input, mask }) => ({
		value: input.value,
		onChange: input.onChange,
		onBlur: input.onBlur,
		mask: mask,
	})
)<MaskedInputProps>`
	padding: 5px;
	border: 1px solid #ccc;
	border-radius: 4px;
	font-size: 14px;
`;
