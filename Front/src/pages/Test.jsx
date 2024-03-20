import React, { useEffect, useState } from 'react';

function App() {
  const [imageData, setImageData] = useState(null);

  useEffect(() => {
    const fetchImage = async () => {
      const username = '875844788186152';
      const password = 'GKLR2hUoxsu9yXLdN2ikTl-xCh8';
      const url = 'https://api.cloudinary.com/v1_1/du6daxdwb/resources/image';

      try {
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Authorization': 'Basic ' + btoa(username + ':' + password)
          }
        });

        if (response.ok) {
          const data = await response.json();
          setImageData(data);
        } else {
          console.error('Failed to fetch image');
        }
      } catch (error) {
        console.error('Error fetching image:', error);
      }
    };

    fetchImage();
  }, []);

  return (
    <div>
      {imageData ? (
        <img src={imageData.url} alt="Cloudinary Image" />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
