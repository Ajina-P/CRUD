import React, { useState } from 'react';
import './AddBrokerForm.css'; // Import the CSS file for styling
import { Link } from 'react-router-dom';
const AddBrokerForm = ({ onAdd }) => {
  const [brokerName, setBrokerName] = useState('');
  const [countryName, setCountryName] = useState('');
  const [website, setWebsite] = useState('');
  const [rank, setRank] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBroker = {
      brokerName,
      countryName,
      website,
      rank: parseInt(rank) || null
    };
    onAdd(newBroker);
    // Reset form fields
    setBrokerName('');
    setCountryName('');
    setWebsite('');
    setRank('');
  };

  return (
    <form onSubmit={handleSubmit} className="add-broker-form" style={{ borderColor: '#c3e6cb', color: '#155724' }}>
      <div className="form-group mt-5">
        <label htmlFor="brokerName">Broker Name:</label>
        <input type="text" className="form-control" id="brokerName" value={brokerName} onChange={(e) => setBrokerName(e.target.value)} required />
      </div>
      <div className="form-group">
        <label htmlFor="countryName">Country Name:</label>
        <input type="text" className="form-control" id="countryName" value={countryName} onChange={(e) => setCountryName(e.target.value)} required />
      </div>
      <div className="form-group">
        <label htmlFor="website">Website:</label>
        <input type="text" className="form-control" id="website" value={website} onChange={(e) => setWebsite(e.target.value)} />
      </div>
      <div className="form-group">
        <label htmlFor="rank">Rank:</label>
        <input type="number" className="form-control" id="rank" value={rank} onChange={(e) => setRank(e.target.value)} />
      </div>
      <button type="submit" className="btn btn-primary">Add Broker</button>
      <Link to={'/'}>
      <button type="submit" className="btn btn-primary" style={{marginLeft:'10px'}}>Close</button>
      </Link>
    </form>
  );
};

export default AddBrokerForm;

