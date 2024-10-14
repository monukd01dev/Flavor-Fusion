import { Link } from "react-router-dom";
import { FF_LOGO } from "../../utils/constants";
import { useState } from "react";
import { useSelector } from "react-redux";
import FFL from "../assets/FFL.png";

const Header = () => {
	const cartItems = useSelector((store) => store.cart.items);
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div className="header">
			<div className="logo">
				<img src={FFL} alt="flavor fusion logo" />
			</div>
			{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
			<div
				className={`nav-items ${isOpen ? "open-menu" : "close-menu"}`}
				onClick={() => setIsOpen(!isOpen)}
			>
				<Link to="/">Home</Link>
				<Link to="/contact">Contact</Link>
				<Link to="/about">About</Link>
				<Link to="/cart">
					<div className="cart-icon-head">
						<i className="fa-solid fa-cart-shopping" />
						{cartItems.length !== 0 && (
							<div className="cart-items">{cartItems.length}</div>
						)}
					</div>
				</Link>
			</div>
			{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
			<div className="bar-menu" onClick={() => setIsOpen(!isOpen)}>
				{isOpen ? (
					<i
						className={`fa-solid  ${isOpen && "fa-x spinny my-white fixed-it"}`}
					/>
				) : (
					<i className={`fa-solid  ${!isOpen && "fa-bars spinny"}`} />
				)}
			</div>
		</div>
	);
};
export default Header;
