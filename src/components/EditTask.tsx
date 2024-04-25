import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { TTask } from '../types/types'

export function EditTask() {
	const { id } = useParams()
	const navigate = useNavigate()

	const [data, setData] = useState<TTask>()
	const [editT, setEdit] = useState('')

	useEffect(() => {
		const fetch = async () => {
			const res = await axios.get(
				`https://65f668a941d90c1c5e0ac7e2.mockapi.io/users/${id}`
			)
			setData(res.data)
		}
		fetch()
	}, [id])

	const handleEdit = async () => {
		try {
			const res = await axios.put(
				`https://65f668a941d90c1c5e0ac7e2.mockapi.io/users/${id}`,
				{ title: editT }
			)
			setEdit(res.data.title)
			navigate('/')
		} catch (error) {
			console.error('Error editing task:', error)
		}
	}
	return (
		<>
			<Link to={'/'}>Back</Link>
			<div>
				{data?.id}:{' '}
				<textarea
					onChange={e => setEdit(e.target.value)}
					cols={30}
					rows={5}
					value={editT}
				>
					{data?.title}
				</textarea>
				<div>Ваша таска: [{editT}]</div>
			</div>

			<button onClick={handleEdit}>Save</button>
		</>
	)
}
