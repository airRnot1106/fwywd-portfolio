interface SkillsListProps {
  children: React.ReactNode;
}

export const SkillsList = ({ children }: SkillsListProps) => {
  return <div className="space-y-3 rounded bg-white p-10">{children}</div>;
};
