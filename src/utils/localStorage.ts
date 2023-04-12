const storageMock = {
  length: 0,
  getItem() {
    return null;
  },
  setItem() {},
  removeItem() {},
  clear(): void {},
  key() {
    return null;
  },
} as Storage;

export class LocalStorage {
  static KEY = 'OMDB';
  __storage: Storage;

  constructor() {
    this.__storage = globalThis.localStorage || storageMock;
  }

  __makeKey(key: string) {
    return `${LocalStorage.KEY}__${key}`;
  }

  get(name: string): any {
    const data = this.__storage.getItem(this.__makeKey(name));
    return data ? JSON.parse(data) : undefined;
  }

  set(name: string, value: any): void {
    this.__storage.setItem(this.__makeKey(name), JSON.stringify(value));
  }

  remove(name: string): void {
    this.__storage.removeItem(this.__makeKey(name));
  }
}

export default new LocalStorage();
