import { motion } from "framer-motion";
export default function FadeInUpAnimation(props) {
	return (
		<motion.div
			initial={{ y: 200, opacity: 0 }}
			animate={{
				y: 0,
				opacity: 1,
				transition: {
					duration: props.duration,
				},
			}}
		>
			{props.elements.map((element, index) => (
				<div key={index}>{element}</div>
			))}
		</motion.div>
	);
}
// { elements = [], duration }
