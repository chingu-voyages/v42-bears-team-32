// This function takes in another function (fn) as a parameter
// and returns a new function that wraps the original function.
// The new function uses the `Promise.resolve()` method to execute the original function
// and it catches any errors that occur using the `.catch(next)` method.
export default function asyncHandler (fn) {
  return (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next)
  }
}
