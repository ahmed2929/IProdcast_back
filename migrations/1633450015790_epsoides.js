/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {

    pgm.sql(`
    CREATE TABLE epsoides (
        id SERIAL PRIMARY KEY,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        photo_url varchar(200),
        description varchar(250),
        duration numeric not null,
        title varchar(50) not null,
        episode_url varchar(250) not null ,
        chanel_id integer REFERENCES chanel(id) on delete cascade
        
      )



    `)


};

exports.down = pgm => {
    pgm.sql(`
    DROP TABLE episode;
    `)
};
