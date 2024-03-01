const siteUrl = 'https://interweb.id';
const siteAddress = new URL(siteUrl);
const canonical = siteAddress.href.slice(0, -1);

module.exports = {
  company: {
    nick: 'Interweb ID',
    name: 'Interweb ID',
    addr: ['San Francisco, CA'],
    legalCounty: 'San Francisco',
    legalState: 'California'
  },
  site: {
    siteUrl,
    www: `www.${siteAddress.host}`,
    host: siteAddress.host,
    canonical
  },
  emails: {
    hello: 'hello@webincubator.com',
    support: 'support@webincubator.com',
    abuse: 'abuse@webincubator.com',
    privacy: 'privacy@webincubator.com',
    legal: 'legal@webincubator.com',
    copyright: 'copyright@webincubator.com',
    arbitrationOptOut: 'arbitration-opt-out@webincubator.com'
  }
};
