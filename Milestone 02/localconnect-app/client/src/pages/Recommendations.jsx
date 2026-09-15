import React, { useEffect, useState } from 'react';
import { createRecommendation, getRecommendations } from '../services/api';

const Recommendations = () => {
  const [recommendations, setRecommendations] = useState([]);
  const [form, setForm] = useState({ title: '', description: '', category: '' });

  const fetchRecommendations = async () => {
    const { data } = await getRecommendations();
    setRecommendations(data);
  };

  useEffect(() => {
    const loadRecommendations = async () => {
      const { data } = await getRecommendations();
      setRecommendations(data);
    };
    loadRecommendations();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!form.title.trim() || !form.description.trim() || !form.category.trim()) return;
    await createRecommendation(form);
    setForm({ title: '', description: '', category: '' });
    fetchRecommendations();
  };

  return (
    <div>
      <h1 className="page-title">Local Recommendations</h1>
      <div className="card">
        <h2 className="card-title" style={{ marginBottom: '1rem' }}>Recommend a trusted local service</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input className="input-field" placeholder="Business or service name" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} style={{ marginBottom: '0.5rem' }} />
            <input className="input-field" placeholder="Category (for example, plumber)" value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} style={{ marginBottom: '0.5rem' }} />
            <textarea className="input-field" placeholder="Why do you recommend them?" rows="3" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} />
          </div>
          <button type="submit" className="btn-primary">Share Recommendation</button>
        </form>
      </div>
      <div className="grid">
        {recommendations.map((recommendation) => (
          <article className="card" key={recommendation.id}>
            <span className="badge status-blue">{recommendation.category}</span>
            <h2 className="card-title" style={{ marginTop: '0.75rem' }}>{recommendation.title}</h2>
            <p className="card-description">{recommendation.description}</p>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Recommendations;