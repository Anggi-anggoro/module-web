const Sidebar = () => (
  <div className="sticky top-3 py-4 px-3 overflow-y-auto text-sm z-20 border-2 border-orange-400 rounded-md bg-orange-100">
    <div>
      <h3 className="font-semibold text-orange-800">🎯 Tujuan Pembelajaran</h3>
      <ul className="list-disc list-inside text-gray-700">
        <li>Menjelaskan pubertas</li>
        <li>Mengenali bagian tubuh pribadi</li>
      </ul>
    </div>

    <div>
      <h3 className="font-semibold text-orange-800">✅ Checklist Guru</h3>
      <ul className="space-y-1">
        <li>
          <input type="checkbox" /> Sudah menyiapkan gambar
        </li>
        <li>
          <input type="checkbox" /> Melibatkan siswa dalam diskusi
        </li>
      </ul>
    </div>

    <div>
      <h3 className="font-semibold text-orange-800">💡 Tips</h3>
      <p className="italic text-gray-600">
        Ajarkan tentang pembalut sebelum anak menstruasi pertama.
      </p>
    </div>
  </div>
);

export default Sidebar;
