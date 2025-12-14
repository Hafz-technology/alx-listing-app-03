// pages/index.tsx
import { PROPERTYLISTINGSAMPLE, HERO_BACKGROUND_IMAGE, FILTERS } from "@/constants";
import { PropertyProps } from "@/interfaces";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface PillProps {
  label: string;
  onClick?: () => void;
  isActive?: boolean;
}

const Pill: React.FC<PillProps> = ({ label, onClick, isActive }) => {
  return (
    <button
      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ease-in-out
        ${
          isActive
            ? "bg-blue-600 text-white"
            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
        }`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

interface PropertyCardProps {
  property: PropertyProps;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  const { name, image, price, rating, address, discount } = property;
  const originalPrice = price;
  const discountedPrice = discount
    ? price * (1 - parseInt(discount) / 100)
    : price;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
      <div className="relative w-full h-48">
        <Image
          src={image}
          alt={name}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
        {discount && (
          <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
            {discount}% OFF
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 truncate">
          {name}
        </h3>
        <p className="text-gray-500 text-sm mb-2">
          {address.city}, {address.country}
        </p>
        <div className="flex items-center mb-2">
          <span className="text-yellow-500 mr-1">★</span>
          <span className="text-gray-700 font-medium">{rating.toFixed(2)}</span>
          <span className="ml-auto text-xl font-bold text-gray-900">
            {discount ? (
              <>
                <span className="line-through text-gray-400 text-sm mr-1">
                  ${originalPrice}
                </span>
                ${discountedPrice.toFixed(0)}
              </>
            ) : (
              `$${originalPrice}`
            )}
          </span>
        </div>
        <Link
          href={`/properties/${name.toLowerCase().replace(/\s/g, "-")}`}
          className="block w-full text-center bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors duration-200"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

const Home: React.FC = () => {
  // In a real application, you'd manage filter state here
  const [activeFilter, setActiveFilter] = React.useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section
        className="relative h-[500px] bg-cover bg-center flex items-center justify-center text-center p-4"
        style={{ backgroundImage: `url(${HERO_BACKGROUND_IMAGE})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-white">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
            Find your favorite place here!
          </h1>
          <p className="text-xl md:text-2xl font-light">
            The best prices for over 2 million properties worldwide.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Explore by Category
        </h2>
        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
          {FILTERS.map((filter) => (
            <Pill
              key={filter}
              label={filter}
              onClick={() =>
                setActiveFilter(activeFilter === filter ? null : filter)
              }
              isActive={activeFilter === filter}
            />
          ))}
        </div>
      </section>

      {/* Listing Section */}
      <section className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Featured Properties
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {PROPERTYLISTINGSAMPLE.map((property) => (
            <PropertyCard key={property.name} property={property} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;