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
            <Iframe src="https://onedrive.live.com/embed?resid=920AE095783BE7B3%2122141&authkey=!AMHpJdkg5vgv_UQ&em=2" width="476" height="500" frameborder="0" scrolling="no"></Iframe>
        </BodyContent>
    );
};

export default ResumeContent;
