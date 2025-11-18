import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <nav className="bg-black text-white">ESTA ES LA LAYOUT PRINCIPAL</nav>
        {children}
      </body>
    </html>
  );
}