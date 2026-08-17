import "./globals.css";

export const metadata = {
  title: "Quant Portfolio",
  description: "Quantitative Finance Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* We are hardcoding the dark background here just to be safe */}
      <body className="bg-[#050505] text-[#ededed] antialiased">
        {children}
      </body>
    </html>
  );
}