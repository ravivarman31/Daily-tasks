import React, { useEffect, useState, useRef } from "react";

const PreviousSearchTracker = () => {
  const [search, setSearch] = useState("");

  const previousSearch = useRef("");

  useEffect(() => {
    previousSearch.current = search;
  }, [search]);

  return (
    <div>
      <h2>Previous Search Tracker</h2>

      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <h3>Current Search: {search}</h3>

      <h3>Previous Search: {previousSearch.current}</h3>
    </div>
  );
};

export default PreviousSearchTracker;