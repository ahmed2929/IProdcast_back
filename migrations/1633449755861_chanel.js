/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
    pgm.sql(`
    CREATE TABLE chanel (
        id SERIAL PRIMARY KEY,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        photo_url varchar(200),
        description varchar(250),
        creator_id integer REFERENCES creators(id) on delete cascade,
        title varchar(250)
      )



    `)
};

exports.down = pgm => {
    pgm.sql(`
    DROP TABLE chanel;
    `)
};
