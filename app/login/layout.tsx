export default function LoginLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
      <div
        className="flex h-screen bg-[url(/images/login.jpg)] items-center justify-center bg-gray-100"
      >
        {children}
      </div>
  );
}
