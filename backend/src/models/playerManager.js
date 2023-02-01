/* eslint-disable camelcase */
const AbstractManager = require("./AbstractManager");

class ItemManager extends AbstractManager {
  constructor() {
    super({ table: "players" });
  }

  insert(player) {
    const {
      firstname,
      lastname,
      dob,
      nationality,
      position,
      number,
      url_image,
      favorite_team,
    } = player;
    return this.connection.query(
      `insert into ${this.table} (firstname, lastname, dob, nationality, position, number, url_image, favorite_team) values (?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        firstname,
        lastname,
        dob,
        nationality,
        position,
        number,
        url_image,
        favorite_team,
      ]
    );
  }

  findAll() {
    return this.connection.query(`select * from ${this.table}`);
  }

  findUserById(id) {
    return this.connection.query(`select * from ${this.table} where id = ?`, [
      id,
    ]);
  }

  update(player) {
    const {
      firstname,
      lastname,
      dob,
      nationality,
      position,
      number,
      url_image,
      favorite_team,
    } = player;
    return this.connection.query(
      `update into ${this.table} set firstname = ?, lastname = ?, dob = ?, nationality = ?, position = ?, number = ?, url_image = ?, favorite_team = ?`,
      [
        firstname,
        lastname,
        dob,
        nationality,
        position,
        number,
        url_image,
        favorite_team,
      ]
    );
  }

  delete(id) {
    return this.connection.query(`delete from ${this.table} where id = ?`, [
      id,
    ]);
  }
}

module.exports = ItemManager;
