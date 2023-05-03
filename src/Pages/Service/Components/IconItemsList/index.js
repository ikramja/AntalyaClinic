import "./index.css";
import { Container, Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import IconItems from "../IconItems";
import HospitalizationIcon from "../../../../Assets/ServicesIcons/HospitalizationIcon.png";
import PreparationIcon from "../../../../Assets/ServicesIcons/PreparationIcon.png";
import AnesthesiaIcon from "../../../../Assets/ServicesIcons/AnesthesiaIcon.png";
import DurationIcon from "../../../../Assets/ServicesIcons/DurationIcon.png";
export default function IconItemsList(props) {
	return (
		<Container>
			<div id={props.id} className="section">
				<div
					style={{
						background: "rgba(255, 255, 255, 0.85)",
						boxShadow:
							"-2px 5px 8px rgba(0, 0, 0, 0.2), 2px 2px 8px rgba(0, 0, 0, 0.2)",
						borderRadius: "10px",
					}}
				>
					<div className="my-5 py-2">
						<h1 className="mb-5 pt-3 icon-items-list-header">ДЕНЬ ОПЕРАЦИИ</h1>
						<div className="mx-5 icon-items-list">
							<Row>
								<Col lg="6" className="my-2 ps-md-2">
									<IconItems
										title="ГОСПИТАЛИЗАЦИЯ"
										description={props.hospitalization}
										icon={HospitalizationIcon}
									/>
								</Col>
								<Col lg="6" className="my-2 ps-md-2">
									<IconItems
										title="ПОДГОТОВКА К ОПЕРАЦИИ"
										description={props.preparation}
										icon={PreparationIcon}
									/>
								</Col>
							</Row>
							<Row>
								<Col lg="6" className="my-2 ps-md-2">
									<IconItems
										title="НАРКОЗ"
										description={props.anesthesia}
										icon={AnesthesiaIcon}
									/>
								</Col>
								<Col lg="6" className="my-2">
									<IconItems
										title="ДЛИТЕЛЬНОСТЬ ОПЕРАЦИИ"
										description={props.duration}
										icon={DurationIcon}
									/>
								</Col>
							</Row>
						</div>
					</div>

					<div
						className="text-under-icon mx-4 my-5 pb-3"
						dangerouslySetInnerHTML={{ __html: props.description }}
					>
						{/* {<p>
					Операция по увеличению груди не проводится, если у пациента есть
					признаки острого инфекционного заболевания, а также воспалительные или
					аллергические процессы (высыпания, покраснение, отечность) на коже
					молочных желез. Если вы почувствуете себя плохо после сдачи анализов,
					но до проведения операции, сообщите об этом вашему хирургу!!!
				</p>} */}
					</div>
				</div>
			</div>
		</Container>
	);
}
