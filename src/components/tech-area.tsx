interface TechAreaProps {
  green?: boolean;
  title: string;
  urls: string[];
}

const TechArea = ({ green, title, urls }: TechAreaProps) => {
  return (
    <div className="space-y-2">
      <p className="font-semibold">{title}</p>
      <div
        className={`flex gap-4 ${
          green
            ? "shadow-[inset_0_0_10px_0_#069370]"
            : "shadow-[inset_0_0_10px_0_#002c59]"
        } scrollbar-thumb-gray-500 p-4 overflow-x-auto scrollbar-thin scrollbar-track-gray-300`}
      >
        {urls.map((url) => (
          <img
            key={url}
            className="w-20"
            src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${url}.svg`}
          />
        ))}
      </div>
    </div>
  );
};

export default TechArea;
