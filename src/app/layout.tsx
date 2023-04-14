import { ClerkProvider, SignedIn, SignedOut } from '@clerk/nextjs/app-beta';
import './globals.css';

export const metadata = {
  title: 'Transport-Info',
  description: 'Get information about your transport',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ClerkProvider>
        <body>{children}</body>
      </ClerkProvider>
    </html>
  );
}
