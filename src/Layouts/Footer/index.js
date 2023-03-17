import "./index.css";
import { Layout } from "antd";
import { Container, Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

import {
	LinkedinOutlined,
	TwitterOutlined,
	InstagramOutlined,
} from "@ant-design/icons";

const { Footer } = Layout;

const App = () => {
	return (
		<Footer className="text-white footer px-0">
			<Container>
				<Row className="gx-5">
					<Col sm="3">
						<h5 className="footer-description-title">EL ARTE CLINIC</h5>

						<p>contact @здесь будет почта</p>
					</Col>
					<Col sm="3" className=" footer-col">
						<div className="footer-column">
							<h5>ЮРИДИЧЕСКИЕ ДОКУМЕНТЫ</h5>
							<ul>
								<li className="my-2 ">
									<a className="footer-link" href="#">
										Соглашение об обработке персональных данных
									</a>
								</li>
								<li className="my-2 ">
									<a className="footer-link" href="#">
										Публичная Оферта
									</a>
								</li>
								<li className="my-2">
									<a className="footer-link" href="#">
										Политика Конфиденциальности
									</a>
								</li>
							</ul>
						</div>
					</Col>
					<Col sm="6" className=" footer-col">
						<div className="footer-column">
							<div className="footer-right-content">
								<div className="footer-right">
									<h5>ГРАФИК РАБОТЫ</h5>
									<p>
										<span>Понедельник - Пятница с 9:00 до 19:00 </span>
										<br />
										<span>Суббота с 10:00 до 17:00</span>
									</p>
								</div>
							</div>
						</div>
					</Col>
				</Row>
				<Row>
					<Col sm="3">
						<div className="footer-column">
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
			</Container>
			<div className="footer-bar py-1">
				<p className="m-0">© 2023 EL ARTE CLINIC All Rights Reserved</p>
			</div>
		</Footer>
	);
};

export default App;
