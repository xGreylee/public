import React from 'react'
import { connect } from 'react-redux'
import actions from '../redux/actions'
import '../App.css'

class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = { value: '', hidden: Math.floor(Math.random() * 100), output: '' }
		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleReset = this.handleReset.bind(this)
	}

	handleChange(event) {
		this.setState({ value: event.target.value })
	}

	handleSubmit(event) {
		console.log(`提交的数字：${this.state.value}`)
		const guessed = Number(this.state.value)
		this.props.submit_guess(guessed)
		event.preventDefault()
	}

	handleReset() {
		this.setState({ value: '' })
		this.props.reset_guess()
	}

	render() {
		console.log(`props: ${JSON.stringify(this.props)}`)
		const { output } = this.props
		return(
			<div className="App">
				<header className="App-header">
					<p>{output}</p>
					<form onSubmit={this.handleSubmit}>
						<label>
							<input type="number" value={this.state.value} onChange={this.handleChange}></input>
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
}

export default connect(state => state, actions)(App)
