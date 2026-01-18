import type * as React from 'react'

declare global {
  namespace React {
    namespace JSX {
      interface IntrinsicElements {
        'nostr-zap-button': React.DetailedHTMLProps<
          React.HTMLAttributes<HTMLElement>,
          HTMLElement
        > & {
          npub: string
          theme?: string
          url?: string
          text?: string
          relays?: string
        }
      }
    }
  }
}

export {}
