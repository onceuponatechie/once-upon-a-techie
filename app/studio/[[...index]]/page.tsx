export default function StudioRoute() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#101112",
        color: "#fff",
        fontFamily: "system-ui, sans-serif",
        padding: "2rem",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>
        Sanity Studio
      </h1>
      <p style={{ color: "rgba(255,255,255,0.6)", maxWidth: "480px", lineHeight: 1.6 }}>
        Sanity Studio requires React 19 and cannot run with the current React 18 setup.
        To enable the studio, upgrade your project or install the compatible package:
      </p>
      <code
        style={{
          marginTop: "1rem",
          padding: "0.75rem 1.25rem",
          backgroundColor: "rgba(255,255,255,0.1)",
          borderRadius: "0.5rem",
          fontSize: "0.875rem",
        }}
      >
        npm install sanity@latest
      </code>
    </div>
  );
}
