type Props = {
  categories: string[];
  selected: string;
  onClick: (category: string) => void;
};

export default function Categories({ categories, selected, onClick }: Props) {
  return (
    <>
      <ul className="flex pb-4 mb-12 overflow-x-scroll">
        {categories.map((category) => (
          <li
            className={`flex flex-shrink-0 h-6 px-3 ml-4 text-sm rounded-lg cursor-pointer ${
              category === selected ? "bg-my-color text-white" : "bg-slate-100"
            }`}
            key={category}
            onClick={() => onClick(category)}
          >
            {category}
          </li>
        ))}
      </ul>
    </>
  );
}
