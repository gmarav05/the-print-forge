'use client'

export default function ZapButton() {
  return (
    <nostr-zap-button
      npub="npub1qsvv5ttv6mrlh38q8ydmw3gzwq360mdu8re2vr7rk68sqmhmsh4svhsft3"
      theme="dark"
      text="⚡ Zap Me"
      relays="wss://relay.damus.io wss://nos.lol wss://relay.snort.social"
    />
  )
}
