export default function MeetingForm({ meeting, onClose, onSave }) {
  const [formData, setFormData] = useState({
    agenda: meeting?.agenda || '',
    status: meeting?.status || 'UPCOMING',
    date: meeting?.date || '',
    start_time: meeting?.start_time || '',
    meeting_url: meeting?.meeting_url || ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">{meeting ? 'Edit Meeting' : 'Add Meeting'}</h2>
        <form onSubmit={handleSubmit}>
          {/* Form fields here */}
          <div className="flex justify-end space-x-3 mt-4">
            <button type="button" onClick={onClose} className="px-4 py-2 border border-gray-300 rounded-md">
              Cancel
            </button>
            <button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded-md">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}