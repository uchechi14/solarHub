// pages/africa-map.tsx
"use client";
import React, { useState } from "react";
import Head from "next/head";

// Define types for location data
interface Location {
  id: string;
  name: string;
  lat: number;
  lng: number;
}

// Sample African location data
const locations: Location[] = [
  { id: "ng", name: "Nigeria", lat: 9.082, lng: 8.6753 },
  { id: "za", name: "South Africa", lat: -30.5595, lng: 22.9375 },
  { id: "eg", name: "Egypt", lat: 26.8206, lng: 30.8025 },
  { id: "ke", name: "Kenya", lat: -1.2921, lng: 36.8219 },
  { id: "gh", name: "Ghana", lat: 7.9465, lng: -1.0232 },
  { id: "tz", name: "Tanzania", lat: -6.369, lng: 34.8888 },
  { id: "et", name: "Ethiopia", lat: 9.145, lng: 40.4897 },
  { id: "ma", name: "Morocco", lat: 31.7917, lng: -7.0926 },
  { id: "dz", name: "Algeria", lat: 28.0339, lng: 1.6596 },
  { id: "ci", name: "Côte d'Ivoire", lat: 7.54, lng: -5.5471 },
  { id: "ao", name: "Angola", lat: -11.2027, lng: 17.8739 },
  { id: "rw", name: "Rwanda", lat: -1.9403, lng: 29.8739 },
];

const AfricaMap: React.FC = () => {
  const [activeLocation, setActiveLocation] = useState<string | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

  // Convert geographic coordinates to SVG coordinates for the Africa map
  const coordsToSVG = (lat: number, lng: number): { x: number; y: number } => {
    // Africa-specific projection
    // Approximate bounds for Africa: lat (-35 to 38), lng (-18 to 52)
    const x = ((lng - -18) / (52 - -18)) * 100; // Convert to 0-100% for SVG
    const y = ((38 - lat) / (38 - -35)) * 100; // Convert to 0-100% for SVG
    return { x, y };
  };

  const handleMarkerHover = (locationId: string, event: React.MouseEvent) => {
    setActiveLocation(locationId);
    setTooltipPosition({ x: event.clientX, y: event.clientY });
  };

  const handleMarkerLeave = () => {
    setActiveLocation(null);
  };

  return (
    <>
      <Head>
        <title>Africa Map | My App</title>
        <meta
          name="description"
          content="Interactive Africa map with location markers"
        />
      </Head>

      <div className="relative h-screen w-full bg-black">
        {/* Map container */}
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Africa map */}
          <div className="relative w-full max-w-4xl">
            <svg
              viewBox="0 0 100 100"
              className="w-full"
              preserveAspectRatio="xMidYMid meet"
            >
              {/* This would be replaced with your actual Africa map SVG */}
              {/* For now using a placeholder rect */}
              <rect width="100" height="100" fill="transparent" />

              {/* Location markers */}
              {locations.map((location) => {
                const { x, y } = coordsToSVG(location.lat, location.lng);
                return (
                  <g key={location.id}>
                    {/* Marker ping animation */}
                    <circle
                      cx={x}
                      cy={y}
                      r="0.8"
                      fill="white"
                      className="animate-ping opacity-75"
                    />
                    {/* Marker */}
                    <circle
                      cx={x}
                      cy={y}
                      r="0.8"
                      fill="white"
                      stroke="white"
                      strokeWidth="0.2"
                      className="cursor-pointer"
                      onMouseEnter={(e) => handleMarkerHover(location.id, e)}
                      onMouseLeave={handleMarkerLeave}
                    />
                  </g>
                );
              })}
            </svg>
          </div>
        </div>

        {/* Tooltip */}
        {activeLocation && (
          <div
            className="absolute z-10 bg-gray-700 text-white px-4 py-2 rounded shadow-lg transition-opacity"
            style={{
              left: tooltipPosition.x + 10,
              top: tooltipPosition.y - 10,
            }}
          >
            {locations.find((loc) => loc.id === activeLocation)?.name}
          </div>
        )}
      </div>
    </>
  );
};

export default AfricaMap;
