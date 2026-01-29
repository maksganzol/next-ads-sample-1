"use client";

export default function TestAdZone() {
  return (
    <div
      className="test"
      style={{
        position: "absolute",
        top: 70,
        left: 1,
        width: 300,
        height: 250,
        border: "1px dashed red",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      Ad zone (300x250)
    </div>
  );
}
