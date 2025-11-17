/**
 * Komponen Head untuk aplikasi Next.js.
 * 
 * - Digunakan untuk mendefinisikan elemen-elemen <head> pada HTML.
 * - Menyediakan favicon, meta tag verifikasi Google, dan structured data (JSON-LD).
 * - Structured data mengikuti standar Schema.org untuk tipe "Organization",
 *   sehingga membantu SEO dan integrasi dengan mesin pencari.
 * 
 * @returns {JSX.Element} Elemen-elemen <head> yang akan dimasukkan ke dalam halaman.
 */
export default function Head() {
  return (
    <>
      {/* Favicon untuk tab browser */}
      <link rel="icon" href="/favicon.ico" type="image/png" />

      {/* Meta tag verifikasi Google Search Console */}
      <meta
        name="google-site-verification"
        content="qesU1wefPe8EnnbllPM-i7k-wXIs_Fn0DAnG2H65BhQ"
      />

      {/* Structured data JSON-LD untuk mendeskripsikan organisasi JAN Nusantara */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "JAN Nusantara",
          "url": "https://jannusantara.co.id",
          "logo": "https://jannusantara.co.id/logo-jan1.png",
          "sameAs": [
            "https://instagram.com/jan_nusantara",
            "https://linkedin.com/company/jan-nusantara",
          ],
        })}
      </script>
    </>
  );
}
