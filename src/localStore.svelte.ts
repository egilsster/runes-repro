export class LocalStore<T> {
  value = $state<T>() as T;
  key = "";

  constructor(key: string, value: T) {
    this.key = key;
    this.value = value;

    const item = localStorage.getItem(key);
    if (item) this.value = this.deserialize(item);

    $effect(() => {
      localStorage.setItem(this.key, this.serialize(this.value));
      console.log(this.key, this.value);
    });
  }

  private serialize(value: T): string {
    return JSON.stringify(value);
  }

  private deserialize(item: string): T {
    return JSON.parse(item) as T;
  }
}

export function localStore<T>(key: string, value: T) {
  return new LocalStore(key, value);
}
