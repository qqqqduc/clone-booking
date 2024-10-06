const validValues = ["2xl", "3xl"] as const;

type Size = (typeof validValues)[number];

interface HeadingProps {
  title: string;
  size?: Size;
  bottom?: number;
  top?: number;
}

function Heading({ title, size = "2xl", bottom = 0, top = 4 }: HeadingProps) {
  return (
    <h1
      className={`text-${size} mb-${bottom} mt-${top} font-bold text-gray-800`}
    >
      {title}
    </h1>
  );
}

export default Heading;
