interface StorageData {
  value: any;
  error: boolean;
}

class Service {
  getStorage = (key: string): StorageData => {
    const storedValue = localStorage.getItem(key);

    if (storedValue === null) {
      return {
        value: '',
        error: true
      };
    }

    return {
      value: JSON.parse(storedValue),
      error: false
    };
  };

  setStorage = (key: string, value: any): StorageData => {
    localStorage.setItem(key, JSON.stringify(value));

    return this.getStorage(key);
  };

  deleteStorage = (key: string): StorageData => {
    const value = this.getStorage(key);

    localStorage.removeItem(key);

    return value;
  };
}

export const LocalStorageService = new Service();
