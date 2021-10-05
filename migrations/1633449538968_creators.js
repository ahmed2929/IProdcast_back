/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
    pgm.sql(`
    CREATE TABLE creators (
        id SERIAL PRIMARY KEY,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        email varchar(40),
        password varchar(200),
        status varchar(15)
      )



    `)
};

exports.down = pgm => {
    pgm.sql(`
    DROP TABLE creators;
    `)
};
