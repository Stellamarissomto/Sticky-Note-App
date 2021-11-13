import styled from "styled-components";
import px2vw from "../../utili/px2vw";
import { images } from '../../image'


export const Note = styled.div`
background: url(${images.note});
background-size: ${px2vw(300, 1440)} ${px2vw(300, 1440)}, cover;
width:${px2vw(300, 1440)};
height: ${px2vw(300, 1440)};
background-repeat: no-repeat;

`

export const Text = styled.p`
position: absolute;

`