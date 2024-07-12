// import React from "react";

const Contact = () => {
    return (
        <div className="contact-container">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p className="mb-2">
                We’d love to hear from you! Whether you have questions, feedback, or just want to say hello, feel free to reach out.
            </p>
            <h3 className="text-xl font-semibold mb-2">Contact Information:</h3>
            <ul className="list-disc pl-5 mb-2">
                <li>Email: support@bookvibe.com</li>
                <li>Phone: +1-234-567-8901</li>
            </ul>
            <h3 className="text-xl font-semibold mb-2">Follow Us:</h3>
            <ul className="list-disc pl-5 mb-2">
                <li>Twitter: @BookVibe</li>
                <li>Facebook: /BookVibe</li>
                <li>Instagram: @BookVibe</li>
            </ul>
            <p>
                Your feedback is invaluable in helping us improve our platform. Thank you for being a part of the Book Vibe community!
            </p>
        </div>
    );
};

export default Contact;
