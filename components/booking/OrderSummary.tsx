// components/booking/OrderSummary.tsx

import React from 'react';

// Define the expected shape of the booking details for TypeScript
interface BookingDetails {
  propertyName: string;
  price: number;
  bookingFee: number;
  totalNights: number;
  startDate: string;
}

interface OrderSummaryProps {
  bookingDetails: BookingDetails;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({ bookingDetails }) => {
  const { propertyName, price, bookingFee, totalNights, startDate } = bookingDetails;
  const grandTotal = price * totalNights + bookingFee; // Calculation added
  const subtotal = price * totalNights;

  // Helper function to format currency
  const formatCurrency = (amount: number) => `$${amount.toFixed(2)}`;

  return (
    <div className="bg-white p-8 shadow-2xl rounded-xl border border-gray-100 sticky top-4 h-fit">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Review Order Details</h2>

      {/* Property and Stay Info */}
      <div className="flex items-start border-b pb-6 mb-6">
        {/* Placeholder Image - use a proper image source in a real app */}
        
        <img 
          src="https://images.unsplash.com/photo-1582268611958-ab56027d5071?q=80&w=1950&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          alt="Property" 
          className="w-24 h-24 object-cover rounded-lg flex-shrink-0" 
        />
        <div className="ml-4 flex-grow">
          <h3 className="text-lg font-semibold text-gray-800">{propertyName}</h3>
          <p className="text-sm text-yellow-500 flex items-center mt-1">
            <span className="mr-1">⭐</span> 4.76 <span className="text-gray-500 ml-2">(345 reviews)</span>
          </p>
          <p className="text-sm text-gray-500 mt-2">
            **{startDate}** • **{totalNights} Nights**
          </p>
        </div>
      </div>

      {/* Price Breakdown */}
      <div className="space-y-3">
        <div className="flex justify-between text-gray-600">
          <p>{formatCurrency(price)} x {totalNights} nights</p>
          <p>{formatCurrency(subtotal)}</p>
        </div>
        <div className="flex justify-between text-gray-600">
          <p>Service Fee</p>
          <p>{formatCurrency(bookingFee)}</p>
        </div>
        <div className="flex justify-between pt-4 border-t-2 border-dashed">
          <p className="text-xl font-bold text-gray-800">Grand Total</p>
          <p className="text-xl font-bold text-gray-800">{formatCurrency(grandTotal)}</p>
        </div>
      </div>
      
      {/* Note/Disclaimer */}
      <p className="text-xs text-gray-400 mt-6 pt-4 border-t">
        Taxes and payment processing fees may apply. You will be charged upon clicking "Confirm & Pay".
      </p>
    </div>
  );
};

export default OrderSummary;


