interface ArticleTitleProps {
  mainTitle: string;
  subTitle: string;
}

export const ArticleTitle = ({ mainTitle, subTitle }: ArticleTitleProps) => {
  return (
    <h2 className="space-x-5">
      <span className="align-middle text-3xl font-bold tracking-widest text-f-black-100">
        {mainTitle}
      </span>
      <span className="align-middle text-lg font-semibold text-f-green-400">
        {subTitle}
      </span>
    </h2>
  );
};
