import { Children } from 'react';

interface ValuesArticleListProps {
  children: React.ReactNode;
}

export const ValuesArticleList = ({ children }: ValuesArticleListProps) => {
  const childrenCount = Children.count(children);
  return (
    <div className="flex items-center justify-center space-x-5 rounded-3xl bg-white p-5">
      {Children.map(children, (child, index) => {
        return (
          <>
            {child}
            {index < childrenCount - 1 && (
              <div className="h-[26rem] w-[2px] bg-f-green-100"></div>
            )}
          </>
        );
      })}
    </div>
  );
};
