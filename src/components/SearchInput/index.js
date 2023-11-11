function SearchInput({ ...props }) {
  return (
    <div className="flex items-center border rounded-md bg-white p-2">
      <input
        className="w-full outline-none bg-white"
        type="search"
        {...props}
      />
      <div>🔎</div>
    </div>
  );
}

export { SearchInput };
