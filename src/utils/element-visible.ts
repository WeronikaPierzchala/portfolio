export const isElementVisible = (element: HTMLElement | null) => {
  if (!element) return false;

  const item = element.getBoundingClientRect();
  return item.top + item.height >= window.innerHeight && item.top - 190 < 0;
};
