class Employee {
  speak() {
    return "Hi, I'm a " + this.type + " employee";
  }
}

class FullTimeEmployee extends Employee {
  constructor(data) {
    super();
    this.type = "full time";
    //....
  }
}

class PartTimeEmployee extends Employee {
  constructor(data) {
    super();
    this.type = "part time";
    //....
  }
}

class ContractorEmployee extends Employee {
  constructor(data) {
    super();
    this.type = "contractor";
    //....
  }
}

class MyEmployeeFactory {
  createEmployee(data) {
    if (data.type == "fulltime") return new FullTimeEmployee(data);
    if (data.type == "parttime") return new PartTimeEmployee(data);
    if (data.type == "contractor") return new ContractorEmployee(data);
  }
}
