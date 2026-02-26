import React, {useState} from "react";

const Home = () => {

const [red, setRed] = useState("on")
const [yellow, setYellow] = useState("off")
const [green, setGreen] = useState("off")

const glowRed = ()=>{
	setRed("on");
	setYellow("off");
	setGreen("off");
}
const glowYellow = ()=>{
	setYellow("on");
	setRed("off");
	setGreen("off");
}
const glowGreen = ()=>{
	setGreen("on");
	setYellow("off");
	setRed("off");
}

return (
		<div id="container">
			<div className={`trafficLight text-center ${red == "on" ? "lightGlow bg-danger border border-5 border-danger" : "bg-danger-subtle border-0" }`} onClick={glowRed} > R </div><br />
			<div className={`trafficLight text-center ${yellow == "on" ? "lightGlow bg-warning border border-5 border-warning" : "bg-warning-subtle border-0" }`} onClick={glowYellow} > Y </div><br />
			<div className={`trafficLight text-center ${green == "on" ? "lightGlow bg-success border border-5 border-success" : "bg-success-subtle border-0" }`} onClick={glowGreen} > G </div>
		</div>
	);
};

export default Home;

//I suspect the grader will suggest a simpler way like this:
/*
const [red, setRed] = useState("true")
const [yellow, setYellow] = useState("false")
const [green, setGreen] = useState("false")

const onlyOneFunctionNotThree = ()=>{
	setRed(!red);
	setYellow(!yellow);
	setGreen(!green);
	}
*/
//Yes, I tried that, but it did not work as expected.