'use strict';

/**
 * testcost service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::testcost.testcost');
