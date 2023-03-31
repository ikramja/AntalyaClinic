import "./index.css";
import LeftTitleCover from "../../Components/LeftTitleCover";
import { Row } from "react-bootstrap";
import { ArrowRightOutlined } from "@ant-design/icons";
import { Col } from "react-bootstrap";
import { Button } from "antd";
import StandardCard from "../../Components/StandardCard";
import Doctor_1_Image from "../../Assets/AboutOurDoctors/Doctor_1.png";
export default function OurDoctors() {
	return (
		<div>
			<LeftTitleCover title="НАШИ" subtitle="ВРАЧИ" />
			<Row className="my-5">
				<Col md="4" className="center-div">
					<StandardCard
						height={320}
						cardImage={Doctor_1_Image}
						cardTitle="Александр Александрович
                            ШульцАлександр Александрович
                            Шульц"
						cardDescription="ПЛАСТИЧЕСКИЙ ХИРУРГ
                            ВЫСШЕЙ КАТЕГОРИИ"
					/>
				</Col>
				<Col md="4" className="center-div">
					<StandardCard
						height={320}
						cardImage={Doctor_1_Image}
						cardTitle="Александр Александрович
                            ШульцАлександр Александрович
                            Шульц"
						cardDescription="ПЛАСТИЧЕСКИЙ ХИРУРГ
                            ВЫСШЕЙ КАТЕГОРИИ"
					/>
				</Col>
				<Col md="4" className="center-div">
					<StandardCard
						height={320}
						cardImage={Doctor_1_Image}
						cardTitle="Александр Александрович
                            ШульцАлександр Александрович
                            Шульц"
						cardDescription="ПЛАСТИЧЕСКИЙ ХИРУРГ
                            ВЫСШЕЙ КАТЕГОРИИ"
					/>
				</Col>
			</Row>
			<div className="center-div m-4">
				<Button className="our-doctors-button">
					ПОСМОТРЕТЬ ВСЕХ ВРАЧЕЙ
					<ArrowRightOutlined />
				</Button>
			</div>
		</div>
	);
}
