# Unhandled Promise Rejection in Asynchronous Express.js Route Handler

This repository demonstrates a common error in Node.js asynchronous programming: unhandled promise rejections.  The error occurs when an asynchronous operation within an Express.js route handler throws an exception, but it's not properly caught. The solution demonstrates how to handle such errors gracefully.

## Bug

The `bug.js` file contains an Express.js server with a route handler that simulates an asynchronous operation.  This operation randomly throws an error.  If the error occurs, it is not caught, resulting in an unhandled promise rejection. 

## Solution

The `bugSolution.js` file shows how to fix this issue by using a `try...catch` block within the asynchronous operation to handle potential errors.  Additionally, an error handler is added to the Express.js app to catch errors that might occur during request processing.