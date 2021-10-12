const pool = require('../../database/config/index');
const { query } = require('../../database/config/index');
const format =require('pg-format')


class DB_CRUD {
  static async findAll(table_name,page_number,page_size) {
      try{
        const sql=format('SELECT * FROM %I LIMIT %L OFFSET %L',table_name,page_size,page_number*page_size)
        const { rows } = await pool.query(sql);
    
        return rows;

      }catch(e){
        console.log(e);
      }
   
  }

  static async findById(table_name,id) {
      try {
   
        const sql=format('SELECT * FROM %I WHERE id = %L',table_name,id)
        const { rows } = await pool.query(sql);
    
        return rows[0];
        

      } catch (error) {
        console.log(error);
      
          
      }
   
  }

  static async insert(table_name,data) {
    //format('INSERT INTO %I VALUES(%L)', 'tbl_test', 'test');
    // INSERT INTO %I %I RETURNING *
    try {
        const sql=format('INSERT INTO %I(%L) VALUES(%L) RETURNING *',table_name,data)
        const {rows} = await pool.query(sql);
    
        return rows[0];
        
    } catch (error) {
        console.log(error);
    }
   
  }

  static async update(table_name,data,id) {
      try {
     
        const sql=format('UPDATE %I SET %I WHERE id = %L RETURNING *',table_name,data,id);
        const {rows} = await pool.query(
            sql
        );
    
        return rows[0];

      } catch (error) {
            console.log(error);
          
      }
     
  }

  static async delete(table_name,id) {
      try{
        const sql=format('DELETE FROM %I WHERE id = %L',table_name,id)
    const {
      rows,
    } = await pool.query(sql);

    return rows[0];
      }catch(e){
          console.log(e);
      }
      
  }

  static async count() {
    const { rows } = await pool.query('SELECT COUNT(*) FROM users;');

    return parseInt(rows[0].count);
  }
}

module.exports = DB_CRUD;