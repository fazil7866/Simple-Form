import React, { useEffect, useState } from 'react';

function Respondents() {
  const [formData, setFormData] = useState(null);

  useEffect(() => {
    const storedData = localStorage.getItem('formData');
    if (storedData) {
      setFormData(JSON.parse(storedData));
    }
  }, []);

  if (!formData) {
    return <div className="flex justify-center items-center h-screen">No data available</div>;
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-gray-100 p-8 rounded shadow-md">
        <h2 className="text-xl mb-4">Respondent Details</h2>
        <p><strong>Name:</strong> {formData.name}</p>
        <p><strong>Gender:</strong> {formData.gender}</p>
        <p><strong>Category:</strong> {formData.category}</p>
        <p><strong>Interests:</strong> {formData.interests.join(', ')}</p>
      </div>
    </div>
  );
}

export default Respondents;
