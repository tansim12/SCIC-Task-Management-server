const Todo = require("../../model/To Do Model/todoModel");

const patchTodoComplete = async (req, res) => {
  try {
    const id = req.params._id;
    const newCategory = req.body.category;
    
    
    // Update the document using findByIdAndUpdate()
    const result = await Todo.findByIdAndUpdate(
      id, 
      { category: newCategory }, // Specify the field to be updated
      { new: true } // Set new: true to return the modified document
    );

    if (result) {
        
      res.send({success:true});
    } else {
      res.status(404).send("Document not found"); // Handle case where no matching document is found
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error"); // Handle other errors
  }
};

module.exports = patchTodoComplete;
