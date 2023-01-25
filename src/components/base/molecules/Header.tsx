interface HeaderProps {
  children: React.ReactNode;
}

export const Header = ({ children }: HeaderProps) => {
  return (
    <header>
      <div className="flex h-full items-center justify-between px-5 py-1">
        {children}
      </div>
    </header>
  );
};
