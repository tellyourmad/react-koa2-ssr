import Loadable from "react-loadable";
// import loadable from '@loadable/component';
import Loading from "./section/Loading";
const setLoadable = function(section, requireComp) {
  return Loadable({
    loader: section,
    loading: Loading
  });
};

export const routes = [
  {
    path: "/",
    exact: true,
    redirect: "/Index"
  },
  {
    path: "/Index",
    component: setLoadable(() =>
      import(/* webpackChunkName: "Home" */ "./section/IndexPage/Index.jsx")
    )
  },
  {
    path: "/Mine",
    component: setLoadable(() =>
      import(/* webpackChunkName: "Mine" */ "./section/Mine/Index.jsx")
    )
  },
  {
    path: "/AjaxTest",
    component: setLoadable(() =>
      import(/* webpackChunkName: "AjaxTest" */ "./section/AjaxTest/Index.jsx")
    )
  }
];

export function matchComp(uri) {
  for (let item of routes) {
    // 路由匹配逻辑需要优化，这里太笼统了
    if (new RegExp(`^${item.path}(/?|(/[^/]+)*)$`).test(uri)) {
      return item;
    }
  }
  return false;
}
