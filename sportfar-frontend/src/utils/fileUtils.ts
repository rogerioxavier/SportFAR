export function findImageInAssets(image: string): string {
  const url = new URL(`../assets/images/${image}`, import.meta.url);

  console.log(image, url);

  return url.href;
}
