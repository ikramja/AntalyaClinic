import "./index.css";
import { Button } from "antd";

export default function BriefDescription({id, title, subtitle, description, button}) {
	return (
		<div id={id} className="section">
			<div className="my-5">
				<h1 className=" my-2 Brief-description-header">{title}</h1>
				{subtitle && (
					<h4 className=" font-weight-bold">{subtitle}</h4>
				)}
			</div>
			<div
				className="Brief-description px-4"
				dangerouslySetInnerHTML={{ __html: description }}
			/>
			{button && (
				<div className="w-100 d-flex justify-content-end px-4">
					<Button className="brief-description-button px-4 py-4 my-4">
						{button}
					</Button>
				</div>
			)}
		</div>
	);
}
