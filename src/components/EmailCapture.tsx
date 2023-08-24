import React, { useState } from 'react';
// import './EmailCapture.css';

interface EmailCaptureProps {
  onSubmit: (email: string, firstName: string, lastName: string) => void;
}

const EmailCapture: React.FC<EmailCaptureProps> = ({ onSubmit }) => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Assuming you have a function to submit the data to your email capture tool
    onSubmit(email, firstName, lastName);
    // Show the "Thank you" message after submission
    setSubmitted(true);
  };

  return (
    <div className="wrapper">
    <div className="email-capture">
      {!submitted ? (
        <>
          <h2>Sign Up for Our Newsletter</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <button type="submit">Sign Up</button>
          </form>
        </>
      ) : (
        <p>Thank you for signing up!</p>
      )}
    </div>
    </div>
  );
};

export default EmailCapture;
