import "./index.css";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import IconItems from "../IconItems";
import HospitalizationIcon from "../../../../Assets/ServicesIcons/HospitalizationIcon.png";
import PreparationIcon from "../../../../Assets/ServicesIcons/PreparationIcon.png";
import DurationIcon from "../../../../Assets/ServicesIcons/DurationIcon.png";
import AttentionIcon from "../../../../Assets/ServicesIcons/AttentionIcon.png";
import MedicinesIcon from "../../../../Assets/ServicesIcons/MedicinesIcon.png";
import SuturesRemoveIcon from "../../../../Assets/ServicesIcons/SuturesRemoveIcon.png";
export default function RecoveryIconList(props) {
	return (
		<div id={props.id} className="section">
			<div className="my-5">
				<h1 className="my-5 icon-items-list-header">ВОССТАНОВЛЕНИЕ </h1>
				<div className="mx-5 icon-items-list">
					<Row className=" icon-items-row">
						<Col md="6" className=" my-2 ps-md-3">
							<IconItems
								title="ПЕРИОД ВОССТАНОВЛЕНИЯ"
								description={props.recoveryPeriod}
								icon={DurationIcon}
							/>
						</Col>
						<Col md="6" className=" my-2  ps-md-3">
							<IconItems
								title="ГОСПИТАЛИЗАЦИЯ"
								description={props.hospitalization}
								icon={HospitalizationIcon}
							/>
						</Col>
					</Row>
					<Row>
						<Col md="6" className=" my-2 ps-md-2">
							<IconItems
								title="СНЯТИЕ ШВОВ"
								description={props.stitchesRemovalPeriod}
								icon={SuturesRemoveIcon}
							/>
						</Col>
						<Col md="6" className=" my-2  ps-md-3">
							<IconItems
								title="ПОДГОТОВКА К ОПЕРАЦИИ"
								description={props.numberOfPostSurgeryVisits}
								icon={PreparationIcon}
							/>
						</Col>
					</Row>
					<Row>
						<Col md="6" className=" my-2">
							<IconItems
								title="ЛЕКАРСТВА"
								description={props.medicines}
								icon={MedicinesIcon}
							/>
						</Col>
						<Col md="6" className=" my-2">
							<IconItems
								title="ВНИМАНИЕ!!!"
								description={props.attention}
								icon={AttentionIcon}
							/>
						</Col>
					</Row>
				</div>
			</div>
			<h6 className="icon-description-header my-4">ОСОБЕННОСТИ РЕАБИЛИТАЦИИ</h6>
			<div
				className="text-under-icon mx-4 my-5"
				dangerouslySetInnerHTML={{ __html: props.description }}
			></div>
		</div>
	);
}
