(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{319:function(e,t,r){"use strict";r.r(t);r(30),r(18),r(29),r(38),r(19),r(39);var o=r(11);function n(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?n(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):n(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var d={layout:"page",name:"App",components:{},data:function(){return{options:[{text:"Disabled",value:"0"},{text:"High (64kbps)",value:"h"},{text:"Medium (48kbps)",value:"m"},{text:"Low (24kbps)",value:"l"}]}},computed:{loginStatus:function(){return this.$store.state.app.loginStatus},server:function(){return this.$store.state.app.server},seekForwards:{get:function(){return this.$store.state.app.groupDetails.seekForwards},set:function(e){var t=l(l({},this.$store.state.app.groupDetails),{},{seekForwards:e});this.$store.commit("app/groupDetails",t),this.$store.dispatch("app/setGroupDetails")}},seekBackwards:{get:function(){return this.$store.state.app.groupDetails.seekBackwards},set:function(e){var t=l(l({},this.$store.state.app.groupDetails),{},{seekBackwards:e});this.$store.commit("app/groupDetails",t),this.$store.dispatch("app/setGroupDetails")}},playback_speed:{get:function(){return this.$store.state.app.groupDetails.playback_speed},set:function(e){var t=l(l({},this.$store.state.app.groupDetails),{},{playback_speed:e});this.$store.commit("app/groupDetails",t),this.$store.dispatch("app/setGroupDetails")}},transcode:{get:function(){return this.$store.state.app.groupDetails.transcode},set:function(e){var t=l(l({},this.$store.state.app.groupDetails),{},{transcode:e});this.$store.commit("app/groupDetails",t),this.$store.dispatch("app/setGroupDetails")}},darkMode:{get:function(){return this.$store.state.app.groupDetails.darkMode},set:function(e){var t=l(l({},this.$store.state.app.groupDetails),{},{darkMode:e});this.$store.commit("app/groupDetails",t),this.$store.dispatch("app/setGroupDetails")}}},watch:{},mounted:function(){this.$store.commit("app/activepage","settings")},methods:{}},c=r(6),component=Object(c.a)(d,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"p-16 lg:p-3 px-6 lg:px-12 w-screen lg:w-full content-area overflow-auto lg:mr-4"},[r("h2",{staticClass:"my-6 text-xl font-semibold"},[e._v("Player Settings")]),e._v(" "),r("div",{staticClass:"bg-gray-50 dark:bg-gray-840 rounded-lg border border-gray-300 dark:border-gray-860 text-sm"},[r("div",{staticClass:"p-4 flex flex-col lg:flex-row justify-between items-center border-b border-gray-200 dark:border-gray-800"},[e._m(0),e._v(" "),r("div",{staticClass:"w-full max-w-xs"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.seekForwards,expression:"seekForwards"}],staticClass:"w-full p-3 bg-gray-100 dark:bg-gray-860 border border-gray-300 dark:border-gray-900 shadow-inner leading-normal rounded-xl",domProps:{value:e.seekForwards},on:{input:function(t){t.target.composing||(e.seekForwards=t.target.value)}}})])]),e._v(" "),r("div",{staticClass:"p-4 flex flex-col lg:flex-row justify-between items-center border-b border-gray-200 dark:border-gray-800"},[e._m(1),e._v(" "),r("div",{staticClass:"w-full max-w-xs"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.seekBackwards,expression:"seekBackwards"}],staticClass:"w-full p-3 bg-gray-100 dark:bg-gray-860 border border-gray-300 dark:border-gray-900 shadow-inner leading-normal rounded-xl",domProps:{value:e.seekBackwards},on:{input:function(t){t.target.composing||(e.seekBackwards=t.target.value)}}})])]),e._v(" "),r("div",{staticClass:"p-4 flex flex-col lg:flex-row justify-between items-center border-b border-gray-200 dark:border-gray-800"},[e._m(2),e._v(" "),r("div",{staticClass:"w-full max-w-xs"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.playback_speed,expression:"playback_speed"}],staticClass:"w-full p-3 bg-gray-100 dark:bg-gray-860 border border-gray-300 dark:border-gray-900 shadow-inner leading-normal rounded-xl",domProps:{value:e.playback_speed},on:{input:function(t){t.target.composing||(e.playback_speed=t.target.value)}}})])]),e._v(" "),r("div",{staticClass:"p-4 flex flex-col lg:flex-row justify-between items-center border-b border-gray-200 dark:border-gray-800"},[e._m(3),e._v(" "),r("div",{staticClass:"w-full max-w-xs"},[r("select",{directives:[{name:"model",rawName:"v-model",value:e.transcode,expression:"transcode"}],staticClass:"w-full p-3 bg-gray-100 dark:bg-gray-860 border border-gray-300 dark:border-gray-900 shadow-inner leading-normal rounded-xl",on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.transcode=t.target.multiple?r:r[0]}}},e._l(e.options,(function(option,t){return r("option",{key:t,domProps:{value:option.value}},[e._v("\n            "+e._s(option.text)+"\n          ")])})),0)])]),e._v(" "),r("div",{staticClass:"p-4 flex flex-col lg:flex-row justify-between items-center border-b border-gray-200 dark:border-gray-800"},[e._m(4),e._v(" "),r("div",{staticClass:"w-full max-w-xs"},[r("select",{directives:[{name:"model",rawName:"v-model",value:e.darkMode,expression:"darkMode"}],staticClass:"w-full p-3 bg-gray-100 dark:bg-gray-860 border border-gray-300 dark:border-gray-900 shadow-inner leading-normal rounded-xl",on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.darkMode=t.target.multiple?r:r[0]}}},[r("option",{domProps:{value:!1}},[e._v("Light mode")]),e._v(" "),r("option",{domProps:{value:!0}},[e._v("Dark mode")])])])])])])}),[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"flex flex-col mb-4 lg:mb-0"},[r("span",{staticClass:"font-semibold mb-1"},[e._v("Skip forwards amount (seconds)")]),e._v(" "),r("span",{},[e._v("This controls how many seconds to skip the book forward when clicking on the button in the player.")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"flex flex-col mb-4 lg:mb-0"},[r("span",{staticClass:"font-semibold mb-1"},[e._v("Skip backwards amount (seconds)")]),e._v(" "),r("span",{},[e._v("This controls how many seconds to skip the book forward when clicking on the button in the player.")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"flex flex-col mb-4 lg:mb-0"},[r("span",{staticClass:"font-semibold mb-1"},[e._v("Playback speed")]),e._v(" "),r("span",{},[e._v("Playback speed allows you to increase (or decrease) the amount of time it takes to listen to a book, without changing the pitch.")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"flex flex-col mb-4 lg:mb-0"},[r("span",{staticClass:"font-semibold mb-1"},[e._v("Transcode")]),e._v(" "),r("span",{},[e._v("Enabling transcoding will transcode audio files to the opus format in order to save bandwidth while keeping an acceptable sound quality but may result in slower downloads.")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"flex flex-col mb-4 lg:mb-0"},[r("span",{staticClass:"font-semibold mb-1"},[e._v("Theme")]),e._v(" "),r("span",{},[e._v("Pick whether you would prefer light mode or dark mode")])])}],!1,null,null,null);t.default=component.exports}}]);