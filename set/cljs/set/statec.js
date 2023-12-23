// Compiled by ClojureScript 1.10.764 {}
goog.provide('set.statec');
goog.require('cljs.core');
goog.require('set.mainc');
set.statec.initial_state = (function set$statec$initial_state(deck,shuffle_fn){
var shuffled_deck = shuffle_fn.call(null,deck);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"cards","cards",169174038),cljs.core.take.call(null,(12),shuffled_deck),new cljs.core.Keyword(null,"selected-cards","selected-cards",-951074030),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"deck","deck",1145325705),cljs.core.drop.call(null,(12),shuffled_deck),new cljs.core.Keyword(null,"src-deck","src-deck",2063692730),deck,new cljs.core.Keyword(null,"shuffle-fn","shuffle-fn",-834937724),shuffle_fn], null);
});
set.statec.select = (function set$statec$select(state,input){
var card = cljs.core.nth.call(null,new cljs.core.Keyword(null,"cards","cards",169174038).cljs$core$IFn$_invoke$arity$1(state),(input - (1)));
var selected = new cljs.core.Keyword(null,"selected-cards","selected-cards",-951074030).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([card]),selected))){
return cljs.core.remove.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([card]),selected);
} else {
return cljs.core.conj.call(null,selected,card);
}
});
set.statec.replace_with_map = (function set$statec$replace_with_map(coll,m){
return cljs.core.map.call(null,(function (p1__8149_SHARP_){
return cljs.core.get.call(null,m,p1__8149_SHARP_,p1__8149_SHARP_);
}),coll);
});
set.statec.update_cards = (function set$statec$update_cards(state){
var map__8150 = state;
var map__8150__$1 = (((((!((map__8150 == null))))?(((((map__8150.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8150.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8150):map__8150);
var selected = cljs.core.get.call(null,map__8150__$1,new cljs.core.Keyword(null,"selected-cards","selected-cards",-951074030));
var deck = cljs.core.get.call(null,map__8150__$1,new cljs.core.Keyword(null,"deck","deck",1145325705));
var cards = cljs.core.get.call(null,map__8150__$1,new cljs.core.Keyword(null,"cards","cards",169174038));
if(set.mainc.set_QMARK_.call(null,selected)){
return set.statec.replace_with_map.call(null,cards,cljs.core.zipmap.call(null,selected,cljs.core.take.call(null,(3),deck)));
} else {
return cards;
}
});
set.statec.update_deck = (function set$statec$update_deck(state){
var deck = new cljs.core.Keyword(null,"deck","deck",1145325705).cljs$core$IFn$_invoke$arity$1(state);
var src_deck = new cljs.core.Keyword(null,"src-deck","src-deck",2063692730).cljs$core$IFn$_invoke$arity$1(state);
var shuffle_fn = new cljs.core.Keyword(null,"shuffle-fn","shuffle-fn",-834937724).cljs$core$IFn$_invoke$arity$1(state);
if((!(set.mainc.set_QMARK_.call(null,new cljs.core.Keyword(null,"selected-cards","selected-cards",-951074030).cljs$core$IFn$_invoke$arity$1(state))))){
return deck;
} else {
if((cljs.core.count.call(null,deck) <= (3))){
return shuffle_fn.call(null,src_deck);
} else {
return cljs.core.drop.call(null,(3),deck);

}
}
});
set.statec.update_selected = (function set$statec$update_selected(state){
var selected = new cljs.core.Keyword(null,"selected-cards","selected-cards",-951074030).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core._EQ_.call(null,(3),cljs.core.count.call(null,selected))){
return cljs.core.PersistentVector.EMPTY;
} else {
return selected;
}
});
set.statec.next_state = (function set$statec$next_state(state,input){
var state__$1 = state;
var state__$2 = cljs.core.assoc.call(null,state__$1,new cljs.core.Keyword(null,"selected-cards","selected-cards",-951074030),set.statec.select.call(null,state__$1,input));
var state__$3 = cljs.core.assoc.call(null,state__$2,new cljs.core.Keyword(null,"cards","cards",169174038),set.statec.update_cards.call(null,state__$2));
var state__$4 = cljs.core.assoc.call(null,state__$3,new cljs.core.Keyword(null,"deck","deck",1145325705),set.statec.update_deck.call(null,state__$3));
return cljs.core.assoc.call(null,state__$4,new cljs.core.Keyword(null,"selected-cards","selected-cards",-951074030),set.statec.update_selected.call(null,state__$4));
});

//# sourceMappingURL=statec.js.map
