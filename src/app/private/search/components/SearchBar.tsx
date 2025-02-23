import { FormEvent, ChangeEvent } from "react";
import { Search, X } from "lucide-react";

interface Props {
  handleSearch: (e: FormEvent) => void;
  query: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  clearQuery: () => void; // Nueva función para limpiar la búsqueda
  error?: string; // Error opcional como prop
}

export default function SearchBar({
  handleSearch,
  query,
  onChange,
  clearQuery,
  error,
}: Props) {
  return (
    <div className="w-full max-w-sm">
      <form
        onSubmit={handleSearch}
        className="relative flex items-center p-2 border rounded-lg shadow-sm bg-white text-slate-900"
      >
        <Search className="absolute left-3 text-slate-500" size={20} />
        <input
          type="text"
          value={query}
          onChange={onChange}
          placeholder="Ingresar número..."
          className="w-full pl-10 pr-8 py-2 text-xl border-none outline-none bg-transparent"
        />
        {query && (
          <button
            type="button"
            onClick={clearQuery} // Ahora usa la función `clearQuery`
            className="absolute right-3 text-slate-500 hover:text-slate-700"
            aria-label="Borrar búsqueda"
          >
            <X size={20} />
          </button>
        )}
      </form>
      {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
    </div>
  );
}
