import SWRConfigContext from "../context/SWRContext";
import "../styles/globals.scss";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body>
        <SWRConfigContext>{children}</SWRConfigContext>
      </body>
    </html>
  );
}
