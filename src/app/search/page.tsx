import { supabase } from '@/lib/supabaseClient';

export default async function SearchPage({ searchParams }: { searchParams: { q?: string } }) {
  const query = searchParams.q || '';
  let results = [];

  try {
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
          <p className="text-gray-700 mb-6">
            Menampilkan hasil untuk: <strong className="text-blue-600">{query}</strong>
          </p>
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
