function BookCounter({ total, read }) {
  return (
    <div className="flex gap-2 bg-white rounded-md p-2">
      <div className="flex-1">
        <span className="font-semibold">Total:</span> <span>📚 {total}</span>
      </div>
      <div className="flex-1">
        <span className="font-semibold">Read:</span> <span>📖 {read}</span>
      </div>
    </div>
  );
}
export { BookCounter };
