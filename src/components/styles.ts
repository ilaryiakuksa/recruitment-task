import styled from "styled-components";

export const FormContainer = styled.form`
	display: flex;
	flex-direction: column;
	width: 300px;
`;

export const FieldContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 1rem;
`;

export const Label = styled.label`
	margin-bottom: 0.5rem;
`;

export const SubmitButton = styled.button`
	padding: 0.5rem 1rem;
	font-size: 1rem;
	color: #fff;
	background-color: #3f51b5;
	border: none;
	border-radius: 4px;
	cursor: pointer;

	&:hover {
		background-color: #303f9f;
	}

	&:disabled {
		background-color: grey;
		color: black;
	}
`;
