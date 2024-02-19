import React from 'react';
import NavSpace from '../components/NavSpace';

const About = () => {
  return (
    <div>
      <NavSpace />
      <div className="container mx-auto mt-8 flex flex-wrap items-center">
        {/* Left side - Text content */}
        <div className="w-full md:w-2/3 p-4">
          <h2 className="text-3xl font-bold mb-4">Welcome to SUBASTA</h2>

          {/* Mission and Vision */}
          <div className="mb-4">
            <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
            <p>Clearly define the purpose of your auction platform. What are you aiming to achieve?</p>
          </div>

          <div className="mb-4">
            <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
            <p>Share your long-term goals and aspirations for the platform.</p>
          </div>

          {/* Our Story */}
          <div className="mb-4">
            <h3 className="text-xl font-semibold mb-2">Our Story</h3>
            <p>Provide a brief history of how SUBASTA came into existence. Explain the core principles and values that inspired the creation of the platform. Highlight key milestones and achievements.</p>
          </div>

          {/* Team */}
          <div className="mb-4">
            <h3 className="text-xl font-semibold mb-2">Our Team</h3>
            <p>Introduce the founders and key team members, including their roles and expertise. Share the values that unite your team and drive the development of the platform.</p>
          </div>

          {/* Platform Features */}
          <div className="mb-4">
            <h3 className="text-xl font-semibold mb-2">Platform Features</h3>
            <p>Explain what sets SUBASTA apart from other auction platforms. Highlight unique features and innovations. Emphasize your commitment to providing a seamless and engaging experience for both buyers and sellers.</p>
          </div>

          {/* Community Engagement */}
          <div className="mb-4">
            <h3 className="text-xl font-semibold mb-2">Community Engagement</h3>
            <p>Include quotes or testimonials from satisfied users, sharing their positive experiences with SUBASTA. If applicable, mention any community or charity initiatives supported by SUBASTA.</p>
          </div>

          {/* Transparency and Trust */}
          <div className="mb-4">
            <h3 className="text-xl font-semibold mb-2">Transparency and Trust</h3>
            <p>Assure users of the platform's commitment to security and data protection. Highlight the transparent nature of bidding processes and transactions within SUBASTA.</p>
          </div>

          {/* Future Plans */}
          <div className="mb-4">
            <h3 className="text-xl font-semibold mb-2">Future Plans</h3>
            <p>Provide a glimpse into the exciting features or developments that users can look forward to in the future.</p>
          </div>

          {/* Contact Information */}
          <div className="mb-4">
            <h3 className="text-xl font-semibold mb-2">Contact Information</h3>
            <p>Provide contact details for customer support and encourage users to reach out with any questions or concerns.</p>
          </div>

          {/* Call to Action */}
          <div className="mt-8">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-full">Join the SUBASTA Community</button>
          </div>
        </div>

        {/* Right side - Photo */}
        {/* <div className="w-full md:w-1/3 p-4">
          <img src="path/to/your/photo.jpg" alt="SUBASTA Team" className="rounded-full h-auto w-full" />
        </div> */}
      </div>
    </div>
  );
};

export default About;