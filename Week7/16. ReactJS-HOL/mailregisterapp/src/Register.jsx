import React, { useState } from 'react';

const Register = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, password } = form;
    let errorMessage = '';

    if (name.length < 5) {
      errorMessage += 'Name must be at least 5 characters long.\n';
    }

    if (!email.includes('@') || !email.includes('.')) {
      errorMessage += 'Email must contain "@" and "."\n';
    }

    if (password.length < 8) {
      errorMessage += 'Password must be at least 8 characters long.\n';
    }

    if (errorMessage !== '') {
      alert('localhost:3000 says\n\n' + errorMessage);
    } else {
      alert(`localhost:3000 says\n\nThanks for registering!\n\nName: ${name}\nEmail: ${email}`);
      setForm({ name: '', email: '', password: '' });
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto' , paddingTop: '350px'}}>
      <h2 style={{color:"red" }}>Register Here</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label><br />
          <input type="text" name="name" value={form.name} onChange={handleChange} required />
        </div>
        <br />
        <div>
          <label>Email:</label><br />
          <input type="text" name="email" value={form.email} onChange={handleChange} required />
        </div>
        <br />
        <div>
          <label>Password:</label><br />
          <input type="password" name="password" value={form.password} onChange={handleChange} required />
        </div>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Register;
