import React from "react";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const history = useNavigate();

  const navigateToProfiles = () => {
    history.push("/profiles");
  };

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={navigateToProfiles}>Go to Profiles</button>
    </div>
  );
}