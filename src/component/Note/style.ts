import styled from "styled-components";
import px2vw from "../../utili/px2vw";



export const Contain = styled.div`
display: flex;
flex-direction: column;
width: ${px2vw(350, 1440)};
padding-top: ${px2vw(64, 1440)};
padding-left: ${px2vw(64, 1440)};

`

export const Input = styled.textarea`
height: ${px2vw(170, 1440)};

`

export const Button = styled.button`
height: ${px2vw(50, 1440)};
background-color: #FBEC6E;
border: none;
font-family: Source Sans Pro;
font-style: normal;
font-weight: normal;
font-size: ${px2vw(24, 1440)};
line-height: ${px2vw(25, 1440)};
text-transform: capitalize;

`