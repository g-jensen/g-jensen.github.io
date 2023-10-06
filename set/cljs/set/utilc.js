// Compiled by ClojureScript 1.10.764 {:static-fns true, :optimize-constants true}
goog.provide('set.utilc');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.math.combinatorics');
set.utilc.playing_card_count = (12);
set.utilc.bad_shuffle = (function set$utilc$bad_shuffle(p1__18550_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(cljs.core.rest(p1__18550_SHARP_)),cljs.core.first(p1__18550_SHARP_));
});
set.utilc.attributes = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$color,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$red,cljs.core.cst$kw$green,cljs.core.cst$kw$purple], null),cljs.core.cst$kw$count,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$one,cljs.core.cst$kw$two,cljs.core.cst$kw$three], null),cljs.core.cst$kw$shape,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$diamond,cljs.core.cst$kw$oval,cljs.core.cst$kw$squiggle], null),cljs.core.cst$kw$shade,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$open,cljs.core.cst$kw$solid,cljs.core.cst$kw$striped], null)], null);
set.utilc.card = (function set$utilc$card(color,count,shape,shade){
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$color,color,cljs.core.cst$kw$count,count,cljs.core.cst$kw$shape,shape,cljs.core.cst$kw$shade,shade], null);
});
set.utilc.deck = (function (){var iter__4529__auto__ = (function set$utilc$iter__18551(s__18552){
return (new cljs.core.LazySeq(null,(function (){
var s__18552__$1 = s__18552;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__18552__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var color = cljs.core.first(xs__6360__auto__);
var iterys__4525__auto__ = ((function (s__18552__$1,color,xs__6360__auto__,temp__5804__auto__){
return (function set$utilc$iter__18551_$_iter__18553(s__18554){
return (new cljs.core.LazySeq(null,((function (s__18552__$1,color,xs__6360__auto__,temp__5804__auto__){
return (function (){
var s__18554__$1 = s__18554;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__18554__$1);
if(temp__5804__auto____$1){
var xs__6360__auto____$1 = temp__5804__auto____$1;
var count = cljs.core.first(xs__6360__auto____$1);
var iterys__4525__auto__ = ((function (s__18554__$1,s__18552__$1,count,xs__6360__auto____$1,temp__5804__auto____$1,color,xs__6360__auto__,temp__5804__auto__){
return (function set$utilc$iter__18551_$_iter__18553_$_iter__18555(s__18556){
return (new cljs.core.LazySeq(null,((function (s__18554__$1,s__18552__$1,count,xs__6360__auto____$1,temp__5804__auto____$1,color,xs__6360__auto__,temp__5804__auto__){
return (function (){
var s__18556__$1 = s__18556;
while(true){
var temp__5804__auto____$2 = cljs.core.seq(s__18556__$1);
if(temp__5804__auto____$2){
var xs__6360__auto____$2 = temp__5804__auto____$2;
var shape = cljs.core.first(xs__6360__auto____$2);
var iterys__4525__auto__ = ((function (s__18556__$1,s__18554__$1,s__18552__$1,shape,xs__6360__auto____$2,temp__5804__auto____$2,count,xs__6360__auto____$1,temp__5804__auto____$1,color,xs__6360__auto__,temp__5804__auto__){
return (function set$utilc$iter__18551_$_iter__18553_$_iter__18555_$_iter__18557(s__18558){
return (new cljs.core.LazySeq(null,((function (s__18556__$1,s__18554__$1,s__18552__$1,shape,xs__6360__auto____$2,temp__5804__auto____$2,count,xs__6360__auto____$1,temp__5804__auto____$1,color,xs__6360__auto__,temp__5804__auto__){
return (function (){
var s__18558__$1 = s__18558;
while(true){
var temp__5804__auto____$3 = cljs.core.seq(s__18558__$1);
if(temp__5804__auto____$3){
var s__18558__$2 = temp__5804__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__18558__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__18558__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__18560 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__18559 = (0);
while(true){
if((i__18559 < size__4528__auto__)){
var shade = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__18559);
cljs.core.chunk_append(b__18560,set.utilc.card(color,count,shape,shade));

var G__18561 = (i__18559 + (1));
i__18559 = G__18561;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18560),set$utilc$iter__18551_$_iter__18553_$_iter__18555_$_iter__18557(cljs.core.chunk_rest(s__18558__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18560),null);
}
} else {
var shade = cljs.core.first(s__18558__$2);
return cljs.core.cons(set.utilc.card(color,count,shape,shade),set$utilc$iter__18551_$_iter__18553_$_iter__18555_$_iter__18557(cljs.core.rest(s__18558__$2)));
}
} else {
return null;
}
break;
}
});})(s__18556__$1,s__18554__$1,s__18552__$1,shape,xs__6360__auto____$2,temp__5804__auto____$2,count,xs__6360__auto____$1,temp__5804__auto____$1,color,xs__6360__auto__,temp__5804__auto__))
,null,null));
});})(s__18556__$1,s__18554__$1,s__18552__$1,shape,xs__6360__auto____$2,temp__5804__auto____$2,count,xs__6360__auto____$1,temp__5804__auto____$1,color,xs__6360__auto__,temp__5804__auto__))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(cljs.core.cst$kw$shade.cljs$core$IFn$_invoke$arity$1(set.utilc.attributes)));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,set$utilc$iter__18551_$_iter__18553_$_iter__18555(cljs.core.rest(s__18556__$1)));
} else {
var G__18562 = cljs.core.rest(s__18556__$1);
s__18556__$1 = G__18562;
continue;
}
} else {
return null;
}
break;
}
});})(s__18554__$1,s__18552__$1,count,xs__6360__auto____$1,temp__5804__auto____$1,color,xs__6360__auto__,temp__5804__auto__))
,null,null));
});})(s__18554__$1,s__18552__$1,count,xs__6360__auto____$1,temp__5804__auto____$1,color,xs__6360__auto__,temp__5804__auto__))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(cljs.core.cst$kw$shape.cljs$core$IFn$_invoke$arity$1(set.utilc.attributes)));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,set$utilc$iter__18551_$_iter__18553(cljs.core.rest(s__18554__$1)));
} else {
var G__18563 = cljs.core.rest(s__18554__$1);
s__18554__$1 = G__18563;
continue;
}
} else {
return null;
}
break;
}
});})(s__18552__$1,color,xs__6360__auto__,temp__5804__auto__))
,null,null));
});})(s__18552__$1,color,xs__6360__auto__,temp__5804__auto__))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(cljs.core.cst$kw$count.cljs$core$IFn$_invoke$arity$1(set.utilc.attributes)));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,set$utilc$iter__18551(cljs.core.rest(s__18552__$1)));
} else {
var G__18564 = cljs.core.rest(s__18552__$1);
s__18552__$1 = G__18564;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.cst$kw$color.cljs$core$IFn$_invoke$arity$1(set.utilc.attributes));
})();
set.utilc.distinct_or_all_same = (function set$utilc$distinct_or_all_same(vec){
var or__4126__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.distinct_QMARK_,vec);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,vec);
}
});
set.utilc.values_are_distinct_or_all_same_QMARK_ = (function set$utilc$values_are_distinct_or_all_same_QMARK_(m){
return cljs.core.every_QMARK_(cljs.core.true_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__18565_SHARP_){
return set.utilc.distinct_or_all_same(cljs.core.map.cljs$core$IFn$_invoke$arity$2(p1__18565_SHARP_,m));
}),cljs.core.keys(set.utilc.attributes)));
});
set.utilc.set_QMARK_ = (function set$utilc$set_QMARK_(cards){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cards),(3))) && (set.utilc.values_are_distinct_or_all_same_QMARK_(cards)));
});
set.utilc.combos__GT_set_QMARK_ = (function set$utilc$combos__GT_set_QMARK_(cards){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(set.utilc.set_QMARK_,clojure.math.combinatorics.combinations(cards,(3)));
});
set.utilc.set_count = (function set$utilc$set_count(cards){
return cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.true_QMARK_,set.utilc.combos__GT_set_QMARK_(cards)));
});
set.utilc.contains_set_QMARK_ = (function set$utilc$contains_set_QMARK_(cards){
return cljs.core.some(cljs.core.true_QMARK_,set.utilc.combos__GT_set_QMARK_(cards));
});
set.utilc.playing_cards_contains_set_QMARK_ = (function set$utilc$playing_cards_contains_set_QMARK_(cards){
return set.utilc.contains_set_QMARK_(cljs.core.take.cljs$core$IFn$_invoke$arity$2(set.utilc.playing_card_count,cards));
});
set.utilc.shuffle_until_set = (function set$utilc$shuffle_until_set(deck,shuffle_fn){
if(cljs.core.truth_((function (){var or__4126__auto__ = set.utilc.playing_cards_contains_set_QMARK_(deck);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (cljs.core.count(deck) > set.utilc.playing_card_count);
}
})())){
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(set.utilc.playing_cards_contains_set_QMARK_,cljs.core.iterate(shuffle_fn,(shuffle_fn.cljs$core$IFn$_invoke$arity$1 ? shuffle_fn.cljs$core$IFn$_invoke$arity$1(deck) : shuffle_fn.call(null,deck)))));
} else {
return null;
}
});
set.utilc.reset_cards_and_deck = (function set$utilc$reset_cards_and_deck(state,deck,shuffle_fn){
var shuffled_deck = set.utilc.shuffle_until_set(deck,shuffle_fn);
var state__$1 = state;
var state__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__$1,cljs.core.cst$kw$cards,cljs.core.take.cljs$core$IFn$_invoke$arity$2(set.utilc.playing_card_count,shuffled_deck));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__$2,cljs.core.cst$kw$deck,cljs.core.drop.cljs$core$IFn$_invoke$arity$2(set.utilc.playing_card_count,shuffled_deck));
});
set.utilc.initial_state = (function set$utilc$initial_state(deck,shuffle_fn){
return set.utilc.reset_cards_and_deck(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$selected_DASH_cards,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$src_DASH_deck,deck,cljs.core.cst$kw$shuffle_DASH_fn,shuffle_fn,cljs.core.cst$kw$found_DASH_sets_DASH_count,(0)], null),deck,shuffle_fn);
});
