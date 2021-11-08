import styled from "styled-components";
import px2vw from "../../utili/px2vw";
import { images } from '../../image'


export const Note = styled.div`
background: url(${images.note});
background-size: 100% 100%, cover;
width: 100%;
height: ${px2vw(30, 1440)};
background-repeat: no-repeat;

`