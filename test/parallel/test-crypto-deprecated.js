'use strict';
const common = require('../common');
if (!common.hasCrypto)
  common.skip('missing crypto');

const assert = require('assert');
const crypto = require('crypto');
const tls = require('tls');

common.expectWarning('DeprecationWarning', [
  'crypto.Credentials is deprecated. Use tls.SecureContext instead.',
  'crypto.createCredentials is deprecated. Use tls.createSecureContext instead.'
]);

// Accessing the deprecated function is enough to trigger the warning event.
// It does not need to be called. So the assert serves the purpose of both
// triggering the warning event and confirming that the deprecated function is
// mapped to the correct non-deprecated function.
assert.strictEqual(crypto.Credentials, tls.SecureContext);
assert.strictEqual(crypto.createCredentials, tls.createSecureContext);
