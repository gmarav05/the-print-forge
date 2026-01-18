"use client";

import { useEffect } from "react";
export default function NostrProvider() {
  useEffect(() => {
    import("nostr-components");
  }, []);

  return null;
}