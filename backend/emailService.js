const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

const sendAppointmentEmail = async (appointment) => {
  try {
    const { fullName, email, phone, service, doctor, appointmentDate, message } =
      appointment;

    const formattedDate = appointmentDate
      ? new Date(appointmentDate).toLocaleString("en-IN", {
          dateStyle: "full",
          timeStyle: "short",
        })
      : "Not provided";

    const { data, error } = await resend.emails.send({
      from: "AR Dental Clinic <onboarding@resend.dev>",
      to: [email],
      subject: "Appointment Request Received - AR Dental Clinic",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto;">
          <h2>AR Memorial Dental Care Centre</h2>

          <p>Dear <strong>${fullName}</strong>,</p>

          <p>
            Thank you for booking an appointment with AR Memorial Dental Care Centre.
          </p>

          <h3>Appointment Details</h3>

          <p><strong>Service:</strong> ${service}</p>
          <p><strong>Doctor:</strong> ${doctor}</p>
          <p><strong>Date:</strong> ${formattedDate}</p>
          <p><strong>Phone:</strong> ${phone}</p>

          ${
            message
              ? `<p><strong>Message:</strong> ${message}</p>`
              : ""
          }

          <p>
            Your appointment request has been received and is currently
            <strong>Pending</strong>.
          </p>

          <p>
            Our clinic will contact you to confirm the appointment.
          </p>

          <br />

          <p>Regards,<br />
          <strong>AR Memorial Dental Care Centre</strong></p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend email error:", error);
      return {
        success: false,
        error,
      };
    }

    console.log("Appointment email sent:", data?.id);

    return {
      success: true,
      data,
    };
  } catch (error) {
    console.error("Email service error:", error);

    return {
      success: false,
      error,
    };
  }
};

module.exports = {
  sendAppointmentEmail,
};