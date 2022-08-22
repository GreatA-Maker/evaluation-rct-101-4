import { createContext, useReducer } from "react";
import { reducer } from "./reducer";

export const AppContext = createContext();

function AppContextProvider({ children }) {
	const [state, dispatcher] = useReducer(reducer, {
		isAuth: false,
		token: null,
		isError: false,
		isLoading: false,
		data: [],
		isDataLoading: false,
	});

	return (
		<AppContext.Provider value={[state, dispatcher]}>
			{children}
		</AppContext.Provider>
	);
}

export default AppContextProvider;
