import "client-only";

type StoredItem<T> = {
  value: T;
  expires: number;
};

export function getLocalStorage<T>(key: string, defaultValue: T) {
  const stickyValue = localStorage.getItem(key);
  const now = new Date();

  if (stickyValue == null || stickyValue == "undefined") {
    return defaultValue;
  }

  const item = JSON.parse(stickyValue) as StoredItem<T>;
  if (now.getTime() > item.expires) {
    localStorage.removeItem(key);
    return defaultValue;
  }

  return item.value;
}

export function setLocalStorage<T>(key: string, value: T, exp: number) {
  const now = new Date();
  const item = { value: value, expires: now.getTime() + exp * 60 * 60 * 1000 };
  localStorage.setItem(key, JSON.stringify(item));
}
