'use strict';

/**
 * kennisbank service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::kennisbank.kennisbank');
