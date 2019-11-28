function autoIncrement() {
  static let number = 0;
  number++;
  return number;
}