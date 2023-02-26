const Student = require("../models/student.js");
const getStudent = (req, res, next) => {
  Student.find((err, students) => {
    if (err) {
      console.log("error:", err);
    } else {
      res.json({ titleMe: "les listes des student", students });
    }
  });
};

// const saveStudent = (req, res, next) => {
//    Student.findOne({name: req.body.name}, (err, std)=> {
//     // std === null => save() && "already exist"
//       if (std === null){
//         var student = new Student({
//           Name: req.body.name,
//           Age: req.body.age,
//           Note:req.body.note
//         });
//         student.save()
//       }else{
//          console.log("already");
//       };
//    } );
// };

const saveStudent = (req, res, next) => {
  new Student({
    Name: req.body.name,
    Age: req.body.age,
    Note: req.body.note,
  }).save((err, newStudent) => {
    if (err) console.log("un message d'erreur " + err);
    else {
      console.log(newStudent);
      res.json("Student: " + newStudent + "added successfully !!");
    }
  });
};

const deleteStudent = (req, res, next) => {
  const id = req.params.id;
  Student.findByIdAndDelete(id, (err, students) => {
    console.log(students);

    res.redirect("/student");
  });
};

const deleteStudentName = ((req,res,next)=>{
  const name = req.params.name;
  Student.findOneAndRemove({Name:name},(err,student)=>{
    if(err) console.log("there's an error :"+err); else{res.json(student.Name+" deleted successfully !!")}
  })
})
//methode 1
// const updateStudent = (req, res, next) => {
//   const studentId = req.params.id;
//   console.log("Updating contact with ID:", studentId);
//   console.log("New contact data:", req.body);

//   Student.findByIdAndUpdate(
//     studentId,
//     { Name: req.body.name, Age: req.body.age },
//     { new: true },
//     (err, updateStudent) => {
//       if (err) {
//         console.log("Error updating student:", err);
//         res.status(500).json({ error: "Could not update student." });
//       } else {
//         console.log("Updated contact:", updateStudent);
//         res.json(updateStudent);
//       }
//     }
//   );
// };

const updateStudent = (req, res, next) => {
  Student.findOne({
    Name: req.body.name,
  }).then((result) => {
    (result.Age = req.body.age), (result.Name = req.body.name) ,(result.Note = req.body.note)
    result
      .save()
      .then((s) => res.status(201).send(s.Name + "  updated successully"))
      .catch((err) => res.status(404).send("error!?"));
  });
};

const searchStudent = (req, res, next) => {
  Student.findById(req.params.id, (err, students) => {
    res.json(students);
  });
};

const searchStudentByName = (req, res, next) => {
  console.log("detail", req.params.name);
  Student.find({ Name: req.params.name }, (err, students) => {
    res.json(students);
  });
};

const displayAge = (req, res, next) => {
  Student.find({ Age: { $gt: 18 } }, (err, students) => {
    if (err) console.log("error:" + err);
    else {
      res.json(students);
    }
  });
};

const displayStudent = (req, res, next) => {
  Student.updateMany(
    { Age: { $gt: 18 } } && { Name: {$regex: "/^A/"} },{$inc:{Note:2}},
    (err, students) => {
      if (err) console.log("error:" + err);
      else {
        res.json(students);
      }
    }
  );
};

const studentsNoteSorted = (req,res,next)=>{
  Student.find({Note:{$gt:10}}).sort({Name:'-1'}).then(
      f => res.status(201).send(f)
  ).catch((err)=>res.status(404).send(err));
}


module.exports = {
  getStudent,
  saveStudent,
  deleteStudent,
  updateStudent,
  searchStudent,
  searchStudentByName,
  displayAge,
  displayStudent,
  deleteStudentName,
  studentsNoteSorted
};
