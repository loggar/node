// before node v10
try {
  // do stuff
} catch (err) {
  if (err.message === 'Expected error message') {
    // handle specific error
  } else {
    // general error handler
  }
}

// node v10
try {
  // do stuff
} catch (err) {
  if (err.code === 'ERR_ERROR_CODE') {
    // handle specific error
  } else {
    // general error handler
  }
}
