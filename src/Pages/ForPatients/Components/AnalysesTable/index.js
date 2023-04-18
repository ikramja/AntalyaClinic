import { Col, Container, Row, Table } from "react-bootstrap";
import TableAnalysesCover from "../../../../Assets/ForPatients/AnalysesTable.png";
import "./index.css";
import SurgeryPreparationParagraph from "../../../../Components/BriefDescription";
import SurgeryPreparationBackgroundImage from "../../../../Assets/ForPatients/SurgeryPreparationBackgroundImage.png";

import AnalysesTableButton from "../AnalysesTableButton";
import { useState } from "react";

export default function AnalysesTable(props) {
	const [selectedSurgery, setSelectedSurgery] = useState(
		props.surgeriesData[0].cover_header
	);
	let surgeriesNames = [];
	props.surgeriesData.map((surgery) => {
		surgeriesNames.push(surgery.cover_header);
	});

	return (
		<div>
			<div className="AnalysesTable">
				<Container>
					<div className="my-4 w-100 ">
						<h1 className="for-patients-header mb-5">
							Список анализов и диагностические исследования, срок их действия
						</h1>
						<div className="analyses-table-container">
							<Row className="w-100 p-3">
								<Col md={8}>
									<AnalysesTableButton
										className="mb-4"
										surgeriesNames={surgeriesNames}
										setSelectedSurgery={(selectedValue) =>
											setSelectedSurgery(selectedValue)
										}
									/>
									<Table className="table-analyses w-100">
										<tr>
											<th className="p-2">АНАЛИЗЫ</th>
											<th>СРОК ДЕЙСТВИЯ</th>
										</tr>
										{props.surgeriesData
											.find((item) => item.cover_header === selectedSurgery)
											.analyses_and_test.map((test) => (
												<tr>
													<td className="p-2">{test.name}</td>
													<td>{test.expiry_duration}</td>
												</tr>
											))}
									</Table>
								</Col>
								<Col md={4}>
									<img
										className="w-100 table-analyses-cover"
										src={TableAnalysesCover}
									/>
								</Col>
							</Row>
						</div>
					</div>
				</Container>
			</div>
			<Container>
				<div className="description-under-analyses-table mb-3 px-4 py-2">
					Если у пациента есть какие-либо системные заболевания, то необходим
					осмотр профильных врачей. При выборе общего наркоза потребуется
					консультация анестезиолога и терапевта, а также проведение
					УЗ-исследования вен нижних конечностей.
				</div>
			</Container>
			<SurgeryPreparationParagraph
				containerStyle={{
					backgroundImage: `url(${SurgeryPreparationBackgroundImage})`,
					backgroundRepeat: "no-repeat",
					backgroundPosition: "center right",
					backgroundSize: "auto 100%",
				}}
				headerStyle={{ maxWidth: "600px" }}
				title="Подготовка к операции: рекомендации и ограничения"
				description={
					props.surgeriesData.find(
						(item) => item.cover_header === selectedSurgery
					).preparation_for_surgery
				}
			/>
		</div>
	);
}
