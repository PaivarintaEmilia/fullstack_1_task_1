import React, { useState } from 'react';

const LocationApi: React.FC = () => {

  // Luodaan uudet statet statukselle ja karttalinkille. (Huom määritä string typescriptin takia)
  const [status, setStatus] = useState<string>('');
  const [mapLink, setMapLink] = useState<string>('');

  const geoFindMe = () => {
    setStatus('Locating…');
    setMapLink('');

    // Haku ei onnistu
    if (!navigator.geolocation) {
      setStatus('Geolocation is not supported by your browser');
      return;
    }

    // Haku onnistuu
    const success = (position: GeolocationPosition) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      
      console.log(typeof(position.coords.latitude));
      console.log(position.coords.latitude);

      setStatus('Latitude is: ' + latitude + ' and longitude is: ' + longitude); // Näyttää vain objektit mutta ei pysty tulostamaan ja tarkistamaan?
      setMapLink(`https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`);
    };

    const error = () => {
      setStatus('Unable to retrieve your location');
    };

    navigator.geolocation.getCurrentPosition(success, error); // success ja error kuuluu getCurrentPosition-funktioob
  };

  return (
    <div>
      <button onClick={geoFindMe}>Show my location</button>
      <br />
      <p>{status}</p>
      {/*jos maplink on true niin näytetään linkki*/}
      {mapLink && (
        <a href={mapLink} target="_blank" rel="noopener noreferrer">
          {mapLink}
        </a>
      )}
    </div>
  );
};

export default LocationApi;
