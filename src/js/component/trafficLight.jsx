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
						"light red" + (selectedColor === "red" ? " glow" : "")
					}></div>
				<div
					onClick={() => setSelectedColor("yellow")}
					className={
						"light yellow" +
						(selectedColor === "yellow" ? " glow" : "")
					}></div>
				<div
					onClick={() => setSelectedColor("green")}
					className={
						"light green" +
						(selectedColor === "green" ? " glow" : "")
					}></div>
			</div>
		</div>
	);
};

export default TrafficLight;
