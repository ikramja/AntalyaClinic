import "./index.css";
import { Anchor } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import { ArrowLeftOutlined } from "@ant-design/icons";
import React, { useState, useEffect } from "react";
import { Affix } from "antd";

const App = () => (
	<>
		<div>
			<Affix offsetTop={67}>
				<Anchor
					style={{
						backgroundColor: "#C4C4C4",
						height: "50px",
					}}
					className="center-div "
					direction="horizontal"
					items={[
						{
							key: "part-1",
							href: "#section1",
							title: (
								<div className="flex-container">
									<p className="flex-element">КОМУ ПОДХОДИТ ПРОЦЕДУРА</p>
									<div className="center-div">
										<ArrowRightOutlined className="custom-arrow-right" />
										{/* <ArrowLeftOutlined className="custom-arrow-left" /> */}
									</div>
								</div>
							),
						},
						{
							key: "part-2",
							href: "#section2",
							title: (
								<div className="flex-container">
									<div className="center-div">
										<p className="flex-element">КАК ПРОХОДИТ ОПЕРАЦИЯ</p>
									</div>
									<div className="center-div">
										<ArrowRightOutlined />
									</div>
								</div>
							),
						},
						{
							key: "part-3",
							href: "#section3",
							title: (
								<div className="flex-container">
									<div className="center-div">
										<p className="flex-element">ПРОТИВОПОКАЗАНИЯ</p>
									</div>
									<div className="center-div">
										<ArrowRightOutlined />
									</div>
								</div>
							),
						},
						{
							key: "part-4",
							href: "#section4",
							title: (
								<div className="flex-container">
									<div className="center-div">
										<p className="flex-element">ДЕНЬ ОПЕРАЦИИ</p>
									</div>
									<div className="center-div">
										<ArrowRightOutlined />
									</div>
								</div>
							),
						},
						{
							key: "part-5",
							href: "#section5",
							title: (
								<div className="flex-container">
									<div className="center-div">
										<p className="flex-element">ВОССТАНОВЛЕНИЕ</p>
									</div>
									<div className="center-div">
										<ArrowRightOutlined />
									</div>
								</div>
							),
						},
						{
							key: "part-6",
							href: "#section6",
							title: (
								<div className="flex-container">
									<div className="center-div">
										<p className="flex-element">РЕЗУЛЬТАТ</p>
									</div>
									<div className="center-div">
										<ArrowRightOutlined />
									</div>
								</div>
							),
						},
						{
							key: "part-7",
							href: "#section7",
							title: (
								<div className="d-flex">
									<div className="center-div">
										<p className="flex-element">ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ</p>
									</div>
									<div className="center-div">
										<ArrowRightOutlined />
									</div>
								</div>
							),
						},
					]}
				/>
			</Affix>
		</div>
	</>
);
export default App;
