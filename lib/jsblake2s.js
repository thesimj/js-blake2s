'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
 * Copyright (c) 2017, Bubelich Mykola
 * https://www.bubelich.com
 *
 * (｡◕‿‿◕｡)
 *
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice,
 * this list of conditions and the following disclaimer.
 *
 * Redistributions in binary form must reproduce the above copyright notice,
 * this list of conditions and the following disclaimer in the documentation
 * and/or other materials provided with the distribution.
 *
 * Neither the name of the copyright holder nor the names of its contributors
 * may be used to endorse or promote products derived from this software without
 * specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDER AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 * POSSIBILITY OF SUCH DAMAGE.
 */

/**
 * BLAKE2-S Initialization Vector
 *
 * @type {[number]}
 * @private
 */
var _BLAKE2S_IV = [0x6A09E667, 0xBB67AE85, 0x3C6EF372, 0xA54FF53A, 0x510E527F, 0x9B05688C, 0x1F83D9AB, 0x5BE0CD19];

/**
 * BLAKE2-S Message word schedule permutations for each round
 *
 * @type {[number]}
 * @private
 */
var _BLAKE2S_SIGMA = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 14, 10, 4, 8, 9, 15, 13, 6, 1, 12, 0, 2, 11, 7, 5, 3, 11, 8, 12, 0, 5, 2, 15, 13, 10, 14, 3, 6, 7, 1, 9, 4, 7, 9, 3, 1, 13, 12, 11, 14, 2, 6, 5, 10, 4, 0, 15, 8, 9, 0, 5, 7, 2, 4, 10, 15, 14, 1, 11, 12, 6, 8, 3, 13, 2, 12, 6, 10, 0, 11, 8, 3, 4, 13, 7, 5, 15, 14, 1, 9, 12, 5, 1, 15, 14, 13, 4, 10, 0, 7, 6, 3, 9, 2, 8, 11, 13, 11, 7, 14, 12, 1, 3, 9, 5, 0, 15, 4, 8, 6, 2, 10, 6, 15, 14, 9, 11, 3, 0, 8, 12, 2, 13, 7, 1, 4, 10, 5, 10, 2, 8, 4, 7, 6, 1, 5, 15, 11, 9, 14, 3, 12, 13, 0];

/**
 *  BLAKE2-S Implementation class
 */

var JSBlake2s = function () {
  /**
   * Create new instance of BLAKE2-S
   * With key and personalization
   * Salt should be max 8 byte long
   * Personalization should be max 8 byte long
   *
   * @param {number} digestLength
   * @param {Uint8Array|null} key
   * @param {Uint8Array|null} salt
   * @param {Uint8Array|null} personalization
   */
  function JSBlake2s() {
    var digestLength = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 32;
    var key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var salt = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    var personalization = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

    _classCallCheck(this, JSBlake2s);

    var keyLength = key ? key.length : 0;

    salt = salt ? [this._get32(salt, 0), this._get32(salt, 4)] : [0, 0];

    personalization = personalization ? [this._get32(personalization, 0), this._get32(personalization, 4)] : [0, 0];

    // Init context
    this._hash = [_BLAKE2S_IV[0] ^ this._get32([digestLength, keyLength, 0x01, 0x01], 0), _BLAKE2S_IV[1], _BLAKE2S_IV[2], _BLAKE2S_IV[3], _BLAKE2S_IV[4] ^ salt[0], _BLAKE2S_IV[5] ^ salt[1], _BLAKE2S_IV[6] ^ personalization[0], _BLAKE2S_IV[7] ^ personalization[1]];

    // Buffer block with 64 elements //
    this._block = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    this._pointer = 0;
    this._counter = 0;
    this._length = digestLength;

    // if key exists, make first round with key //
    if (keyLength > 0) {
      this.update(key);
      this._pointer = 64;
    }
  }

  /**
   * Update hash content with the given data
   *
   * @param {Uint8Array} data
   */


  _createClass(JSBlake2s, [{
    key: 'update',
    value: function update(data) {
      for (var i = 0; i < data.length; i++) {
        if (this._pointer === 64) {
          this._counter += this._pointer;
          this._compress(false);
          this._pointer = 0;
        }

        // copy input array to input block //
        this._block[this._pointer++] = data[i];
      }

      return this;
    }

    /**
     * Calculates the digest of all of the data passed to be hashed
     *
     * @return {Uint8Array}
     */

  }, {
    key: 'digest',
    value: function digest() {
      var result = new Uint8Array(this._length);

      this._counter += this._pointer;

      // Clear block //
      while (this._pointer < 64) {
        this._block[this._pointer++] = 0;
      }

      // Compress //
      this._compress(true);

      // Little-endian convert and store //
      for (var i = 0; i < this._length; i++) {
        result[i] = this._hash[i >> 2] >>> 8 * (i & 3);
      }

      return result;
    }

    /**
     * Cyclic right rotation
     *
     * @param {number} data
     * @param {number} shift
     * @return {number}
     * @private
     */

  }, {
    key: '_rotr',
    value: function _rotr(data, shift) {
      return data >>> shift ^ data << 32 - shift;
    }

    /**
     * Convert 4 bytes to Little-endian word
     *
     * @param {Array|Uint8Array} data
     * @param {number} index
     * @private
     */

  }, {
    key: '_get32',
    value: function _get32(data, index) {
      return data[index++] ^ data[index++] << 8 ^ data[index++] << 16 ^ data[index] << 24;
    }

    /**
     * BLAKE2-S gamma mixin function
     *
     * @param {[number]} result
     * @param {number} a
     * @param {number} b
     * @param {number} c
     * @param {number} d
     * @param {number} x
     * @param {number} y
     * @private
     */

  }, {
    key: '_gamma',
    value: function _gamma(result, a, b, c, d, x, y) {
      result[a] += result[b] + x;
      result[d] = this._rotr(result[d] ^ result[a], 16);

      result[c] += result[d];
      result[b] = this._rotr(result[b] ^ result[c], 12);

      result[a] += result[b] + y;
      result[d] = this._rotr(result[d] ^ result[a], 8);

      result[c] += result[d];
      result[b] = this._rotr(result[b] ^ result[c], 7);
    }

    /**
     * BLAKE2-S compression function
     *
     * @param {Boolean} isLast
     * @private
     */

  }, {
    key: '_compress',
    value: function _compress() {
      var isLast = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      var v = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; // Array with 16 elements
      var m = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; // Array with 16 elements
      var i = void 0;

      for (i = 0; i < 8; i++) {
        v[i] = this._hash[i];
        v[i + 8] = _BLAKE2S_IV[i];
      }

      v[12] ^= this._counter; // low 32 bits
      v[13] ^= this._counter / 0x100000000; // high 32 bits

      v[14] = isLast ? ~v[14] : v[14];

      // Get Little-endian words //
      for (i = 0; i < 16; i++) {
        m[i] = this._get32(this._block, i * 4);
      }

      // main iteration //
      for (i = 0; i < 10; i++) {
        this._gamma(v, 0, 4, 8, 12, m[_BLAKE2S_SIGMA[i * 16]], m[_BLAKE2S_SIGMA[i * 16 + 1]]);
        this._gamma(v, 1, 5, 9, 13, m[_BLAKE2S_SIGMA[i * 16 + 2]], m[_BLAKE2S_SIGMA[i * 16 + 3]]);
        this._gamma(v, 2, 6, 10, 14, m[_BLAKE2S_SIGMA[i * 16 + 4]], m[_BLAKE2S_SIGMA[i * 16 + 5]]);
        this._gamma(v, 3, 7, 11, 15, m[_BLAKE2S_SIGMA[i * 16 + 6]], m[_BLAKE2S_SIGMA[i * 16 + 7]]);
        this._gamma(v, 0, 5, 10, 15, m[_BLAKE2S_SIGMA[i * 16 + 8]], m[_BLAKE2S_SIGMA[i * 16 + 9]]);
        this._gamma(v, 1, 6, 11, 12, m[_BLAKE2S_SIGMA[i * 16 + 10]], m[_BLAKE2S_SIGMA[i * 16 + 11]]);
        this._gamma(v, 2, 7, 8, 13, m[_BLAKE2S_SIGMA[i * 16 + 12]], m[_BLAKE2S_SIGMA[i * 16 + 13]]);
        this._gamma(v, 3, 4, 9, 14, m[_BLAKE2S_SIGMA[i * 16 + 14]], m[_BLAKE2S_SIGMA[i * 16 + 15]]);
      }

      // update hash state //
      this._hash[0] ^= v[0] ^ v[8];
      this._hash[1] ^= v[1] ^ v[9];
      this._hash[2] ^= v[2] ^ v[10];
      this._hash[3] ^= v[3] ^ v[11];
      this._hash[4] ^= v[4] ^ v[12];
      this._hash[5] ^= v[5] ^ v[13];
      this._hash[6] ^= v[6] ^ v[14];
      this._hash[7] ^= v[7] ^ v[15];
    }
  }]);

  return JSBlake2s;
}();

// EXPORT //


if (typeof module !== 'undefined' && module.exports) {
  module.exports = JSBlake2s;
}
