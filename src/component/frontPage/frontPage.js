import React,{Component} from 'react';
import styled from 'styled-components'

const Div1 = styled.div`
    background: black;
    width: 100vw;
    height: 100vh;
    z-index: 2;
    position: absolute;
`
const Div2=styled.div`
position: relative;
height: 100vh;
width: 100vw;
zIndex: 3;
font-size: 10vh;
margin-top: 35vh;
marginLeft: "auto";
marginRight: "auto";
`
const Title=styled.h1`
position: relative;
color:white;
font-family:'Major Mono Display'
`


class FrontPage extends Component {

    render() {
        return (
            <Div1>
                <Div2>
                    <Title>GLOBAL</Title>
                </Div2>
            </Div1>
        );
    }
}
export default FrontPage;