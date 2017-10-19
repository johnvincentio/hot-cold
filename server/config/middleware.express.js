/**
 * Handle middleware related tasks
 *
 * @module middlewareExpress
 * @requires express
 * @requires morgan
 * @requires body-parser
 * @requires path
 * @requires mongoose
 * @requires express-handlebars
 * @requires cookie-parser
 * @requires serve-favicon
 * @requires logger
 * @requires passport
 * @requires passport-facebook
 */

const express = require('express');
const morgan = require('morgan');

const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');

const { logger } = require('./logger');

const listCookies = (req, res, next) => {
	logger.debug('Cookies: ', req.cookies); // Cookies that have not been signed
	logger.debug('Signed Cookies: ', req.signedCookies); // Cookies that have been signed
	next();
};

const logRequest = (req, res, next) => {
	const logObj = {
		time: new Date().toTimeString(),
		method: req.method,
		hostname: req.hostname,
		path: req.path,
		'content type': req.get('Content-Type'),
		query: JSON.stringify(req.query),
		body: JSON.stringify(req.body),
	};
	Object.keys(logObj).forEach(key => logger.debug(`request ${key}: ${logObj[key]}`));
	next();
};

module.exports = (app) => {
	mongoose.Promise = global.Promise;

	app.use(morgan('common', { stream: logger.stream }));

	app.use(express.static(path.resolve(__dirname, '../public')));

	app.use('/assets', express.static(path.resolve(__dirname, '../public/assets')));

	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: false }));

	app.use(cookieParser());

	app.all('*', logRequest);
	app.all('*', listCookies);
};
