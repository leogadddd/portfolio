export const calculateReadTimeFromHTML = (html: string) => {
  // Strip HTML tags using a regular expression
  const text = html.replace(/<\/?[^>]+(>|$)/g, "").trim();
  // Split the text by spaces and count the number of words
  const words = text.split(/\s+/).length;
  // Define the average reading speed in words per minute
  const wordsPerMinute = 200;
  // Calculate the read time in minutes, rounded up
  const readTimeInMinutes = Math.ceil(words / wordsPerMinute);
  return readTimeInMinutes;
};

export function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "") // Remove non-alphanumeric characters except spaces and hyphens
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/-+/g, "-"); // Remove multiple consecutive hyphens
}
