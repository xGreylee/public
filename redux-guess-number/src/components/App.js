import React from 'react'
import { connect } from 'react-redux'
import actions from '../redux/actions'
import '../App.css'

class App extends React.Component {
	constructor(props) {
		super(props)
		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleReset = this.handleReset.bind(this)
	}

	handleChange(event) {
		this.props.input_change(event.target.value)
	}

	handleSubmit(event) {
		console.log(`提交的数字：${JSON.stringify(this.props.input)}`)
		const guessed = Number(this.props.input)
		this.props.submit_guess(guessed)
		event.preventDefault()
	}

	handleReset() {
		this.props.reset_guess()
	}

	render() {
		console.log(`props: ${JSON.stringify(this.props)}`)
		const { input, output } = this.props
		return(
			<div className="App">
				<header className="App-header">
					<p>RESULT: {output}</p>
					<form onSubmit={this.handleSubmit}>
						<label>
							<input type="number" onChange={this.handleChange}></input>
						</label>
						<input type="submit" value="提交"></input>
						<input type="reset" value="重置" onClick={this.handleReset}></input>
					</form>
				</header>
			</div>
		)
	}
}

const mapStateToProps = state => {
	console.log(`state: ${JSON.stringify(state)}`)
	return { input: state.input, output: state.output }
}

export default connect(mapStateToProps, actions)(App)
