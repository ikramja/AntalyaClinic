import { Tabs } from "antd";
import Card from "./Components/Card";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import "./index.css";
const MenuTabs = () => {
	const menuItems = [
		{
			label: <div className="menu-tab-title">УСЛУГИ</div>,
			key: "УСЛУГИ",
			children: (
				<Row className="m-0 w-100 px-2">
					<Col>
						<Card />
					</Col>
					<Col>
						<Card />
					</Col>
					<Col>
						<Card />
					</Col>
					<Col>
						<Card />
					</Col>
				</Row>
			),
		},
		{
			label: <div className="menu-tab-title">О НАС</div>,
			key: "О НАС",
			children: (
				<Row className="px-3">
					<Col>
						<Card />
					</Col>
					<Col>
						<Card />
					</Col>
					<Col>
						<Card />
					</Col>
					<Col>
						<Card />
					</Col>
				</Row>
			),
		},
		{
			label: <div className="menu-tab-title">ГИД ПО ОТДЫХУ</div>,
			key: "ГИД ПО ОТДЫХУ",
			children: `ГИД ПО ОТДЫХУ`,
		},
		{
			label: <div className="menu-tab-title">ЦЕНЫ</div>,
			key: "ЦЕНЫ",
			children: `ЦЕНЫ`,
		},
		{
			label: <div className="menu-tab-title">КОНТАКТЫ</div>,
			key: "КОНТАКТЫ",
			children: "f",
		},
	];
	const onChange = (key) => {
		console.log(key);
	};

	return (
		<Tabs
			defaultActiveKey="3"
			items={menuItems}
			animated={{ inkBar: false }}
			className="menu-tabs"

		/>
	);
};
export default MenuTabs;
