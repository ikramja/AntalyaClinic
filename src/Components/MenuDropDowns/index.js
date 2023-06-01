import "./index.css";
import { Collapse, theme } from "antd";
import { DownOutlined, UpOutlined } from "@ant-design/icons";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
const { Panel } = Collapse;

const CustomExpandIcon = (props) => {
	const [isExpanded, setIsExpanded] = useState(props.isActive);

	const handleClick = () => {
		setIsExpanded(!isExpanded);
	};

	const iconClassName = isExpanded ? "expand-icon up" : "expand-icon down";

	return isExpanded ? (
		<IoIosArrowUp className={iconClassName} onClick={handleClick} />
	) : (
		<IoIosArrowDown className={iconClassName} onClick={handleClick} />
	);
};

const customExpandIcon1 = (props) => {
	if (props.isActive) {
		return <MinusOutlined style={{ fontSize: "13rem" }} />;
	} else {
		return <PlusOutlined />;
	}
};
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
export default function MenuDropDowns(props) {
	const [doctors, setDoctors] = useState(null);
	const [categoryData, setCategoryData] = useState(null);
	useEffect(() => {
		axios.get("/get/categories/").then(({ data }) => {
			console.log(data);
			setCategoryData(data);
		});
		axios.get("/get/doctors/").then(({ data }) => {
			setDoctors(data);
		});
	}, []);
	const [activePanel, setActivePanel] = useState([]);

	const handlePanelChange = (activeKey) => {
		setActivePanel(activeKey);
	};

	const isAnyPanelActive = () => {
		return activePanel.length > 0;
	};
	const panelStyle = {
		border: "none",
		fontSize: "1rem",
		fontWeight: "600",
		fontFamily: "'Oswald', sans-serif",
	};
	return (
		<div className="mb-3 w-100 menu-drop-down">
			<Collapse
				accordion
				className="my-1  px-3"
				bordered={false}
				expandIcon={CustomExpandIcon}
				expandIconPosition="end"
				style={{
					borderRadius: "0px",
					background: "#eeeeee",
					// maxWidth: "200px",
				}}
			>
				<Panel header="УСЛУГИ" key="1" style={panelStyle}>
					{categoryData &&
						categoryData.map((category) => (
							<Collapse
								accordion
								className="my-1 mx-2 px-2 menu-collapse"
								bordered={false}
								expandIcon={customExpandIcon1}
								expandIconPosition="end"
								style={{
									background: "#eeeeee",
									borderRadius: "0px",
									textAlign: "left",
									border: "1px solid  #e0dede",
									borderTop: "none",
									borderBottom: "none",

									// maxWidth: "200px",
								}}
							>
								<Panel
									header={category.category_name_in_menu}
									key="2"
									style={panelStyle}
								>
									{category.category_articles.map((article) => (
										<h1>{article.cover_header}</h1>
									))}
								</Panel>
							</Collapse>
						))}
				</Panel>

				<Panel header="О НАС" key="3" style={panelStyle}>
					<Collapse
						accordion
						className="my-1 mx-2 menu-collapse px-2"
						bordered={false}
						expandIcon={customExpandIcon1}
						expandIconPosition="end"
						style={{
							background: "#eeeeee",
							borderRadius: "0px",
							textAlign: "left",
							border: "1px solid  #e0dede",
							borderTop: "none",
							borderBottom: "none",

							// maxWidth: "200px",
						}}
					>
						<Panel header="НАШИ ДОКТОРА" key="4" style={panelStyle}>
							{doctors &&
								doctors.map((doctor) => <h1>{doctor.name_russian}</h1>)}
						</Panel>
						<Panel header="БЛОГ" key="5" style={panelStyle}>
							<h1>Новости</h1>
							<h1>Статьи</h1>
						</Panel>
						<Panel header="СЕРВИС" key="6" style={panelStyle}>
							<h1>Трансфер</h1>
							<h1>Отели</h1>
							<h1>Переводчик</h1>
						</Panel>
						<Panel header="ДЛЯ ПАЦИЕНТОВ" key="7" style={panelStyle}>
							<h1>Памятки пациентам</h1>
						</Panel>
					</Collapse>
				</Panel>
				<div className="ps-3 pb-3">
					<Link to="" style={{ textDecoration: "none", color: "black" }}>
						<Panel
							header="ГИД ПО ОТДЫХУ"
							className="m"
							key="8"
							style={panelStyle}
						></Panel>
					</Link>
				</div>
				<div className="ps-3 pb-3">
					<Link
						to="/prices"
						onClick={() => {
							props.setShowMenu(false);
							props.setShowContent(true);
						}}
						style={{ textDecoration: "none", color: "black" }}
					>
						<Panel
							header="ЦЕНЫ"
							key="11"
							className="m"
							style={panelStyle}
						></Panel>
					</Link>
				</div>
				<div className="ps-3 pb-4">
					<Link
						to="/Contact"
						onClick={() => {
							props.setShowMenu(false);
							props.setShowContent(true);
						}}
						style={{ textDecoration: "none", color: "black" }}
					>
						<Panel
							header="КОНТАКТЫ"
							key="15"
							className="m"
							style={panelStyle}
						></Panel>
					</Link>
				</div>
			</Collapse>
		</div>
	);
}
