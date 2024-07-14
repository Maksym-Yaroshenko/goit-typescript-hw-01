function merge<T extends Object, P extends Object>(objA: T, objB: P): T & P {
  return Object.assign(objA, objB);
}
