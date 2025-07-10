'use client';

import { cyberResources } from "./data/resources";
import './globals.css';

export default function Home() {
  return (
    <main className="hero-container">
      <div className="hero-text">
        <h1 className="title">Ultimate Cyber Starter Collection</h1>
        <p className="subtitle">Everything you need to launch your cybersecurity journey.</p>
      </div>

      <div className="button-grid">
        {cyberResources.map((res, index) => (
          <a
            key={index}
            href={res.url}
            target="_blank"
            rel="noopener noreferrer"
            className="resource-button"
          >
            <h3>{res.name}</h3>
            <p>{res.description}</p>
            <span className="category">{res.category}</span>
          </a>
        ))}
      </div>
    </main>
  );
}
