const Save = require("../models/saveSchema");

exports.saveProgram = async (req, res, next) => {
  const { fullCode } = req.body;

  try {
    // Update or create the program
    const savedCode = await Save.findOneAndUpdate(
      { "fullCode.title": fullCode.title },
      { $set: { fullCode } },
      { upsert: true, new: true }
    );

    res.status(201).json({
      success: true,
      message: "Code Successfully saved",
      url: savedCode._id,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error Saving code",
      error,
    });
  }
};

exports.getProgram = async (req, res, next) => {
  const { urlId } = req.body;
  try {
    const existingCode = await Save.findById(urlId);
    if (!existingCode) {
      return res.status(404).json({
        success: false,
        message: "Code Not Found",
      });
    }
    return res.status(200).json({
      success: true,
      message: "Code Found",
      fullCode: existingCode.fullCode,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error Getting code",
      error,
    });
  }
};

exports.getAllPrograms = async (req, res, next) => {
  try {
    const allPrograms = await Save.find();
    const formattedPrograms = allPrograms.map((program) => ({
      _id: program._id, // Include the _id as url
      fullCode: program.fullCode,
    }));
    res.status(200).json({
      success: true,
      programs: formattedPrograms,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error fetching programs",
      error,
    });
  }
};

exports.deleteProgram = async (req, res, next) => {
  const { projectId } = req.params; // Get the project ID from the URL parameters

  try {
    const deletedProgram = await Save.findByIdAndDelete(projectId); // Find and delete by ID

    if (!deletedProgram) {
      return res.status(404).json({
        success: false,
        message: "Project Not Found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Project Deleted Successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error Deleting Project",
      error,
    });
  }
};
