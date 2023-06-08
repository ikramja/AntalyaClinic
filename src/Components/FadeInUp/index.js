import { motion } from "framer-motion";
export default function FadeInUpAnimation({ elements = [], duration }) {
	return (
		<motion.div
			initial={{ y: 200, opacity: 0 }}
			animate={{
				y: 0,
				opacity: 1,
				transition: {
					duration: duration,
				},
			}}
		>
			{elements.map((element, index) => (
				<div key={index}>{element}</div>
			))}
		</motion.div>
	);
}
