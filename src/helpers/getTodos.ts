import axios from 'axios'

export async function getTodos() {
	const data = await axios
		.get('https://65f668a941d90c1c5e0ac7e2.mockapi.io/users')
		.then(res => res.data)

	return data
}
export async function delPost(id: string) {
	await axios.delete(`https://65f668a941d90c1c5e0ac7e2.mockapi.io/users/${id}`)
}
