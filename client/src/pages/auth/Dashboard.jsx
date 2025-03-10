import React from "react";
import useAuth from "../../hooks/useAuth";
import AlCard from "../../components/common/AlCard";
import AlButton from "../../components/common/AlButton";
import { capitalizeFirstLetter } from "../../utils/readUtils";

function Dashboard() {
  const { user, logout } = useAuth();

  if (!user) {
    return <p>Cannot Retrieve User</p>;
  }

  return (
    <AlCard title="Profile">
      <div>
        <h2>Welcome, {capitalizeFirstLetter(user.username)}</h2>
      </div>
      <p>Your Email: {user.email}</p>
      <p>User Status: {user.isAdmin ? "Admin" : "Standard"}</p>

      <AlButton
        onClick={() => {
          logout();
        }}
      >
        Log Out
      </AlButton>
    </AlCard>
  );
}

export default Dashboard;
