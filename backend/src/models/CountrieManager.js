const AbstractManager = require("./AbstractManager");

class CountrieManager extends AbstractManager {
  constructor() {
    super({ table: "countries" });
  }

  insert(countries) {
    const data = countries.map((country) => [country.name, country.flag]);
    const placeHolder = ",(?, ?)";
    const dependance = data.flat();

    return this.connection.query(
      `INSERT INTO ${
        this.table
      } (name, flag) VALUES (?, ?) ${placeHolder.repeat(data.length - 1)}`,
      dependance
    );
  }

  findAll() {
    return this.connection.query(`SELECT * from ${this.table}`);
  }
}

module.exports = CountrieManager;
