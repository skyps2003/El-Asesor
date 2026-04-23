import React, { createContext, useState, useEffect } from 'react';

export const sedesData = [
  {
    id: 'lima-surco',
    city: "LIMA",
    address: "Av. Cristóbal de Peralta Sur 1545 Dpto.1602 Valle Hermoso Santiago de Surco.",
    mapSrc: "https://maps.google.com/maps?q=-12.1158,-76.9744&t=&z=15&ie=UTF8&iwloc=&output=embed",
    coords: { lat: -12.1158, lng: -76.9744 }
  },
  {
    id: 'lima-cercado',
    city: "LIMA",
    address: "Av. Paseo de la República N° 291 Piso 15 Oficina 1501 Cercado Lima.",
    mapSrc: "https://maps.google.com/maps?q=-12.0553,-77.0360&t=&z=15&ie=UTF8&iwloc=&output=embed",
    coords: { lat: -12.0553, lng: -77.0360 }
  },
  {
    id: 'cusco',
    city: "CUSCO",
    address: "Urb. Los Nogales, calle Marcavalle Mz. N Lote 15, San Sebastian Cusco.",
    mapSrc: "https://maps.google.com/maps?q=-13.5300,-71.9300&t=&z=15&ie=UTF8&iwloc=&output=embed",
    coords: { lat: -13.5300, lng: -71.9300 }
  },
  {
    id: 'abancay',
    city: "ABANCAY",
    address: "Av. Ayacucho Mz B Lote 7 Urb. Patibamba Baja- Distrito y Provincia de Abancay – Apurimac.",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3877.2363340161983!2d-72.89287892472454!3d-13.643382873680467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x916d02d1b48ec62f%3A0x52eedf4869394f09!2sAv%20Ayacucho%2C%20Abancay%2003001%2C%20Per%C3%BA!5e0!3m2!1ses!2sbr!4v1776722870442!5m2!1ses!2sbr",
    coords: { lat: -13.6433, lng: -72.8928 }
  },
  {
    id: 'challhuahuacho',
    city: "CHALLHUAHUACHO",
    address: "Calle Coronel Francisco Bolognesi S/N – Plaza de Armas.",
    mapSrc: "https://maps.google.com/maps?q=-14.1160,-72.2660&t=&z=16&ie=UTF8&iwloc=&output=embed",
    coords: { lat: -14.1160, lng: -72.2660 }
  }
];

const getDistance = (lat1, lon1, lat2, lon2) => {
  const R = 6371;
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
};

export const LocationContext = createContext();

export const LocationProvider = ({ children }) => {
  const defaultSede = sedesData.find(sede => sede.id === 'abancay') || sedesData[0];
  const [selectedLocation, setSelectedLocation] = useState(defaultSede);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          let closest = defaultSede;
          let minDistance = Infinity;

          sedesData.forEach(sede => {
            const distance = getDistance(latitude, longitude, sede.coords.lat, sede.coords.lng);
            if (distance < minDistance) {
              minDistance = distance;
              closest = sede;
            }
          });

          setSelectedLocation(closest);
        },
        (error) => {
          console.warn("Geolocation not available or denied, using default location.", error);
        }
      );
    }
  }, []);

  return (
    <LocationContext.Provider value={{ sedesData, selectedLocation, setSelectedLocation }}>
      {children}
    </LocationContext.Provider>
  );
};
