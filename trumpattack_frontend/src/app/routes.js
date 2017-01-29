/**
 * Routes in the application.
 *
 * This is used by the menu. You can specify more routes here with different
 * types of permissions.
 *
 * Ex:
 * export const adminRoutes = [
 * 	{title: 'Users', url: '/users', paths: ['/users']}
 * 	...
 * ]
 *
 * ... and then switch menu items in the Menu component based on the user type.
 *
 * @type {Array}
 */
export const routes = [
	{title: 'Start', url: '/start', paths: ['/', '/start']},
	{title: 'About', url: '/about', paths: ['/about']}
];
