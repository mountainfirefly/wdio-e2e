/** @format */

class Loader {
  get loader() {
    // eslint-disable-next-line no-undef
    return $('/html/body/div[2]/div[3]/div');
  }
  waitLoaderDisabled() {
    this.loader.waitForDisplayed(undefined, true);
  }
}
module.exports = Loader;
