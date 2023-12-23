// Compiled by ClojureScript 1.10.764 {:static-fns true, :optimize-constants true}
goog.provide('set.card_pickerc');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('set.cardsc');
set.card_pickerc.selected_QMARK_ = (function set$card_pickerc$selected_QMARK_(p__22997,card){
var map__22998 = p__22997;
var map__22998__$1 = (((((!((map__22998 == null))))?(((((map__22998.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22998.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22998):map__22998);
var selected_cards = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22998__$1,cljs.core.cst$kw$selected_DASH_cards);
return cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([card]),selected_cards);
});
set.card_pickerc.select = (function set$card_pickerc$select(state,card){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,cljs.core.cst$kw$selected_DASH_cards,cljs.core.conj,card);
});
set.card_pickerc.deselect = (function set$card_pickerc$deselect(state,card){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$selected_DASH_cards,(function (p1__23000_SHARP_){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([card]),p1__23000_SHARP_);
}));
});
set.card_pickerc.set_selected = (function set$card_pickerc$set_selected(p__23001,input){
var map__23002 = p__23001;
var map__23002__$1 = (((((!((map__23002 == null))))?(((((map__23002.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23002.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23002):map__23002);
var state = map__23002__$1;
var cards = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23002__$1,cljs.core.cst$kw$cards);
var card = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cards,input);
if(cljs.core.truth_(set.card_pickerc.selected_QMARK_(state,card))){
return set.card_pickerc.deselect(state,card);
} else {
return set.card_pickerc.select(state,card);
}
});
set.card_pickerc.replace_with_map = (function set$card_pickerc$replace_with_map(coll,m){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__23004_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(m,p1__23004_SHARP_,p1__23004_SHARP_);
}),coll);
});
set.card_pickerc.ensure_set_exists = (function set$card_pickerc$ensure_set_exists(p__23005){
var map__23006 = p__23005;
var map__23006__$1 = (((((!((map__23006 == null))))?(((((map__23006.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23006.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23006):map__23006);
var state = map__23006__$1;
var cards = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23006__$1,cljs.core.cst$kw$cards);
var shuffle_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23006__$1,cljs.core.cst$kw$shuffle_DASH_fn);
var src_deck = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23006__$1,cljs.core.cst$kw$src_DASH_deck);
if(cljs.core.truth_(set.cardsc.contains_set_QMARK_(cards))){
return state;
} else {
return set.cardsc.reset_cards_and_deck(state,src_deck,shuffle_fn);
}
});
set.card_pickerc.maybe_replace_cards = (function set$card_pickerc$maybe_replace_cards(p__23008){
var map__23009 = p__23008;
var map__23009__$1 = (((((!((map__23009 == null))))?(((((map__23009.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23009.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23009):map__23009);
var state = map__23009__$1;
var selected_cards = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23009__$1,cljs.core.cst$kw$selected_DASH_cards);
var deck = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23009__$1,cljs.core.cst$kw$deck);
var cards = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23009__$1,cljs.core.cst$kw$cards);
if(set.cardsc.set_QMARK_(selected_cards)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$cards,set.card_pickerc.replace_with_map(cards,cljs.core.zipmap(selected_cards,cljs.core.take.cljs$core$IFn$_invoke$arity$2((3),deck))));
} else {
return state;
}
});
set.card_pickerc.maybe_take_from_deck = (function set$card_pickerc$maybe_take_from_deck(p__23011){
var map__23012 = p__23011;
var map__23012__$1 = (((((!((map__23012 == null))))?(((((map__23012.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23012.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23012):map__23012);
var state = map__23012__$1;
var selected_cards = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23012__$1,cljs.core.cst$kw$selected_DASH_cards);
var deck = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23012__$1,cljs.core.cst$kw$deck);
if(set.cardsc.set_QMARK_(selected_cards)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$deck,cljs.core.drop.cljs$core$IFn$_invoke$arity$2((3),deck));
} else {
return state;
}
});
set.card_pickerc.maybe_reset_selected = (function set$card_pickerc$maybe_reset_selected(p__23014){
var map__23015 = p__23014;
var map__23015__$1 = (((((!((map__23015 == null))))?(((((map__23015.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23015.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23015):map__23015);
var state = map__23015__$1;
var selected_cards = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23015__$1,cljs.core.cst$kw$selected_DASH_cards);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((3),cljs.core.count(selected_cards))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$selected_DASH_cards,cljs.core.PersistentVector.EMPTY);
} else {
return state;
}
});
set.card_pickerc.update_found_sets_count = (function set$card_pickerc$update_found_sets_count(p__23017){
var map__23018 = p__23017;
var map__23018__$1 = (((((!((map__23018 == null))))?(((((map__23018.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23018.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23018):map__23018);
var state = map__23018__$1;
var selected_cards = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23018__$1,cljs.core.cst$kw$selected_DASH_cards);
var found_sets_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23018__$1,cljs.core.cst$kw$found_DASH_sets_DASH_count);
var found_sets_count__$1 = (function (){var or__4126__auto__ = found_sets_count;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})();
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$found_DASH_sets_DASH_count,((set.cardsc.set_QMARK_((function (){var or__4126__auto__ = selected_cards;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})()))?(found_sets_count__$1 + (1)):found_sets_count__$1));
});
set.card_pickerc.handle_invalid_state = (function set$card_pickerc$handle_invalid_state(p__23020){
var map__23021 = p__23020;
var map__23021__$1 = (((((!((map__23021 == null))))?(((((map__23021.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23021.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23021):map__23021);
var state = map__23021__$1;
var cards = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23021__$1,cljs.core.cst$kw$cards);
var deck = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23021__$1,cljs.core.cst$kw$deck);
var src_deck = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23021__$1,cljs.core.cst$kw$src_DASH_deck);
var shuffle_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23021__$1,cljs.core.cst$kw$shuffle_DASH_fn);
if(cljs.core.not((function (){var and__4115__auto__ = set.cardsc.contains_set_QMARK_(cards);
if(cljs.core.truth_(and__4115__auto__)){
return (cljs.core.count(deck) > (3));
} else {
return and__4115__auto__;
}
})())){
return set.cardsc.reset_cards_and_deck(state,src_deck,shuffle_fn);
} else {
return state;
}
});
set.card_pickerc.pick = (function set$card_pickerc$pick(state,input){
return set.card_pickerc.handle_invalid_state(set.card_pickerc.maybe_reset_selected(set.card_pickerc.maybe_take_from_deck(set.card_pickerc.maybe_replace_cards(set.card_pickerc.update_found_sets_count(set.card_pickerc.set_selected(state,input))))));
});
