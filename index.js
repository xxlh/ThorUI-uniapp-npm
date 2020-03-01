
// Exported mixins

// Exported utils

// Require all the components that start with 'BaseXXX.vue'
const components = require.context('./components', true, /[a-z0-9]+\.vue$/)

export function install (Vue, options = {}) {

  // To extract the component name
  const nameReg = /([a-z0-9]+)\./i
  // Registration
  components.keys().forEach(key => {
    const name = key.match(nameReg)[1]
    Vue.component(components(key).name||name, components(key))
  })
}

const plugin = {
  // eslint-disable-next-line no-undef
  version: VERSION,
  install,
}

export default plugin
export {default as tuiActionsheet} from './components/actionsheet/actionsheet.vue'
export {default as tuiBadge} from './components/badge/badge.vue'
export {default as tuiBottomPopup} from './components/bottom-popup/bottom-popup.vue'
export {default as tuiButton} from './components/button/button.vue'
export {default as tuiCard} from './components/card/card.vue'
export {default as tuiCountdown} from './components/countdown/countdown.vue'
export {default as tuiDateTime} from './components/dateTime/dateTime.vue'
export {default as tuiDivider} from './components/divider/divider.vue'
export {default as tuiDrawer} from './components/drawer/drawer.vue'
export {default as tuiDropdownList} from './components/dropdown-list/dropdown-list.vue'
export {default as tuiAlert} from './components/extend/alert/alert.vue'
export {default as tuiButtonExtend} from './components/extend/button/button.vue'
export {default as tuiTipsExtend} from './components/extend/tips/tips.vue'
export {default as tuiToast} from './components/extend/toast/toast.vue'
export {default as tuiFooter} from './components/footer/footer.vue'
export {default as tuiGrid} from './components/grid/grid.vue'
export {default as tuiGridItem} from './components/grid-item/grid-item.vue'
export {default as tuiIcon} from './components/icon/icon.vue'
export {default as tuiKeyboard} from './components/keyboard/keyboard.vue'
export {default as tuiKeyboardInput} from './components/keyboard-input/keyboard-input.vue'
export {default as tuiListCell} from './components/list-cell/list-cell.vue'
export {default as tuiListView} from './components/list-view/list-view.vue'
export {default as tuiLoading} from './components/loading/loading.vue'
export {default as tuiLoadmore} from './components/loadmore/loadmore.vue'
export {default as tuiModal} from './components/modal/modal.vue'
export {default as tuiNomore} from './components/nomore/nomore.vue'
export {default as tuiNumberbox} from './components/numberbox/numberbox.vue'
export {default as tuiRate} from './components/rate/rate.vue'
export {default as tuiScrollTop} from './components/scroll-top/scroll-top.vue'
export {default as tuiSticky} from './components/sticky/sticky.vue'
export {default as tuiSwipeAction} from './components/swipe-action/swipe-action.vue'
// export {default as tuiMediaList} from './components/tabNvue/mediaList.nvue'
// export {default as tuiTabBar} from './components/tabNvue/tabBar.nvue'
// export {default as tuiTabContent} from './components/tabNvue/tabContent.nvue'
// export {default as tuiTabs} from './components/tabNvue/tabs.nvue'
export {default as tuiTag} from './components/tag/tag.vue'
export {default as tuiTimeAxis} from './components/time-axis/time-axis.vue'
export {default as tuiTimeaxisItem} from './components/timeaxis-item/timeaxis-item.vue'
export {default as tuiTips} from './components/tips/tips.vue'
export {default as tuiTopDropdown} from './components/top-dropdown/top-dropdown.vue'
export {default as tuiCollapse} from './components/tui-collapse/tui-collapse.vue'
export {default as tuiFab} from './components/tui-fab/tui-fab.vue'
export {default as tuiSkeleton} from './components/tui-skeleton/tui-skeleton.vue'
export {default as tuiTabbar} from './components/tui-tabbar/tui-tabbar.vue'
export {default as tuiTabs} from './components/tui-tabs/tui-tabs.vue'
export {default as tuiUpload} from './components/tui-upload/tui-upload.vue'


// Auto-install
let GlobalVue = null
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue
}
if (GlobalVue) {
  GlobalVue.use(plugin)
}
