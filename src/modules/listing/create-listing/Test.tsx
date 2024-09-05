import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const MapSearch = () => {
  const [address, setAddress] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [location, setLocation] = useState({ lat: 10.762622, lng: 106.660172 }); // Default location: Ho Chi Minh City

  // Function to handle the search input
  const handleSearch = (event) => {
    const input = event.target.value;
    setAddress(input);

    // Use Google Places API to get suggestions
    if (input.length > 3) {
      const service = new window.google.maps.places.AutocompleteService();
      service.getPlacePredictions({ input, componentRestrictions: { country: 'vn' } }, (predictions, status) => {
        if (status === window.google.maps.places.PlacesServiceStatus.OK) {
          setSuggestions(predictions);
        }
      });
    }
  };

  // Function to handle selection from suggestions
  const handleSelect = (suggestion) => {
    const placeService = new window.google.maps.places.PlacesService(document.createElement('div'));

    placeService.getDetails({ placeId: suggestion.place_id }, (result, status) => {
      if (status === window.google.maps.places.PlacesServiceStatus.OK) {
        setLocation({
          lat: result.geometry.location.lat(),
          lng: result.geometry.location.lng(),
        });
        setAddress(result.formatted_address);
        setSuggestions([]);
      }
    });
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <div className="relative">
        <input
          type="text"
          value={address}
          onChange={handleSearch}
          className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500"
          placeholder="Tên đường và số nhà"
        />
        {suggestions.length > 0 && (
          <ul className="absolute bg-white border border-gray-300 w-full mt-1 rounded-md z-10">
            {suggestions.map((suggestion) => (
              <li
                key={suggestion.place_id}
                onClick={() => handleSelect(suggestion)}
                className="p-2 cursor-pointer hover:bg-gray-200"
              >
                {suggestion.description}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="mt-4">
        <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY" libraries={['places']}>
          <GoogleMap
            mapContainerStyle={{ height: '400px', width: '100%' }}
            center={location}
            zoom={15}
          >
            <Marker position={location} />
          </GoogleMap>
        </LoadScript>
      </div>
    </div>
  );
};

export default MapSearch;
