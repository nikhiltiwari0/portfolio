import React from "react";
import { useNavigate } from "react-router-dom";
import { getVersionById } from "../../versions/config";

const VersionBadge = ({ versionId }) => {
  const navigate = useNavigate();
  const version = getVersionById(versionId);

  if (!version) return null;

  return (
    <button
      onClick={() => navigate("/")}
      className="fixed top-4 left-4 z-50 px-3 py-1.5 bg-black/80 border border-neutral-700 hover:border-neutral-500 text-xs font-mono text-neutral-400 hover:text-white transition-colors"
    >
      ← {version.id} / archive
    </button>
  );
};

export default VersionBadge;
