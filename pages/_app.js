import Script from "next/script";
import "../styles/global.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Script src="https://js.stripe.com/v3/" strategy="beforeInteractive" />
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.13.1/underscore-min.js" />
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/moment.min.js" />
      <Component {...pageProps} />
    </>
  );
}
