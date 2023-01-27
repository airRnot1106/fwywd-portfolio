interface AboutArticleListProps {
  children: React.ReactNode;
}

export const AboutArticleList = ({ children }: AboutArticleListProps) => {
  return (
    <div className="flex items-center justify-center space-x-5 p-3">
      {children}
    </div>
  );
};
