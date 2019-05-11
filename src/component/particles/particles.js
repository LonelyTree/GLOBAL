import React,{Component} from 'react'
import styled from 'styled-components'
import Particles from 'react-particles-js';

const Sparkle = styled.div`
position: absolute;
width: 100vw;
height: 100vh;
background-size: cover;
background-image: url(https://www.solarsystemscope.com/textures/download/8k_stars_milky_way.jpg)
`

class Particle extends Component{
    render(){
        return (
            <Sparkle>
            <Particles
                params={{
                    "particles": {
                        "number": {
                            "value": 317,
                            "density": {
                                "enable": true,
                                "value_area": 801.7060304327614
                            }
                        },
                        "color": {
                            "value": "#ffffff"
                        },
                        "shape": {
                            "type": "circle",
                            "stroke": {
                                "width": 1,
                                "color": "#ffffff"
                            },
                            "polygon": {
                                "nb_sides": 3
                            },
                            "image": {
                                "src": "img/github.svg",
                                "width": 20,
                                "height": 20
                            }
                        },
                        "opacity": {
                            "value": 0.7733646887996272,
                            "random": false,
                            "anim": {
                                "enable": true,
                                "speed": 0.3196803196803197,
                                "opacity_min": 0.28771228771228774,
                                "sync": false
                            }
                        },
                        "size": {
                            "value": 1.5,
                            "random": true,
                            "anim": {
                                "enable": true,
                                "speed": 16.783216783216783,
                                "size_min": 0.1,
                                "sync": false
                            }
                        },
                        "line_linked": {
                            "enable": true,
                            "distance": 272.58005034713887,
                            "color": "#ffffff",
                            "opacity": 0.008017060304327615,
                            "width": 1
                        },
                        "move": {
                            "enable": true,
                            "speed": 0.6,
                            "direction": "top-right",
                            "random": false,
                            "straight": true,
                            "out_mode": "out",
                            "bounce": false,
                            "attract": {
                                "enable": false,
                                "rotateX": 9299.789953020032,
                                "rotateY": 9379.960556063308
                            }
                        }
                    },
                    "interactivity": {
                        "detect_on": "canvas",
                        "events": {
                            "onhover": {
                                "enable": false,
                                "mode": "repulse"
                            },
                            "onclick": {
                                "enable": true,
                                "mode": "repulse"
                            },
                            "resize": true
                        },
                        "modes": {
                            "grab": {
                                "distance": 400,
                                "line_linked": {
                                    "opacity": 1
                                }
                            },
                            "bubble": {
                                "distance": 400,
                                "size": 40,
                                "duration": 2,
                                "opacity": 8,
                                "speed": 3
                            },
                            "repulse": {
                                "distance": 836.4395286703855,
                                "duration": 0.4
                            },
                            "push": {
                                "particles_nb": 4
                            },
                            "remove": {
                                "particles_nb": 2
                            }
                        }
                    },
                    "retina_detect": false
                }}

            />
            </Sparkle>
        );
    };

}

export default Particle