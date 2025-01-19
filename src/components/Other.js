import React from 'react';

const Other = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className="section" id="other">
      <h2>Other</h2>
      <p>Some other information...</p>
    </div>
  );
});

export default Other;