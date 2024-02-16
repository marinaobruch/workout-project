import Auth from '../components/screens/auth/auth'
import Home from '../components/screens/home/home'
import NewWorkout from '../components/screens/new-workout/new-workout'
import Profile from '../components/screens/profile/profile'

export const routes = [
	{
		path: '/',
		component: Home,
		auth: false
	},
	{
		path: '/auth',
		component: Auth,
		auth: false
	},
	{
		path: '/new-workout',
		component: NewWorkout,
		auth: true
	},
	{
		path: '/profile',
		component: Profile,
		auth: true
	} /* 
	{
		path: '/new-exercise',

		component: NewExercise,
		auth: true,
	},

	{
		path: '/workout/:id',

		component: SingleWorkout,
		auth: true,
	},
	{
		path: '/workouts',

		component: ListWorkouts,
		auth: true,
	},
	{
		path: '/exercise/:id',

		component: SingleExercise,
		auth: true,
	}, */
]
