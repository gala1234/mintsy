import { cn } from "@/lib/utils";

interface SearchBarProps {
  className?: string;
  placeholder: string;
  value: string;
  isSmall?: boolean;
  handleSearch: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  className,
  placeholder,
  value,
  // isSmall,
  handleSearch,
}) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle search logic here
  };
  return (
    <form className={cn("w-full", className)} onSubmit={handleSubmit}>
      <div className="max-w-2xl mx-auto">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
            <svg
              className="w-5 h-5 text-text-muted"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <input
            type="text"
            className="w-full p-4 pl-12 text-base rounded-lg bg-white border border-dark/10 focus:outline-none focus:ring-2 focus:ring-primary/30"
            placeholder={placeholder}
            value={value}
            onChange={(e) => handleSearch(e.target.value)}
          />
        </div>
      </div>
    </form>
  );
};

export default SearchBar;
