import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  LoadingBarModule,
  LoadingBarService
} from "./chunk-UAJRFNWP.js";
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
  RouterModule
} from "./chunk-ACEKIQZJ.js";
import "./chunk-CVA2OX2C.js";
import "./chunk-4BH4T2LC.js";
import "./chunk-5RQG3EB4.js";
import "./chunk-2CAEBTMM.js";
import "./chunk-YOJAVBCG.js";
import {
  NgModule,
  setClassMetadata,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵinject
} from "./chunk-GV7VGTF2.js";
import "./chunk-EXQLYBKH.js";
import "./chunk-HGVHWTGE.js";
import "./chunk-IUOK4BIQ.js";
import "./chunk-GBTWTWDP.js";

// node_modules/@ngx-loading-bar/router/fesm2015/ngx-loading-bar-router.mjs
var LoadingBarRouterModule = class {
  constructor(router, loader) {
    const ref = loader.useRef("router");
    router.events.subscribe((event) => {
      const navState = this.getCurrentNavigationState(router);
      if (navState && navState.ignoreLoadingBar) {
        return;
      }
      if (event instanceof NavigationStart) {
        ref.start();
      }
      if (event instanceof NavigationError || event instanceof NavigationEnd || event instanceof NavigationCancel) {
        ref.complete();
      }
    });
  }
  getCurrentNavigationState(router) {
    const currentNavigation = router.getCurrentNavigation && router.getCurrentNavigation();
    if (currentNavigation && currentNavigation.extras) {
      return currentNavigation.extras.state;
    }
    return {};
  }
};
LoadingBarRouterModule.ɵfac = function LoadingBarRouterModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || LoadingBarRouterModule)(ɵɵinject(Router), ɵɵinject(LoadingBarService));
};
LoadingBarRouterModule.ɵmod = ɵɵdefineNgModule({
  type: LoadingBarRouterModule,
  imports: [RouterModule, LoadingBarModule],
  exports: [RouterModule, LoadingBarModule]
});
LoadingBarRouterModule.ɵinj = ɵɵdefineInjector({
  imports: [[RouterModule, LoadingBarModule], RouterModule, LoadingBarModule]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoadingBarRouterModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule, LoadingBarModule],
      exports: [RouterModule, LoadingBarModule]
    }]
  }], function() {
    return [{
      type: Router
    }, {
      type: LoadingBarService
    }];
  }, null);
})();
export {
  LoadingBarRouterModule
};
//# sourceMappingURL=@ngx-loading-bar_router.js.map
