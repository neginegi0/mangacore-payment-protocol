Mangacore Payment Protocol
=======

[![NPM Package](https://img.shields.io/npm/v/mangacore-payment-protocol.svg?style=flat-square)](https://www.npmjs.org/package/mangacore-payment-protocol)
[![Build Status](https://img.shields.io/travis/bitpay/mangacore-payment-protocol.svg?branch=master&style=flat-square)](https://travis-ci.org/bitpay/mangacore-payment-protocol)
[![Coverage Status](https://img.shields.io/coveralls/bitpay/mangacore-payment-protocol.svg?style=flat-square)](https://coveralls.io/r/bitpay/mangacore-payment-protocol)

A module for [mangacore](https://github.com/bitpay/mangacore) that implements [Payment Protocol](https://github.com/mangacoin/bips/blob/master/bip-0070.mediawiki) and other related BIPs.

## Getting Started

This library is distributed in both the npm and bower packaging systems.

```sh
npm install mangacore-lib
npm install mangacore-payment-protocol
```

```sh
bower install mangacore-lib
bower install mangacore-payment-protocol
```

There are many examples of how to use it on the developer guide [section for payment protocol](https://mangacore.io/api/paypro). For example, the following code would verify a payment request:

```javascript
var PaymentProtocol = require('mangacore-payment-protocol');

var body = PaymentProtocol.PaymentRequest.decode(rawbody);
var request = new PaymentProtocol().makePaymentRequest(body);

var version = pr.get('payment_details_version');
var pki_type = pr.get('pki_type');
var pki_data = pr.get('pki_data');
var serializedDetails = pr.get('serialized_payment_details');
var signature = pr.get('signature');

// Verify the signature
var verified = request.verify();
```

## Contributing

See [CONTRIBUTING.md](https://github.com/bitpay/mangacore/blob/master/CONTRIBUTING.md) on the main mangacore repo for information about how to contribute.

## License

Code released under [the MIT license](https://github.com/bitpay/mangacore/blob/master/LICENSE).

Copyright 2013-2015 BitPay, Inc. Mangacore is a trademark maintained by BitPay, Inc.
