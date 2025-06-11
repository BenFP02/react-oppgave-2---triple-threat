import { useEffect, useState } from "react";

function CatFacts() {
  const [facts, setFacts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchFacts = async () => {
    setLoading(true);
    setError(null);

    try {
      const factPromises = Array.from({ length: 5 }).map(() =>
        fetch("https://catfact.ninja/fact").then((res) => {
          if (!res.ok) throw new Error("Failed to fetch a fact");
          return res.json();
        })
      );

      const factResponses = await Promise.all(factPromises);
      const newFacts = factResponses.map((response) => response.fact);

      setFacts(newFacts);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFacts();
  }, []);

  return (
    <div className="widget-card">
      <h2>Cat Facts</h2>
      <button onClick={fetchFacts}>Get New Facts</button>
      <div className="cat-facts-list">
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {!loading && !error && (
          <ul>
            {facts.map((fact, index) => (
              <li key={index}>{fact}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default CatFacts;
