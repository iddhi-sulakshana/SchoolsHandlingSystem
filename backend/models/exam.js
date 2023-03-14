const Joi = require("joi");
Joi.objectId = require("joi-objectId")(Joi);
const { model } = require("mongoose");
const examSchema = require("./schemas/exam");

const Exam = model("Exam", examSchema);
function validate(exam) {
  const schema = new Joi.object({
    student: Joi.objectId().required(),
    classe: Joi.objectId().required(),
    semester: Joi.number().min(1).max(20).required(),
    results: Joi.array()
      .items(
        Joi.object({
          subject: Joi.string().min(5).max(20).required(),
          marks: Joi.number().min(0).max(100).required(),
        })
      )
      .min(1)
      .required(),
  });
  const result = schema.validate(exam);
  if (result.error) return result.error.details[0].message;
  return null;
}

module.exports.Exam = Exam;
module.exports.validateExam = validate;
