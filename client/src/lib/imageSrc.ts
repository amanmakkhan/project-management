export const getImageSrc = (imagePath?: string | null) => {
  if (!imagePath) return "";

  if (imagePath.startsWith("http://") || imagePath.startsWith("https://")) {
    return imagePath;
  }

  return `/${imagePath.replace(/^\/+/, "")}`;
};
