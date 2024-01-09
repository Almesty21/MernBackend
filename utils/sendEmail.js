const nodemailer = require('nodemailer');

module.exports = async (email, subject, text) => {
	try {
		const transporter = nodemailer.createTransport({
			service: 'gmail',
			host: process.env.MAIL_HOST,
			port: Number(process.env.MAIL_PORT),
			secure: Boolean(process.env.MAIL_SECURE),
			auth: {
				user: process.env.MAIL_USER,
				pass: process.env.MAIL_PASS,
			},
			from: process.env.MAIL_USER,
		});

		await transporter.sendMail({
			from: process.env.MAIL_USER,
			to: email,
			subject: subject,
			text: text,
		});
		console.log('email sent successfully');
	} catch (error) {
		console.log('email not sent!');
		console.log(error);
		return error;
	}
};
