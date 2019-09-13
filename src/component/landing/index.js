import React from 'react'
import Particles from '../particles'
import Login from '../Login'
import '../../css/landing.css'
import video from '../../media/backgroundVideo/Earth.mp4'
import '../jQuery'

function FrontPage(props) {
	return (
		<div className="landing-Wrapper">
			<Login logger={props.logger} state={props.state} {...props} />
			<Particles />
			<div className="svg-Wrapper">
				<svg>
					<defs>
						<clipPath
							id="clip-00"
							clipPathUnits="objectBoundingBox"
							transform="scale(0.00333333333,0.00571428571)"
						>
							<path
								d="m 18.875096,206.90649 q -4.081955,0 -7.615588,2.07144 -3.4727084,2.01052 -5.5441484,5.54415 -2.07144,3.47271 -2.07144,7.61559 v 8.04206 q 0,4.32565 1.2184941,7.12819 1.7058918,3.9601 5.1786003,6.45802 3.472708,2.49791 7.798362,2.80253 v -19.80053 h 18.582035 v 4.02103 q 0,3.89919 -1.157569,6.94542 -1.888666,5.05675 -6.33617,8.10299 -4.447503,3.04623 -10.052576,3.04623 -5.300449,0 -9.6870282,-2.86346 -4.3256541,-2.92438 -6.3361694,-7.73744 -1.4621929,-3.41178 -1.4621929,-8.10298 v -8.04206 q 0,-4.75213 2.3151388,-8.77316 2.3760635,-4.02103 6.3970937,-6.33617 4.021031,-2.37606 8.773158,-2.37606 3.960106,0 7.25004,1.34034 3.289934,1.27942 5.605073,3.77733 1.888666,2.07144 3.046235,4.63028 1.218494,2.55884 1.218494,5.1786 h -2.193289 q -0.06092,-2.25422 -1.15757,-4.4475 -1.03572,-2.19329 -2.680687,-3.96011 -4.081955,-4.26473 -11.088296,-4.26473 z m 15.292101,22.05474 H 20.032665 v 17.60724 q 4.386579,-0.30462 7.859287,-2.74161 3.533633,-2.49791 5.1786,-6.57987 1.096645,-2.86346 1.096645,-6.45802 z"
								transform="translate(22,-170)"
							/>
							<path
								d="m 82.79939,237.18607 v 10.78367 H 50.509296 v -42.40359 h 2.254215 v 31.61992 z"
								transform="translate(22,-170)"
							/>
							<path
								d="m 91.708676,222.07674 q 0,-4.75213 2.376063,-8.83408 2.376064,-4.08196 6.397091,-6.45802 4.08196,-2.37606 8.89501,-2.37606 4.81305,0 8.83408,2.37606 4.08196,2.37606 6.45802,6.45802 2.37606,4.08195 2.37606,8.83408 v 9.38241 q 0,4.75212 -2.37606,8.83408 -2.37606,4.08195 -6.45802,6.45802 -4.02103,2.37606 -8.83408,2.37606 -4.81305,0 -8.89501,-2.37606 -4.021027,-2.37607 -6.397091,-6.45802 -2.376063,-4.08196 -2.376063,-8.83408 z m 11.088294,9.38241 q 0,2.92438 1.82774,4.99582 1.82774,2.07144 4.75213,2.07144 2.86346,0 4.6912,-2.07144 1.82774,-2.07144 1.82774,-4.99582 v -9.44333 q 0,-2.98531 -1.82774,-4.99583 -1.82774,-2.01051 -4.6912,-2.01051 -2.92439,0 -4.75213,2.01051 -1.82774,2.01052 -1.82774,4.99583 z"
								transform="translate(22,-170)"
							/>
							<path
								d="m 157.46071,205.56615 q 4.02104,0 6.3971,1.21849 2.86346,1.46219 4.38658,4.02103 1.58404,2.55884 1.58404,5.72692 0,2.98531 -1.58404,5.54415 -1.58404,2.49791 -4.32566,3.96011 3.28994,1.15757 5.54415,4.02103 2.25422,2.86346 2.25422,6.45802 0,3.16808 -1.64497,5.84877 -1.58404,2.61976 -4.26473,4.14288 -1.34034,0.7311 -2.98531,1.09664 -1.64497,0.36555 -4.38658,0.36555 H 139.6707 v -42.40359 z"
								transform="translate(22,-170)"
							/>
							<path
								d="m 219.55726,247.96974 h -39.9666 l 19.9833,-43.31746 z m -36.43297,-2.25421 h 32.89934 l -16.44967,-35.70188 z"
								transform="translate(22,-170)"
							/>
							<path
								d="m 263.19363,237.18607 v 10.78367 h -32.2901 v -42.40359 h 2.25422 v 31.61992 z"
								transform="translate(22,-170)"
							/>
						</clipPath>
					</defs>
				</svg>
			</div>
			<div className="video-Wrapper">
				<video
					className="frontPage"
					loop={true}
					autoPlay={true}
					muted={true}
					playsInline={true}
				>
					<source src={video} type="video/mp4" />
				</video>
			</div>
		</div>
	)
}
export default FrontPage
