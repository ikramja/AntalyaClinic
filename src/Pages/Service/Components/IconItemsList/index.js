import "./index.css";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import IconItems from "../IconItems";
import HospitalizationIcon from "../../../../Assets/ServicesIcons/HospitalizationIcon.png";
import PreparationIcon from "../../../../Assets/ServicesIcons/PreparationIcon.png";
import AnesthesiaIcon from "../../../../Assets/ServicesIcons/AnesthesiaIcon.png";
import DurationIcon from "../../../../Assets/ServicesIcons/DurationIcon.png";
export default function IconItemsList(props) {
	return (
		<div id={props.id} className="section">
			<div className="my-5">
				<h1 className="my-5 icon-items-list-header">ДЕНЬ ОПЕРАЦИИ</h1>
				<div className="mx-5  icon-items-list">
					<Row>
						<Col md="6" className="my-2  ps-md-2">
							<IconItems
								title="ГОСПИТАЛИЗАЦИЯ"
								description={props.hospitalization}
								icon={HospitalizationIcon}
							/>
						</Col>
						<Col md="6" className="my-2 ps-md-2">
							<IconItems
								title="ПОДГОТОВКА К ОПЕРАЦИИ"
								description={props.preparation}
								icon={PreparationIcon}
							/>
						</Col>
					</Row>
					<Row>
						<Col md="6" className="my-2  ps-md-2">
							<IconItems
								title="НАРКОЗ"
								description={props.anesthesia}
								icon={AnesthesiaIcon}
							/>
						</Col>
						<Col md="6" className="my-2  ps-md-2">
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
				className="text-under-icon mx-4 my-5"
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
	);
}
