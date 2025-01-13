import "./main.heading.css";

interface MainHeadingProps {
  title: string;
  desc: string;
}

export default function mainHeading({ title, desc }: MainHeadingProps) {
  return (
    <div className="main-heading">
      <h2>{title}</h2>
      <p>{desc}</p>
    </div>
  );
}
