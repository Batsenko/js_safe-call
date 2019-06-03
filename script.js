function safeCall(f) {
  try {
    f();
      return true;
  }
  catch {
    return false;
  }
}

Function.prototype.safeCall = function(...args) {
  try {
    return this.apply(this, args);
  }
  catch (ex) {
    return null;
  }
}