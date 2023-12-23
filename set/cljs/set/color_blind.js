// Compiled by ClojureScript 1.10.764 {:static-fns true, :optimize-constants true}
goog.provide('set.color_blind');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('set.settings');
set.color_blind.color_blind_mode_QMARK_ = reagent.core.cursor(set.settings.state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$color_DASH_blind_DASH_mode_QMARK_], null));
set.color_blind.on_toggle_color_blind_BANG_ = (function set$color_blind$on_toggle_color_blind_BANG_(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(set.color_blind.color_blind_mode_QMARK_,cljs.core.not);
});
set.color_blind.button = (function set$color_blind$button(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_LT__GT_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"checkbox",cljs.core.cst$kw$id,"-color-blind-toggle",cljs.core.cst$kw$on_DASH_click,set.color_blind.on_toggle_color_blind_BANG_], null)], null),"color blind mode"], null);
});
