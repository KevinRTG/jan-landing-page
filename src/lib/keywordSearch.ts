import { supabase } from './supabaseClient';

/**
 * @file keywordSearch.ts
 * @description Utility function untuk melakukan pencarian keyword di tabel `keywords` Supabase.
 * 
 * - Fungsi `findKeywordPath` menerima string query dari user.
 * - Query akan di-trim dan diubah menjadi lowercase agar konsisten.
 * - Supabase digunakan untuk mencari data di tabel `keywords` dengan kondisi:
 *   - Kolom `keywords` dicocokkan menggunakan operator `ilike` (case-insensitive LIKE).
 *   - Hanya mengambil kolom `path`.
 *   - Membatasi hasil ke 1 record.
 * - Jika ditemukan, fungsi mengembalikan `path` dari keyword tersebut.
 * - Jika error atau tidak ada hasil, fungsi mengembalikan `null`.
 * 
 * ⚠️ Catatan:
 * - Pastikan tabel `keywords` memiliki kolom `keywords` (string) dan `path` (string).
 * - Fungsi ini digunakan untuk navigasi dinamis berdasarkan keyword (misalnya di Footer).
 * 
 * @param {string} query - Kata kunci yang akan dicari.
 * @returns {Promise<string | null>} Path yang sesuai dengan keyword, atau `null` jika tidak ditemukan.
 * 
 * @example
 * ```ts
 * const path = await findKeywordPath("produk");
 * if (path) {
 *   router.push(path); // Navigasi ke path yang ditemukan
 * } else {
 *   router.push(`/search?q=produk`); // Fallback ke halaman pencarian
 * }
 * ```
 * 
 * @author [KevinRTG](https://github.com/KevinRTG)
 */
export async function findKeywordPath(query: string): Promise<string | null> {
  const trimmed = query.trim().toLowerCase();

  const { data, error } = await supabase
    .from('keywords')
    .select('path')
    .ilike('keywords', `%${trimmed}%`)
    .limit(1);

  if (error) {
    console.error('Supabase keywords search error:', error.message);
    return null;
  }

  return data?.[0]?.path || null;
}
