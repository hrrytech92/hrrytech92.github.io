import React from "react";
import Lottie from "react-lottie";

const GreetingLottie = ({ animationData  }) => {
	const defaultOptions = {
		loop: true,
		autoplay: true,
		renderer: 'svg',
		animationData : animationData ,
	};

	return (
		<div onClick={() => null}>
			<Lottie options={defaultOptions} />
		</div>
	);
};

export default GreetingLottie;
