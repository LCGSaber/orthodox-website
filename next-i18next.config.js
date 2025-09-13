const path = require("path");

module.exports = {
  i18n: {
    defaultLocale: "sc",
    locales: ["sc", "tc", "en"],
    localeDetection: false,
  },
  localePath: path.resolve('./public/locales')
};
