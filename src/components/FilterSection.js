import React from 'react'
import { useState } from 'react';

function Filtersection() {
    const [searchTerm, setSearchTerm] = React.useState('');
    const categories = ['Electronics', 'Clothing', 'Home & Kitchen', 'Beauty', 'Sports'];
  
    const filteredCategories = categories.filter((category) =>
      category.toLowerCase().includes(searchTerm.toLowerCase())
    );
  return (
    <aside className="w-full md:w-64 p-4 bg-white shadow-md">
      {/* Sort By Section */}
      <div className="mb-6">
        <h3 className="text-lg font-medium mb-2">Sort By</h3>
        <select className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600">
          <option value="relevance">Relevance</option>
          <option value="low-to-high">Price: Low to High</option>
          <option value="high-to-low">Price: High to Low</option>
          <option value="newest">Newest Arrivals</option>
        </select>
      </div>

      {/* Search Bar for Categories */}
      <div className="mb-6">
        <h3 className="text-lg font-medium mb-2">Category</h3>
        <input
          type="text"
          placeholder="Search Categories"
          className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Category List */}
      <div>
        <h3 className="text-lg font-medium mb-2">Categories</h3>
        <ul className="space-y-2">
          {filteredCategories.map((category, index) => (
            <li key={index}>
              <label className="flex items-center">
                <input type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600" />
                <span className="ml-2 text-sm">{category}</span>
              </label>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
 

export default Filtersection