import React, { useState } from 'react';

function LoginButton(props) {
  return <button onClick={props.onClick}>Login</button>;
}

function LogoutButton(props) {
  return <button onClick={props.onClick}>Logout</button>;
}

function GuestGreeting() {
  return (
    <div>
      <h2>Welcome, Guest!</h2>
      <p>Please sign in to book tickets.</p>
      <h3>Available Flights:</h3>
      <ul>
        <li>Flight A - Chennai to Bangalore</li>
        <li>Flight B - Mumbai to Delhi</li>
        <li>Flight C - Kolkata to Hyderabad</li>
      </ul>
    </div>
  );
}

function UserGreeting() {
  return (
    <div>
      <h2>Welcome, User!</h2>
      <p>You can now book your tickets.</p>
      <button>Book Ticket</button>
    </div>
  );
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  } else {
    return <GuestGreeting />;
  }
}

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginClick = () => setIsLoggedIn(true);

  const handleLogoutClick = () => setIsLoggedIn(false);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Ticket Booking App</h1>
      <Greeting isLoggedIn={isLoggedIn} />
      {isLoggedIn ? (
        <LogoutButton onClick={handleLogoutClick} />
      ) : (
        <LoginButton onClick={handleLoginClick} />
      )}
    </div>
  );
}
