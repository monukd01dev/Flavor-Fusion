import { useState, useEffect } from "react";

const useOnlineStatus = () => {
	const [onlineStatus, setOnlineStatus] = useState(navigator.onLine);

	useEffect(() => {
		const updateStatus = () => setOnlineStatus(navigator.onLine);

		window.addEventListener("offline", updateStatus);

		window.addEventListener("online", updateStatus);

		return () => {
			window.removeEventListener("offline", updateStatus);
			window.removeEventListener("online", updateStatus);
		};
	}, []);

	return onlineStatus;
};

export default useOnlineStatus;
