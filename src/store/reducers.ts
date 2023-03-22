// reducers.ts
import { combineReducers, Reducer } from "redux";
import { reducer as formReducer } from "redux-form";

const previewReducer = (state = {}, action: any) => {
	switch (action.type) {
		case "UPDATE_PREVIEW":
			return action.payload;
		default:
			return state;
	}
};

const rootReducer: Reducer<any> = combineReducers({
	form: formReducer,
	preview: previewReducer,
});

export default rootReducer;
