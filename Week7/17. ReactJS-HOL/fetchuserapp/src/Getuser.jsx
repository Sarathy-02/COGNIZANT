// src/Getuser.jsx
import React from 'react';

class Getuser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      person: null,
    };
  }

  async componentDidMount() {
    const url = "https://api.randomuser.me/";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ person: data.results[0], loading: false });
    console.log(data.results[0]);
  }

  render() {
    if (this.state.loading) {
      return <div>Loading user...</div>;
    }

    if (!this.state.person) {
      return <div>No user data found.</div>;
    }

    const { title, first } = this.state.person.name;
    const imageUrl = this.state.person.picture.large;

    return (
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <h3>{title} {first}</h3>
        <img src={imageUrl} alt="User" style={{ borderRadius: '50%', width: '150px' }} />
        
      </div>
    );
  }
}

export default Getuser;
