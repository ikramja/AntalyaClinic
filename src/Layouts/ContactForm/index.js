import "./index.css";
import React from "react";
import { Button, Form, Input } from "antd";
import { Col, Container, Row } from "react-bootstrap";
import { Checkbox } from "antd";

const onChange = (e) => {
	console.log(`checked = ${e.target.checked}`);
};
const { TextArea } = Input;
const validateMessages = {
	required: "${label} is required!",
	types: {
		email: "${label} is not a valid email!",
		number: "${label} is not a valid number!",
	},
};
const checkboxValidator = (rule, value, callback) => {
	if (!value) {
		callback("Please accept the terms and conditions");
	} else {
		callback();
	}
};

export default function ContactForm(props) {
	const handleSendFormData = (values) => {
		// axios
		// 	.post("post/news-letter/", { fullName: ,email: values.email, message: message })
		// 	.then((response) => {
		// 		if (response.status === 201) {
		// 			message.open({
		// 				type: "success",
		// 				content: "Successfully subscribed to newsletter!",
		// 			});
		// 		} else {
		// 			message.open({
		// 				type: "error",
		// 				content: "Failed to subscribe to newsletter.",
		// 			});
		// 		}
		// 	});
	};
	return (
		<div
			className={"contact-form" + props.className ? props.className : ""}
			style={{ ...props.formStyle, maxWidth: props.formWidth }}
		>
			<Container>
				<Row>
					<Col md={5} className="mt-4">
						<h1 className="contact-form-header">
							Запланируйте онлайн или оффлайн консультацию сегодня
						</h1>
						<p className="contact-form-paragraph pt-2">
							Наша клиника хочет помочь вам с выбором наилучшего пути для
							исполнения вашего желания. Мы уверены, что вы будете чувствовать
							себя более осведомленными и уверенными в своем решении после
							общения с нашими врачами.
						</p>
					</Col>
					<Col md={7} className="center-div">
						<div className="pt-4 contact-form-container">
							<Form
								layout="horizontal"
								name="nest-messages"
								validateMessages={validateMessages}
								onFinish={handleSendFormData}
								onFinishFailed={(errorInfo) =>
									console.log("Failed:", errorInfo)
								}
							>
								<Row>
									<Col md={6}>
										<Form.Item
											name="FullName"
											rules={[
												{
													required: true,
													message: "Пожалуйста введите Имя и Фамилию!",
												},
											]}
										>
											<Input
												className="contact-form-input"
												placeholder="Имя Фамилия*"
											/>
										</Form.Item>
									</Col>

									<Col md={6}>
										<Form.Item
											name="email"
											rules={[
												{
													type: "email",
													message: "Введен неверный адрес электронной почты",
												},
												{
													required: true,
													message: "Пожалуйста введите свой E-mail!",
												},
											]}
										>
											<Input
												className="contact-form-input"
												placeholder="Email*"
											/>
										</Form.Item>
									</Col>
								</Row>
								<Row>
									<Col md={12}>
										<Form.Item>
											<TextArea
												className="contact-form-input "
												placeholder="Сообщение"
												rows={1}
											/>
										</Form.Item>
									</Col>
								</Row>
								<Row className="form-contact-check-box">
									<Form.Item className="mb-1">
										<Checkbox className="check-box-text">
											Хочу получать информацию о специальных предложениях и
											акциях
										</Checkbox>
									</Form.Item>

									<Form.Item
										className="mb-0"
										name="terms_and_conditions"
										valuePropName="checked"
										rules={[
											{
												validator: checkboxValidator,
												message:
													"Пожалуйста, согласитесь на обработку персональных данных, чтобы оставить заявку на консультацию",
											},
										]}
									>
										<Checkbox className="check-box-text">
											<span>Я даю </span>
											<a href="#">согласие на обработку персональных данных</a>
											<span className="ps-1">в </span>соответствии с законом
											№152-ФЗ "О персональных данных" от 27.07.2006
										</Checkbox>
										<Form.Item className="w-100 contact-form-button-container mb-1">
											<Button
												htmlType="submit"
												className="contact-form-button  py-1 px-4 "
											>
												Отправить
											</Button>
										</Form.Item>
									</Form.Item>
								</Row>
							</Form>
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	);
}
