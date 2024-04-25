import { createBrowserRouter } from 'react-router-dom'
import { EditTask } from './components/EditTask'
import { PageTasks } from './page/PageTasks'

export const router = createBrowserRouter([
	{
		path: '/',
		Component: PageTasks,
	},
	{
		path: `/:id`,
		Component: EditTask,
	},
])
