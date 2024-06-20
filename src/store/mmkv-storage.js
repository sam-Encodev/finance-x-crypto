import { MMKV } from "react-native-mmkv";

const storage = new MMKV({
  id: "balance-storage",
});

export const zustandStorage = {
  setItem: (name, value) => {
    return storage.set(name, value);
  },
  getItem: (name) => {
    const value = storage.getString(name);
    return value ?? null;
  },
  removeItem: (name) => {
    return storage.delete(name);
  },
};

export const listener = storage.addOnValueChangedListener(
  (changedKey = "user.name") => {
    // const newValue = storage.getString(changedKey);
    const newValue = zustandStorage.getItem(changedKey);
    console.log(`"${changedKey}" new value: ${newValue}`);
  }
);
