// components/booking/CancellationPolicy.tsx

import React from 'react';

const CancellationPolicy: React.FC = () => (
  <div className="mt-6 border-t pt-6">
    <h2 className="text-2xl font-bold text-gray-800">Policies & Rules</h2>
    
    <div className="mt-4">
      <h3 className="text-xl font-semibold text-gray-700">Cancellation Policy</h3>
      <p className="mt-2 text-gray-600">
        **Free cancellation** before Aug 23. Cancel before check-in on Aug 24 for a partial refund.
      </p>
    </div>

    <div className="mt-6">
      <h3 className="text-xl font-semibold text-gray-700">Ground Rules</h3>
      <ul className="mt-2 text-gray-600 list-disc list-inside space-y-1">
        <li>Follow the house rules.</li>
        <li>Treat your Host’s home like your own.</li>
        <li>No smoking inside the property.</li>
        <li>Check-in time is after 3 PM.</li>
      </ul>
    </div>
  </div>
);

export default CancellationPolicy;


