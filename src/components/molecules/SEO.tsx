import Head from "next/head";
import React from "react";

interface Props {
  title: string;
  description: string;
}
function SEO(props: Props) {
  const { title, description } = props;
  return (
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@AdrianBusse2" />
      <meta name="twitter:creator" content="@AdrianBusse2" />
      <meta name="twitter:url" content="http://www.adrianbusse.xyz" />
    </Head>
  );
}

export default SEO;
