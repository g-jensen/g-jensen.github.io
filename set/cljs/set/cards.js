// Compiled by ClojureScript 1.10.764 {:static-fns true, :optimize-constants true}
goog.provide('set.cards');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('set.card_pickerc');
goog.require('set.cardsc');
goog.require('set.color_blind');
set.cards.initial_state = set.cardsc.initial_state(set.cardsc.deck,cljs.core.shuffle);
set.cards.state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(set.cards.initial_state);
set.cards.on_click_card_BANG_ = (function set$cards$on_click_card_BANG_(idx){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(set.cards.state,set.card_pickerc.pick,idx);
});
set.cards.selected_QMARK_ = (function set$cards$selected_QMARK_(p1__23025_SHARP_){
return set.card_pickerc.selected_QMARK_(cljs.core.deref(set.cards.state),p1__23025_SHARP_);
});
set.cards.card__GT_button = (function set$cards$card__GT_button(idx,card,_){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$card,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$class,(cljs.core.truth_(set.cards.selected_QMARK_(card))?"card-selected":null),cljs.core.cst$kw$id,["-card-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)].join(''),cljs.core.cst$kw$on_DASH_click,(function (){
return set.cards.on_click_card_BANG_(idx);
})], null),(cljs.core.truth_(cljs.core.deref(set.color_blind.color_blind_mode_QMARK_))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$color_DASH_blind_DASH_indicator,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,["-color-blind-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)].join('')], null),set.cardsc.color_label(card)], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"image",cljs.core.cst$kw$src,set.cardsc.card__GT_path(card)], null)], null)], null);
});
set.cards.buttons = (function set$cards$buttons(settings){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$card_DASH_container,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,card){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [set.cards.card__GT_button,idx,card,settings], null);
}),cljs.core.cst$kw$cards.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(set.cards.state)))], null);
});
