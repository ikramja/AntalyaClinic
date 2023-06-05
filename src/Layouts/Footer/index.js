import "./index.css";
import { Layout } from "antd";
import { Container, Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { useLocation } from "react-router-dom";

import {
	LinkedinOutlined,
	TwitterOutlined,
	InstagramOutlined,
} from "@ant-design/icons";

const { Footer } = Layout;

const App = () => {
	const location = useLocation();
	const pathToExclude = "/path-to-exclude";
	return (
		<div>
			<Footer className="text-dark footer">
				<Row>
					<Col sm="3" className="mb-3">
						<h1 className="footer-description-title">EL ARTE CLINIC</h1>
						<p className="footer-description-paragraph">
							contact @здесь будет почта
						</p>
					</Col>
					<Col sm="6" className="mb-3">
						<div className="footer-col1">
							<h1>ЮРИДИЧЕСКИЕ ДОКУМЕНТЫ</h1>
							<div
								className="footer-list"
								style={{
									listStyle: "none !important",
								}}
							>
								<p
									className="my-2 "
									style={{ fontWeight: "400", color: "#323334" }}
								>
									<a className="footer-link" href="#">
										Соглашение об обработке персональных данных
									</a>
								</p>
								<p
									className="my-2"
									style={{ fontWeight: "400", color: "#323334" }}
								>
									<a className="footer-link" href="#">
										Публичная Оферта
									</a>
								</p>
								<p
									className="my-2"
									style={{ fontWeight: "400", color: "#323334" }}
								>
									<a className="footer-link" href="#">
										Политика Конфиденциальности
									</a>
								</p>
							</div>
						</div>
					</Col>
					<Col sm="3">
						<div className="footer-col2">
							<h1>ГРАФИК РАБОТЫ</h1>
							<p style={{ fontWeight: "400", color: "#323334" }}>
								<span>Понедельник - Пятница с 9:00 до 19:00 </span>
								<br />
								<span style={{ fontWeight: "400", color: "#323334" }}>
									Суббота с 10:00 до 17:00
								</span>
							</p>
						</div>
					</Col>
				</Row>
				<Row>
					<Col sm="3">
						<div>
							<div className="my-3">
								<p className="my-1 footer-social-media-container">
									Мы в социальных сетях
								</p>

								<div className="footer-social-media-container d-flex justify-content-between px-1 ">
									<LinkedinOutlined className="footer-social-media-icon " />
									<TwitterOutlined className="footer-social-media-icon " />
									<InstagramOutlined className="footer-social-media-icon " />
								</div>
							</div>
						</div>
					</Col>
				</Row>
			</Footer>
			<div className="footer-bar py-1">
				<p className="m-0">© 2023 EL ARTE CLINIC All Rights Reserved</p>
			</div>
		</div>
	);
};

export default App;
