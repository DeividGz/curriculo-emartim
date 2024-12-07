import { ReactNode } from "react";

interface SectionProps {
  graySection?: boolean;
  title: string;
  children: ReactNode;
}

const Section = ({ graySection, title, children }: SectionProps) => {
  return (
    <section
      className={`space-y-2 ${graySection && "bg-emartim-section-gray"} p-5`}
    >
      <h1 className="font-semibold text-black text-xl">{title}</h1>
      {children}
    </section>
  );
};

export default Section;
