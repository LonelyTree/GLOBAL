import React from 'react'

const Iframe = (props) => {
	return (
		<iframe
			className="iframe-Wrangler "
			title="virtualSky"
			src={`https://virtualsky.lco.global/embed/index.html?${props.settings}`}
		></iframe>
	)
}

export default Iframe
