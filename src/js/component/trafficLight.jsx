import React, { useState, useEffect } from "react";

//create your first component
const TrafficLight = () => {
	const [selectedColor, setSelectedColor] = useState("green");
	return (
		<div className="container">
			<div className="TrafficTop"></div>
			<div className="TrafficLights">
				<div
					onClick={() => setSelectedColor("red")}
					className={
						selectedColor === "red"
							? "light red glow"
							: "light red off"
					}></div>
				<div
					onClick={() => setSelectedColor("yellow")}
					className={
						selectedColor === "yellow"
							? "light yellow glow"
							: "light yellow off"
					}></div>
				<div
					onClick={() => setSelectedColor("green")}
					className={
						selectedColor === "green"
							? "light green glow"
							: "light green off"
					}></div>
			</div>
		</div>
	);
};

export default TrafficLight;
