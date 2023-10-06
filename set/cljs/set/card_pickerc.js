// Compiled by ClojureScript 1.10.764 {:static-fns true, :optimize-constants true}
goog.provide('set.card_pickerc');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('set.utilc');
set.card_pickerc.selected_QMARK_ = (function set$card_pickerc$selected_QMARK_(p__18991,card){
var map__18992 = p__18991;
var map__18992__$1 = (((((!((map__18992 == null))))?(((((map__18992.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18992.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18992):map__18992);
var selected_cards = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18992__$1,cljs.core.cst$kw$selected_DASH_cards);
return cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([card]),selected_cards);
});
set.card_pickerc.select = (function set$card_pickerc$select(state,card){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,cljs.core.cst$kw$selected_DASH_cards,cljs.core.conj,card);
});
set.card_pickerc.deselect = (function set$card_pickerc$deselect(state,card){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$selected_DASH_cards,(function (p1__18994_SHARP_){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([card]),p1__18994_SHARP_);
}));
});
set.card_pickerc.set_selected = (function set$card_pickerc$set_selected(p__18995,input){
var map__18996 = p__18995;
var map__18996__$1 = (((((!((map__18996 == null))))?(((((map__18996.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18996.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18996):map__18996);
var state = map__18996__$1;
var cards = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18996__$1,cljs.core.cst$kw$cards);
var card = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cards,input);
if(cljs.core.truth_(set.card_pickerc.selected_QMARK_(state,card))){
return set.card_pickerc.deselect(state,card);
} else {
return set.card_pickerc.select(state,card);
}
});
set.card_pickerc.replace_with_map = (function set$card_pickerc$replace_with_map(coll,m){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__18998_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(m,p1__18998_SHARP_,p1__18998_SHARP_);
}),coll);
});
set.card_pickerc.ensure_set_exists = (function set$card_pickerc$ensure_set_exists(p__18999){
var map__19000 = p__18999;
var map__19000__$1 = (((((!((map__19000 == null))))?(((((map__19000.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19000.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19000):map__19000);
var state = map__19000__$1;
var cards = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19000__$1,cljs.core.cst$kw$cards);
var shuffle_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19000__$1,cljs.core.cst$kw$shuffle_DASH_fn);
var src_deck = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19000__$1,cljs.core.cst$kw$src_DASH_deck);
if(cljs.core.truth_(set.utilc.contains_set_QMARK_(cards))){
return state;
} else {
return set.utilc.reset_cards_and_deck(state,src_deck,shuffle_fn);
}
});
set.card_pickerc.maybe_replace_cards = (function set$card_pickerc$maybe_replace_cards(p__19002){
var map__19003 = p__19002;
var map__19003__$1 = (((((!((map__19003 == null))))?(((((map__19003.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19003.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19003):map__19003);
var state = map__19003__$1;
var selected_cards = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19003__$1,cljs.core.cst$kw$selected_DASH_cards);
var deck = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19003__$1,cljs.core.cst$kw$deck);
var cards = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19003__$1,cljs.core.cst$kw$cards);
if(set.utilc.set_QMARK_(selected_cards)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$cards,set.card_pickerc.replace_with_map(cards,cljs.core.zipmap(selected_cards,cljs.core.take.cljs$core$IFn$_invoke$arity$2((3),deck))));
} else {
return state;
}
});
set.card_pickerc.maybe_take_from_deck = (function set$card_pickerc$maybe_take_from_deck(p__19005){
var map__19006 = p__19005;
var map__19006__$1 = (((((!((map__19006 == null))))?(((((map__19006.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19006.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19006):map__19006);
var state = map__19006__$1;
var selected_cards = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19006__$1,cljs.core.cst$kw$selected_DASH_cards);
var deck = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19006__$1,cljs.core.cst$kw$deck);
if(set.utilc.set_QMARK_(selected_cards)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$deck,cljs.core.drop.cljs$core$IFn$_invoke$arity$2((3),deck));
} else {
return state;
}
});
set.card_pickerc.maybe_reset_selected = (function set$card_pickerc$maybe_reset_selected(p__19008){
var map__19009 = p__19008;
var map__19009__$1 = (((((!((map__19009 == null))))?(((((map__19009.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19009.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19009):map__19009);
var state = map__19009__$1;
var selected_cards = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19009__$1,cljs.core.cst$kw$selected_DASH_cards);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((3),cljs.core.count(selected_cards))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$selected_DASH_cards,cljs.core.PersistentVector.EMPTY);
} else {
return state;
}
});
set.card_pickerc.update_found_sets_count = (function set$card_pickerc$update_found_sets_count(p__19011){
var map__19012 = p__19011;
var map__19012__$1 = (((((!((map__19012 == null))))?(((((map__19012.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19012.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19012):map__19012);
var state = map__19012__$1;
var selected_cards = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19012__$1,cljs.core.cst$kw$selected_DASH_cards);
var found_sets_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19012__$1,cljs.core.cst$kw$found_DASH_sets_DASH_count);
var found_sets_count__$1 = (function (){var or__4126__auto__ = found_sets_count;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})();
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$found_DASH_sets_DASH_count,((set.utilc.set_QMARK_((function (){var or__4126__auto__ = selected_cards;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})()))?(found_sets_count__$1 + (1)):found_sets_count__$1));
});
set.card_pickerc.handle_invalid_state = (function set$card_pickerc$handle_invalid_state(p__19014){
var map__19015 = p__19014;
var map__19015__$1 = (((((!((map__19015 == null))))?(((((map__19015.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19015.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19015):map__19015);
var state = map__19015__$1;
var cards = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19015__$1,cljs.core.cst$kw$cards);
var deck = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19015__$1,cljs.core.cst$kw$deck);
var src_deck = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19015__$1,cljs.core.cst$kw$src_DASH_deck);
var shuffle_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19015__$1,cljs.core.cst$kw$shuffle_DASH_fn);
if(cljs.core.not((function (){var and__4115__auto__ = set.utilc.contains_set_QMARK_(cards);
if(cljs.core.truth_(and__4115__auto__)){
return (cljs.core.count(deck) > (3));
} else {
return and__4115__auto__;
}
})())){
return set.utilc.reset_cards_and_deck(state,src_deck,shuffle_fn);
} else {
return state;
}
});
set.card_pickerc.pick = (function set$card_pickerc$pick(state,input){
return set.card_pickerc.handle_invalid_state(set.card_pickerc.maybe_reset_selected(set.card_pickerc.maybe_take_from_deck(set.card_pickerc.maybe_replace_cards(set.card_pickerc.update_found_sets_count(set.card_pickerc.set_selected(state,input))))));
});
