
import { useState } from 'react';
import { motion } from 'framer-motion';
import { css } from 'linaria';

export
function TestPage() {
	const [rotate, setRotate] = useState(90); 
	return (
		<div
			className={cls}
			onClick={() => setRotate(rotate + 90)}
		>
			<motion.div
				className="foo"
				animate={{
					rotate,
					transformOrigin: 'right center',
				}}
			>
				<div>
					Foo
				</div>
			</motion.div>
		</div>
	);
}


const cls = css`
	right: 50%;
	top: 50%; 
	position: fixed;
	border: 1px solid red;

	.foo {
		width: 100px;
	}
`;
