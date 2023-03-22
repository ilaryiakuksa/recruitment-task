// actions.ts
import { SubmissionError } from "redux-form";

export const submitForm = (values: any) => {
	return async (dispatch: any) => {
		try {
			const response = await fetch(
				"https://umzzcc503l.execute-api.us-west-2.amazonaws.com/dishes/ ",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(values),
				}
			);

			if (!response.ok) {
				const error = await response.json();
				throw new SubmissionError(error);
			}

			const data = await response.json();
			dispatch(updatePreview(data));
		} catch (error) {
			if (error instanceof SubmissionError) {
				throw error;
			} else {
				console.error("Error submitting form:", error);
			}
		}
	};
};

export const updatePreview = (data: any) => {
	return {
		type: "UPDATE_PREVIEW",
		payload: data,
	};
};
