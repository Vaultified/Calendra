"use client";

import Calendar from "@/components/Calendar";
import "./calendar.css";

export default function Home() {
  return (
    <div className="home-container">
      <header className="header">
        <h1>Calendra</h1>
        <p>Your Professional Calendar Management Solution</p>
      </header>

      <main>
        <Calendar />
      </main>

      <style jsx>{`
        .home-container {
          min-height: 100vh;
          padding: 2rem;
          background-color: #f8f9fa;
        }

        .header {
          text-align: center;
          margin-bottom: 2rem;
          padding-bottom: 1.5rem;
          border-bottom: 1px solid #eaeaea;
        }

        .header h1 {
          font-size: 2.5rem;
          color: #0066cc;
          margin-bottom: 0.5rem;
        }

        .header p {
          font-size: 1.1rem;
          color: #666;
        }
      `}</style>
    </div>
  );
}
