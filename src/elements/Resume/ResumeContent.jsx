import React from "react";
import styled from "styled-components";
import BodyContent from "@elements/Window/BodyContent";

const Iframe = styled.iframe`
	width: 100%;
	height: 95%;
	border: none;
`;

const ResumeContent = ({ title, content }) => {
    return (
        <BodyContent>
            <Iframe src="https://1drv.ms/b/c/920ae095783be7b3/IQQbXX-En7ciRYM_sABfkl3WAdvrqCm3E7KpqLmEot4RfWQ" width="98" height="120" frameborder="0" scrolling="no"></Iframe>
        </BodyContent>
    );
};

export default ResumeContent;
