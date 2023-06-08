import "./index.css";
import React from "react";
import { Button, Form, Input } from "antd";
import { Col, Container, Row } from "react-bootstrap";
import { Checkbox } from "antd";
import { message } from "antd";
import axios from "axios";
import FadeInUpAnimation from "../../Components/FadeInUp";

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
		console.log({
			fullName: values.fullName,
			email: values.email,
			message: values.message,
		});
		axios
			.post("post/contact/", {
				fullName: values.fullName,
				email: values.email,
				message: values.message,
			})
			.then((response) => {
				if (response.status === 201) {
					message.open({
						type: "success",
						content: "Ваше сообщение успешно отправлено!",
					});
				} else {
					message.open({
						type: "error",
						content: "Ваше сообщение не было отправлено",
					});
				}
			});
	};
	return (
		<div
			className={"contact-form" + props.className ? props.className : ""}
			style={{ ...props.formStyle, maxWidth: props.formWidth }}
		>
			<Container>
				<Row>
					<Col md={5} className="mt-4">
						<FadeInUpAnimation
							duration={1}
							elements={[
								<h1 className="contact-form-header">
									Запланируйте онлайн или оффлайн консультацию сегодня
								</h1>,
							]}
						/>
						<FadeInUpAnimation
							duration={1.2}
							elements={[
								<p className="contact-form-paragraph pt-2">
									Наша клиника хочет помочь вам с выбором наилучшего пути для
									исполнения вашего желания. Мы уверены, что вы будете
									чувствовать себя более осведомленными и уверенными в своем
									решении после общения с нашими врачами.
								</p>,
							]}
						/>
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
											name="fullName"
											rules={[
												{
													required: true,
													message: "Пожалуйста введите Имя и Фамилию!",
												},
											]}
										>
											<FadeInUpAnimation
												duration={1.4}
												elements={[
													<Input
														className="contact-form-input"
														placeholder="Имя Фамилия*"
													/>,
												]}
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
											<FadeInUpAnimation
												duration={1.6}
												elements={[
													<Input
														className="contact-form-input"
														placeholder="Email*"
													/>,
												]}
											/>
										</Form.Item>
									</Col>
								</Row>
								<Row>
									<Col md={12}>
										<Form.Item
											name="message"
											rules={[
												{
													required: true,
													message: "Пожалуйста введите Сообщение!",
												},
											]}
										>
											<FadeInUpAnimation
												duration={1.8}
												elements={[
													<TextArea
														className="contact-form-input"
														placeholder="Сообщение"
														rows={1}
													/>,
												]}
											/>
										</Form.Item>
									</Col>
								</Row>
								<Row className="form-contact-check-box">
									<Form.Item className="mb-1">
										<FadeInUpAnimation
											duration={2}
											elements={[
												<Checkbox className="check-box-text">
													Хочу получать информацию о специальных предложениях и
													акциях
												</Checkbox>,
											]}
										/>
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
										<FadeInUpAnimation
											duration={2.2}
											elements={[
												<Checkbox className="check-box-text">
													<span>Я даю </span>
													<a href="#">
														согласие на обработку персональных данных
													</a>
													<span className="ps-1">в </span>соответствии с законом
													№152-ФЗ "О персональных данных" от 27.07.2006
												</Checkbox>,
											]}
										/>
									</Form.Item>
									<Form.Item className="w-100 contact-form-button-container mb-1">
										<FadeInUpAnimation
											duration={2.4}
											elements={[
												<Button
													htmlType="submit"
													className="contact-form-button  py-1 px-4 "
												>
													Отправить
												</Button>,
											]}
										/>
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
