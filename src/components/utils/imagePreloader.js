const preloadImage = (src) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
};

export const preloadPriorityImages = async (images) => {
  try {
    await Promise.all(images.map(src => preloadImage(src)));
  } catch (error) {
    console.error('Error preloading images:', error);
  }
};
