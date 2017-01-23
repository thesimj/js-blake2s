# JS-Blake2s
Pure JavaScript BLAKE2s cryptographic hash function

## BLAKE2 — fast secure hashing
BLAKE2 is a cryptographic hash function faster than MD5, SHA-1, SHA-2, and SHA-3, yet is at least as secure as the latest standard SHA-3. BLAKE2 had been adopted by many projects due to its high speed, security, and simplicity.

BLAKE2 is specified in RFC 7693, and our code and test vectors are available on GitHub, licensed under CC0 (public domain-like). BLAKE2 is also described in the 2015 book The Hash Function BLAKE. 

## Specifications
- http://blake2.net/blake2.pdf original BLAKE2 documentation, which describes how we went from the SHA-3 finalist BLAKE to BLAKE2, how all the BLAKE2 versions work, and analyzes BLAKE2's performance and security.

- https://tools.ietf.org/html/rfc7693 is an RFC edited by Markku-Juhani O. Saarinen that provides a complete specification of BLAKE2b and BLAKE2s

## Usage

```js
// Import from libraty
import JSBlake2s from "js-blake2s";

// Create instance
const blake2s = new JSBlake2s()

// Update with some bytes in Uint8Array
blake2s.update(new Uint8Array(0x00,0x01,0x02,....));

const result = blake2s.digest();
// now result contains Uint8Array of hash //
 
// chained version
const result = new JSBlake2s().update(....data...).digest();

```

## to be continued...
