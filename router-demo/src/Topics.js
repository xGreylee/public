import React from "react"
import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom"

function ListItems(props) {
	return <li><Link to={{ pathname: `/topics/${props.value}`, state: { hidden: props.hidden }}}>{props.value}</Link></li>
}

function Topic(props) {
	console.log(`props: ${JSON.stringify(props)}`)
	const guessed = props.location.state.guessed ? props.location.state.guessed : props.match.params.topicId
	const hidden = props.location.state.hidden
	if (guessed && hidden) {
		if (guessed !== hidden) {
			if (guessed > hidden) {
				return <div>
					<h3>大了</h3>
				</div>
			}
			if (guessed < hidden) {
				return <div>
					<h3>小了</h3>
				</div>
			}
		}
		return <div>
			<h3>中了</h3>
		</div>
	}
	return <div>
		<h3>Please select a topic.</h3>
	</div>
}

class Topics extends React.Component {
	constructor(props) {
		super(props)
		this.state = { value: '', hidden: Math.floor(Math.random() * 100) }
		this.handleChange = this.handleChange.bind(this)
		this.handleReset = this.handleReset.bind(this)
	}

	handleChange(event) {
		this.setState({ value: event.target.value })
	}

	handleReset() {
		this.setState({ value: '', hidden: Math.floor(Math.random() * 100) })
	}

	render() {
		const topics = [25, 50, 75]
		const { hidden } = this.state
		const listItems = topics.map((topic) => 
			<ListItems key={topic.toString()} value={topic} hidden={ hidden } />
		)

		return (
			<div>
				<div className="middle">
					<h2>Topics</h2>
					<ul>
						{listItems}
					</ul>
					<Link to={{ pathname: `/topics/${this.state.value}`, state: { guessed: `${this.state.value}`, hidden }}}>
						<form>
							<label>
								<input type="number" value={this.state.value} onChange={this.handleChange}></input>
							</label>
							<input type="submit" value="提交"></input>
							<input type="reset" value="重置" onClick={this.handleReset}></input>
						</form>
					</Link>
				</div>
				<div className="right">
					<Route path={`/topics/:topicId`} component={Topic}/>
				</div>
			</div>
		)
	}
}

export default withRouter(Topics)