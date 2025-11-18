const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-radial from-blue-300 to-blue-900">
      {children}
    </div>
  );
};

export default AuthLayout;
