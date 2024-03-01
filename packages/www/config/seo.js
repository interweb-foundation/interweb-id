const siteUrl = 'https://interweb.id';
const siteAddress = new URL(siteUrl);
const canonical = siteAddress.href.slice(0, -1);
const title = 'Interweb ID';
const description = 'Take full control of your cryptographic operations and web3 identity';
const fbAppId = null;
module.exports = {
  title,
  canonical,
  description,
  openGraph: {
    type: 'website',
    url: siteUrl,
    title,
    description,
    site_name: title,
    images: [
      {
        url: canonical + '/og_image.png',
        // width: 942,
        // height: 466,
        alt: title
      }
    ]
  },
  twitter: {
    handle: '@InterchainID',
    site: '@InterchainID'
  },
  facebook: fbAppId
    ? {
      appId: fbAppId
    }
    : undefined
};
