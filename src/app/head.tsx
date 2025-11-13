export default function Head() {
  return (
    <>
      <link rel="icon" href="/favicon.ico" type="image/png" />
      <meta name="theme-color" content="#1f2937" />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "JAN Nusantara",
          "url": "https://jannusantara.co.id",
          "logo": "https://jannusantara.co.id/logo-jan1.png",
          "sameAs": [
            "https://instagram.com/jan_nusantara",
            "https://linkedin.com/company/jan-nusantara"
          ]
        })}
      </script>
    </>
  );
}
