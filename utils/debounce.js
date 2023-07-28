export const debounce = (callback, delay) => {
  let timer = null;
  return () => {
    if (timer !== null) clearTimeout(timer);
    timer = setTimeout(callback, delay);
  };
};
