import React from "react";

const About = () => {
    return (
        <div className="about-container">
            <h2 className="text-2xl font-bold mb-4">About Book Vibe</h2>
            <p className="mb-2">
                Book Vibe is your go-to platform for tracking your reading journey. Whether you're looking to manage your reading list, keep track of what you've read, or discover new books, we've got you covered!
            </p>
            <p className="mb-2">
                Our mission is to promote reading and help you discover books that resonate with you. With features like read lists, wishlists, and pages to read, you can easily keep your literary goals in check.
            </p>
            <h3 className="text-xl font-semibold mb-2">Features:</h3>
            <ul className="list-disc pl-5 mb-2">
                <li>Track your read books and wishlist</li>
                <li>Visualize your reading progress with charts</li>
                <li>Discover new books based on your preferences</li>
            </ul>
            <p>
                Join us on this exciting reading adventure and take your reading to the next level!
            </p>
        </div>
    );
};

export default About;
