import React from "react";

type Profile = {
  _id: string;
  full_name: string;
  occupation?: string;
  headline?: string;
  country_full_name?: string;
  city?: string;
  state?: string;
  experiences?: Array<{
    starts_at: { day: number; month: number; year: number } | null;
    ends_at: { day: number; month: number; year: number } | null;
    company: string;
    title: string;
    location?: string;
    logo_url?: string;
  }>;
  education?: Array<{
    school: string;
    degree_name?: string;
    field_of_study?: string;
    logo_url?: string;
  }>;
  certifications?: Array<{
    name: string;
    authority?: string;
  }>;
  [key: string]: any; // Allow dynamic fields for other data
};

const ProfileDetails: React.FC<{ profile: Profile }> = ({ profile }) => {
  return (
    <div className="p-4 border rounded-md shadow-md bg-black mb-4">
      <h2 className="text-xl font-bold mb-2">{profile.full_name}</h2>
      {profile.occupation && <p><strong>Occupation:</strong> {profile.occupation}</p>}
      {profile.headline && <p><strong>Headline:</strong> {profile.headline}</p>}
      {profile.city && profile.state && (
        <p>
          <strong>Location:</strong> {profile.city}, {profile.state}
        </p>
      )}
      {profile.country_full_name && <p><strong>Country:</strong> {profile.country_full_name}</p>}
      
      {profile.experiences && profile.experiences.length > 0 && (
        <div className="mt-4">
          <h3 className="text-lg font-semibold">Experiences</h3>
          <ul className="list-disc ml-6">
            {profile.experiences.map((exp, idx) => (
              <li key={idx}>
                <p><strong>Company:</strong> {exp.company}</p>
                <p><strong>Title:</strong> {exp.title}</p>
                {exp.location && <p><strong>Location:</strong> {exp.location}</p>}
                {exp.starts_at && exp.ends_at && (
                  <p>
                    <strong>Duration:</strong> {`${exp.starts_at.month}/${exp.starts_at.year} - ${exp.ends_at.month}/${exp.ends_at.year}`}
                  </p>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
      
      {profile.education && profile.education.length > 0 && (
        <div className="mt-4">
          <h3 className="text-lg font-semibold">Education</h3>
          <ul className="list-disc ml-6">
            {profile.education.map((edu, idx) => (
              <li key={idx}>
                <p><strong>School:</strong> {edu.school}</p>
                {edu.degree_name && <p><strong>Degree:</strong> {edu.degree_name}</p>}
                {edu.field_of_study && <p><strong>Field of Study:</strong> {edu.field_of_study}</p>}
              </li>
            ))}
          </ul>
        </div>
      )}

      {profile.certifications && profile.certifications.length > 0 && (
        <div className="mt-4">
          <h3 className="text-lg font-semibold">Certifications</h3>
          <ul className="list-disc ml-6">
            {profile.certifications.map((cert, idx) => (
              <li key={idx}>
                <p><strong>Certification:</strong> {cert.name}</p>
                {cert.authority && <p><strong>Authority:</strong> {cert.authority}</p>}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default function TestPage() {
  const profile: Profile = {
    _id: "6733cc98cd0dfa271a9abe12",
    full_name: "Jeff B.",
    occupation: "AVP, Life Underwriting at Illinois Mutual",
    headline: "Illinois Mutual",
    country_full_name: "United States of America",
    city: "Normal",
    state: "Illinois",
    experiences: [
      {
        starts_at: { day: 1, month: 8, year: 2018 },
        ends_at: null,
        company: "Illinois Mutual",
        title: "AVP, Life Underwriting",
        location: "Peoria, Illinois Area",
      },
    ],
    education: [
      {
        school: "Illinois State University",
        degree_name: "BS",
        field_of_study: "Criminal  Justice",
      },
    ],
    certifications: [
      { name: "AIRC", authority: "LOMA" },
      { name: "ALMI, ACS", authority: "LOMA" },
    ],
  };

  return (
    <div className="bg-black text-white min-h-screen p-6">
      <h1 className="text-2xl font-bold mb-6">Profile Example</h1>
      <ProfileDetails profile={profile} />
    </div>
  );
}
