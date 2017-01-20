"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

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
 * BLAKE2s Initialization Vector
 *
 * @type {[*]}
 * @private
 */
var _BLAKE2S_IV = [0x6A09E667, 0xBB67AE85, 0x3C6EF372, 0xA54FF53A, 0x510E527F, 0x9B05688C, 0x1F83D9AB, 0x5BE0CD19];

/**
 *  BLAKE2s Implementation class
 */

var JSBlake2s = function () {
  /**
   * Create new instance of BLAKE2s
   * With key and length
   *
   * @param {int} hashLength
   * @param {Uint8Array|null} key
   */
  function JSBlake2s() {
    var hashLength = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 32;
    var key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

    _classCallCheck(this, JSBlake2s);
  }

  /**
   * Update hash content with the given data
   *
   * @param {Uint8Array} data
   */


  _createClass(JSBlake2s, [{
    key: "update",
    value: function update(data) {}

    /**
     * Calculates the digest of all of the data passed to be hashed
     *
     * @return {Uint8Array}
     */

  }, {
    key: "digest",
    value: function digest() {
      return new Uint8Array(1);
    }
  }]);

  return JSBlake2s;
}();

exports.default = JSBlake2s;
module.exports = exports["default"];

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9qc2JsYWtlMnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1DQTs7Ozs7O0FBTUEsSUFBTSxjQUFjLENBQUMsVUFBRCxFQUFhLFVBQWIsRUFBeUIsVUFBekIsRUFBcUMsVUFBckMsRUFBaUQsVUFBakQsRUFBNkQsVUFBN0QsRUFBeUUsVUFBekUsRUFBcUYsVUFBckYsQ0FBcEI7O0FBRUE7Ozs7SUFHTSxTO0FBQ0o7Ozs7Ozs7QUFPQSx1QkFBeUM7QUFBQSxRQUE3QixVQUE2Qix1RUFBaEIsRUFBZ0I7QUFBQSxRQUFaLEdBQVksdUVBQU4sSUFBTTs7QUFBQTtBQUV4Qzs7QUFFRDs7Ozs7Ozs7OzJCQUtPLEksRUFBTSxDQUVaOztBQUdEOzs7Ozs7Ozs2QkFLUztBQUNQLGFBQU8sSUFBSSxVQUFKLENBQWUsQ0FBZixDQUFQO0FBQ0Q7Ozs7OztrQkFJWSxTIiwiZmlsZSI6ImpzYmxha2Uycy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTcsIEJ1YmVsaWNoIE15a29sYVxuICogaHR0cHM6Ly93d3cuYnViZWxpY2guY29tXG4gKlxuICogKO+9oeKXleKAv+KAv+KXle+9oSlcbiAqXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFJlZGlzdHJpYnV0aW9uIGFuZCB1c2UgaW4gc291cmNlIGFuZCBiaW5hcnkgZm9ybXMsIHdpdGggb3Igd2l0aG91dFxuICogbW9kaWZpY2F0aW9uLCBhcmUgcGVybWl0dGVkIHByb3ZpZGVkIHRoYXQgdGhlIGZvbGxvd2luZyBjb25kaXRpb25zIGFyZSBtZXQ6XG4gKlxuICogUmVkaXN0cmlidXRpb25zIG9mIHNvdXJjZSBjb2RlIG11c3QgcmV0YWluIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLFxuICogdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lci5cbiAqXG4gKiBSZWRpc3RyaWJ1dGlvbnMgaW4gYmluYXJ5IGZvcm0gbXVzdCByZXByb2R1Y2UgdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsXG4gKiB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyIGluIHRoZSBkb2N1bWVudGF0aW9uXG4gKiBhbmQvb3Igb3RoZXIgbWF0ZXJpYWxzIHByb3ZpZGVkIHdpdGggdGhlIGRpc3RyaWJ1dGlvbi5cbiAqXG4gKiBOZWl0aGVyIHRoZSBuYW1lIG9mIHRoZSBjb3B5cmlnaHQgaG9sZGVyIG5vciB0aGUgbmFtZXMgb2YgaXRzIGNvbnRyaWJ1dG9yc1xuICogbWF5IGJlIHVzZWQgdG8gZW5kb3JzZSBvciBwcm9tb3RlIHByb2R1Y3RzIGRlcml2ZWQgZnJvbSB0aGlzIHNvZnR3YXJlIHdpdGhvdXRcbiAqIHNwZWNpZmljIHByaW9yIHdyaXR0ZW4gcGVybWlzc2lvbi5cbiAqXG4gKiBUSElTIFNPRlRXQVJFIElTIFBST1ZJREVEIEJZIFRIRSBDT1BZUklHSFQgSE9MREVSIEFORCBDT05UUklCVVRPUlMgXCJBUyBJU1wiXG4gKiBBTkQgQU5ZIEVYUFJFU1MgT1IgSU1QTElFRCBXQVJSQU5USUVTLCBJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgVEhFXG4gKiBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZIEFORCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRVxuICogQVJFIERJU0NMQUlNRUQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBDT1BZUklHSFQgT1dORVIgT1IgQ09OVFJJQlVUT1JTIEJFXG4gKiBMSUFCTEUgRk9SIEFOWSBESVJFQ1QsIElORElSRUNULCBJTkNJREVOVEFMLCBTUEVDSUFMLCBFWEVNUExBUlksIE9SXG4gKiBDT05TRVFVRU5USUFMIERBTUFHRVMgKElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBQUk9DVVJFTUVOVCBPRlxuICogU1VCU1RJVFVURSBHT09EUyBPUiBTRVJWSUNFUzsgTE9TUyBPRiBVU0UsIERBVEEsIE9SIFBST0ZJVFM7IE9SIEJVU0lORVNTXG4gKiBJTlRFUlJVUFRJT04pIEhPV0VWRVIgQ0FVU0VEIEFORCBPTiBBTlkgVEhFT1JZIE9GIExJQUJJTElUWSwgV0hFVEhFUiBJTlxuICogQ09OVFJBQ1QsIFNUUklDVCBMSUFCSUxJVFksIE9SIFRPUlQgKElOQ0xVRElORyBORUdMSUdFTkNFIE9SIE9USEVSV0lTRSlcbiAqIEFSSVNJTkcgSU4gQU5ZIFdBWSBPVVQgT0YgVEhFIFVTRSBPRiBUSElTIFNPRlRXQVJFLCBFVkVOIElGIEFEVklTRUQgT0YgVEhFXG4gKiBQT1NTSUJJTElUWSBPRiBTVUNIIERBTUFHRS5cbiAqL1xuXG4vKipcbiAqIEJMQUtFMnMgSW5pdGlhbGl6YXRpb24gVmVjdG9yXG4gKlxuICogQHR5cGUge1sqXX1cbiAqIEBwcml2YXRlXG4gKi9cbmNvbnN0IF9CTEFLRTJTX0lWID0gWzB4NkEwOUU2NjcsIDB4QkI2N0FFODUsIDB4M0M2RUYzNzIsIDB4QTU0RkY1M0EsIDB4NTEwRTUyN0YsIDB4OUIwNTY4OEMsIDB4MUY4M0Q5QUIsIDB4NUJFMENEMTldO1xuXG4vKipcbiAqICBCTEFLRTJzIEltcGxlbWVudGF0aW9uIGNsYXNzXG4gKi9cbmNsYXNzIEpTQmxha2UycyB7XG4gIC8qKlxuICAgKiBDcmVhdGUgbmV3IGluc3RhbmNlIG9mIEJMQUtFMnNcbiAgICogV2l0aCBrZXkgYW5kIGxlbmd0aFxuICAgKlxuICAgKiBAcGFyYW0ge2ludH0gaGFzaExlbmd0aFxuICAgKiBAcGFyYW0ge1VpbnQ4QXJyYXl8bnVsbH0ga2V5XG4gICAqL1xuICBjb25zdHJ1Y3RvcihoYXNoTGVuZ3RoID0gMzIsIGtleSA9IG51bGwpIHtcblxuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSBoYXNoIGNvbnRlbnQgd2l0aCB0aGUgZ2l2ZW4gZGF0YVxuICAgKlxuICAgKiBAcGFyYW0ge1VpbnQ4QXJyYXl9IGRhdGFcbiAgICovXG4gIHVwZGF0ZShkYXRhKSB7XG5cbiAgfVxuXG5cbiAgLyoqXG4gICAqIENhbGN1bGF0ZXMgdGhlIGRpZ2VzdCBvZiBhbGwgb2YgdGhlIGRhdGEgcGFzc2VkIHRvIGJlIGhhc2hlZFxuICAgKlxuICAgKiBAcmV0dXJuIHtVaW50OEFycmF5fVxuICAgKi9cbiAgZGlnZXN0KCkge1xuICAgIHJldHVybiBuZXcgVWludDhBcnJheSgxKTtcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEpTQmxha2UycztcbiJdfQ==