import "./index.css";
import BigImage from "../../../../Assets/Home/bigImage.png";
import { Container } from "react-bootstrap";
import { Button } from "antd";
import { Link } from "react-router-dom";
import { ImArrowRight } from "react-icons/im";

export default function HomeImage() {
	return (
		<div className="my-4 ">
			<Container>
				<h1 className="big-image-header mb-4">
					Добро пожаловать в клинику пластической хирургии EL ARTE Здесь красота
					встречается с опытом.
				</h1>
			</Container>
			<div
				style={{ position: "relative" }}
				className="big-image--white-frame-container-div"
			>
				<img src={BigImage} className="w-100 big-image"></img>
				<div>
					<Container className="big-image--white-frame-container">
						<h1
							style={{
								textAlign: "left",
								fontFamily: "Archivo",
							}}
						>
							EL ARTE Анталия
						</h1>
						<ul className="big-image-list">
							<li style={{ textAlign: "left" }}>
								Пластическая хирургия <strong>Telegram </strong>(ссылка)
							</li>
							<li style={{ textAlign: "left" }}>
								ул. Мустафа Кемаль, Телефон:<strong>+7 (495) 181-10-83</strong>
							</li>
							<li style={{ textAlign: "left" }}>
								График работы: с <strong>9:00</strong> до <strong>21:00</strong>
							</li>
						</ul>
					</Container>
					<div className="w-100 d-flex mt-4 home-image-animation-text-container">
						<Link
							to="/Contact"
							style={{ textDecoration: "none", color: "black" }}
						>
							<p className="home-image-animation-text mb-0">ПОДРОБНЕЕ...</p>
						</Link>
						<div className="arrow-container">
							<Button shape="circle" className="circle-button" />
							<div className="button-arrow" />
						</div>
					</div>
				</div>
			</div>

			<Container className="under-big-image-container mt-3  py-4">
				<p className="under-big-image-container-paragraph">
					Клиника эстетической медицины «LE ARTE» открыла свои двери в Турции.
					Современное инновационное оборудование клиники позволяет гостям
					получить комплексную эффективную диагностику, преображение и лечение.
					Команда врачей нашей клиники - профессионалы высокого класса, имеющие
					признанною сертификацию.
				</p>
			</Container>
		</div>
	);
}
