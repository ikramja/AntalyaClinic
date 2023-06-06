import "./index.css";
import TitleCover from "../../Components/TitleCover";
import { ArrowRightOutlined } from "@ant-design/icons";
import DoctorsList from "./Components/DoctorsList";
import ContactForm from "../../Layouts/ContactForm";
import Doctor_Cover from "../../Assets/AboutOurDoctors/doctor_cover.png";
import Footer from "../../Layouts/Footer";
export default function OurDoctors() {
	return (
		<div>
			<TitleCover
				title="ВРАЧИ КЛИНИКИ"
				titleAlign="center"
				subtitle=""
				type="image"
				source={Doctor_Cover}
			/>
			<DoctorsList />
			<ContactForm className="contact-form" />
			<Footer />
		</div>
	);
}
