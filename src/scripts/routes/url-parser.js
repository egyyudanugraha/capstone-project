const URLParser = {
  _urlSplitter(url) {
    const urlSplit = url.split('/');
    return {
      resource: urlSplit[1] || null,
      id: urlSplit[2] || null,
      verb: urlSplit[3] || null,
    };
  },

  _urlCombiner(splitedUrl) {
    return (splitedUrl.resource ? `/${splitedUrl.resource}` : '/') + (splitedUrl.id ? '/:id' : '') + (splitedUrl.verb ? `/${splitedUrl.verb}` : '');
  },

  UrlWithCombiner() {
    const url = window.location.hash.slice(1).toLowerCase();
    const splitUrl = this._urlSplitter(url);
    return this._urlCombiner(splitUrl);
  },

  UrlWithoutCombiner() {
    const url = window.location.hash.slice(1).toLowerCase();
    return this._urlSplitter(url);
  },
};

export default URLParser;
