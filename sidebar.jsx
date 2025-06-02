export default function Sidebar({ onLogout }) {
  return (
    <div className="w-64 bg-white shadow-md">
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-xl font-semibold">To Do</h2>
      </div>
      <nav className="p-4">
        <div className="mb-8">
          <h3 className="text-xs font-semibold text-gray-500 uppercase">Meetings</h3>
          <ul className="mt-4 space-y-2">
            <li><button className="w-full px-3 py-2 text-left bg-indigo-600 text-white rounded-md">List</button></li>
          </ul>
        </div>
        <button onClick={onLogout} className="w-full px-3 py-2 text-left text-gray-700 hover:bg-gray-100 rounded-md">
          Log Out
        </button>
      </nav>
    </div>
  );
}