import React, { Component } from 'react'

class Activity extends Component {

	render() {
		let styles = {
			"box-shadow":"0 0 15px #888",
			"padding-bottom":"2em"
		}
		return <div className='container'>
			<div className='row center-lg center-md center-sm center-xs'>
				<div className='col-xs-10 col-sm-7 col-md-7 col-lg-7'>
					<h4 className='text-left'>Front-end</h4>

					<div className='row center-lg center-md center-sm center-xs'>
						<div className='col-xs-6 col-sm-3 col-md-3 col-lg-3'>
							<img src='/api/icons/react.svg'/>
							<p className='text-icon-activity text-center'>React</p>
						</div>
						<div className='col-xs-6 col-sm-3 col-md-3 col-lg-3'>
							<img src='/api/icons/github.png'/>
							<p className='text-icon-activity text-center'>Hola</p>
						</div>
						<div className='col-xs-6 col-sm-3 col-md-3 col-lg-3'>
							<img src='/api/icons/nodejs.png'/>
							<p className='text-icon-activity text-center'>Hola</p>
						</div>
						<div className='col-xs-6 col-sm-3 col-md-3 col-lg-3'>
							<img src='/api/icons/redux.png'/>
							<p className='text-icon-activity text-center'>Hola</p>
						</div>
						<div className='col-xs-6 col-sm-3 col-md-3 col-lg-3'>
							<img src='/api/icons/react.svg'/>
							<p className='text-icon-activity text-center'>Hola</p>
						</div>
						<div className='col-xs-6 col-sm-3 col-md-3 col-lg-3'>
							<img src='/api/icons/nodejs.png'/>
							<p className='text-icon-activity text-center'>Hola</p>
						</div>
						<div className='col-xs-6 col-sm-3 col-md-3 col-lg-3'>
							<img src='/api/icons/github.png'/>
							<p className='text-icon-activity text-center'>Hola</p>
						</div>
					</div>

					<h4 className='text-right'>Back-end</h4>

					<div className='row center-lg center-md center-sm center-xs'>
						<div className='col-xs-6 col-sm-3 col-md-3 col-lg-3'>
							<img src='/api/icons/nodejs.png'/>
							<p className='text-icon-activity text-center'>Node</p>
						</div>
						<div className='col-xs-6 col-sm-3 col-md-3 col-lg-3'>
							<img src='/api/icons/redux.png'/>
							<p className='text-icon-activity text-center'>Hola</p>
						</div>
					</div>

					<h4 className='text-center'>Primordial</h4>

					<div className='row center-lg center-md center-sm center-xs'>
						<div className='col-xs-6 col-sm-3 col-md-3 col-lg-3'>
							<img src='/api/icons/github.png'/>
							<p className='text-icon-activity text-center'>Github</p>
						</div>
					</div>
				</div>

				<div className='col-xs-10 col-sm-5 col-md-5 col-lg-5'>
					<div>
						<img src='/api/icons/anima.gif' />
						<h4 className='text-center'>Realizando un proyecto...</h4>
					</div>
				</div>
			</div>
		</div>
	}
}

export default Activity