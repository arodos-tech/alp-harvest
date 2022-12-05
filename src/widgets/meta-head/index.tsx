import Head from "next/head";
import React from "react";

import { _Base_Url } from "config/url";

type Props = {
  title: string;
};

const MetaHead = ({ title }: Props) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <script
          src="https://identity.netlify.com/v1/netlify-identity-widget.js"
          async
        ></script>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="“canonical”" href={`${_Base_Url}`} />
        <link rel="shortcut icon" href="/icons/logo.jpg" type="image/x-icon" />

        <meta name="title" content="Alp HARVEST" />
        <meta name="description" content="Alp HARVEST" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${_Base_Url}`} />
        <meta property="og:title" content="Alp HARVEST" />
        <meta
          name="description"
          property="og:description"
          content="Alp HARVEST"
        />
        <meta property="og:image" content={`${_Base_Url}/icons/logo.jpg`} />
        <meta
          property="og:image:secure_url"
          content={`${_Base_Url}/icons/logo.jpg`}
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={`${_Base_Url}`} />
        <meta property="twitter:title" content="Alp HARVEST" />
        <meta property="twitter:description" content="Alp HARVEST" />
        <meta
          property="twitter:image"
          content={`${_Base_Url}/icons/logo.jpg`}
        />
      </Head>
    </>
  );
};

export default MetaHead;
