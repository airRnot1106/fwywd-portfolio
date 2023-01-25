interface FooterProps {
  children: React.ReactNode;
}

export const Footer = ({ children }: FooterProps) => {
  return (
    <footer>
      <div className="flex h-full flex-col items-center bg-f-black-200 p-10">
        {children}
      </div>
    </footer>
  );
};
