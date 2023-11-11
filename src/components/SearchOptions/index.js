import { SEARCH_FIELDS } from "src/constants/constants";

function SearchOptions({ searchField, setSearchField }) {
  return (
    <div className="flex gap-2">
      <h3 className="font-semibold">Search by:</h3>
      {SEARCH_FIELDS.map((field, fidx) => (
        <label
          key={`search-field-${fidx}`}
          htmlFor=""
          className="capitalize flex gap-2"
        >
          <input
            type="radio"
            name="searchField"
            checked={field === searchField}
            onChange={() => setSearchField(field)}
          />
          <span>{field}</span>
        </label>
      ))}
    </div>
  );
}

export { SearchOptions };
