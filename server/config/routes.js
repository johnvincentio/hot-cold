/**
 * Handle routing related tasks
 *
 * @module routes
 * @requires errors
 * @requires scoreRouter
 */

const scoreRouter = require('../api/score/score.router');

const errors = require('./errors');

module.exports = (app) => {
	app.use('/api/score', scoreRouter);

	app.use('*', (req, res) => {
		res.status(404).json({ message: 'Not Found' });
	});
	app.use(errors);
};
