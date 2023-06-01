import "./index.css";
import { Button, Form, Input } from "antd";
import { useState } from "react";

const validateMessages = {
	required: "${label} is required!",
	types: {
		email: "${label} is not a valid email!",
	},
};

export default function NewsLetter() {
	return (
		<div className="newsletter">
			<h1 className="pt-4" style={{ fontSize: "1.7rem", fontWeight: "bold" }}>
				БУДЬТЕ В КУРСЕ НАШИХ НОВОСТЕЙ И АКЦИЙ
			</h1>
			<h1
				style={{ fontSize: "1.3rem", fontWeight: "400", color: "#414042" }}
				className="pb-4"
			>
				Оставьте Ваш e-mail и мы будем уведомлять Вас только о самых важных
				событиях
			</h1>
			<div>
				<Form
					className="newsletter-form center-div"
					layout="vertical"
					validateMessages={validateMessages}
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
						<Input className="newsletter-form-input " />
					</Form.Item>
					<Form.Item className="center-div my-0">
						<Button className="newsletter-button mx-2 center-div">
							ОТПРАВИТЬ
						</Button>
					</Form.Item>
				</Form>
				{/* <div className="center-div">
					<Button >
						ОТПРАВИТЬ
					</Button>
				</div> */}
			</div>
		</div>
	);
}
