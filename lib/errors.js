'use strict';

var spec = {
  name: 'PaymentProtocol',
  message: 'Internal Error on mangacore-payment-protocol Module: {0}'
};

module.exports = require('mangacore-lib').errors.extend(spec);
