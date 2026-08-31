type IconProps = {
  className?: string;
};

export function FacebookIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M22 12.06C22 6.51 17.52 2 12 2S2 6.51 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.51 1.49-3.9 3.77-3.9 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.89h2.78l-.44 2.91h-2.34V22c4.78-.79 8.44-4.94 8.44-9.94Z" />
    </svg>
  );
}

export function InstagramIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function WhatsAppIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12.02 2C6.5 2 2.03 6.47 2.03 12c0 1.85.5 3.58 1.36 5.07L2 22l5.08-1.33A9.9 9.9 0 0 0 12.02 22C17.55 22 22 17.53 22 12S17.55 2 12.02 2Zm0 18.06a8.02 8.02 0 0 1-4.1-1.12l-.29-.17-3.02.79.81-2.94-.19-.3a8.05 8.05 0 1 1 6.79 3.74Zm4.4-6.02c-.24-.12-1.43-.7-1.65-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.92-1.18-.71-.63-1.19-1.42-1.33-1.66-.14-.24-.01-.37.11-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.19-.46-.39-.4-.54-.4h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.7 2.6 4.13 3.64.58.25 1.03.4 1.38.51.58.18 1.11.16 1.53.1.47-.07 1.43-.58 1.63-1.15.2-.56.2-1.04.14-1.15-.06-.1-.22-.16-.46-.28Z" />
    </svg>
  );
}

export function YoutubeIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M21.6 7.2s-.21-1.49-.86-2.15c-.82-.87-1.74-.87-2.16-.92C15.6 4 12 4 12 4h-.01s-3.6 0-6.58.13c-.42.05-1.34.05-2.16.92-.65.66-.86 2.15-.86 2.15S2.16 8.94 2.16 10.68v1.63c0 1.74.23 3.48.23 3.48s.21 1.49.86 2.15c.82.87 1.9.84 2.38.94C6.4 19.98 12 20 12 20s3.6-.01 6.58-.14c.42-.06 1.34-.06 2.16-.93.65-.66.86-2.15.86-2.15s.23-1.74.23-3.48v-1.63c0-1.74-.23-3.47-.23-3.47ZM9.98 14.5V8.9l5.4 2.81-5.4 2.79Z" />
    </svg>
  );
}
