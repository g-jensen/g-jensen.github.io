// Compiled by ClojureScript 1.10.764 {:static-fns true, :optimize-constants true}
goog.provide('set.cardsc');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.math.combinatorics');
goog.require('clojure.string');
set.cardsc.playing_card_count = (12);
set.cardsc.bad_shuffle = (function set$cardsc$bad_shuffle(p1__22979_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(cljs.core.rest(p1__22979_SHARP_)),cljs.core.first(p1__22979_SHARP_));
});
set.cardsc.attributes = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$color,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$red,cljs.core.cst$kw$green,cljs.core.cst$kw$purple], null),cljs.core.cst$kw$count,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$one,cljs.core.cst$kw$two,cljs.core.cst$kw$three], null),cljs.core.cst$kw$shape,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$diamond,cljs.core.cst$kw$oval,cljs.core.cst$kw$squiggle], null),cljs.core.cst$kw$shade,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$open,cljs.core.cst$kw$solid,cljs.core.cst$kw$striped], null)], null);
set.cardsc.card = (function set$cardsc$card(color,count,shape,shade){
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$color,color,cljs.core.cst$kw$count,count,cljs.core.cst$kw$shape,shape,cljs.core.cst$kw$shade,shade], null);
});
set.cardsc.deck = (function (){var iter__4529__auto__ = (function set$cardsc$iter__22980(s__22981){
return (new cljs.core.LazySeq(null,(function (){
var s__22981__$1 = s__22981;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__22981__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var color = cljs.core.first(xs__6360__auto__);
var iterys__4525__auto__ = ((function (s__22981__$1,color,xs__6360__auto__,temp__5804__auto__){
return (function set$cardsc$iter__22980_$_iter__22982(s__22983){
return (new cljs.core.LazySeq(null,((function (s__22981__$1,color,xs__6360__auto__,temp__5804__auto__){
return (function (){
var s__22983__$1 = s__22983;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__22983__$1);
if(temp__5804__auto____$1){
var xs__6360__auto____$1 = temp__5804__auto____$1;
var count = cljs.core.first(xs__6360__auto____$1);
var iterys__4525__auto__ = ((function (s__22983__$1,s__22981__$1,count,xs__6360__auto____$1,temp__5804__auto____$1,color,xs__6360__auto__,temp__5804__auto__){
return (function set$cardsc$iter__22980_$_iter__22982_$_iter__22984(s__22985){
return (new cljs.core.LazySeq(null,((function (s__22983__$1,s__22981__$1,count,xs__6360__auto____$1,temp__5804__auto____$1,color,xs__6360__auto__,temp__5804__auto__){
return (function (){
var s__22985__$1 = s__22985;
while(true){
var temp__5804__auto____$2 = cljs.core.seq(s__22985__$1);
if(temp__5804__auto____$2){
var xs__6360__auto____$2 = temp__5804__auto____$2;
var shape = cljs.core.first(xs__6360__auto____$2);
var iterys__4525__auto__ = ((function (s__22985__$1,s__22983__$1,s__22981__$1,shape,xs__6360__auto____$2,temp__5804__auto____$2,count,xs__6360__auto____$1,temp__5804__auto____$1,color,xs__6360__auto__,temp__5804__auto__){
return (function set$cardsc$iter__22980_$_iter__22982_$_iter__22984_$_iter__22986(s__22987){
return (new cljs.core.LazySeq(null,((function (s__22985__$1,s__22983__$1,s__22981__$1,shape,xs__6360__auto____$2,temp__5804__auto____$2,count,xs__6360__auto____$1,temp__5804__auto____$1,color,xs__6360__auto__,temp__5804__auto__){
return (function (){
var s__22987__$1 = s__22987;
while(true){
var temp__5804__auto____$3 = cljs.core.seq(s__22987__$1);
if(temp__5804__auto____$3){
var s__22987__$2 = temp__5804__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__22987__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__22987__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__22989 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__22988 = (0);
while(true){
if((i__22988 < size__4528__auto__)){
var shade = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__22988);
cljs.core.chunk_append(b__22989,set.cardsc.card(color,count,shape,shade));

var G__22990 = (i__22988 + (1));
i__22988 = G__22990;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22989),set$cardsc$iter__22980_$_iter__22982_$_iter__22984_$_iter__22986(cljs.core.chunk_rest(s__22987__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22989),null);
}
} else {
var shade = cljs.core.first(s__22987__$2);
return cljs.core.cons(set.cardsc.card(color,count,shape,shade),set$cardsc$iter__22980_$_iter__22982_$_iter__22984_$_iter__22986(cljs.core.rest(s__22987__$2)));
}
} else {
return null;
}
break;
}
});})(s__22985__$1,s__22983__$1,s__22981__$1,shape,xs__6360__auto____$2,temp__5804__auto____$2,count,xs__6360__auto____$1,temp__5804__auto____$1,color,xs__6360__auto__,temp__5804__auto__))
,null,null));
});})(s__22985__$1,s__22983__$1,s__22981__$1,shape,xs__6360__auto____$2,temp__5804__auto____$2,count,xs__6360__auto____$1,temp__5804__auto____$1,color,xs__6360__auto__,temp__5804__auto__))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(cljs.core.cst$kw$shade.cljs$core$IFn$_invoke$arity$1(set.cardsc.attributes)));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,set$cardsc$iter__22980_$_iter__22982_$_iter__22984(cljs.core.rest(s__22985__$1)));
} else {
var G__22991 = cljs.core.rest(s__22985__$1);
s__22985__$1 = G__22991;
continue;
}
} else {
return null;
}
break;
}
});})(s__22983__$1,s__22981__$1,count,xs__6360__auto____$1,temp__5804__auto____$1,color,xs__6360__auto__,temp__5804__auto__))
,null,null));
});})(s__22983__$1,s__22981__$1,count,xs__6360__auto____$1,temp__5804__auto____$1,color,xs__6360__auto__,temp__5804__auto__))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(cljs.core.cst$kw$shape.cljs$core$IFn$_invoke$arity$1(set.cardsc.attributes)));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,set$cardsc$iter__22980_$_iter__22982(cljs.core.rest(s__22983__$1)));
} else {
var G__22992 = cljs.core.rest(s__22983__$1);
s__22983__$1 = G__22992;
continue;
}
} else {
return null;
}
break;
}
});})(s__22981__$1,color,xs__6360__auto__,temp__5804__auto__))
,null,null));
});})(s__22981__$1,color,xs__6360__auto__,temp__5804__auto__))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(cljs.core.cst$kw$count.cljs$core$IFn$_invoke$arity$1(set.cardsc.attributes)));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,set$cardsc$iter__22980(cljs.core.rest(s__22981__$1)));
} else {
var G__22993 = cljs.core.rest(s__22981__$1);
s__22981__$1 = G__22993;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.cst$kw$color.cljs$core$IFn$_invoke$arity$1(set.cardsc.attributes));
})();
set.cardsc.distinct_or_all_same = (function set$cardsc$distinct_or_all_same(vec){
var or__4126__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.distinct_QMARK_,vec);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,vec);
}
});
set.cardsc.values_are_distinct_or_all_same_QMARK_ = (function set$cardsc$values_are_distinct_or_all_same_QMARK_(m){
return cljs.core.every_QMARK_(cljs.core.true_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__22994_SHARP_){
return set.cardsc.distinct_or_all_same(cljs.core.map.cljs$core$IFn$_invoke$arity$2(p1__22994_SHARP_,m));
}),cljs.core.keys(set.cardsc.attributes)));
});
set.cardsc.set_QMARK_ = (function set$cardsc$set_QMARK_(cards){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cards),(3))) && (set.cardsc.values_are_distinct_or_all_same_QMARK_(cards)));
});
set.cardsc.combos__GT_set_QMARK_ = (function set$cardsc$combos__GT_set_QMARK_(cards){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(set.cardsc.set_QMARK_,clojure.math.combinatorics.combinations(cards,(3)));
});
set.cardsc.set_count = (function set$cardsc$set_count(cards){
return cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.true_QMARK_,set.cardsc.combos__GT_set_QMARK_(cards)));
});
set.cardsc.contains_set_QMARK_ = (function set$cardsc$contains_set_QMARK_(cards){
return cljs.core.some(cljs.core.true_QMARK_,set.cardsc.combos__GT_set_QMARK_(cards));
});
set.cardsc.playing_cards_contains_set_QMARK_ = (function set$cardsc$playing_cards_contains_set_QMARK_(cards){
return set.cardsc.contains_set_QMARK_(cljs.core.take.cljs$core$IFn$_invoke$arity$2(set.cardsc.playing_card_count,cards));
});
set.cardsc.shuffle_until_set = (function set$cardsc$shuffle_until_set(deck,shuffle_fn){
if(cljs.core.truth_((function (){var or__4126__auto__ = set.cardsc.playing_cards_contains_set_QMARK_(deck);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (cljs.core.count(deck) > set.cardsc.playing_card_count);
}
})())){
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(set.cardsc.playing_cards_contains_set_QMARK_,cljs.core.iterate(shuffle_fn,(shuffle_fn.cljs$core$IFn$_invoke$arity$1 ? shuffle_fn.cljs$core$IFn$_invoke$arity$1(deck) : shuffle_fn.call(null,deck)))));
} else {
return null;
}
});
set.cardsc.reset_cards_and_deck = (function set$cardsc$reset_cards_and_deck(state,deck,shuffle_fn){
var shuffled_deck = set.cardsc.shuffle_until_set(deck,shuffle_fn);
var state__$1 = state;
var state__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__$1,cljs.core.cst$kw$cards,cljs.core.take.cljs$core$IFn$_invoke$arity$2(set.cardsc.playing_card_count,shuffled_deck));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__$2,cljs.core.cst$kw$deck,cljs.core.drop.cljs$core$IFn$_invoke$arity$2(set.cardsc.playing_card_count,shuffled_deck));
});
set.cardsc.initial_state = (function set$cardsc$initial_state(deck,shuffle_fn){
return set.cardsc.reset_cards_and_deck(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$selected_DASH_cards,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$src_DASH_deck,deck,cljs.core.cst$kw$shuffle_DASH_fn,shuffle_fn,cljs.core.cst$kw$found_DASH_sets_DASH_count,(0)], null),deck,shuffle_fn);
});
set.cardsc.card__GT_path = (function set$cardsc$card__GT_path(card){
return ["cards/",cljs.core.name(cljs.core.cst$kw$color.cljs$core$IFn$_invoke$arity$1(card)),"-",cljs.core.name(cljs.core.cst$kw$count.cljs$core$IFn$_invoke$arity$1(card)),"-",cljs.core.name(cljs.core.cst$kw$shape.cljs$core$IFn$_invoke$arity$1(card)),"-",cljs.core.name(cljs.core.cst$kw$shade.cljs$core$IFn$_invoke$arity$1(card)),".png"].join('');
});
set.cardsc.color_label = (function set$cardsc$color_label(card){
return clojure.string.capitalize(cljs.core.second(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$color.cljs$core$IFn$_invoke$arity$1(card))));
});
