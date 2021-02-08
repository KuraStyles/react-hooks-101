import {
	ADD_OPERATION_LOG,
	DELETE_ALL_EVENTS,
	DELETE_ALL_OPERATION_LOGS,
} from "../actions";

const operationLogs = (state = [], actions) => {
	switch (actions.type) {
		case ADD_OPERATION_LOG:
			const operationLog = {
				description: actions.description,
				operationAt: actions.operatedAt,
			};
			return [operationLogs, ...state];
		case DELETE_ALL_OPERATION_LOGS:
			return [];
		default:
			return state;
	}
};

export default operationLogs;
