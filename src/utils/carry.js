export default function carry(func) {
  return function carried(...args) {
    if (args.length >= func.length) return func.apply(this, args);
    return function (...args2) {
      return carried.apply(this, [...args, ...args2]);
    };
  }
}
