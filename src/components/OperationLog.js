import React from "react";

const OperationLog = ({ operationLogs }) => {
	return (
		<>
			<tr>
				<td>{operationLogs.description}</td>
				<td>{operationLogs.operationAt}</td>
			</tr>
		</>
	);
};

export default OperationLog;
