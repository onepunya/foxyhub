import "./globals.css";

export const metadata = {
  title: "foxyhub",
  description: "HOME | foxyhub",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className="bg-black text-white">{children}</body>
    </html>
  );
}