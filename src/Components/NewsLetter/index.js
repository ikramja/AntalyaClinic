import "./index.css";
import { Button, Form, Input } from "antd";
import axios from "axios";
import { message } from "antd";

const validateMessages = {
	required: "${label} is required!",
	types: {
		email: "${label} is not a valid email!",
	},
};

export default function NewsLetter() {
	const handleSendEmail = (values) => {
		axios
			.post("post/news-letter/", { email: values.email })
			.then((response) => {
				if (response.status === 201) {
					message.open({
						type: "success",
						content: "Вы успешно подписались на рассылку!",
					});
				} else {
					message.open({
						type: "error",
						content: "Не удалось подписаться на рассылку.",
					});
				}
			});
	};
	return (
		<div className="newsletter">
			<h1 className="pt-4" style={{ fontSize: "1.7rem", fontWeight: "bold" }}>
				БУДЬТЕ В КУРСЕ НАШИХ НОВОСТЕЙ И АКЦИЙ
			</h1>
			<h1
				style={{ fontSize: "1.3rem", fontWeight: "400", color: "#414042" }}
				className="pb-4 news-letter-header"
			>
				Оставьте Ваш e-mail и мы будем уведомлять Вас только о самых важных
				событиях
			</h1>
			<div>
				<Form
					className="newsletter-form center-div"
					layout="vertical"
					validateMessages={validateMessages}
					onFinish={handleSendEmail}
					onFinishFailed={(errorInfo) => console.log("Failed:", errorInfo)}
				>
					<Form.Item
						className="newsletter-input-item w-100 "
						label="Email"
						name="email"
						rules={[
							{
								type: "email",
								required: true,
								message: "Введен неверный адрес электронной почты !",
							},
						]}
					>
						<Input className="newsletter-form-input" />
					</Form.Item>
					<Form.Item className="center-div my-0">
						<Button
							htmlType="submit"
							className="newsletter-button mx-2 center-div"
						>
							ОТПРАВИТЬ
						</Button>
					</Form.Item>
				</Form>
			</div>
		</div>
	);
}
