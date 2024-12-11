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
    const [isExpanded, setIsExpanded] = useState(false);
  
    return (
      <div className="p-4 mb-4" style={{ backgroundColor: "#f4f4f4", color: "#000000", border: "none", borderRadius: "8px" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <h2 className="text-xl font-bold mb-2" style={{ flex: 1 }}>
            {profile.full_name}
          </h2>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            style={{
              backgroundColor: "transparent",
              border: "none",
              cursor: "pointer",
              fontSize: "20px",
              padding: "0",
              marginLeft: "10px",
            }}
          >
            {isExpanded ? "▲" : "▼"} {/* Up/down arrow */}
          </button>
        </div>
  
        {/* Show only Headline, Occupation, and Location initially */}
        <p><strong>Occupation:</strong> {profile.occupation}</p>
        {profile.headline && <p><strong>Headline:</strong> {profile.headline}</p>}
        
        <p style={{ display: "flex", alignItems: "center" }}>
          <strong>Location:&nbsp;</strong> {profile.city && profile.state ? `${profile.city}, ${profile.state}` : "N/A"}{" "}
          {profile.country_full_name && (
            <span style={{ marginLeft: "10px" }}><strong>Country:</strong> {profile.country_full_name}</span>
          )}
        </p>
  
        {/* Dropdown to expand/collapse additional profile details */}
        {isExpanded && (
          <div className="mt-4">
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
        )}
      </div>
    );
  };
  

const SearchBarAndButton: React.FC = () => {
    const [query, setQuery] = useState("");
    const [profiles, setProfiles] = useState<Profile[]>([]);
    const [error, setError] = useState<string | null>(null);

    const [isGraduate, setIsGraduate] = useState(false);
    const [isPhD, setIsPhD] = useState(false);

  const handleSearch = async () => {
    try {
      const response = await fetch(`/api/profiles?query=${encodeURIComponent(query)}&isGraduate=${isGraduate}&isPhD=${isPhD}`);
      if (!response.ok) {
        throw new Error("Failed to fetch profile");
      }
      const data = await response.json();
      setProfiles(data.slice(0,10));
      setError(null);
    } catch (err) {
        console.error("Error during search:", err);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#ffffff",
      }}
    >
        <div
        style={{
          position: "absolute",
          top: "20px",
          left: "20px",
        }}
      >
        <h1 style={{ fontSize: "36px", fontWeight: "bold", color: "#000000" }}>
          AlumniNet
        </h1>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          position: "relative",
        }}
      >
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter search query..."
          style={{
            width: "500px",
            padding: "10px 15px",
            fontSize: "20px",
            color: "#000000",
            backgroundColor: "#efefef",
            borderRadius: "25px",
            marginBottom: "20px",
            border: "1px solid #ccc",
            paddingRight: "50px",
          }}
        />
        <button
          onClick={handleSearch}
          style={{
            position: "absolute",
            right: "10px",
            top: "5px",
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            backgroundColor: "#e7998d",
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            transition: "background-color 0.3s ease",
          }}
          onMouseOver={(e) =>
            (e.currentTarget.style.backgroundColor = "#c48076")
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.backgroundColor = "#e7998d")
          }
        >
          ?
        </button>
      </div>
      <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        <button
          onClick={() => setIsGraduate((prev) => !prev)}
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            borderRadius: "25px",
            border: isGraduate ? "2px solid #007bff" : "2px solid #ccc",
            backgroundColor: isGraduate ? "#007bff" : "#efefef",
            color: isGraduate ? "#fff" : "#000",
            cursor: "pointer",
            transition: "all 0.3s ease",
          }}
        >
          Graduate
        </button>
        <button
          onClick={() => setIsPhD((prev) => !prev)}
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            borderRadius: "25px",
            border: isPhD ? "2px solid #007bff" : "2px solid #ccc",
            backgroundColor: isPhD ? "#007bff" : "#efefef",
            color: isPhD ? "#fff" : "#000",
            cursor: "pointer",
            transition: "all 0.3s ease",
          }}
        >
          PhD
        </button>
      </div>
    {error && <p style={{ color: "red" }}>{error}</p>}
    {/* Profile list container with scroll */}
    <div
        style={{
          width: "100%",
          maxHeight: "70vh", // Limit the height
          overflowY: "auto", // Enable scrolling
          padding: "20px",
          marginTop: "20px",
          color: "#ffffff",
          backgroundColor: "#e7998d",
        }}
      >
        {profiles.length} Compatible Profiles Found
        
        {profiles.length > 0 ? (
          <div>
            {profiles.map((profile) => (
              <ProfileDetails key={profile._id} profile={profile} />
            ))}
          </div>
        ) : (
          <p>No profiles to display</p>
        )}
      </div>
    </div>
  );
};

export default SearchBarAndButton;
