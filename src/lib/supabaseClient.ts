import { createClient } from '@supabase/supabase-js';

/**
 * @file supabaseClient.ts
 * @description Inisialisasi Supabase client untuk aplikasi Next.js.
 * 
 * Supabase digunakan sebagai backend-as-a-service (BaaS) yang menyediakan:
 * - Database PostgreSQL dengan query SQL dan API otomatis.
 * - Autentikasi (Auth) dengan dukungan email, OAuth, dan magic link.
 * - Storage untuk file/gambar.
 * - Realtime API untuk subscription data.
 * 
 * Client ini dibuat menggunakan `createClient` dari library `@supabase/supabase-js`.
 * Konfigurasi Supabase diambil dari environment variables:
 * - `NEXT_PUBLIC_SUPABASE_URL` → URL project Supabase.
 * - `NEXT_PUBLIC_SUPABASE_ANON_KEY` → Public anon key untuk akses API.
 * 
 * ⚠️ Catatan Penting:
 * - Pastikan environment variables sudah diatur di file `.env.local`.
 * - Jangan pernah expose **service role key** di client-side, gunakan hanya **anon key**.
 * - Client ini diekspor agar dapat digunakan di seluruh aplikasi (misalnya untuk query data produk, autentikasi, dll).
 * 
 * @example
 * ```ts
 * import { supabase } from '@/lib/supabaseClient';
 * 
 * // Contoh query: ambil semua data dari tabel "products"
 * const { data, error } = await supabase.from('products').select('*');
 * 
 * if (error) {
 *   console.error(error.message);
 * } else {
 *   console.log(data);
 * }
 * ```
 * 
 * @see https://supabase.com/docs/reference/javascript/initializing
 * @author [KevinRTG](https://github.com/KevinRTG)
 */

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

// Membuat instance Supabase client dengan konfigurasi URL dan anon key
export const supabase = createClient(supabaseUrl, supabaseKey);
