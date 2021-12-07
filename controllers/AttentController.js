const db = require("../models/index");
const sendMail = require("../services/sendMail");

const Attendances = db.sequelize.models.Attendances;

const CreateAttendanceCrontroller = async (req, res, next) => {
  const { firstName, lastName, email, country, phone, jobPosition } = req.body;
  if (!firstName || !lastName || !email || !country || !phone || !jobPosition) {
    res.status(400).json({ message: "Todos los campos deben ser completados" });
  } else {
    const CreateAttendance = await Attendances.create(
      { firstName, lastName, email, country, phone, jobPosition },
      {
        attributes: [firstName, lastName, email, country, phone, jobPosition],
        validation: true,
      }
    );
    const subject = "Invitación a CX financiero webinar";
    const text = `
    <h2>¡Muchas gracias ${firstName} por tu interes en participar!</h2>
    <div class="text-author">
				           	<p><a href="http://www.zoom.com" style="padding: 10px 15px;
                            display: inline-block;
                            border-radius: 5px;
                            background: #17bebb;
                            color: #ffffff;">Entrar al webinar</a></p>
                  </div>`;
    sendMail(email, subject, text);
    res.status(201).json({ message: "Ok", data: CreateAttendance });
  }
};

module.exports = { CreateAttendanceCrontroller };
