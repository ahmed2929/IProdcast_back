/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {

    pgm.sql(`
    CREATE TABLE views (
        id SERIAL PRIMARY KEY,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        user_id integer unique,
        episode_id integer references epsoides(id) on delete cascade
        
      )



    `)

};

exports.down = pgm => {
    pgm.sql(`
    DROP TABLE views;
    `)
};
