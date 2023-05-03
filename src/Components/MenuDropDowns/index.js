import "./index.css";
import { Collapse, theme } from "antd";
import CaretRightOutlined from "@ant-design/icons";
import { useEffect, useState } from "react";
const { Panel } = Collapse;

const customExpandIcon = (props) => {
	if (props.isActive) {
		return <CaretRightOutlined className="custom-arrow-right arrow-down" />;
	} else {
		return <CaretRightOutlined />;
	}
};
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
export default function MenuDropDowns() {
	const [activePanel, setActivePanel] = useState([]);

	const handlePanelChange = (activeKey) => {
		setActivePanel(activeKey);
	};

	const isAnyPanelActive = () => {
		return activePanel.length > 0;
	};
	const panelStyle = {
		marginBottom: 24,
		background: "transparent",
		borderRadius: "12px",
		border: "none",
	};
	return (
		<div>
			<Collapse
				accordion
				className="my-5 ms-5"
				bordered={false}
				defaultActiveKey={["1"]}
				style={{
					background: "transparent",
					maxWidth: "200px",
				}}
			>
				<Panel header="This is panel header 1" key="1" style={panelStyle}>
					<p>{text}</p>
				</Panel>
				<hr />
				<Panel header="This is panel header 2" key="2" style={panelStyle}>
					<p>{text}</p>
				</Panel>
				<hr />
				<Panel header="This is panel header 3" key="3" style={panelStyle}>
					<p>{text}</p>
				</Panel>
				<hr />
			</Collapse>
		</div>
	);
}
