import allRestaurantsData from "../FlavorFusionData/allRestaurantsData";

const useResFromID = (resId) => {
	return Promise.resolve({
		ok: true,
		json: () => Promise.resolve(allRestaurantsData[resId]),
	});
};

export default useResFromID;
