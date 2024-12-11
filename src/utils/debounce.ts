export const debounce = (callback: () => void, wait = 100) => {
  let timeoutId: number | undefined = undefined;
  return () => {
    window.clearTimeout(timeoutId);
    timeoutId = window.setTimeout(() => {
      callback();
    }, wait);
  };
};
