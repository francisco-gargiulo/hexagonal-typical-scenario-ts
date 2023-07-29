interface UserPort {
  getById(id: string): User;
  add(user: User): void;
}
