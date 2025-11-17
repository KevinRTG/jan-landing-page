import { supabase } from '@/lib/supabaseClient';

/**
 * @file page.tsx (SearchPage)
 * @description Halaman pencarian proyek untuk CV. JAN Nusantara.
 * 
 * - Menggunakan Supabase sebagai database untuk mengambil data dari tabel `projects`.
 * - Query pencarian dilakukan dengan metode `.ilike()` pada kolom `title`:
 *   - Mendukung pencarian case-insensitive.
 *   - Format query: `%kata_kunci%`.
 * - Handling:
 *   - Jika terjadi error Supabase → tampilkan di console.
 *   - Jika tidak ada hasil → tampilkan pesan "Tidak ditemukan hasil yang cocok."
 *   - Jika tidak ada query → tampilkan pesan "Silakan masukkan kata kunci pencarian."
 * - Styling berbasis Tailwind CSS untuk layout responsif dan tipografi.
 * 
 * ⚠️ Catatan:
 * - Pastikan tabel `projects` di Supabase memiliki kolom `id`, `title`, `location`, dan `content`.
 * - Halaman ini otomatis tersedia di route `/search`.
 * - Parameter pencarian (`q`) diambil dari `searchParams` Next.js.
 * 
 * @param {Object} props - Properti komponen.
 * @param {Object} props.searchParams - Parameter pencarian dari URL.
 * @param {string} [props.searchParams.q] - Kata kunci pencarian (opsional).
 * @returns {JSX.Element} Halaman hasil pencarian proyek.
 * 
 * @example
 * ```tsx
 * // URL: /search?q=jembatan
 * <SearchPage searchParams={{ q: "jembatan" }} />
 * ```
 * 
 * @author [KevinRTG](https://github.com/KevinRTG)
 */
export default async function SearchPage({ searchParams }: { searchParams: { q?: string } }) {
  const query = searchParams.q || '';
  let results = [];

  try {
    // Query ke Supabase: cari proyek berdasarkan judul
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .ilike('title', `%${query}%`);

    if (error) {
      console.error('Supabase error:', error.message);
    } else {
      results = data || [];
    }
  } catch (err) {
    console.error('Unexpected error:', err);
  }

  return (
    <section className="py-16 px-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">Hasil Pencarian</h1>

      {query ? (
        <>
          {/* Menampilkan kata kunci pencarian */}
          <p className="text-gray-700 mb-6">
            Menampilkan hasil untuk: <strong className="text-blue-600">{query}</strong>
          </p>

          {/* Jika ada hasil pencarian */}
          {results && results.length > 0 ? (
            <ul className="space-y-4">
              {results.map((item) => (
                <li key={item.id} className="border rounded p-4 bg-white shadow-sm">
                  <h2 className="text-lg font-semibold text-gray-800">{item.title}</h2>
                  <p className="text-sm text-gray-600">{item.location}</p>
                  <p className="text-sm mt-2 text-gray-700">{item.content}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">Tidak ditemukan hasil yang cocok.</p>
          )}
        </>
      ) : (
        <p className="text-gray-500">Silakan masukkan kata kunci pencarian.</p>
      )}
    </section>
  );
}
