class StudentController {
    index(req, res) {
      const data = {
        message: "Get All Student",
        data: [],
      };
  
      res.json(data);
    }
  
    store(req, res) {
      const { nama } = req.body;
      const data = {
        message: `Add Student ${nama}`,
        data: [],
      };
  
      res.json(data);
    }

    update(req, res){
        const { id } = req.params;
        const { nama } = req.body;
        const data = {
            message: `Edit Student id ${id}, name ${nama}`,
            data:[],
        };
        res.json(data);
    }
  
    destroy(req, res) {
      const { id } = req.params;
      const data = {
        message: `Delete Student id ${nama}`,
        data: [],
      };
  
      res.json(data);
    }
  }
  
  const studentController = new StudentController();
  module.exports = studentController;