import React from 'react';
import './App.css';

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
		if (guessed !== this.state.hidden) {
			if (guessed > this.state.hidden) {
				this.setState({ output: '大了' })
			}
			if (guessed < this.state.hidden) {
				this.setState({ output: '小了' })
			}
			event.preventDefault()
		} else {
			this.setState({ output: '中了' })
		}
	}

	handleReset() {
		this.setState({ value: '', hidden: Math.floor(Math.random() * 100), output: '' })
	}

	render() {
		return(
			<div className="App">
				<header className="App-header">
					<p>{this.state.output}</p>
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

export default App
