// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import { convertNumber } from "~/assets/js/jnumjs";
// import "~/assets/css/index.scss";
import "~/assets/css/main.scss";
import DefaultLayout from "~/layouts/Default.vue";

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);
  Object.defineProperty(Vue.prototype, "$convert", {
    value: convertNumber
  });
  head.bodyAttrs = { id: "#app" };
}
