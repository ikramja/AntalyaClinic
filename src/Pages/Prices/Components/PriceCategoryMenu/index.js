import "./index.css";
import { Affix } from "antd";
import { Menu } from "antd";
import { useState } from "react";
import { ArrowRightOutlined } from "@ant-design/icons";
import PriceAccordionList from "../PriceAccordiantList";

const PriceCategoryMenu = (props) => {
	const [selectedKey, setSelectedKey] = useState(
		Object.keys(props.PriceMenuData)[0]
	);

	const handleClick = (e) => {
		setSelectedKey(e.key);
	};

	return (
		selectedKey && (
			<div>
				<Affix offsetTop={64}>
					<div className="menu-wrapper">
						<Menu
							onClick={handleClick}
							selectedKeys={[selectedKey]}
							mode="horizontal"
							style={{
								width: "100%",
								background: " #C4C4C4",
							}}
							className="price-category-menu"
						>
							{Object.keys(props.PriceMenuData).map((category) => (
								<Menu.Item
									key={category}
									// className="menu-item"
									style={{
										color: selectedKey === category ? "white" : "black",
									}}
								>
									<div
										className="flex-container"
										style={{
											filter:
												" drop-shadow(0px -2px 4px rgba(0, 0, 0, 0.25)) drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
										}}
									>
										<h1 className="flex-element py-3">{category}</h1>
										<div className="center-div">
											<ArrowRightOutlined
												className={`custom-arrow-right ${
													selectedKey === category ? "arrow-down" : ""
												}`}
											/>
										</div>
									</div>
								</Menu.Item>
							))}
						</Menu>
					</div>
				</Affix>
				<PriceAccordionList accordionData={props.PriceMenuData[selectedKey]} />
			</div>
		)
	);
};
export default PriceCategoryMenu;
