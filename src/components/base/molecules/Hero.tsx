interface HeroProps {
  children: React.ReactNode;
}

export const Hero = ({ children }: HeroProps) => {
  return (
    <div className="flex items-center justify-between bg-f-green-200 px-16 py-8">
      {children}
    </div>
  );
};
