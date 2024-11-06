import { useEffect, useState } from 'react';
import { MetricsChart } from './components/MetricsChart';
import { processCSVData } from './utils/processData';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Process the CSV data here
    const processedData = processCSVData(csvData);
    setData(processedData);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          ALS Ice Bucket Challenge Impact Analysis
        </h1>
        
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <MetricsChart data={data} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Key Findings</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Peak viewership occurred in August 2014</li>
              <li>Over 500,000 daily views at campaign height</li>
              <li>Significant increase across all language versions</li>
              <li>Sustained interest for several months after</li>
            </ul>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Campaign Impact</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Raised over $115 million for ALS research</li>
              <li>Generated massive social media engagement</li>
              <li>Increased global awareness of ALS</li>
              <li>Created lasting impact on medical research funding</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;