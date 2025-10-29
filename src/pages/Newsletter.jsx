import React from 'react';

function Newsletter() {
  
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the page from reloading
    alert('Thank you for subscribing!');
    // In a real app, you would send this to a server
  };

  return (
    <div>
      <h1 className="page-header">Newsletter</h1>
      <p>Sign up for the Robonity newsletter to get the latest news, project highlights, and tutorials sent straight to your inbox.</p>
      
      <form className="newsletter-form" onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Your Name" 
          required 
        />
        <input 
          type="email" 
          placeholder="Your Email Address" 
          required 
        />
        <button type="submit">Subscribe</button>
      </form>
    </div>
  );
}

export default Newsletter;