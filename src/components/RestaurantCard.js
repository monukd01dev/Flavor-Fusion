import { CLOUDINARY_URL } from "../../utils/constants";

const RestaurantCard = (props) => {
	const {
		name,
		cloudinaryImageId,
		costForTwo,
		cuisines,
		avgRating,
		sla: { deliveryTime },
		aggregatedDiscountInfoV3: discount,
	} = props;

	const styleForImg = {
		backgroundImage: `url('${CLOUDINARY_URL + cloudinaryImageId}')`,
	};

	return (
		<div className="restaurant-card" data-testid="restaurantCard">
			<div className="__card-img">
				<div className="actual-img" style={styleForImg} />
			</div>
			<h3 className="__name">{name}</h3>
			<p className="__cuisines">{cuisines.join(", ")}</p>
			<div className="__details">
				<div className="__ratings">
					<i className="fa-solid fa-star" />
					<span className="__text">{avgRating}</span>
				</div>

				<i className="fa-solid fa-circle __dot" />

				<div className="__timing">{deliveryTime} MIN</div>

				<i className="fa-solid fa-circle __dot" />

				<div className="__offer">{costForTwo}</div>
			</div>
			<hr />
			<div className="__discounts">
				{(discount?.header && discount.header !== "ITEMS" && (
					<div>
						<span>
							<i className="fi fi-sr-badge-percent" />
						</span>
						{discount?.header}
					</div>
				)) ||
					(discount?.subHeader && (
						<div>
							<span>
								<i className="fi fi-sr-badge-percent" />
							</span>
							{discount?.subHeader}
						</div>
					))}
			</div>
		</div>
	);
};

// ! HIGER ORDER COMPONENT
export const promoteRestroCard = (RestaurantCard) => {
	return (props) => {
		return (
			<div className="promoted-card-con">
				<div className="p-label">Promoted</div>
				<RestaurantCard {...props} />
			</div>
		);
	};
};

export default RestaurantCard;
