import React, {Component} from 'react'

class ToggleDiv extends Component{
    toggle=(e) => {
        this.props.setToggle(e.target.name)

    }
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
                <button type="submit" onClick={this.toggle} name="showPlanets">Planets</button>
                <button type="submit" onClick={this.toggle} name="showPlanetLabels">Planet Labels</button>
                <button type="submit" onClick={this.toggle} name="showMeridian">Meridian</button>
                <button type="submit" onClick={this.toggle} name="showOrbits">Orbit Paths</button>
                <button type="submit" onClick={this.toggle} name="showStarLabels">Star Labels</button>
                <button type="submit" onClick={this.toggle} name="azimuthGridlines">Grid Lines</button>
                <button type="submit" onClick={this.toggle} name="constellations">Constellations</button>
                <button type="submit" onClick={this.toggle} name="constellationLabels">Constellation Labels</button>

            {/* <button type="submit" onClick="" name="Planets" >{this.name}</button>
                <button type="submit" onClick="" name="Planet Labels">{this.name}</button>
                <button type="submit" onClick="" name="Meridian">{this.name}</button>
                <button type="submit" onClick="" name="Orbit Paths">{this.name}</button>
                <button type="submit" onClick="" name="Star Labels">{this.name}</button>
                <button type="submit" onClick="" name="Grid Lines">{this.name}</button>
                <button type="submit" onClick="" name="Constellations">{this.name}</button>
                <button type="submit" onClick="" name="Constellation Labels">{this.name}</button> */}
            </div>
        )
    }
}

export default ToggleDiv