function BookLoading() {
  return (
    <li className="animate-pulse flex justify-between p-4 bg-white rounded-md shadow-md hover:bg-slate-100 hover:cursor-pointer relative">
      <div className="flex flex-col gap-4">
        <div className="flex gap-2">
          <div className="bg-gray-300 w-10 h-10 rounded-md text-xs text-gray-400 text-center flex items-center">
            <span></span>
          </div>
          <div className="flex gap-2 flex-col">
            <div className="w-28 h-3 bg-gray-300 rounded"></div>
            <div className="w-20 h-2 bg-gray-300 rounded"></div>
          </div>
        </div>
        <div className="w-24 h-2 bg-gray-300 rounded"></div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="w-24 h-2 bg-gray-300 rounded"></div>
        <div className="w-24 h-2 bg-gray-300 rounded"></div>
        <div className="w-24 h-2 bg-gray-300 rounded"></div>
      </div>
    </li>
  );
}

export { BookLoading };
