load("mjs_number.js");

function assertIsObject(c, val, ac) {
   if (typeof ac !== "object") {
      c.outcome = false;
      c.error = "The type of '" + val + "' was '" + typeof ac + "' while 'object' was expected.";
      return false;
   }
   return true;
}

function assertIsArray(c, val, ac) {
   if (typeof ac !== "array") {
      c.outcome = false;
      c.error = "The type of '" + val + "' was '" + typeof ac + "' while 'array' was expected.";
      return false;
   }
   return true;
}

function assertIsEqual(c, val, ac, ex) {
   if (ac !== ex) {
      c.outcome = false;
      c.error = "The '" + val + "' was '" + JSON.stringify(ac) + "' while '" + JSON.stringify(ex) + "' was expected.";
      return false;
   }
   return true;
}

function assertIsNotEqual(c, val, ac, ex) {
   if (ac === ex) {
      c.outcome = false;
      c.error = "The '" + val + "' was '" + JSON.stringify(ac) + "' while not expected.";
      return false;
   }
   return true;
}

function assertIsApproxEqual(c, val, ac, ex, eps) {
   if (eps === undefined) {
      eps = Number.EPSILON;
   }
   if (Math.abs(ac - ex) > eps) {
      c.outcome = false;
      c.error = "The '" + val + "' was '" + JSON.stringify(ac) + "' while " + JSON.stringify(ex) + " +- " + JSON.stringify(eps) + "' was expected.";
      return false;
   }
   return true;
}

function assertIsNaN(c, val, ac) {
   if (!isNaN(ac)) {
      c.outcome = false;
      c.error = "The '" + val + "' was '" + JSON.stringify(ac) + "' while NaN was expected.";
      return false;
   }
   return true;
}

function assertIsNotNaN(c, val, ac) {
   if (isNaN(ac)) {
      c.outcome = false;
      c.error = "The '" + val + "' was NaN while non-NaN was expected.";
      return false;
   }
   return true;
}
