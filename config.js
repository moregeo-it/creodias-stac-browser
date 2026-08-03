const TITLE = "CREODIAS STAC API";
export default {
  catalogUrl: "https://stac.creodias.eu",
  catalogTitle: TITLE,
  catalogTitleAfterImage: "STAC API",
  catalogImage: "https://creodias.eu/wp-content/themes/creodias/img/logo.svg",
  allowExternalAccess: false, // Must be true if catalogUrl is not given
  allowedDomains: [
    "creodias.eu",
    "download.dataspace.copernicus.eu"
  ],
  enforcedColorMode: "dark",
  detectLocaleFromBrowser: true,
  storeLocale: true,
  locale: "en",
  fallbackLocale: "en",
  supportedLocales: [
    "ar",
    "de",
    "es",
    "en",
    "fr",
    "id",
    "it",
    "ja",
    "pl",
    "pt",
    "ro",
    "ru",
    "sv"
  ],
  apiCatalogPriority: null,
  useTileLayerAsFallback: false,
  displayGeoTiffByDefault: false,
  displayPreview: true,
  displayOverview: true,
  displayOverviewsForChildren: false,
  maxDisplayPixels: null,
  buildTileUrlTemplate: null,
  getMapSourceOptions: null,
  getStacLayerOptions: null,
  pathPrefix: "/",
  historyMode: "history",
  cardViewMode: "cards",
  showFavorites: true,
  defaultCollectionSort: null,
  defaultItemSort: null,
  showKeywordsInItemCards: false,
  showKeywordsInCatalogCards: false,
  preferredAssets: true,
  showThumbnailsAsAssets: false,
  searchResultsPerPage: null,
  itemsPerPage: null,
  collectionsPerPage: null,
  maxEntriesPerPage: 1000,
  defaultThumbnailSize: null,
  crossOriginMedia: null,
  requestHeaders: {},
  requestQueryParameters: {},
  socialSharing: ['email', 'bsky', 'mastodon', 'x'],
  preprocessSTAC: (stac, state, getters) => {
    if (getters.toBrowserPath(stac.getAbsoluteUrl()) === '/') {
      stac.title = TITLE;
      stac.description = "Access all EO data offered by CREODIAS through their STAC API.";
    }
    return stac;
  },
  authConfig: {
    type: "openIdConnect",
    openIdConnectUrl: "https://identity.cloudferro.com/auth/realms/creodias-new/.well-known/openid-configuration"
  },
  transactions: 'auto',
  transactionsRequireLogin: true,
  transactionsRequirePreflight: true,
  crs: {},
  footerLinks: [
    {
      label: "Contact us",
      url: "https://creodias.eu/contact/"
    },
    {
      label: "Terms of service",
      url: "https://creodias.eu/terms-of-service/"
    },
    {
      label: "Privacy policy",
      url: "https://creodias.eu/privacy-policy/"
    },
    {
      label: "Cookie policy",
      url: "https://creodias.eu/cookie-policy/"
    }
  ]
};
