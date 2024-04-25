import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Task } from '../components/Task'
import { getTodos } from '../helpers/getTodos'
import { TTask } from '../types/types'

export function PageTasks() {
	const { data } = useQuery({ queryKey: ['todos'], queryFn: getTodos })
	const navigate = useNavigate()
	const [inputValue, setInputValue] = useState('')
	// const ref = useRef(null)

	const add = async (e: any) => {
		try {
			e.preventDefault()
			await axios.post('https://65f668a941d90c1c5e0ac7e2.mockapi.io/users', {
				title: inputValue,
			})
			setInputValue('')
			navigate('/')
		} catch (e) {
			console.log(e)
		}
	}
	// Получение к элементу: аля getElementById
	// function log() {
	// 	if (!ref.current) return
	// 	ref.current.style.borderRadius = '100px'
	// }
	return (
		<>
			<h1>Tasks</h1>
			<form onSubmit={add}>
				<input
					// ref={ref}
					onChange={e => setInputValue(e.target.value)}
					type='text'
					value={inputValue}
					placeholder='enter task'
				/>
				<button type='submit'>Add task</button>
			</form>
			{/* <button>log</button> */}
			<hr />
			{data?.map((todo: TTask) => (
				<Task id={todo.id} key={todo.id} title={todo.title} />
			))}
		</>
	)
}
