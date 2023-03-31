import "./index.css";
import { Button } from "antd";

export default function BriefDescription(props) {
	return (
		<div id={props.id} className="section">
			<div className="my-5">
				<h1 className=" my-2 Brief-description-header">{props.title}</h1>
				{props.subtitle && (
					<h4 className=" font-weight-bold">{props.subtitle}</h4>
				)}
			</div>
			<div
				className="Brief-description px-4"
				dangerouslySetInnerHTML={{ __html: props.description }}
			>
				{/* <p>
					Процедуры обновления становятся все более популярными в сфере
					пластической хирургии, а подтяжка лица является одним из наиболее
					эффективных способов омоложения внешности. Подтяжка лица, также
					известная как ритидэктомия, может значительно улучшить внешний вид
					проблем, связанных со старением, таких как дряблая кожа, морщины или
					впалые черты лица. С помощью опытных сертифицированных пластических
					хирургов, таких как те, которые работают в Клинике пластической
					хирургии, пациенты могут рассчитывать на долгосрочные и естественные
					результаты. Когда дело доходит до высококачественной подтяжки лица
					наша Клиника пластической хирургии выделяется как один из лучших
					вариантов.
				</p> */}
			</div>
			{props.button && (
				<div className="w-100 d-flex justify-content-end px-4">
					<Button className="brief-description-button px-4 py-4 my-4">
						{props.button}
					</Button>
				</div>
			)}
		</div>
	);
}
