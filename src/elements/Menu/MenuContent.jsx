import "@styles/menubar.scss";
import VolumeWhite from "@static/volumeWhite.png";
import WIFIWhite from "@static/WIFIWhite.png";
// import IcloudIcon from "@static/IcloudIcon.png";

const formatMinutes = min => {
	return min < 10 ? "0" + min : min;
};

const convertToReadableDate = timestamp => {
	const shortenedDaysOfTheWeek = [
		"Sun",
		"Mon",
		"Tue",
		"Wed",
		"Thu",
		"Fri",
		"Sat",
	];
	const shortenedMonth = [
		"Jan",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"Jun",
		"Jul",
		"Aug",
		"Sep",
		"Oct",
		"Nov",
		"Dec",
	];
	const currentDate = new Date(timestamp);
	return (
		<>
			<span style={{ color: "white" }}>
				{shortenedDaysOfTheWeek[currentDate.getDay()]}{" "}
				{currentDate.getDate()} {shortenedMonth[currentDate.getMonth()]}{" "}
			</span>
			<span className="time" style={{ color: "white" }}>
				{currentDate.getHours()}:
				{formatMinutes(currentDate.getMinutes())}
			</span>
		</>
	);
};

const MenuContent = props => {
	const menuItems = [
		[
			"Activities",
			props.programName,
		],
		[
			<img src={VolumeWhite} alt="Volume icon" className="right-icon" />,
			<img src={WIFIWhite} alt="Wifi icon" className="right-icon" />,
		],
		[
			convertToReadableDate(Date.now()),
		],
	];
	return (
		<div className="menu-bar">
			<div className="app-menus">
				{menuItems[0].map((item, index) => {
					return (
						<div
							className={`${
								typeof item !== "string" ? `img-container` : ``
							}`}
							key={index}
							style={typeof item === "string" ? { color: "white" } : {}}
						>
							{item}
						</div>
					);
				})}
			</div>
			<div className="center">
				{menuItems[2].map((item, index) => (
					<div key={index}>{item}</div>
				))}
			</div>
			<div className="right-side">
				{menuItems[1].map((item, index) => {
					return (
						<div
							className={`${
								index !== menuItems[1].length - 1
									? `img-container`
									: ``
							}`}
							key={index}
						>
							{item}
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default MenuContent;
