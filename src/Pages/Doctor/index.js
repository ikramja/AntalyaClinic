import "./index.css";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { ArrowRightOutlined } from "@ant-design/icons";
import doctor1 from "../../Assets/AboutOurDoctors/Doctor_1.png";
import LeftTitleCover from "../../Components/LeftTitleCover";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
export default function AboutOurDoctor() {
	return (
		<div>
			<LeftTitleCover />
			<Row>
				<Col className="justify-content-center p-0 mx-5">
					<h1 className="doctor-info-name">Александр Александрович</h1>
					<div className="doctor-info-content">
						<p>
							Большая часть нашей клиентуры приходит к нам из уст в уста, и мы
							искренне ценим склонность наших пациентов рекомендовать друзьям и
							членам семьи нашу практику. Вместо того, чтобы продавать ту или
							иную процедуру, д-р Суккар описывает преимущества и недостатки
							каждого возможного варианта, позволяя пациенту принять взвешенное
							решение. Если ваш лучший вариант связан с лечением или процедурой,
							не предлагаемой в нашей практике, вы можете доверять ему, чтобы
							сообщить вам об этом варианте и направить вас к врачу или
							практикующему врачу, который может предоставить его. Примером
							этого может быть пациент, который превышает свой идеальный вес и
							не готов к операции - в этом случае может быть инициировано
							направление в наш центр снижения веса или бариатрический центр.
						</p>
						<p>
							Доктор Суккар также является сертифицированным пластическим
							хирургом Хьюстона, что означает, что он неизменно соответствует
							высоким стандартам безопасности, результатов и этики.
						</p>
					</div>
				</Col>

				<Col className="p-0 d-flex flex-column align-items-end">
					<img src={doctor1}></img>
				</Col>
			</Row>
			<div className="doctor-info-button-container">
				<button className="doctor-info-button">
					<ArrowLeftOutlined />
					ПОСМОТРЕТЬ ВСЕХ ВРАЧЕЙ
				</button>
				<button>
					ЗАПИСАТЬСЯ НА КОНСУЛЬТАЦИЮ
					<ArrowRightOutlined />
				</button>
			</div>
		</div>
	);
}
