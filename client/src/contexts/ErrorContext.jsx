import PropTypes from 'prop-types';

import { createContext, useState } from 'react';

const ErrorContext = createContext(null);

const ErrorProvider = ({ children }) => {
  const [errMsg, setErrMsg] = useState('');

  return (
    <ErrorContext.Provider
      value={{
        errMsg,
        setErrMsg,
      }}
    >
      {children}
    </ErrorContext.Provider>
  );
};

ErrorProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { ErrorContext, ErrorProvider };
