export default function LoginLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
      <body
        className="flex h-screen items-center justify-center bg-gray-100"
      >
        {children}
      </body>
  );
}
