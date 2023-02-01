// This function handles undefined routes. 
// It creates a new Error object with a message that includes the requested URL,
// sets the response status code to 404, and calls the next middleware function with the error object.
const notFound = (req, res, next) => {
    //console.log(req); // for debugging
    const error = new Error(`Not found - ${req.url}`);
    res.status(404);
    next(error);
  };
  
  // This function is a global error handler.
  // It checks if the current status code is 200, if so, it sets it to 500, otherwise it uses the current status code.
  // It then sends a JSON response with the error message and stack trace.
  const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    res.status(statusCode);
    res.json({
      message: err.message,
      stack: process.env.NODE_ENV === 'production' ? null : err.stack,
    });
  };
  
  export { notFound, errorHandler };
  