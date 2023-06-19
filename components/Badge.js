export function Badge({ children }) {
  return (
    <span
      style={{
        padding: 2,
        borderRadius: 4,
        color: "var(--background)",
        backgroundColor: "var(--pink)",
        fontSize: "smaller",
        textTransform: "lowercase",
        fontWeight: "bold",
      }}
    >
      {children}
    </span>
  );
}
