import sgMail from '@sendgrid/mail';

export default async function handler(req, res) {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const message = {
        to: process.env.EMAIL_TO,
        from: process.env.EMAIL_SENDER,
        replyTo: req.body.replyTo,
        subject: `${req.body.topic} - ${req.body.subject}`,
        text: req.body.content,
        html: req.body.content
    };
    sgMail
        .send(message)
        .then(() => {
            res.status(200).json({ status: 'OK' });
        })
        .catch((err) => {
            res.status(400).json({ status: err });
        });
}
