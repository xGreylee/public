import React, { useState, useEffect }from 'react'
import './App.css';

const initialState = {
	input: '',
	hidden: Math.floor(Math.random() * 100),
	output: ''
}

function App(props) {
	const[input, setInput] = useState('')
	const [output, setOutput] = useState('')
	const [params, setParams] = useState(initialState)
	console.log(`params: ${JSON.stringify(params)}`)

	function handleSubmit(e) {
		const guessed = Number(input)
		if (guessed !== params.hidden) {
			if (guessed > params.hidden) {
				setOutput('大了')
			} else {
				setOutput('小了')
			}
		} else {
			setOutput('中了')
		}
		setParams({ ...params, input, output })
		e.preventDefault()
	}

	return(
		<div className="App">
			<header className="App-header">
				<div>
					<p>RESULT: {output}</p>
					<form onSubmit={handleSubmit}>
						<label>
							<input type="number" onChange={(e) => setInput(e.target.value)}></input>
						</label>
						<input type="submit" value="提交"></input>
						<input type="reset" value="重置" onClick={() => setParams({ input: setInput(''), hidden: Math.floor(Math.random() * 100), output: setOutput('') })}></input>
					</form>
				</div>
			</header>
		</div>
	)
}

export default App
