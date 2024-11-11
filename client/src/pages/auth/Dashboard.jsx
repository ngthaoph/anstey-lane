import React from "react";
import useAuth from "../../hooks/useAuth";
import MbCard from "../../components/common/AlCard";
import AlButton from "../../components/common/AlButton";

function Dashboard() {
  const { user, logout } = useAuth();
  if (!user) {
    return <p>Cannot Retrieve User</p>;
  }
  return (
    <MbCard title="Profile">
      <div>
        <h2>Welcome onboard</h2>
      </div>
      <p>Your Email: {user.email}</p>
      <p>User status: {user.isAdmin ? "Admin" : "Standard"}</p>
      <AlButton
        onClick={() => {
          logout;
        }}
      >
        Close
      </AlButton>
    </MbCard>
  );
}

export default Dashboard;
