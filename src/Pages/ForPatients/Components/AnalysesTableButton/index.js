import "./index.css";
import { Select } from "antd";
import { RightOutlined } from "@ant-design/icons";
const handleChange = (value) => {
	console.log(`selected ${value}`);
};
export default function AnalysesTableButton(props) {
	let surgeriesNames = [];
	props.surgeriesNames.map((name) => {
		surgeriesNames.push({
			value: name,
			label: name,
		});
	});
	return (
		<div className="analyses-table-button ">
			<Select
				className="mb-3 select-icon-left"
				defaultValue={props.surgeriesNames[0]}
				onChange={handleChange}
				onSelect={(selectedValue) => props.setSelectedSurgery(selectedValue)}
				style={{
					width: "100%",
				}}
				options={surgeriesNames}
			/>
		</div>
	);
}
