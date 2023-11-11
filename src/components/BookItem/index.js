function BookItem({
  title,
  author,
  price,
  rating,
  number_of_pages,
  read_status,
  onMarkAsRead,
  onDelete,
}) {
  return (
    <li
      className={`${
        !!read_status ? "bg-green-200" : ""
      } flex justify-between p-4 bg-white rounded-md shadow-md hover:bg-slate-100 hover:cursor-pointer relative`}
      onClick={onMarkAsRead}
    >
      <button
        onClick={(e) => {
          e.stopPropagation();
          onDelete();
        }}
        className="absolute -top-3 right-0 border rounded-full bg-red-100 bg-opacity-80 p-1"
      >
        ❌
      </button>
      <div className="flex flex-col gap-2">
        <div className="flex gap-2">
          <div className="bg-slate-300 w-10 h-10 rounded-md text-xs text-slate-400 text-center flex items-center">
            <span>No cover</span>
          </div>
          <div>
            <div className="font-semibold">{title}</div>{" "}
            <div className="italic text-sm">by {author}</div>
          </div>
        </div>
        <div>Rating: ⭐{rating}</div>
      </div>
      <div>
        <div>📖 Pages: {number_of_pages}</div>
        <div>💲 Price: ${price}</div>
        <div>{!read_status ? "📕 Unread" : "📗 Read"}</div>
      </div>
    </li>
  );
}

export { BookItem };
