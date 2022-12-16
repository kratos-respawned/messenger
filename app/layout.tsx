import "../styles/globals.css";
import Header from "./Header";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />

      <body className="bg-slate-800">
        <Header />
        {children}
      </body>
    </html>
  );
}
