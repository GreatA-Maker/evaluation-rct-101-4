export const reducer = (state, action) => {
	switch (action.type) {
		case "LOGIN_REQUEST": {
			return {
				...state,
				isLoading: true,
			};
		}
		case "LOGIN_SUCCESS": {
			return {
				...state,
				isAuth: true,
				token: action.payload.token,
				isError: false,
				isLoading: false,
			};
		}
		case "LOGIN_FAILURE": {
			return {
				...state,
				isError: true,
			};
		}
		case "GET_PRODUCTS_REQUEST": {
			return {
				...state,
				isDataLoading: true,
			};
		}
		case "GET_PRODUCTS_SUCCESS": {
			return {
				...state,
				data: action.payload.data,
				isDataLoading: false,
			};
		}
		case "GET_PRODUCTS_FAILURE": {
			return {
				...state,
				isError: true,
			};
		}

		default:
			return state;
	}
};
