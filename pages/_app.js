
function MyApp({ Component, pageProps }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Lenders Recovery Service",
        "image": "https://www.lrskc.com/images/logo.png",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "123 Recovery Blvd",
          "addressLocality": "Kansas City",
          "addressRegion": "MO",
          "postalCode": "64108"
        },
        "url": "https://www.lrskc.com",
        "telephone": "(816) 777-8800"
      }) }} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
