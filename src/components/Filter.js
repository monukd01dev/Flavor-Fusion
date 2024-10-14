import RestaurantCard, { promoteRestroCard } from "./RestaurantCard";
import SkeletonCard from "./SkeletonCard";
import SearchRestaurants from "./SearchRestaurants";
import { Link } from "react-router-dom";
import useRestaurantList from "../../utils/useRestaurantList";
import { useState } from "react";

const Filter = () => {
	const { resList, setResList, resConstList, searchKey, setSearchKey } =
		useRestaurantList();

	const [showFilters, setShowFilters] = useState(false);

	const PromotedRestroCard = promoteRestroCard(RestaurantCard);
	return (
		<>
			<div className="search-con">
				<SearchRestaurants
					{...{ setResList, resConstList, searchKey, setSearchKey }}
				/>
			</div>

			<div className="con">
				<div className="filter">
					<div className="total-restaurants">
						<h2>{resList.length} Restaurants</h2>
					</div>
					<div className="filter-items">
						<div className={`static-filters ${showFilters && "show-filter"}`}>
							<button
								type="button"
								className="static-btn"
								onClick={() => {
									setResList(resConstList);
									setShowFilters(!showFilters);
								}}
							>
								All
							</button>
							<button
								type="button"
								className="static-btn"
								onClick={() => {
									setResList(
										resConstList
											.filter(({ info }) => info.avgRating > 4)
											.sort((a, b) => b.info.avgRating - a.info.avgRating),
									);
									setShowFilters(!showFilters);
								}}
							>
								Rating
							</button>
							<button
								type="button"
								className="static-btn"
								onClick={() => {
									setResList(
										resConstList
											.filter(({ info }) => info.sla.deliveryTime < 30)
											.sort(
												(a, b) =>
													a.info.sla.deliveryTime - b.info.sla.deliveryTime,
											),
									);
									setShowFilters(!showFilters);
								}}
							>
								Fastest Delivery
							</button>
						</div>
						<div className="custom-btn">
							<button
								type="button"
								className="filter-btn"
								onClick={() => setShowFilters(!showFilters)}
							>
								Filter{" "}
								<span>
									<i className="fi fi-sr-settings-sliders" />
								</span>
							</button>
						</div>
					</div>
				</div>
				<div className="restaurant-container">
					{resList.length === 0
						? new Array(16)
								.fill(1)
								.map((e) => <SkeletonCard key={crypto.randomUUID()} />)
						: resList.map((data) => (
								<Link to={`/restaurant/${data?.info?.id}`} key={data?.info?.id}>
									{data?.info?.veg ? (
										<PromotedRestroCard {...data?.info} />
									) : (
										<RestaurantCard {...data?.info} />
									)}
								</Link>
							))}
				</div>
			</div>
		</>
	);
};

export default Filter;
