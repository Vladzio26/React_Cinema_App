import React from "react";

const SortControl = ({ currentSort, handleSortChange }) => {
  return (
    <div className="flex items-center space-x-2">
      <label className="text-gray-700">Sort by:</label>
      <select
        value={currentSort}
        onChange={(e) => handleSortChange(e.target.value)}
        className="border rounded px-2 py-1"
      >
        <option value="null">----</option>
        <option value="releaseDate">Release Date</option>
        <option value="title">Title</option>
      </select>
    </div>
  );
};

export default SortControl;
