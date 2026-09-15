import React, { useState, useEffect } from 'react';
import { getMetrics } from '../services/api';

const Dashboard = () => {
  const [metrics, setMetrics] = useState({
    totalPosts: 0,
    totalIssues: 0,
    totalEvents: 0,
    totalRecommendations: 0
  });

  useEffect(() => {
    const fetchMetrics = async () => {
      try {
        const { data } = await getMetrics();
        setMetrics(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMetrics();
  }, []);

  return (
    <div>
      <div className="hero-section" style={{marginBottom: '3rem'}}>
        <h1 className="page-title" style={{marginBottom: '0.5rem'}}>Welcome to LocalConnect</h1>
        <p className="card-description" style={{fontSize: '1.2rem'}}>A simple place to stay informed and connected with your neighbors.</p>
      </div>
      
      <div className="card">
        <h2 className="card-title" style={{marginBottom: '1.5rem'}}>Community Activity Overview</h2>
        <div className="metrics-grid">
          <div className="metric-card">
            <span className="metric-value">{metrics.totalPosts}</span>
            <span className="metric-label">Total Posts</span>
          </div>
          <div className="metric-card">
            <span className="metric-value">{metrics.totalIssues}</span>
            <span className="metric-label">Issues Reported</span>
          </div>
          <div className="metric-card">
            <span className="metric-value">{metrics.totalEvents}</span>
            <span className="metric-label">Community Events</span>
          </div>
          <div className="metric-card">
            <span className="metric-value">{metrics.totalRecommendations}</span>
            <span className="metric-label">Local Recommendations</span>
          </div>
        </div>
      </div>
      <div className="card">
        <h2 className="card-title">Make your neighborhood easier to navigate</h2>
        <p className="card-description">Share an update, report a local issue, join an event, or recommend a trusted service.</p>
      </div>
    </div>
  );
};

export default Dashboard;
