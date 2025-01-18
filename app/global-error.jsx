"use client";

import Error from "../components/Error"; // Ensure this is the correct path to your Error component
import { useEffect } from "react";

export default function GlobalError({ error }) {
  useEffect(() => {
    // Log the error to the console for debugging purposes
    if (error) {
      console.error("Global error captured:", error);
    }
  }, [error]);

  return (
    <html lang="en">
      <body>
        <Error />
      </body>
    </html>
  );
}
