import React from "react";
import styled from "styled-components";
import BodyContent from "@elements/Window/BodyContent";

const Iframe = styled.iframe`
	width: 100%;
	border: none;
`;
const Zone = () => {
	return (
		<BodyContent>
			<Iframe width="560" height="600" src="https://www.youtube.com/embed/NATSpYWERIE?si=B-Ddn7dUimyDYoT5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></Iframe>
		</BodyContent>
	);
};

export default Zone;
