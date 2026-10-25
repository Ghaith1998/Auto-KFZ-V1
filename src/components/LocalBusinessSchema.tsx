import { useEffect } from "react";

export default function LocalBusinessSchema() {
  useEffect(() => {
    const id = "local-business-schema";
    document.getElementById(id)?.remove();
    const script = document.createElement("script");
    script.id = id;
    script.type = "application/ld+json";
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "AutoPartsStore",
      name: "Meidlinger Autoteile",
      description: "Kfz-Ersatzteile, Zubehör, Öle und Werkzeuge in Wien-Meidling.",
      url: `${(import.meta.env.VITE_SITE_URL || window.location.origin).replace(/\/$/, "")}/`,
      telephone: "+43 670 654 2142",
      email: "MeidlingerAutoteile@gmail.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Steinbauergasse 36",
        postalCode: "1120",
        addressLocality: "Wien",
        addressCountry: "AT",
      },
      areaServed: "Wien",
      priceRange: "€€",
    });
    document.head.appendChild(script);
    return () => script.remove();
  }, []);

  return null;
}
