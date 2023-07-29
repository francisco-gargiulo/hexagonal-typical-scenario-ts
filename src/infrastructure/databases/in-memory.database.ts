class InMemoryDatabase<T> {
  private store: T[] = [];

  find(obj: Partial<T>): T | undefined {
    return this.store.find((item: any) => {
      for (const key in obj) {
        if (item[key] !== obj[key]) {
          return false;
        }
      }

      return true;
    });
  }

  findById(id: string): T | undefined {
    return this.store.find((item: any) => item.id === id);
  }

  filter(obj?: Partial<T>): T[] {
    if (!obj || Object.keys(obj).length === 0) {
      return this.store;
    }

    return this.store.filter((item: any) => {
      for (const key in obj) {
        if (item[key] !== obj[key]) {
          return false;
        }
      }

      return true;
    });
  }

  create(item: T): void {
    this.store.push(item);
  }

  update(id: string, item: T): T {
    const index = this.store.findIndex((item: any) => item.id === id);

    if (index === -1) {
      throw new Error("Item not found");
    }

    this.store[index] = item;
    return item;
  }

  delete(id: string): void {
    const index = this.store.findIndex((item: any) => item.id === id);

    if (index === -1) {
      throw new Error("Item not found");
    }

    this.store.splice(index, 1);
  }
}
