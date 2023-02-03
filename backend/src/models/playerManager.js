/* eslint-disable camelcase */
const AbstractManager = require("./AbstractManager");

class PlayerManager extends AbstractManager {
  constructor() {
    super({ table: "players" });
  }

  findAllPlayers() {
    return this.connection.query(
      `select p.id_player, p.firstname, p.lastname, p.dob, p.position, p.number, p.url_image, p.favorite_team, p.id_country, c.flag, c.name from  ${this.table} as p inner join countries as c on p.id_country = c.id_country`
    );
  }

  insert(player) {
    const {
      firstname,
      lastname,
      dob,
      position,
      number,
      url_image,
      favorite_team,
      id_country,
    } = player;
    return this.connection.query(
      `insert into ${this.table} (firstname, lastname, dob, position, number, url_image, favorite_team, id_country) values (?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        firstname,
        lastname,
        dob,
        position,
        number,
        url_image,
        favorite_team,
        id_country,
      ]
    );
  }

  findAll() {
    return this.connection.query(`select * from ${this.table}`);
  }

  findUserById(id) {
    return this.connection.query(
      `select * from ${this.table} where id_player = ?`,
      id
    );
  }

  update(player) {
    const {
      firstname,
      lastname,
      dob,
      position,
      number,
      url_image,
      favorite_team,
      id_country,
      id,
    } = player;
    return this.connection.query(
      `update ${this.table} set firstname = ?, lastname = ?, dob = ?, position = ?, number = ?, url_image = ?, favorite_team = ?, id_country = ? where id_player = ?`,
      [
        firstname,
        lastname,
        dob,
        position,
        number,
        url_image,
        favorite_team,
        id_country,
        id,
      ]
    );
  }

  delete(id) {
    return this.connection.query(
      `delete from ${this.table} where id_player = ?`,
      id
    );
  }
}

module.exports = PlayerManager;
