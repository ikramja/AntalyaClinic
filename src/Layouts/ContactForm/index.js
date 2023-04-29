import "./index.css";
import ContactFormBackground from "../../Assets/contactForm/ContactFormBackground.png";
import React from "react";
import { Button, Form, Input, InputNumber } from "antd";
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

export default function ContactForm() {
	return (
		<div
			className="contact-form"
			style={{
				// paddingTop: "2rem",
				backgroundImage: `url(${ContactFormBackground})`,
				backgroundRepeat: "no-repeat",
				backgroundSize: "auto 100%",
				backgroundPosition: "right top",
			}}
		>
			<p className="contact-form-paragraph py-4 px-5">
				Наша клиника хочет помочь вам с выбором наилучшего пути для исполнения
				вашего желания. Мы уверены, что вы будете чувствовать себя более
				осведомленными и уверенными в своем решении после общения с нашими
				врачами.
			</p>
			<h1 className="contact-form-header">
				Запланируйте онлайн или оффлайн консультацию сегодня
			</h1>
			<Container className="py-4 contact-form-container">
				<Form
					layout="horizontal"
					name="nest-messages"
					// onFinish={onFinish}
					// style={{ maxWidth: 600 }}
					validateMessages={validateMessages}
				>
					<Row className="w-100">
						<Col md={3}>
							<Form.Item
								name={["user", "name"]}
								rules={[
									{
										required: true,
										message: "Пожалуйста введите Имя и Фамилию!",
									},
								]}
							>
								<Input
									className="contact-form-input"
									placeholder="Фамилия Имя*"
								/>
							</Form.Item>
						</Col>
						<Col md={2}>
							<Form.Item
								name="phone"
								rules={[
									{
										required: true,
										message: "Пожалуйста введите номер телефона!",
										pattern: /^\+?[0-9]{1,}$/,
										message: "Please input a valid phone number!",
									},
								]}
							>
								<Input
									className="contact-form-input"
									placeholder="Номер телефона*"
								/>
							</Form.Item>
						</Col>
						<Col md={3}>
							<Form.Item
								name="email"
								rules={[
									{
										type: "email",
										message: "The input is not valid E-mail!",
									},
									{
										required: true,
										message: "Пожалуйста введите свой E-mail!",
									},
								]}
							>
								<Input
									className="contact-form-input"
									placeholder="Введите E-mail*"
								/>
							</Form.Item>
						</Col>
						<Col md={4}>
							<Form.Item>
								<Input
									className="contact-form-input"
									placeholder="Как вы узнали о нас?"
								/>
							</Form.Item>
						</Col>
					</Row>
					<Row>
						<Form.Item>
							<TextArea
								className="contact-form-input"
								rows={5}
								placeholder="Комментарий..."
							/>
						</Form.Item>
					</Row>
					<Row className="form-contact-check-box">
						<Form.Item>
							<Checkbox>
								Хочу получать информацию о специальных предложениях и акциях
							</Checkbox>
						</Form.Item>
						<Form.Item
							name="terms_and_conditions"
							valuePropName="checked"
							rules={[{ validator: checkboxValidator }]}
						>
							<Checkbox>
								Я даю согласие <a href="#">на обработку персональных данных</a>{" "}
								в соответствии с законом №152-ФЗ "О персональных данных" от
								27.07.2006{" "}
							</Checkbox>
						</Form.Item>
					</Row>
					<Row>
						<div className="w-100 contact-form-button-container">
							<Button className="contact-form-button  py-4  my-4">
								ЗАПИСАТЬСЯ НА КОНСУЛЬТАЦИЮ
							</Button>
						</div>
					</Row>
				</Form>
			</Container>
		</div>
	);
}
