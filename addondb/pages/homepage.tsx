import React, { useState } from "react";

const SearchBarAndButton: React.FC = () => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    console.log("Search query:", query);
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
    </div>
  );
};

export default SearchBarAndButton;
