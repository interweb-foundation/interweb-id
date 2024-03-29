import { NextSeo } from "next-seo";

import config from "../../config/site";
import seo from "../../config/seo";

interface HeadProps {
  title: string;
  description: string;
  route: `/${string}`;
  images?: {
    url: string;
    alt: string;
    width?: number;
    height?: number;
  }[];
  noindex?: boolean;
  nofollow?: boolean;
}

export const Head = ({
  title,
  description,
  route,
  images,
  nofollow = false,
  noindex = false,
}: HeadProps) => {
  const graph = {
    ...seo.openGraph,
    ...{ images: images ? images : seo.openGraph.images },
  };

  return (
    <NextSeo
      nofollow={nofollow}
      noindex={noindex}
      title={title}
      description={description}
      canonical={config.site.canonical + route}
      openGraph={graph}
      twitter={seo.twitter}
    />
  );
};
