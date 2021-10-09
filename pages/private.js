import React from "react";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";

const ProtectedPage = () => {
  return <div>This page for members only</div>;
};

export default ProtectedPage;

export const getServerSideProps = withPageAuthRequired();
