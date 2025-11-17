/**
 * @file aos.d.ts
 * @description Type declaration untuk library AOS (Animate On Scroll).
 * 
 * - Digunakan agar TypeScript mengenali modul `aos` saat diimpor.
 * - Tanpa deklarasi ini, TypeScript akan mengeluarkan error:
 *   `Cannot find module 'aos' or its corresponding type declarations.`
 * - File ini biasanya ditempatkan di folder `src/types/` agar terorganisir.
 * - Tidak mendefinisikan tipe detail AOS, hanya deklarasi modul dasar.
 * 
 * ⚠️ Catatan:
 * - Jika ingin menambahkan tipe lebih spesifik (misalnya untuk `AOS.init()`),
 *   bisa diperluas dengan interface atau type tambahan.
 * - Untuk penggunaan dasar, cukup dengan `declare module 'aos';`.
 * 
 * @example
 * ```ts
 * import AOS from 'aos';
 * import 'aos/dist/aos.css';
 * 
 * useEffect(() => {
 *   AOS.init({ duration: 800, once: true });
 * }, []);
 * ```
 * 
 * @author [KevinRTG](https://github.com/KevinRTG)
 */
declare module 'aos';
