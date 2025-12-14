// pages/booking/index.tsx

import BookingForm from "@/components/booking/BookingForm";
import OrderSummary from "@/components/booking/OrderSummary";
import CancellationPolicy from "@/components/booking/CancellationPolicy";
import Head from 'next/head';

export default function BookingPage() {
  // Static data as required by the instructions
  const bookingDetails = {
    propertyName: "Villa Arrecife Beach House",
    price: 7500, // Price per night
    bookingFee: 65,
    totalNights: 3,
    startDate: "24 August 2024",
  };

  return (
    <>
      <Head>
        <title>Confirm Your Booking</title>
      </Head>
      <div className="container mx-auto p-4 sm:p-6 lg:p-12">
        {/* Main Content: Responsive Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Column 1: Booking Form and Policies (takes 2/3 width on large screens) */}
          <div className="lg:col-span-2">
            <BookingForm />
            <CancellationPolicy />
          </div>
          
          {/* Column 2: Order Summary (takes 1/3 width on large screens) */}
          <div className="lg:col-span-1">
            <OrderSummary bookingDetails={bookingDetails} />
          </div>

        </div>
      </div>
    </>
  );
}


