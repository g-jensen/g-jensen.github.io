// Compiled by ClojureScript 1.10.764 {:static-fns true, :optimize-constants true}
goog.provide('set.cards');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('set.card_pickerc');
goog.require('set.utilc');
set.cards.initial_state = set.utilc.initial_state(set.utilc.deck,cljs.core.shuffle);
set.cards.state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(set.cards.initial_state);
set.cards.on_click_card_BANG_ = (function set$cards$on_click_card_BANG_(idx){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(set.cards.state,set.card_pickerc.pick,idx);
});
set.cards.card__GT_path = (function set$cards$card__GT_path(card){
return ["cards/",cljs.core.name(cljs.core.cst$kw$color.cljs$core$IFn$_invoke$arity$1(card)),"-",cljs.core.name(cljs.core.cst$kw$count.cljs$core$IFn$_invoke$arity$1(card)),"-",cljs.core.name(cljs.core.cst$kw$shape.cljs$core$IFn$_invoke$arity$1(card)),"-",cljs.core.name(cljs.core.cst$kw$shade.cljs$core$IFn$_invoke$arity$1(card)),".png"].join('');
});
set.cards.selected_QMARK_ = (function set$cards$selected_QMARK_(p1__24354_SHARP_){
return set.card_pickerc.selected_QMARK_(cljs.core.deref(set.cards.state),p1__24354_SHARP_);
});
set.cards.card__GT_button = (function set$cards$card__GT_button(idx,card){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input$card,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$class,(cljs.core.truth_(set.cards.selected_QMARK_(card))?"card-selected":null),cljs.core.cst$kw$id,["-card-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)].join(''),cljs.core.cst$kw$type,"image",cljs.core.cst$kw$src,set.cards.card__GT_path(card),cljs.core.cst$kw$on_DASH_click,(function (){
return set.cards.on_click_card_BANG_(idx);
})], null)], null);
});
set.cards.buttons = (function set$cards$buttons(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$card_DASH_container,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(set.cards.card__GT_button,cljs.core.cst$kw$cards.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(set.cards.state)))], null);
});
set.cards.stats = (function set$cards$stats(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,["found: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$found_DASH_sets_DASH_count.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(set.cards.state)))," ","exist: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(set.utilc.set_count(cljs.core.cst$kw$cards.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(set.cards.state))))].join('')], null);
});
