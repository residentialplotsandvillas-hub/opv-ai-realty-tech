
export default function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "OPV AI Realty Tech Private Limited",
    url: "https://www.opvairealtytech.com/",
    email: "info@opvairealtytech.com",
    telephone: "+91-9963513939",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "#101, Road No: 10, Jaya Kesav Avenue, Kakatiya Hills, Madhapur",
      addressLocality: "Hyderabad",
      addressRegion: "Telangana",
      postalCode: "500081",
      addressCountry: "IN",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
      }}
    />
  );
}
