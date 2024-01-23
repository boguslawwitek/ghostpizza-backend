'use strict';

/**
 * sauce-price service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::sauce-price.sauce-price');
