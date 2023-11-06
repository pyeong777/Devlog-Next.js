import "client-only";

export function getLocalStorage(key: string, defaultValue: any) {
  const stickyValue = localStorage.getItem(key);
  let now = new Date();
  if (stickyValue == null || stickyValue == "undefined") {
    return defaultValue;
  }

  const item = JSON.parse(stickyValue);
  if (now.getTime() > item.expires) {
    localStorage.removeItem(key);
    return defaultValue;
  }

  return item.value;
}

export function setLocalStorage(key: string, value: any, exp: number) {
  let now = new Date();
  const item = { value: value, expires: now.getTime() + exp * 60 * 60 * 1000 };
  localStorage.setItem(key, JSON.stringify(item));
}
