import AppStore from "AppStore";
import "assets/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }: AppProps) {
  //@ts-ignore
  // if (window.netlifyIdentity) {
  //   //@ts-ignore
  //   window.netlifyIdentity.on("init", (user) => {
  //     if (!user) {
  //       //@ts-ignore
  //       window.netlifyIdentity.on("login", () => {
  //         document.location.href = "/admin/";
  //       });
  //     } else {
  //       return <Component {...pageProps} />;
  //     }
  //   });
  // }
  return (
    <>
    <Head>
      {/* <!-- Basic Meta Tags --> */}
      <meta charSet="UTF-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <meta name="description" content="Alpharvest - Open up your palate to the tastiest wonders. Discover delightful food experiences with premium ingredients and culinary excellence."/>
      <meta name="keywords" content="Alpharvest, gourmet food, premium ingredients, culinary experiences, tasty food, food wonders"/>
      <meta name="author" content="Alpharvest"/>

      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website"/>
      <meta property="og:title" content="Alpharvest - Open Up Your Palate to the Tastiest Wonders"/>
      <meta property="og:description" content="Embark on a culinary journey with Alpharvest. Explore premium ingredients, gourmet delights, and food experiences designed to surprise your palate."/>
      <meta property="og:url" content="https://alpharvest.com"/>
      <meta property="og:image" content="https://alpharvest.com/icons/logo.jpg"/> 
      <meta property="og:image:alt" content="Alpharvest - Gourmet Food Experience"/>

      {/* <!-- Twitter --> */}
      <meta name="twitter:card" content="summary_large_image"/>
      <meta name="twitter:title" content="Alpharvest - Open Up Your Palate to the Tastiest Wonders"/>
      <meta name="twitter:description" content="Discover culinary excellence with Alpharvest's gourmet ingredients and delightful flavors. Elevate your food experience today!"/>
      <meta name="twitter:image" content="https://alpharvest.com/icons/logo.jpg"/>

    </Head>
    <Component {...pageProps} />
    </>
);
}

export default MyApp;
