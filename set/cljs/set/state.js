// Compiled by ClojureScript 1.10.764 {}
goog.provide('set.state');
goog.require('cljs.core');
goog.require('reagent.core');
set.state.state = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
set.state.cursor = (function set$state$cursor(path){
return reagent.core.cursor.call(null,set.state.state,path);
});

//# sourceMappingURL=state.js.map
