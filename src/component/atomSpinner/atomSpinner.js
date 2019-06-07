import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Atom = styled.div`
    height: 100vh;
    width: 189vh;
    background: black;
* {
box-sizing: border-box;
}
.spinner-inner {
position: absolute;
display: block;
height: 100%;
width: 100%;
}
.spinner-circle {
    display: block;
    position: absolute;
    color: #00fff1;
    font-size: calc(60vh * 0.24);
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%,-50%);
    -ms-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%);
}
.spinner-line {
    position: absolute;
    width: 53%;
    margin-left: 24vw;
    height: 100%;
    border-radius: 50%;
    -webkit-animation-duration: 1000ms;
    -webkit-animation-duration: 1000ms;
    animation-duration: 1000ms;
    border-left-width: calc(115vw / 25);
    border-top-width: calc(115vw / 25);
    border-left-color: #f80073;
    border-left-style: solid;
    border-top-style: solid;
    border-top-color: #00ffff00;
}
.spinner-line:nth-child(1) {
animation: atom-spinner-animation-1 1500ms
    linear infinite;
transform: rotateZ(120deg) rotateX(66deg) rotateZ(0deg);
}
.spinner-line:nth-child(2) {
animation: atom-spinner-animation-2 1500ms
    linear infinite;
transform: rotateZ(240deg) rotateX(66deg) rotateZ(0deg);
}
.spinner-line:nth-child(3) {
animation: atom-spinner-animation-3 1500ms
    linear infinite;
transform: rotateZ(360deg) rotateX(66deg) rotateZ(0deg);
}
@keyframes atom-spinner-animation-1 {
100% {
    transform: rotateZ(120deg) rotateX(66deg) rotateZ(360deg);
}
}
@keyframes atom-spinner-animation-2 {
100% {
    transform: rotateZ(240deg) rotateX(66deg) rotateZ(360deg);
}
}
@keyframes atom-spinner-animation-3 {
100% {
    transform: rotateZ(360deg) rotateX(66deg) rotateZ(360deg);
}
}
`;

const propTypes = {
size: PropTypes.number,
animationDuration: PropTypes.number,
color: PropTypes.string,
className: PropTypes.string,
style: PropTypes.object,
};

const defaultProps = {
size: 60,
color: 'red',
animationDuration: 1000,
className: '',
};

export const AtomSpinner = ({
size,
animationDuration,
color,
className,
style,
...props
}) => (
<Atom
size={size}
color={color}
animationDuration={animationDuration}
className={`atom-spinner${className ? ' ' + className : ''}`}
style={style}
{...props}
>
<div className="spinner-inner">
    <div className="spinner-line" />
    <div className="spinner-line" />
    <div className="spinner-line" />
    {/* Chrome renders little circles malformed */}
    <div className="spinner-circle">&#9679;</div>
</div>
</Atom>
);

AtomSpinner.propTypes = propTypes;
AtomSpinner.defaultProps = defaultProps;

export default AtomSpinner;