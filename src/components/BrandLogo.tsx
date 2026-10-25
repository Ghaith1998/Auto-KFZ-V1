import { useState, type ReactNode } from "react";
import { remoteImages } from "../lib/images";

interface BrandLogoProps {
  className?: string;
  fallback?: ReactNode;
}

export default function BrandLogo({
  className = "h-8 w-auto object-contain",
  fallback = null,
}: BrandLogoProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return <>{fallback}</>;
  }

  return (
    <img
      alt="Meidlinger Autoteile Logo"
      className={className}
      src={remoteImages.logo}
      onError={() => setFailed(true)}
    />
  );
}
