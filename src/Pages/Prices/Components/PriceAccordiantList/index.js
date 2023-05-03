import { Affix } from "antd";
import "./index.css";
import React, { useState, useEffect } from "react";
import { Collapse } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";

const { Panel } = Collapse;
const customExpandIcon = (props) => {
	if (props.isActive) {
		return <ArrowRightOutlined className="custom-arrow-right arrow-down" />;
	} else {
		return <ArrowRightOutlined />;
	}
};

export default function PriceAccordionList(props) {
	const [activePanel, setActivePanel] = useState([]);

	const handlePanelChange = (activeKey) => {
		setActivePanel(activeKey);
	};

	const isAnyPanelActive = () => {
		return activePanel.length > 0;
	};
	return (
		props.accordionData && (
			<div
				className={`price-accordion-list py-5 ${
					isAnyPanelActive() ? "bg-dark" : ""
				}`}
			>
				<Collapse
					accordion
					ghost
					onChange={handlePanelChange}
					expandIconPosition="end"
					expandIcon={customExpandIcon}
				>
					{props.accordionData.map((servicePrices) => (
						<Panel
							header=<h1 className="my-header">{servicePrices.service_name}</h1>
							key={servicePrices.service_name}
						>
							<div className="panel-1">
								<div
									className="price-accordion-text"
									dangerouslySetInnerHTML={{
										__html: servicePrices.service_description,
									}}
								></div>
							</div>
						</Panel>
					))}
				</Collapse>
			</div>
		)
	);
}
