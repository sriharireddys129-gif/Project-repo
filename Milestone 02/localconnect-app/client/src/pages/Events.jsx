import React, { useEffect, useState } from 'react';
import { createEvent, getEvents } from '../services/api';

const Events = () => {
  const [events, setEvents] = useState([]);
  const [form, setForm] = useState({ title: '', description: '', date: '', location: '' });

  const fetchEvents = async () => {
    const { data } = await getEvents();
    setEvents(data);
  };

  useEffect(() => {
    const loadEvents = async () => {
      const { data } = await getEvents();
      setEvents(data);
    };
    loadEvents();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!form.title.trim() || !form.date.trim() || !form.location.trim()) return;
    await createEvent(form);
    setForm({ title: '', description: '', date: '', location: '' });
    fetchEvents();
  };

  return (
    <div>
      <h1 className="page-title">Community Events</h1>
      <div className="card">
        <h2 className="card-title" style={{ marginBottom: '1rem' }}>Share an upcoming event</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input className="input-field" placeholder="Event name" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} style={{ marginBottom: '0.5rem' }} />
            <input className="input-field" placeholder="Date and time" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} style={{ marginBottom: '0.5rem' }} />
            <input className="input-field" placeholder="Location" value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} style={{ marginBottom: '0.5rem' }} />
            <textarea className="input-field" placeholder="What should neighbors know?" rows="2" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} />
          </div>
          <button type="submit" className="btn-primary">Add Event</button>
        </form>
      </div>
      <div className="grid">
        {events.map((event) => (
          <article className="card" key={event.id}>
            <h2 className="card-title">{event.title}</h2>
            <p className="card-description">{event.description}</p>
            <p className="timestamp">{event.date} · {event.location}</p>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Events;