import SWRConfigContext from "../context/SWRContext";

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
