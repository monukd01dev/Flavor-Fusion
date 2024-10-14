import restaurantsMockData from "../FlavorFusionData/restaurantsMockData.json";

const useFetchRes = () => {
	return Promise.resolve({
		ok: true,
		json: () => Promise.resolve(restaurantsMockData),
	});
};

export default useFetchRes;
