import { useEffect } from 'react';
import { preloadPriorityImages } from './utils/imagePreloader';

const ImagePreloader = () => {
  useEffect(() => {
    // Collect all priority images from your features
    const priorityImages = [
      // Digital Marketing features
      'https://res.cloudinary.com/dib9kutp6/image/upload/v1740060650/Projexino/n1jebmdbafekar5wfu7s.jpg',
      'https://res.cloudinary.com/dib9kutp6/image/upload/v1740060640/Projexino/wgnnsacoqvjc1p6btvni.jpg',
      'https://res.cloudinary.com/dib9kutp6/image/upload/v1740060635/Projexino/ovkurwmcxnek34wlzmfy.jpg',
      'https://res.cloudinary.com/dib9kutp6/image/upload/v1740060634/Projexino/dvxtrm1zl1t7ysgp3jbr.jpg',
      'https://res.cloudinary.com/dib9kutp6/image/upload/v1740058893/Projexino/ir2od7jmatgp4whf3eck.jpg',
      'https://res.cloudinary.com/dib9kutp6/image/upload/v1740058888/Projexino/ghx8n209flhce6ykuv7p.jpg',
      'https://res.cloudinary.com/dib9kutp6/image/upload/v1740058887/Projexino/e2zrzoeml0qjy2zupxmh.jpg',
      'https://res.cloudinary.com/dib9kutp6/image/upload/v1740058885/Projexino/jv0rnz25qgr9xaovwe2h.jpg',
      // Add other priority images here
    ];

    preloadPriorityImages(priorityImages);
  }, []);

  return null;
};

export default ImagePreloader;
