import React from 'react';

export default function Button ({children}) {
  return (
    <button style={{color: 'red'}} type="button">{children}</button>
  );
}
