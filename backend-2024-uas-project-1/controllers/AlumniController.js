// import Model Alumni
const Alumni = require('../models/Alumni');

// buat class AlumniController
class AlumniController {
  // buat fungsi
  getAll(req, res) {
    Alumni.getAll((err, results) => {
      if (err) {
        return res.status(500).json({ message: 'Error retrieving data', error: err });
      }
      res.status(200).json({ message: 'Get All Resource', data: results });
    });
  }

  //menambahakan data ke database
  async store(req, res) {
    await Alumni.create(req.body, (alumni) => {
      const data = {
        message: "Menambahkan data alumni",
        data: alumni,
      };

      res.json(data);
    });
  }

  //update data berdasarkan ID
  async update(req, res) {
    const { id } = req.params;

    await Alumni.updateById(id, req.body, (result) => {
      const data = {
        message: result.affectedRows > 0 ? "Memperbarui data alumni" : "Data tidak ditemukan",
      };

      res.json(data);
    });
  }

  //menghapus data berdasarkan ID
  async destroy(req, res) {
    const { id } = req.params;

    await Alumni.deleteById(id, (result) => {
      const data = {
        message: result.affectedRows > 0 ? "Menghapus data alumni" : "Data tidak ditemukan",
      };

      res.json(data);
    });
  }

  //search detail data berdasarkan ID
  async show(req, res) {
    const { id } = req.params;

    await Alumni.getById(id, (alumni) => {
      const data = {
        message: alumni ? "Detail data alumni" : "Data tidak ditemukan",
        data: alumni || null,
      };

      res.json(data);
    });
  }

  //search data berdasarkan nama
  async search(req, res) {
    const { name } = req.params;

    await Alumni.searchByName(name, (results) => {
      const data = {
        message: results.length > 0 ? "Hasil pencarian alumni" : "Data tidak ditemukan",
        data: results,
      };

      res.json(data);
    });
  }

   //get data berdasarkan status fresh graduate
   async getFreshGraduates(req, res) {
    await Alumni.findByStatus('fresh-graduate', (results) => {
      const data = {
        message: results.length > 0 ? "Daftar alumni fresh graduate" : "Data tidak ditemukan",
        total: results.length,
        data: results,
      };

      res.json(data);
    });
  }

  //get data berdasarkan status employed
  async getEmployed(req, res) {
    await Alumni.findByStatus('employed', (results) => {
      const data = {
        message: results.length > 0 ? "Daftar alumni employed" : "Data tidak ditemukan",
        total: results.length,
        data: results,
      };

      res.json(data);
    });
  }

  //get data berdasarkan status unemployed
  async getUnemployed(req, res) {
    await Alumni.findByStatus('unemployed', (results) => {
      const data = {
        message: results.length > 0 ? "Daftar alumni unemployed" : "Data tidak ditemukan",
        total: results.length,
        data: results,
      };

      res.json(data);
    });
  }
}

// membuat object AlumniController
const object = new AlumniController();

// export object AlumniController
module.exports = object;
