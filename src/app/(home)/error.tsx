"use client";

import { useEffect } from "react";

export default function Error(props: ErrorProps) {
  const { reset, error } = props;

  useEffect(() => {
    console.error(error);
  }, []);

  return (
    <div style={{ padding: "10rem" }}>
      <h1>:c</h1>
      <p>An error has ocurred</p>
      <button
        style={{ background: "transparent", border: "none" }}
        onClick={reset}
      >
        Intentar de nuevo
      </button>
    </div>
  );
}
