import { Link } from 'react-router-dom'
import { delPost } from '../helpers/getTodos'
import { type TTask } from '../types/types'
import style from './style.module.css'
export function Task({ id, title }: TTask) {
	return (
		<>
			<div key={id} className={style.Wrapper}>
				<p>{title}</p>
				<div className={style.btn}>
					<Link to={`/${id}`}>Edit</Link>
					<button
						onClick={() => {
							delPost(id)
						}}
					>
						Del
					</button>
				</div>
			</div>
		</>
	)
}
