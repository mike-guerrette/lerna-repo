import React from 'react';

export default function Button ({children}) {
  return (
    <button style={{color: 'blue'}} type="button">{children}</button>
  );
}
