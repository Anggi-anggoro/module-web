'use client';
import { useState, useEffect } from 'react';
import { createClient } from "@/lib/supabase/client";
import { redirect, useRouter } from 'next/navigation';
import React from 'react';


interface UserData {
  nama: string;
  tempat_lahir: string;
  tanggal_lahir: string;
  jabatan: string;
  jenis_kelamin: string;
  sekolah: string;
  kota: string;
  kecamatan: string;
  provinsi: string;
  email: string;
  phone: string;
  pretest_score: number;
  posttest_score: number;
}

const UserDataTable: React.FC = () => {
  const [userData, setUserData] = useState<UserData[]>([]);
  const [filteredData, setFilteredData] = useState<UserData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const supabase = createClient();

  useEffect(() => {
    const fetchUserData = async () => {

      try {
        setLoading(true);
        const { data, error } = await supabase
          .from('userdata')
          .select('*')
          .neq('email', 'admin@modis.com')
          .order('nama', { ascending: true });

        if (error) {
          setError(error.message);
          console.error('Error fetching data:', error);
          return;
        }

        setUserData(data || []);
        setFilteredData(data || []);
      } catch (err) {
        setError('Failed to fetch data');
        console.error('Unexpected error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();

  }, []);

  // Filter data based on search term
  useEffect(() => {
    if (!searchTerm.trim()) {
      setFilteredData(userData);
    } else {
      const searchLower = searchTerm.toLowerCase();
      const filtered = userData.filter(user =>
        user.nama?.toLowerCase().includes(searchLower) ||
        user.email?.toLowerCase().includes(searchLower) ||
        user.tempat_lahir?.toLowerCase().includes(searchLower) ||
        user.jabatan?.toLowerCase().includes(searchLower) ||
        user.sekolah?.toLowerCase().includes(searchLower) ||
        user.kota?.toLowerCase().includes(searchLower) ||
        user.kecamatan?.toLowerCase().includes(searchLower) ||
        user.provinsi?.toLowerCase().includes(searchLower) ||
        user.phone?.includes(searchTerm) ||
        user.jenis_kelamin?.toLowerCase().includes(searchLower)
      );
      setFilteredData(filtered);
    }
    // Reset to first page when search changes
    setCurrentPage(1);
  }, [searchTerm, userData]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  // Pagination calculations
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = filteredData.slice(startIndex, endIndex);

  const goToPage = (page: number) => {
    setCurrentPage(page);
  };

  const goToPrevious = () => {
    setCurrentPage(prev => Math.max(prev - 1, 1));
  };

  const goToNext = () => {
    setCurrentPage(prev => Math.min(prev + 1, totalPages));
  };

  // Generate page numbers for pagination
  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1);
        pages.push('...');
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1);
        pages.push('...');
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(totalPages);
      }
    }

    return pages;
  };

  if (loading) {

    return (
      <div className="p-8 text-center flex items-center justify-center flex-col min-h-[79vh]">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <p className="text-gray-600">Loading user data...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-8 min-h-[79vh]">
        <div className="bg-red-50 border border-red-200 rounded-md p-4">
          <p className="text-red-600">Error: {error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-8 min-h-[79vh]">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Tabel informasi data pengguna</h2>
        <p className="text-gray-600">Kelola dan lihat semua data pengguna modul</p>
      </div>

      {/* Search Bar */}
      <div className="mb-6">
        <div className="relative max-w-md">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search by name, email, location, school..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="absolute inset-y-0 right-0 pr-3 flex items-center"
            >
              <svg className="h-4 w-4 text-gray-400 hover:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>
        {searchTerm && (
          <p className="mt-2 text-sm text-gray-600">
            Ditemukan {filteredData.length} data untuk "{searchTerm}"
          </p>
        )}
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase text-nowrap tracking-wider">Nama</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase text-nowrap tracking-wider">Tempat Lahir</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase text-nowrap tracking-wider">Tanggal Lahir</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase text-nowrap tracking-wider">Jabatan</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase text-nowrap tracking-wider">Jenis Kelamin</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase text-nowrap tracking-wider">Sekolah</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase text-nowrap tracking-wider">Kota</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase text-nowrap tracking-wider">Kecamatan</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase text-nowrap tracking-wider">Provinsi</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase text-nowrap tracking-wider">Email</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase text-nowrap tracking-wider">Phone</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase text-nowrap tracking-wider">Pretest Score</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase text-nowrap tracking-wider">Posttest Score</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {currentData.length === 0 ? (
                <tr>
                  <td colSpan={13} className="px-4 py-8 text-center text-gray-500 italic">
                    <div className="flex flex-col items-center">
                      {searchTerm ? (
                        <>
                          <svg className="w-12 h-12 text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                          </svg>
                          Tidak ada data untuk "{searchTerm}"
                          <button
                            onClick={() => setSearchTerm('')}
                            className="mt-2 text-blue-600 hover:text-blue-800 text-sm underline"
                          >
                            Reset pencarian
                          </button>
                        </>
                      ) : (
                        <>
                          <svg className="w-12 h-12 text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                          </svg>
                          Data tidak tersedia
                        </>
                      )}
                    </div>
                  </td>
                </tr>
              ) : (
                currentData.map((user, index) => (
                  <tr key={index} className="hover:bg-gray-50 transition-colors duration-150">
                    <td className="px-4 py-3 text-sm font-medium text-gray-900  truncate">{user.nama}</td>
                    <td className="px-4 py-3 text-sm text-gray-600  truncate">{user.tempat_lahir}</td>
                    <td className="px-4 py-3 text-sm text-gray-600 whitespace-nowrap">{user.tanggal_lahir}</td>
                    <td className="px-4 py-3 text-sm text-gray-600  truncate">{user.jabatan}</td>
                    <td className="px-4 py-3 text-sm text-gray-600">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${user.jenis_kelamin?.toLowerCase() === 'laki-laki' || user.jenis_kelamin?.toLowerCase() === 'male'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-pink-100 text-pink-800'
                        }`}>
                        {user.jenis_kelamin}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-600 truncate">{user.sekolah}</td>
                    <td className="px-4 py-3 text-sm text-gray-600 truncate">{user.kota}</td>
                    <td className="px-4 py-3 text-sm text-gray-600 truncate">{user.kecamatan}</td>
                    <td className="px-4 py-3 text-sm text-gray-600 truncate">{user.provinsi}</td>
                    <td className="px-4 py-3 text-sm text-gray-600 truncate">{user.email}</td>
                    <td className="px-4 py-3 text-sm text-gray-600 whitespace-nowrap">{user.phone}</td>
                    <td className="px-4 py-3 text-sm text-gray-900">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${user.pretest_score >= 70 ? 'bg-green-100 text-green-800' :
                        user.pretest_score >= 50 ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                        {user.pretest_score}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-900">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${user.posttest_score >= 70 ? 'bg-green-100 text-green-800' :
                        user.posttest_score >= 50 ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                        {user.posttest_score}
                      </span>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
            <div className="flex-1 flex justify-between sm:hidden">
              <button
                onClick={goToPrevious}
                disabled={currentPage === 1}
                className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Sebelum
              </button>
              <button
                onClick={goToNext}
                disabled={currentPage === totalPages}
                className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Sesudah
              </button>
            </div>
            <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
              <div>
                <p className="text-sm text-gray-700">
                  Menampilkan <span className="font-medium">{startIndex + 1}</span> to{' '}
                  <span className="font-medium">{Math.min(endIndex, filteredData.length)}</span> dari{' '}
                  <span className="font-medium">{filteredData.length}</span> total data
                  {searchTerm && (
                    <span className="text-gray-500"> (filtered from {userData.length} total)</span>
                  )}
                </p>
              </div>
              <div>
                <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                  <button
                    onClick={goToPrevious}
                    disabled={currentPage === 1}
                    className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span className="sr-only">Sebelum</span>
                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </button>

                  {getPageNumbers().map((page, index) => (
                    <button
                      key={index}
                      onClick={() => typeof page === 'number' && goToPage(page)}
                      disabled={page === '...'}
                      className={`relative inline-flex items-center px-4 py-2 border text-sm font-medium ${page === currentPage
                        ? 'z-10 bg-blue-50 border-blue-500 text-blue-600'
                        : page === '...'
                          ? 'border-gray-300 bg-white text-gray-500 cursor-default'
                          : 'border-gray-300 bg-white text-gray-500 hover:bg-gray-50'
                        }`}
                    >
                      {page}
                    </button>
                  ))}

                  <button
                    onClick={goToNext}
                    disabled={currentPage === totalPages}
                    className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span className="sr-only">Next</span>
                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </button>
                </nav>
              </div>
            </div>
          </div>
        )}

        <div className="bg-gray-50 px-4 py-3 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-700">
              {searchTerm ? (
                <>Menampilkan <span className="font-medium">{filteredData.length}</span> dari <span className="font-medium">{userData.length}</span> jumlah data</>
              ) : (
                <>Jumlah data: <span className="font-medium">{userData.length}</span></>
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};



export default UserDataTable;