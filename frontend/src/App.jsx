
import "./index.css";

export default function App() {
  return (
    <div className="app">
      <aside className="sidebar">
        <h2>🌍 World Dashboard</h2>

        <nav>
          <a href="#">🏠 Dashboard</a>
          <a href="#">📰 News</a>
          <a href="#">🌦 Weather</a>
          <a href="#">🌋 Earthquakes</a>
          <a href="#">✈ Flights</a>
          <a href="#">🚢 Ships</a>
          <a href="#">🤖 AI Assistant</a>
          <a href="#">⚙ Settings</a>
        </nav>
      </aside>

      <main className="main">
        <header className="topbar">
          <h1>World Intelligence Dashboard</h1>

          <div className="status">
            🟢 Server Online
          </div>
        </header>

        <section className="cards">
          <div className="card">
            <h3>CPU</h3>
            <h1>0%</h1>
          </div>

          <div className="card">
            <h3>RAM</h3>
            <h1>0%</h1>
          </div>

          <div className="card">
            <h3>Disk</h3>
            <h1>0%</h1>
          </div>

          <div className="card">
            <h3>Network</h3>
            <h1>Online</h1>
          </div>
        </section>

        <section className="map">
          <h2>🌍 Interactive World Map</h2>

          <div className="placeholder">
            Map will appear here
          </div>
        </section>

        <section className="news">
          <h2>📰 Latest News</h2>

          <div className="placeholder">
            News feed coming soon...
          </div>
        </section>

        <section className="ai">
          <h2>🤖 AI Assistant</h2>

          <div className="placeholder">
            Local AI Assistant coming soon...
          </div>
        </section>
      </main>
    </div>
  );
}
