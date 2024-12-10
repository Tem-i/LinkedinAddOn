import React, { useState } from "react";

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
  const [query, setQuery] = useState("");
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async () => {
    try {
      const response = await fetch(`/api/profiles?query=${encodeURIComponent(query)}`);
      if (!response.ok) {
        throw new Error("Failed to fetch profile");
      }
      const data = await response.json();
      setProfiles(data.slice(0,5));
      setError(null);
    } catch (err) {
      
    }
  };

  return (
    <div
      style={{
        backgroundColor: "black",
        color: "white",
        minHeight: "100vh",
        padding: "24px",
      }}
    >
      <h1 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "16px" }}>
        Profile Search
      </h1>
      <div style={{ marginBottom: "16px" }}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter search query..."
          style={{
            padding: "8px",
            width: "300px",
            borderRadius: "4px",
            border: "1px solid #ccc",
            color: "#555555",
          }}
        />
        <button
          onClick={handleSearch}
          style={{
            marginLeft: "8px",
            padding: "8px 16px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Search
        </button>
      </div>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {profiles.length > 0 ? (
        <div>
          {profiles.map((profile) => (
            <div
              key={profile._id}
              style={{
                backgroundColor: "white",
                color: "black",
                padding: "16px",
                borderRadius: "8px",
                marginBottom: "16px",
              }}
            >
              <h2 style={{ fontSize: "20px", fontWeight: "bold" }}>{profile.full_name}</h2>
              {profile.occupation && <p><strong>Occupation:</strong> {profile.occupation}</p>}
              {profile.headline && <p><strong>Headline:</strong> {profile.headline}</p>}
            </div>
          ))}
          </div>
          ) : (
            <p>No profile to display</p>
        )}
    </div>
  );
}
