module.exports = {
  notFoundErroor(resource = '') {
    throw {
      httpStatus: 404,
      code: 'RESOURCE_NOT_FOUND',
      message: `The requested resource "${resource}" does not exist.`,
    };
  },
};
//by creating the errorService now, even though I only have one error, I allow easier scalability when adding new features to the app.
