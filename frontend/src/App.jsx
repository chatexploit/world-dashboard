import { Routes, Route } from "react-router-dom";

function Page({ title }) {
  return (
    <div style={{ padding: "30px", color: "white" }}>
      <h1>{title}</h1>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Page title="Dashboard" />} />
      <Route path="/news" element={<Page title="News" />} />
      <Route path="/weather" element={<Page title="Weather" />} />
      <Route path="/earthquakes" element={<Page title="Earthquakes" />} />
      <Route path="/flights" element={<Page title="Flights" />} />
      <Route path="/ships" element={<Page title="Ships" />} />
      <Route path="/ai" element={<Page title="AI Assistant" />} />
      <Route path="/settings" element={<Page title="Settings" />} />
    </Routes>
  );
}
