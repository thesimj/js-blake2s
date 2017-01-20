/**
 * Created by Mykola Bubelich
 * 2017-01-20
 */

import test from "tape";
import JSBlake2s from "../lib/jsblake2s";

/**
 * General Test
 */

test("Class 'JSBlake2s' should exists", tape => {
  "use strict";

  const blake = new JSBlake2s();

  tape.assert(blake instanceof JSBlake2s);

  tape.end();
});


test("Function 'update' should exists", tape => {
  "use strict";

  const blake = new JSBlake2s();

  tape.assert(typeof blake.update === "function");

  tape.end();
});

test("Function 'digest' should exists", tape => {
  "use strict";

  const blake = new JSBlake2s();

  tape.assert(typeof blake.digest === "function");

  tape.end();
});
