import React, {Component} from 'react'

class ToggleDiv extends Component{
    render() {
        return (
            <div style={{
                height: '70vh',
                width: '70vw',
                position: "absolute",
                zIndex: '1',
                scrolling: "no",
                left: "0",
                right: "0",
                marginTop: "10vh",
                marginLeft: "auto",
                marginRight: "auto",
                allowTransparency: "true"}}>
                <button type="submit">Planets</button>
                <button type="submit">Planet Labels</button>
                <button type="submit">Meridian</button>
                <button type="submit">Orbit Paths</button>
                <button type="submit">Star Labels</button>
                <button type="submit">Grid Lines</button>
                <button type="submit">Constellations</button>
                <button type="submit">Constellation Labels</button>
            </div>
        )
    }
}

export default ToggleDiv