export default function LoginLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-[url(/images/login.jpg)] bg-cover bg-center bg-no-repeat">
      <div className="flex h-screen w-full animate-movingGradient items-center justify-center bg-gradient-to-r from-customPrimary/50 to-customAccent/50 bg-[length:200%_200%] backdrop-blur-[2px]">
        {children}
      </div>
    </div>
  );
}
