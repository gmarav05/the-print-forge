declare namespace JSX {
  interface IntrinsicElements {
    "nostr-zap-button": {
      npub: string;
      theme?: string;
      url?: string;
      text?: string;
    };
  }
}