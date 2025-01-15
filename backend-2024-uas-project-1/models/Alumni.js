// import database
const db = require('../config/database');

// membuat class Alumni
class Alumni {
  // buat fungsi
  static all(callback) {
    const query = 'SELECT * FROM alumni';
    db.query(query, callback);
  }

  //search/cari data berdasarkan ID
  static getById(id, callback) {
    const query = 'SELECT * FROM alumni WHERE id = ?';
    db.query(query, [id], callback);
  }

  //menambahkan data ke database
  static async create(data, callback) {
    if (callback) {
      const query = `INSERT INTO alumni SET ?`;
      db.query(query, data, (err, results) => {
        if (err) return callback(err);

        const selectQuery = 'SELECT * FROM alumni WHERE id = ?';
        db.query(selectQuery, [results.insertId], (selectErr, selectResults) => {
          if (selectErr) return callback(selectErr);
          callback(null, selectResults[0]);
        });
      });
    } else {
      const query = `INSERT INTO alumni SET ?`;
      const insertId = await new Promise((resolve, reject) => {
        db.query(query, data, (err, results) => {
          if (err) return reject(err);
          resolve(results.insertId);
        });
      });

      return new Promise((resolve, reject) => {
        const selectQuery = 'SELECT * FROM alumni WHERE id = ?';
        db.query(selectQuery, [insertId], (err, results) => {
          if (err) return reject(err);
          resolve(results[0]);
        });
      });
    }
  }

  //update data berdasarkan ID
  static async updateById(id, data, callback) {
    if (callback) {
      const query = `UPDATE alumni SET ? WHERE id = ?`;
      db.query(query, [data, id], (err, results) => {
        if (err) return callback(err);

        const selectQuery = 'SELECT * FROM alumni WHERE id = ?';
        db.query(selectQuery, [id], (selectErr, selectResults) => {
          if (selectErr) return callback(selectErr);
          callback(null, selectResults[0]);
        });
      });
    } else {
      const query = `UPDATE alumni SET ? WHERE id = ?`;
      await new Promise((resolve, reject) => {
        db.query(query, [data, id], (err, results) => {
          if (err) return reject(err);
          resolve(results);
        });
      });

      return new Promise((resolve, reject) => {
        const selectQuery = 'SELECT * FROM alumni WHERE id = ?';
        db.query(selectQuery, [id], (err, results) => {
          if (err) return reject(err);
          resolve(results[0]);
        });
      });
    }
  }

  //menghapus data berdasarkan ID
  static delete(id, callback) {
    const query = 'DELETE FROM alumni WHERE id = ?';
    db.query(query, [id], callback);
  }

  //search detail data berdasarkan ID
  getDetail(req, res) {
    const { id } = req.params;
    Alumni.getById(id, (err, results) => {
      if (err) {
        return res.status(500).json({ message: 'Error retrieving data', error: err });
      }
      if (results.length === 0) {
        return res.status(404).json({ message: 'Resource not found' });
      }
      res.status(200).json({ message: 'Get Detail Resource', data: results[0] });
    });
  }

  //search data berdasarkan nama
  searchByName(req, res) {
    const { name } = req.params;
    Alumni.searchByName(name, (err, results) => {
      if (err) {
        return res.status(500).json({ message: 'Error retrieving data', error: err });
      }
      if (results.length === 0) {
        return res.status(404).json({ message: 'Resource not found' });
      }
      res.status(200).json({ message: 'Get Search Resource', data: results });
    });
  }

  //get data berdasarkan status fresh-graduate
  getFreshGraduate(req, res) {
    Alumni.findByStatus('fresh-graduate', (err, results) => {
      if (err) {
        return res.status(500).json({ message: 'Error retrieving data', error: err });
      }
      res.status(200).json({ 
        message: 'Get Fresh Graduate Resource', 
        total: results.length, 
        data: results 
      });
    });
  }

  //get data berdasarkan status employed
  getEmployed(req, res) {
    Alumni.findByStatus('employed', (err, results) => {
      if (err) {
        return res.status(500).json({ message: 'Error retrieving data', error: err });
      }
      res.status(200).json({ 
        message: 'Get Employed Resource', 
        total: results.length, 
        data: results 
      });
    });
  }

  //get data berdasarkan status unemployed
  getUnemployed(req, res) {
    Alumni.findByStatus('unemployed', (err, results) => {
      if (err) {
        return res.status(500).json({ message: 'Error retrieving data', error: err });
      }
      res.status(200).json({ 
        message: 'Get Unemployed Resource', 
        total: results.length, 
        data: results 
      });
    });
  }
}

// export class Alumni
module.exports = Alumni;
