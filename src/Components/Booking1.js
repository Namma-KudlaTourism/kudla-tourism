import React, { useState } from 'react';
import '../Components/Booking1.css';

function Booking1() {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Booking confirmed for ${name} on ${date} at ${time}`);
  };

  return (
    <div className="booking-container">
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Date:
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        </label>
        <label>
          Time:
          <input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
        </label>
        <button type="submit">Confirm Booking</button>
      </form>
    </div>
  );
}

export default Booking1;
