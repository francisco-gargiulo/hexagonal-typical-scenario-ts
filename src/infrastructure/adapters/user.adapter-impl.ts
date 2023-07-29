class UserAdapterImpl implements UserPort {
  private database: InMemoryDatabase<User>;

  constructor() {
    this.database = new InMemoryDatabase<User>();
  }

  getById(id: string): User {
    const user = this.database.findById(id);

    if (!user) {
      throw new Error("User not found");
    }

    return user;
  }

  add(user: User): void {
    this.database.create(user);
  }
}
