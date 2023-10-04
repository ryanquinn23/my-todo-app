export function handleError(err, setErrMsg) {
  if (err.response?.data?.message) {
    setErrMsg(err.response.data.message);
  } else {
    setErrMsg('Unknown error. Please try again later.');
  }
}
