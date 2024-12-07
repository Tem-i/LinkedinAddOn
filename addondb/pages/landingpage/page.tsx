import React, { useState } from 'react';
import Image from 'next/image';

const Page = () => {
  // State to track selected features
  const [selectedFeatures, setSelectedFeatures] = useState([]);

  // Features list
  const features = [
    'Undergraduate',
    'Graduate',
    'Recent Graduate',
    'Internship Seeker',
    'Entry-Level Job Seeker',
    'Exploring Opportunities',
    'Networking',
    'Mentorship & Career Guidance',
    'Resume & Interview Prep',
    'Building Career Skills',
    'Exploring Career Paths',
  ];

  // Handle button click
  const handleButtonClick = (feature) => {
    if (selectedFeatures.includes(feature)) {
      // If the feature is already selected, remove it from the array
      setSelectedFeatures(selectedFeatures.filter((item) => item !== feature));
    } else {
      // If the feature is not selected, add it to the array
      setSelectedFeatures([...selectedFeatures, feature]);
    }
  };

  return (
    <div className="bg-white h-screen w-screen">
      {/* Top Bar */}
      <div className="h-16 flex items-center justify-between px-6 shadow-md">
        <div className="flex flex-row items-center space-x-3">
          <Image src="/Group13.svg" alt="menu" width={24} height={24} />
          <div className="text-black font-bold text-4xl">AlumniNet</div>
        </div>
        <div className="space-x-5">
          <button className="bg-[#e8998d] px-6 py-1 rounded-3xl text-black">Messages</button>
          <button className="bg-[#e8998d] px-6 py-1 rounded-3xl text-black">Library</button>
          <button className="bg-[#e8998d] px-6 py-1 rounded-3xl text-black">Mentoring</button>
          <button className="bg-[#e8998d] px-6 py-1 rounded-3xl text-black">Profile</button>
          <button className="bg-[#e8998d] px-8 py-2 rounded-3xl text-black">Log In</button>
        </div>
      </div>

      {/* Main Content */}
      <div className="text-black flex flex-col items-center mt-12 space-y-8">
        <div className="text-center">
          <p className="text-5xl font-normal">"Empowering Undergraduates, Building Futures"</p>
          <p className="text-3xl mt-4">Start building connections today!</p>
        </div>

        {/* Search Bar */}
        <div className="w-full flex justify-center">
          <div className="bg-gray-100 flex items-center px-4 py-2 w-3/4 max-w-3xl rounded-full shadow-md">
            <input
              type="text"
              className="bg-gray-100 flex-grow text-xl outline-none"
              placeholder="What are you looking for?"
            />
            <button className="bg-[#e8998d] h-10 w-10 rounded-full flex items-center justify-center">
              <Image src="/search.svg" alt="search" width={24} height={24} />
            </button>
          </div>
        </div>

        {/* Feature Buttons */}
        <div className="text-center">
          <p className="text-gray-500 text-lg">Get started by choosing which features apply to you:</p>
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            {features.map((feature) => (
              <button
                key={feature}
                onClick={() => handleButtonClick(feature)}
                style={{
                  backgroundColor: selectedFeatures.includes(feature) ? '#e8998d' : '#f3f3f3',
                  color: selectedFeatures.includes(feature) ? 'white' : 'black',
                }}
                className="py-2 px-4 rounded-full shadow-md text-lg"
              >
                {feature}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
