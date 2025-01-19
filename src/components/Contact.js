import React from 'react';

const Contact = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className="section" id="contact">
      <h2>Contact</h2>
      <p>You can contact me here...</p>
    </div>
  );
});

export default Contact;