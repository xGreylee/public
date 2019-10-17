import React, { useState, useEffect }from 'react'
import './App.css'

function App(props) {
	const[input, setInput] = useState('')
	const [output, setOutput] = useState('')
	const [hidden, setHidden] = useState(Math.floor(Math.random() * 100))

	console.log(`params: { input: ${input}, hidden: ${hidden}, output: ${output}}`)
	function handleSubmit(e) {
		const guessed = Number(input)
		if (guessed !== hidden) {
			if (guessed > hidden) {
				setOutput('大了')
			} else {
				setOutput('小了')
			}
		} else {
			setOutput('中了')
		}
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
						<input type="reset" value="重置" onClick={() => {
							setInput('')
							setHidden(Math.floor(Math.random() * 100))
							setOutput('')
						}}></input>
					</form>
				</div>
			</header>
		</div>
	)
}

export default App
