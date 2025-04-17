import neofetch from "@utils/neofetch";
//eslint-disable-next-line

const compileResponseHTML = styleMap => {
	return styleMap
		.map(item => {
			return `<span class="${
				item.folder
					? `style3`
					: `${item.executable ? `style2` : `style1`}`
			}">${
				item.link
					? `<a target="_blank" href="${item.link}">${item.name}</a>`
					: `${item.name}`
			}</span>`;
		})
		.join("  ");
};

const getSpaces = commandList => {
	let defaultSpaces = "\t";
	let lengthList = commandList.map(item => {
		return item.name.length;
	});
	// console.log(commandList)
	let max = Math.max(...lengthList);
	let what = commandList.map(item => {
		return Array(max - item.name.length + 1).join(" ") + defaultSpaces;
	});
	return what;
};

const compileCommandHTML = commandList => {
	let defArgs = [
		{
			name: "ls",
			description: "lists directory content",
		},
		{
			name: "cd",
			description: "changes the current working directory",
		},
		{
			name: "clear",
			description: "clears the terminal screen",
		},
	];
	let argList = [
		...defArgs,
		...commandList.map(item => {
			let extra = " ";
			if (item.subPathStrict[0]) {
				extra += item.subPathStrict[1].name;
			}
			return {
				name: item.name[0] + extra,
				description: item.description,
			};
		}),
	];
	let spaceList = getSpaces(argList);
	let response = `
Type <span class="style2">'help'</span> to see this list.\n\n`;
	argList.forEach((item, idx) => {
		let temp = `<span class="style2">${item.name}</span>${spaceList[idx]}${item.description}\n`;
		response += temp;
	});
	return `${response}\nAnd more "hidden" commands...`;
};

let commandList = [
	{
		name: ["resume", "./resume", "resume.sh", "./resume.sh"],
		action: "<a href",
		response: "",
		subPathStrict: [false],
		description: "view my resume",
	},
	{
		name: ["github", "git", ".github"],
		action: true,
		response:
			'Visit: <a href="https://github.com/Kirill-Makienko-Tkachenko">my github @Kirill-Makienko-Tkachenko </a> (Click my name, its a link)',
		subPathStrict: [false],
		description: "checkout my github profile",
	},
	{
		name: ["linkedin"],
		action: true,
		response:
			'Visit: <a href="https://www.linkedin.com/in/kirill-m-t/">LinkedIn</a> (Click on the text, its a link)',
		subPathStrict: [false],
		description: "checkout my linkedIn profile",
	},
	{
		name: ["projects", "./projects", "projects.app", "./projects.app"],
		// action: { PROJECTS: "" },
		action: false,
		response: `
			<h2>This is a list more extensive than my CV</h2> \n
			<h1> ------------------------ </h1>
			
			<h1>1. NASA HUMAN EXPLORATION ROVER CHALLENGE</h1> \n  <h2>Team lead 2023 - 2024 Season</h2> \n - I got to be leader in the telemetry team  \n 
			<h1> ------------------------ </h1>

			<h1>2. NASA HUMAN EXPLORATION ROVER CHALLENGE</h1> \n  <h2>Backend/Devops 2022 - 2023 Season</h2> \n - I worked on the telemetry team in front and back teams of the main page, but mainly 
			I worked on deploying everything on self hosted servers and trying the connection between the sensors and the Database \n 

			<h1> ------------------------ </h1>

			<h1>3. SERVIDORES EL RUSO</h1> \n  <h2>Founder 2019 - Now</h2> \n- This is my very own startup and the project ive sunken the most of my time at the beginning of my major. 
			Its main objective is to provide game servers for players in México and central america for them 
			to not rely on server located.\n 

			<h1> ------------------------ </h1>
			
			<h1>4. MONGODB (Incoming Intern)</h1> \n  <h2>June - August 2025</h2> \n - I got to internship with MongoDB in the summer of 2025, at time of writing I stil havent started
			but I've been told that I'll be working on a project impacting the manucaturing industry and will use AI to manage fleets of trucks. \n 

			<h1> ------------------------ </h1>

			<h1>5. HOORI</h1> \n <h2>AI Developer January - March 2024</h2> \n - I got to be part of a project for Hoori and 10X to develop an AI chatbot assistant for popular messaging apps
			to help HR in recruiting and finding leads and potential candidates to have all their questions aswered. \n 

			<h1> ------------------------ </h1>

			<h1>6. HOORI</h1> \n <h2>Frontend September 2023 - January 2024</h2> \n - This was my first time having code being deployed to prod, here I worked on a frontend with React Native with Chakra UI
			for an invoices platform. \n 

			<h1> ------------------------ </h1>
			
			<h1>7. ARUKANA STUDIOS</h1> \n <h2>Frontend February - March 2024</h2> \n - At Arukana I worked frontend for an innovative app idea that in conjunction with the Japanese embassy wanted to teach
			Japanese in a more meaningfull way. \n

			<h1> ------------------------ </h1>
			
			<h1>8. ARUKANA STUDIOS</h1> \n <h2>Consulting/Freelance October 2024</h2> \n - I got contacted by the founder of the company to ask to help an guide the frontend part of a project to be done before a 
			tight deadline to present with their client. \n 
			<h1> ------------------------ </h1>
			
			<h1>9. HUMHUM</h1> \n <h2>Frontend August - December 2023</h2> \n  - I got to work on a mobile webapp build with LitElement to connect patient with specific needs because of eating disorders in remote
			areas of Mexico with specialized nutriologists across the country so patients could have access to a quality treatment without needing to go fund a trip to a big city. \n 
			<h1> ------------------------ </h1>

			<h1>10. AULIFY</h1> \n <h2>Product Owner / Scrum Master / Fullstack developer 2024</h2> \n  - I led a team of developers in creating an educational mobile video game that integrates Aulify's course content. 
			The game was designed to reinforce students' learning through interactive gameplay. In addition to game development, I implemented a backend dashboard that allowed administrators to track meaningful 
			statistics such as the number of levels completed and average playtime. \n 
			<h1> ------------------------ </h1>

			<h1>11. MORELOS' CHILDREN HOSPITAL</h1> \n <h2>Product Owner / Scrum Master / Fullstack developer / Mobile 2024</h2> \n  - Designed and developed a mobile + web application so workers at the Morelos' Children
			Hospital could create a ticket for their internal IT/Technical support team to go and check for faulty equipment \n 
			<h1> ------------------------ </h1>

			<h1>12. PARKINTEC</h1> \n <h2>Fullstack developer 2023</h2> \n  - For a university project we were tasked with developing any solution to a problem we could find that could benefit from IOT, 
			We decided to make a smart parking system in which any registered user could select a parking spot on their phones and on all other sessions that spot would be marked as reserved, that would be
			confirmed with a movement sensor at the parking spot sending to the system that the particular reserved parking spot is now occupied. \n 
			<h1> ------------------------ </h1>

			<h1>13. REWIND GAMES</h1> \n <h2>Game developer / AI Training 2024</h2> \n  - We were tasked with developing an AI agent for their game "Tanuki Sunset" so the main character could navigate the course 
			by himself, without any user input which then could be used as a "driving assistant", to test for infinite tracks ans so on. \n 
			<h1> ------------------------ </h1>

			<h1>14. TECNOLOGICO DE MONTERREY (ITESM)</h1> \n <h2>Network Auditor 2023</h2> \n  - For a university project we worked directly with our campus´s IT team to audit and try to find bad practices or any 
			problem with the IT configuration. \n 
			<h1> ------------------------ </h1>

			<h1>15. RPA HACKATHON (ITESM)</h1> \n <h2>2023</h2> \n  - Participated in a Hackathon organized by Beecker at my campus competing with 30+ teams to try and automate getting CURP numbers given a list
			to then send a report trough Email, placed 5th out of 30+ teams. \n 
			<h1> ------------------------ </h1>
			
			<h1>16. ICPC</h1> \n <h2>2022, 2023</h2> \n  - Participated in the International Collegiate Programming Contest by invitation of the carrer director in 2022, 2023, usually outscoring
			other teams participating from other ITESM campuses, got 79th out of 200+ teams. \n 
			<h1> ------------------------ </h1>

			<h1>17. Interpretable Algorithm for identification of breast cancer factors in Mexico </h1> \n <h2>Frontend August - December 2023</h2> \n  - A research project by the National Public Health Insitute
			(Instituto Nacional de Salud Pública) and ITESM where I was invited by Dr. Atoany Fierro to participate where we were researching if phtalets are a cancer inducing element and what other chemical
			compositions in the body could lead to a higher risk of obtaining breast cancer in woman in northern Mexico. \n 
			<h1> ------------------------ </h1>

			
			`,
		subPathStrict: [false],
		description: "checkout my projects",
	},
	{
		name: ["whoami"],
		action: true,
		response:
			"I'm Kirill Makienko, a 21-year-old Computer Science student in my sixth semester @ Tec de Monterrey. I have a passion for learning, accompanied by proven leadership and communication skills. I'm multilingual, fluent in Spanish, English and Russian, I know basic German and French. I've achieved international recognition for various audio-visual productions and have contributed to this domain professionally for over five years. And it goes without saying that I love animals",
		subPathStrict: [false],
		description: "displays my information",
	},
	{
		name: ["fetchme"],
		action: false,
		response: `<pre>${neofetch}</pre>`,
		subPathStrict: [false],
		description: "fetches my information in a cool way",
	},
	{
		name: ["code"],
		action: true,
		response: "",
		subPathStrict: [true, { name: ".", response: "" }],
		description: "opens a VS code window for this website's source code",
	},
	{
		name: ["happiness"],
		action: true,
		response: "",
		subPathStrict: [false],
		description: '<span class="">close your Eyes</span>',
	},
	{
		name: ["git"],
		action: true,
		response: "",
		subPathStrict: [true, { name: "log", response: "" }],
		description: "lists my github projects",
	},

	{
		name: ["help"],
		action: true,
		response: "",
		subPathStrict: [false],
		description: "displays detailed information about the commands",
	},

	{
		name: ["credits"],
		action: true,
		response:
			"Just a heads up, I didn't create site, I took this site as a template from this guy here <a href='https://github.com/adityassharma-ss'> Aditya Sharma</a>, and particularly from this <a href='https://github.com/adityassharma-ss/aditya?ref=reactjsexample.com'> project (I'm clickable) </a>",
		subPathStrict: [false],
		description: "Credits for the creation of the page",
	},
];

commandList = commandList.map(item => {
	if (item.name[0] === "help") {
		item.response = `<pre>${compileCommandHTML(commandList)}</pre>`;
	}
	return item;
});

const customCommands = [
	{
		name: ["fox"],
		action: "<a href",
		response: "Im a Fox 🦊",
		subPathStrict: [false],
		description: "fox",
	},
];

const fileList = [
	{
		name: ".github",
		link: "https://github.com/Kirill-Makienko-Tkachenko",
		folder: true,
		executable: false,
	},
	{
		name: "src",
		link: "https://github.com/Kirill-Makienko-Tkachenko",
		folder: true,
		executable: false,
	},
	{
		name: "resume.sh",
		link: "",
		folder: false,
		executable: true,
	},
	{
		name: "projects.app",
		link: "",
		folder: false,
		executable: true,
	},
];

const getCommandList = commandList => {
	let finalCommandList = {};
	commandList.forEach(item => {
		//eslint-disable-next-line
		let commandBuilder = {};
		item.name.forEach(elem => {
			let action = item.action
				? { [item.name[0].toUpperCase()]: "" }
				: null;
			let resp = item.response;
			commandBuilder = {
				[elem]: {
					validArgs: {
						_dir: {
							action: action,
							response: resp,
						},
						default: {
							action: action,
							response: resp,
						},
					},
				},
			};
			if (item.subPathStrict[0]) {
				commandBuilder[elem].validArgs[item.subPathStrict[1].name] = {
					action: action,
					response: item.subPathStrict[1].response,
				};
			}
			finalCommandList = { ...commandBuilder, ...finalCommandList };
		});
	});
	//console.log(finalCommandList)
	return finalCommandList;
};

const getArgListCd = fileList => {
	let defArgs = {
		_dir: {
			action: null,
			response: "",
		},
		default: {
			action: null,
			response: "cd: cannot access %arg%: Permission Denied",
		},
		"~": {
			action: null,
			response: "",
		},
	};
	let argList = {};
	fileList.forEach(item => {
		argList[item.name] = {
			action: item.folder ? { PATH: item.link } : null,
			response: item.folder ? "" : "zsh: cd: %arg%: Not a directory",
		};
	});
	Object.keys(defArgs).forEach(item => {
		argList[item] = defArgs[item];
	});
	return argList;
};

const getConstCommands = customCommands => {
	let finalCommandList = {};
	customCommands.forEach(item => {
		//eslint-disable-next-line
		let commandBuilder = {};
		item.name.forEach(elem => {
			let action = item.action
				? { [item.name[0].toUpperCase()]: "" }
				: null;
			let resp = item.response;
			commandBuilder = {
				[elem]: {
					validArgs: {
						_dir: {
							action: action,
							response: resp,
						},
						default: {
							action: action,
							response: resp,
						},
					},
				},
			};
			if (item.subPathStrict[0]) {
				commandBuilder[elem].validArgs[item.subPathStrict[1].name] = {
					action: action,
					response: item.subPathStrict[1].response,
				};
			}
			finalCommandList = { ...commandBuilder, ...finalCommandList };
		});
	});
	//console.log(finalCommandList)

	return finalCommandList;
};

const commands = {
	ls: {
		validArgs: {
			"/": {
				action: null,
				response:
					"ls: cannot access System Volume Information: Permission Denied",
			},
			_dir: {
				action: null,
				response: compileResponseHTML(fileList),
			},
			default: {
				action: null,
				response: "ls: cannot access %arg%: Permission Denied",
			},
		},
	},
	cd: {
		validArgs: getArgListCd(fileList),
	},
	...getCommandList(commandList),
	...getConstCommands(customCommands),
};

export default commands;
