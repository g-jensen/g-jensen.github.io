// Compiled by ClojureScript 1.10.764 {:static-fns true, :optimize-constants true}
goog.provide('clojure.math.combinatorics');
goog.require('cljs.core');
goog.require('cljs.core.constants');
clojure.math.combinatorics._STAR__SINGLEQUOTE_ = cljs.core._STAR_;
clojure.math.combinatorics._PLUS__SINGLEQUOTE_ = cljs.core._PLUS_;
/**
 * Lazily concatenates a collection of collections into a flat sequence,
 *   because Clojure's `apply concat` is insufficiently lazy.
 */
clojure.math.combinatorics.join = (function clojure$math$combinatorics$join(colls){
return (new cljs.core.LazySeq(null,(function (){
var temp__5804__auto__ = cljs.core.seq(colls);
if(temp__5804__auto__){
var s = temp__5804__auto__;
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.first(s),(function (){var G__18135 = cljs.core.rest(s);
return (clojure.math.combinatorics.join.cljs$core$IFn$_invoke$arity$1 ? clojure.math.combinatorics.join.cljs$core$IFn$_invoke$arity$1(G__18135) : clojure.math.combinatorics.join.call(null,G__18135));
})());
} else {
return null;
}
}),null,null));
});
/**
 * Uses join to achieve lazier version of mapcat (on one collection)
 */
clojure.math.combinatorics.mapjoin = (function clojure$math$combinatorics$mapjoin(f,coll){
return clojure.math.combinatorics.join(cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,coll));
});
/**
 * Annoyingly, the built-in distinct? doesn't handle 0 args, so we need
 *   to write our own version that considers the empty-list to be distinct
 */
clojure.math.combinatorics.all_different_QMARK_ = (function clojure$math$combinatorics$all_different_QMARK_(s){
if(cljs.core.seq(s)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.distinct_QMARK_,s);
} else {
return true;
}
});
clojure.math.combinatorics.index_combinations = (function clojure$math$combinatorics$index_combinations(n,cnt){
return (new cljs.core.LazySeq(null,(function (){
var c = cljs.core.vec(cljs.core.cons(null,(function (){var iter__4529__auto__ = (function clojure$math$combinatorics$index_combinations_$_iter__18136(s__18137){
return (new cljs.core.LazySeq(null,(function (){
var s__18137__$1 = s__18137;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__18137__$1);
if(temp__5804__auto__){
var s__18137__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__18137__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__18137__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__18139 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__18138 = (0);
while(true){
if((i__18138 < size__4528__auto__)){
var j = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__18138);
cljs.core.chunk_append(b__18139,((j + cnt) + (- (n + (1)))));

var G__18140 = (i__18138 + (1));
i__18138 = G__18140;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18139),clojure$math$combinatorics$index_combinations_$_iter__18136(cljs.core.chunk_rest(s__18137__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18139),null);
}
} else {
var j = cljs.core.first(s__18137__$2);
return cljs.core.cons(((j + cnt) + (- (n + (1)))),clojure$math$combinatorics$index_combinations_$_iter__18136(cljs.core.rest(s__18137__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(n + (1))));
})()));
var iter_comb = (function clojure$math$combinatorics$index_combinations_$_iter_comb(c__$1,j){
if((j > n)){
return null;
} else {
var c__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(c__$1,j,((c__$1.cljs$core$IFn$_invoke$arity$1 ? c__$1.cljs$core$IFn$_invoke$arity$1(j) : c__$1.call(null,j)) - (1)));
if(((c__$2.cljs$core$IFn$_invoke$arity$1 ? c__$2.cljs$core$IFn$_invoke$arity$1(j) : c__$2.call(null,j)) < j)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$2,(j + (1))], null);
} else {
var c__$3 = c__$2;
var j__$1 = j;
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(j__$1,(1))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$3,j__$1], null);
} else {
var G__18141 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(c__$3,(j__$1 - (1)),((c__$3.cljs$core$IFn$_invoke$arity$1 ? c__$3.cljs$core$IFn$_invoke$arity$1(j__$1) : c__$3.call(null,j__$1)) - (1)));
var G__18142 = (j__$1 - (1));
c__$3 = G__18141;
j__$1 = G__18142;
continue;
}
break;
}
}
}
});
var step = (function clojure$math$combinatorics$index_combinations_$_step(c__$1,j){
return cljs.core.cons(cljs.core.rseq(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(c__$1,(1),(n + (1)))),(new cljs.core.LazySeq(null,(function (){
var next_step = iter_comb(c__$1,j);
if(cljs.core.truth_(next_step)){
return clojure$math$combinatorics$index_combinations_$_step((next_step.cljs$core$IFn$_invoke$arity$1 ? next_step.cljs$core$IFn$_invoke$arity$1((0)) : next_step.call(null,(0))),(next_step.cljs$core$IFn$_invoke$arity$1 ? next_step.cljs$core$IFn$_invoke$arity$1((1)) : next_step.call(null,(1))));
} else {
return null;
}
}),null,null)));
});
return step(c,(1));
}),null,null));
});
clojure.math.combinatorics.distribute = (function clojure$math$combinatorics$distribute(m,index,total,distribution,already_distributed){
var distribution__$1 = distribution;
var index__$1 = index;
var already_distributed__$1 = already_distributed;
while(true){
if((index__$1 >= cljs.core.count(m))){
return null;
} else {
var quantity_to_distribute = (total - already_distributed__$1);
var mi = (m.cljs$core$IFn$_invoke$arity$1 ? m.cljs$core$IFn$_invoke$arity$1(index__$1) : m.call(null,index__$1));
if((quantity_to_distribute <= mi)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(distribution__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [index__$1,quantity_to_distribute,total], null));
} else {
var G__18143 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(distribution__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [index__$1,mi,(already_distributed__$1 + mi)], null));
var G__18144 = (index__$1 + (1));
var G__18145 = (already_distributed__$1 + mi);
distribution__$1 = G__18143;
index__$1 = G__18144;
already_distributed__$1 = G__18145;
continue;
}
}
break;
}
});
clojure.math.combinatorics.next_distribution = (function clojure$math$combinatorics$next_distribution(m,total,distribution){
var vec__18146 = cljs.core.peek(distribution);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18146,(0),null);
var this_bucket = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18146,(1),null);
var this_and_to_the_left = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18146,(2),null);
if((index < (cljs.core.count(m) - (1)))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this_bucket,(1))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.pop(distribution),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(index + (1)),(1),this_and_to_the_left], null));
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.pop(distribution),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,(this_bucket - (1)),(this_and_to_the_left - (1))], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(index + (1)),(1),this_and_to_the_left], null)], 0));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this_bucket,total)){
return null;
} else {
var distribution__$1 = cljs.core.pop(distribution);
while(true){
var vec__18149 = cljs.core.peek(distribution__$1);
var index__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18149,(0),null);
var this_bucket__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18149,(1),null);
var this_and_to_the_left__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18149,(2),null);
var distribution__$2 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this_bucket__$1,(1)))?cljs.core.pop(distribution__$1):cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.pop(distribution__$1),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [index__$1,(this_bucket__$1 - (1)),(this_and_to_the_left__$1 - (1))], null)));
if(((total - (this_and_to_the_left__$1 - (1))) <= cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(m,(index__$1 + (1)))))){
return clojure.math.combinatorics.distribute(m,(index__$1 + (1)),total,distribution__$2,(this_and_to_the_left__$1 - (1)));
} else {
if(cljs.core.seq(distribution__$2)){
var G__18152 = distribution__$2;
distribution__$1 = G__18152;
continue;
} else {
return null;

}
}
break;
}

}
}
});
clojure.math.combinatorics.bounded_distributions = (function clojure$math$combinatorics$bounded_distributions(m,t){
var step = (function clojure$math$combinatorics$bounded_distributions_$_step(distribution){
return cljs.core.cons(distribution,(new cljs.core.LazySeq(null,(function (){
var temp__5804__auto__ = clojure.math.combinatorics.next_distribution(m,t,distribution);
if(cljs.core.truth_(temp__5804__auto__)){
var next_step = temp__5804__auto__;
return clojure$math$combinatorics$bounded_distributions_$_step(next_step);
} else {
return null;
}
}),null,null)));
});
return step(clojure.math.combinatorics.distribute(m,(0),t,cljs.core.PersistentVector.EMPTY,(0)));
});
/**
 * Handles the case when you want the combinations of a list with duplicate items.
 */
clojure.math.combinatorics.multi_comb = (function clojure$math$combinatorics$multi_comb(l,t){
var f = cljs.core.frequencies(l);
var v = cljs.core.vec(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(l));
var domain = cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(v));
var m = cljs.core.vec((function (){var iter__4529__auto__ = (function clojure$math$combinatorics$multi_comb_$_iter__18153(s__18154){
return (new cljs.core.LazySeq(null,(function (){
var s__18154__$1 = s__18154;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__18154__$1);
if(temp__5804__auto__){
var s__18154__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__18154__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__18154__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__18156 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__18155 = (0);
while(true){
if((i__18155 < size__4528__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__18155);
cljs.core.chunk_append(b__18156,(function (){var G__18157 = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__18157) : f.call(null,G__18157));
})());

var G__18183 = (i__18155 + (1));
i__18155 = G__18183;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18156),clojure$math$combinatorics$multi_comb_$_iter__18153(cljs.core.chunk_rest(s__18154__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18156),null);
}
} else {
var i = cljs.core.first(s__18154__$2);
return cljs.core.cons((function (){var G__18158 = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__18158) : f.call(null,G__18158));
})(),clojure$math$combinatorics$multi_comb_$_iter__18153(cljs.core.rest(s__18154__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(domain);
})());
var qs = clojure.math.combinatorics.bounded_distributions(m,t);
var iter__4529__auto__ = (function clojure$math$combinatorics$multi_comb_$_iter__18159(s__18160){
return (new cljs.core.LazySeq(null,(function (){
var s__18160__$1 = s__18160;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__18160__$1);
if(temp__5804__auto__){
var s__18160__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__18160__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__18160__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__18162 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__18161 = (0);
while(true){
if((i__18161 < size__4528__auto__)){
var q = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__18161);
cljs.core.chunk_append(b__18162,clojure.math.combinatorics.join((function (){var iter__4529__auto__ = ((function (i__18161,q,c__4527__auto__,size__4528__auto__,b__18162,s__18160__$2,temp__5804__auto__,f,v,domain,m,qs){
return (function clojure$math$combinatorics$multi_comb_$_iter__18159_$_iter__18163(s__18164){
return (new cljs.core.LazySeq(null,((function (i__18161,q,c__4527__auto__,size__4528__auto__,b__18162,s__18160__$2,temp__5804__auto__,f,v,domain,m,qs){
return (function (){
var s__18164__$1 = s__18164;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__18164__$1);
if(temp__5804__auto____$1){
var s__18164__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__18164__$2)){
var c__4527__auto____$1 = cljs.core.chunk_first(s__18164__$2);
var size__4528__auto____$1 = cljs.core.count(c__4527__auto____$1);
var b__18166 = cljs.core.chunk_buffer(size__4528__auto____$1);
if((function (){var i__18165 = (0);
while(true){
if((i__18165 < size__4528__auto____$1)){
var vec__18167 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto____$1,i__18165);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18167,(0),null);
var this_bucket = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18167,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18167,(2),null);
cljs.core.chunk_append(b__18166,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(this_bucket,(v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(index) : v.call(null,index))));

var G__18184 = (i__18165 + (1));
i__18165 = G__18184;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18166),clojure$math$combinatorics$multi_comb_$_iter__18159_$_iter__18163(cljs.core.chunk_rest(s__18164__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18166),null);
}
} else {
var vec__18170 = cljs.core.first(s__18164__$2);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18170,(0),null);
var this_bucket = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18170,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18170,(2),null);
return cljs.core.cons(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(this_bucket,(v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(index) : v.call(null,index))),clojure$math$combinatorics$multi_comb_$_iter__18159_$_iter__18163(cljs.core.rest(s__18164__$2)));
}
} else {
return null;
}
break;
}
});})(i__18161,q,c__4527__auto__,size__4528__auto__,b__18162,s__18160__$2,temp__5804__auto__,f,v,domain,m,qs))
,null,null));
});})(i__18161,q,c__4527__auto__,size__4528__auto__,b__18162,s__18160__$2,temp__5804__auto__,f,v,domain,m,qs))
;
return iter__4529__auto__(q);
})()));

var G__18185 = (i__18161 + (1));
i__18161 = G__18185;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18162),clojure$math$combinatorics$multi_comb_$_iter__18159(cljs.core.chunk_rest(s__18160__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18162),null);
}
} else {
var q = cljs.core.first(s__18160__$2);
return cljs.core.cons(clojure.math.combinatorics.join((function (){var iter__4529__auto__ = ((function (q,s__18160__$2,temp__5804__auto__,f,v,domain,m,qs){
return (function clojure$math$combinatorics$multi_comb_$_iter__18159_$_iter__18173(s__18174){
return (new cljs.core.LazySeq(null,(function (){
var s__18174__$1 = s__18174;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__18174__$1);
if(temp__5804__auto____$1){
var s__18174__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__18174__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__18174__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__18176 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__18175 = (0);
while(true){
if((i__18175 < size__4528__auto__)){
var vec__18177 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__18175);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18177,(0),null);
var this_bucket = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18177,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18177,(2),null);
cljs.core.chunk_append(b__18176,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(this_bucket,(v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(index) : v.call(null,index))));

var G__18186 = (i__18175 + (1));
i__18175 = G__18186;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18176),clojure$math$combinatorics$multi_comb_$_iter__18159_$_iter__18173(cljs.core.chunk_rest(s__18174__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18176),null);
}
} else {
var vec__18180 = cljs.core.first(s__18174__$2);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18180,(0),null);
var this_bucket = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18180,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18180,(2),null);
return cljs.core.cons(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(this_bucket,(v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(index) : v.call(null,index))),clojure$math$combinatorics$multi_comb_$_iter__18159_$_iter__18173(cljs.core.rest(s__18174__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(q,s__18160__$2,temp__5804__auto__,f,v,domain,m,qs))
;
return iter__4529__auto__(q);
})()),clojure$math$combinatorics$multi_comb_$_iter__18159(cljs.core.rest(s__18160__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(qs);
});
/**
 * All the unique ways of taking t different elements from items
 */
clojure.math.combinatorics.combinations = (function clojure$math$combinatorics$combinations(items,t){
var v_items = cljs.core.vec(cljs.core.reverse(items));
if((t === (0))){
return (new cljs.core.List(null,cljs.core.List.EMPTY,null,(1),null));
} else {
var cnt = cljs.core.count(items);
if((t > cnt)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t,(1))){
var iter__4529__auto__ = (function clojure$math$combinatorics$combinations_$_iter__18188(s__18189){
return (new cljs.core.LazySeq(null,(function (){
var s__18189__$1 = s__18189;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__18189__$1);
if(temp__5804__auto__){
var s__18189__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__18189__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__18189__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__18191 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__18190 = (0);
while(true){
if((i__18190 < size__4528__auto__)){
var item = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__18190);
cljs.core.chunk_append(b__18191,(new cljs.core.List(null,item,null,(1),null)));

var G__18192 = (i__18190 + (1));
i__18190 = G__18192;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18191),clojure$math$combinatorics$combinations_$_iter__18188(cljs.core.chunk_rest(s__18189__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18191),null);
}
} else {
var item = cljs.core.first(s__18189__$2);
return cljs.core.cons((new cljs.core.List(null,item,null,(1),null)),clojure$math$combinatorics$combinations_$_iter__18188(cljs.core.rest(s__18189__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(items));
} else {
if(cljs.core.truth_(clojure.math.combinatorics.all_different_QMARK_(items))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t,cnt)){
return (new cljs.core.List(null,cljs.core.seq(items),null,(1),null));
} else {
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__18187_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(v_items,p1__18187_SHARP_);
}),clojure.math.combinatorics.index_combinations(t,cnt));
}
} else {
return clojure.math.combinatorics.multi_comb(items,t);

}
}
}
}
});
/**
 * Given a sequence that may have chunks, return a sequence that is 1-at-a-time
 * lazy with no chunks. Chunks are good for efficiency when the data items are
 * small, but when being processed via map, for example, a reference is kept to
 * every function result in the chunk until the entire chunk has been processed,
 * which increases the amount of memory in use that cannot be garbage
 * collected.
 */
clojure.math.combinatorics.unchunk = (function clojure$math$combinatorics$unchunk(s){
return (new cljs.core.LazySeq(null,(function (){
if(cljs.core.seq(s)){
return cljs.core.cons(cljs.core.first(s),(function (){var G__18193 = cljs.core.rest(s);
return (clojure.math.combinatorics.unchunk.cljs$core$IFn$_invoke$arity$1 ? clojure.math.combinatorics.unchunk.cljs$core$IFn$_invoke$arity$1(G__18193) : clojure.math.combinatorics.unchunk.call(null,G__18193));
})());
} else {
return null;
}
}),null,null));
});
/**
 * All the subsets of items
 */
clojure.math.combinatorics.subsets = (function clojure$math$combinatorics$subsets(items){
return clojure.math.combinatorics.mapjoin((function (n){
return clojure.math.combinatorics.combinations(items,n);
}),clojure.math.combinatorics.unchunk(cljs.core.range.cljs$core$IFn$_invoke$arity$1((cljs.core.count(items) + (1)))));
});
/**
 * All the ways to take one item from each sequence
 */
clojure.math.combinatorics.cartesian_product = (function clojure$math$combinatorics$cartesian_product(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18195 = arguments.length;
var i__4737__auto___18196 = (0);
while(true){
if((i__4737__auto___18196 < len__4736__auto___18195)){
args__4742__auto__.push((arguments[i__4737__auto___18196]));

var G__18197 = (i__4737__auto___18196 + (1));
i__4737__auto___18196 = G__18197;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return clojure.math.combinatorics.cartesian_product.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(clojure.math.combinatorics.cartesian_product.cljs$core$IFn$_invoke$arity$variadic = (function (seqs){
var v_original_seqs = cljs.core.vec(seqs);
var step = (function clojure$math$combinatorics$step(v_seqs){
var increment = (function (v_seqs__$1){
var i = (cljs.core.count(v_seqs__$1) - (1));
var v_seqs__$2 = v_seqs__$1;
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,(-1))){
return null;
} else {
var temp__5802__auto__ = cljs.core.next((v_seqs__$2.cljs$core$IFn$_invoke$arity$1 ? v_seqs__$2.cljs$core$IFn$_invoke$arity$1(i) : v_seqs__$2.call(null,i)));
if(temp__5802__auto__){
var rst = temp__5802__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v_seqs__$2,i,rst);
} else {
var G__18198 = (i - (1));
var G__18199 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v_seqs__$2,i,(v_original_seqs.cljs$core$IFn$_invoke$arity$1 ? v_original_seqs.cljs$core$IFn$_invoke$arity$1(i) : v_original_seqs.call(null,i)));
i = G__18198;
v_seqs__$2 = G__18199;
continue;
}
}
break;
}
});
if(cljs.core.truth_(v_seqs)){
return cljs.core.cons(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,v_seqs),(new cljs.core.LazySeq(null,(function (){
return clojure$math$combinatorics$step(increment(v_seqs));
}),null,null)));
} else {
return null;
}
});
if(cljs.core.every_QMARK_(cljs.core.seq,seqs)){
return (new cljs.core.LazySeq(null,(function (){
return step(v_original_seqs);
}),null,null));
} else {
return null;
}
}));

(clojure.math.combinatorics.cartesian_product.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(clojure.math.combinatorics.cartesian_product.cljs$lang$applyTo = (function (seq18194){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18194));
}));

/**
 * All the ways of taking n (possibly the same) elements from the sequence of items
 */
clojure.math.combinatorics.selections = (function clojure$math$combinatorics$selections(items,n){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.math.combinatorics.cartesian_product,cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(items)));
});
clojure.math.combinatorics.iter_perm = (function clojure$math$combinatorics$iter_perm(v){
var len = cljs.core.count(v);
var j = (function (){var i = (len - (2));
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,(-1))){
return null;
} else {
if(((v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i)) < (function (){var G__18200 = (i + (1));
return (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(G__18200) : v.call(null,G__18200));
})())){
return i;
} else {
var G__18201 = (i - (1));
i = G__18201;
continue;

}
}
break;
}
})();
if(cljs.core.truth_(j)){
var vj = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(j) : v.call(null,j));
var l = (function (){var i = (len - (1));
while(true){
if((vj < (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i)))){
return i;
} else {
var G__18202 = (i - (1));
i = G__18202;
continue;
}
break;
}
})();
var v__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(v,j,(v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(l) : v.call(null,l)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([l,vj], 0));
var k = (j + (1));
var l__$1 = (len - (1));
while(true){
if((k < l__$1)){
var G__18203 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(v__$1,k,(v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(l__$1) : v__$1.call(null,l__$1)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([l__$1,(v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(k) : v__$1.call(null,k))], 0));
var G__18204 = (k + (1));
var G__18205 = (l__$1 - (1));
v__$1 = G__18203;
k = G__18204;
l__$1 = G__18205;
continue;
} else {
return v__$1;
}
break;
}
} else {
return null;
}
});
clojure.math.combinatorics.vec_lex_permutations = (function clojure$math$combinatorics$vec_lex_permutations(v){
if(cljs.core.truth_(v)){
return cljs.core.cons(v,(new cljs.core.LazySeq(null,(function (){
var G__18206 = clojure.math.combinatorics.iter_perm(v);
return (clojure.math.combinatorics.vec_lex_permutations.cljs$core$IFn$_invoke$arity$1 ? clojure.math.combinatorics.vec_lex_permutations.cljs$core$IFn$_invoke$arity$1(G__18206) : clojure.math.combinatorics.vec_lex_permutations.call(null,G__18206));
}),null,null)));
} else {
return null;
}
});
/**
 * DEPRECATED as a public function.
 * 
 * In prior versions of the combinatorics library, there were two similar functions: permutations and lex-permutations.  It was a source of confusion to know which to call.  Now, you can always call permutations.  When appropriate (i.e., when you pass in a sorted sequence of numbers), permutations will automatically call lex-permutations as a speed optimization.
 */
clojure.math.combinatorics.lex_permutations = (function clojure$math$combinatorics$lex_permutations(c){
return (new cljs.core.LazySeq(null,(function (){
var vec_sorted = cljs.core.vec(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(c));
if((cljs.core.count(vec_sorted) === (0))){
return (new cljs.core.List(null,cljs.core.PersistentVector.EMPTY,null,(1),null));
} else {
return clojure.math.combinatorics.vec_lex_permutations(vec_sorted);
}
}),null,null));
});
/**
 * Returns true iff s is a sequence of numbers in non-decreasing order
 */
clojure.math.combinatorics.sorted_numbers_QMARK_ = (function clojure$math$combinatorics$sorted_numbers_QMARK_(s){
if(cljs.core.every_QMARK_(cljs.core.number_QMARK_,s)){
var or__4126__auto__ = cljs.core.empty_QMARK_(s);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._LT__EQ_,s);
}
} else {
return false;
}
});
/**
 * Handles the case when you want the permutations of a list with duplicate items.
 */
clojure.math.combinatorics.multi_perm = (function clojure$math$combinatorics$multi_perm(l){
var f = cljs.core.frequencies(l);
var v = cljs.core.vec(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(l));
var indices = clojure.math.combinatorics.join((function (){var iter__4529__auto__ = (function clojure$math$combinatorics$multi_perm_$_iter__18207(s__18208){
return (new cljs.core.LazySeq(null,(function (){
var s__18208__$1 = s__18208;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__18208__$1);
if(temp__5804__auto__){
var s__18208__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__18208__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__18208__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__18210 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__18209 = (0);
while(true){
if((i__18209 < size__4528__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__18209);
cljs.core.chunk_append(b__18210,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((function (){var G__18211 = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__18211) : f.call(null,G__18211));
})(),i));

var G__18213 = (i__18209 + (1));
i__18209 = G__18213;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18210),clojure$math$combinatorics$multi_perm_$_iter__18207(cljs.core.chunk_rest(s__18208__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18210),null);
}
} else {
var i = cljs.core.first(s__18208__$2);
return cljs.core.cons(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((function (){var G__18212 = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__18212) : f.call(null,G__18212));
})(),i),clojure$math$combinatorics$multi_perm_$_iter__18207(cljs.core.rest(s__18208__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(v)));
})());
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.map,v),clojure.math.combinatorics.lex_permutations(indices));
});
/**
 * All the distinct permutations of items, lexicographic by index 
 *   (special handling for duplicate items).
 */
clojure.math.combinatorics.permutations = (function clojure$math$combinatorics$permutations(items){
if(cljs.core.truth_(clojure.math.combinatorics.sorted_numbers_QMARK_(items))){
return clojure.math.combinatorics.lex_permutations(items);
} else {
if(cljs.core.truth_(clojure.math.combinatorics.all_different_QMARK_(items))){
var v = cljs.core.vec(items);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__18214_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(v,p1__18214_SHARP_);
}),clojure.math.combinatorics.lex_permutations(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(v))));
} else {
return clojure.math.combinatorics.multi_perm(items);

}
}
});
/**
 * Every permutation of every combination of t elements from items
 */
clojure.math.combinatorics.permuted_combinations = (function clojure$math$combinatorics$permuted_combinations(items,t){
return clojure.math.combinatorics.join(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.math.combinatorics.permutations,clojure.math.combinatorics.combinations(items,t)));
});
clojure.math.combinatorics.factorial = (function clojure$math$combinatorics$factorial(n){
if(cljs.core.integer_QMARK_(n)){
} else {
throw (new Error("Assert failed: (integer? n)"));
}

if((!((n < (0))))){
} else {
throw (new Error("Assert failed: (not (neg? n))"));
}

var acc = (1);
var n__$1 = n;
while(true){
if((n__$1 === (0))){
return acc;
} else {
var G__18215 = (clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 ? clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2(acc,n__$1) : clojure.math.combinatorics._STAR__SINGLEQUOTE_.call(null,acc,n__$1));
var G__18216 = (n__$1 - (1));
acc = G__18215;
n__$1 = G__18216;
continue;
}
break;
}
});
/**
 * Input is a non-negative base 10 integer, output is the number in the
 * factorial number system (http://en.wikipedia.org/wiki/Factorial_number_system)
 * expressed as a list of 'digits'
 */
clojure.math.combinatorics.factorial_numbers = (function clojure$math$combinatorics$factorial_numbers(n){
if(cljs.core.integer_QMARK_(n)){
} else {
throw (new Error("Assert failed: (integer? n)"));
}

if((!((n < (0))))){
} else {
throw (new Error("Assert failed: (not (neg? n))"));
}

var n__$1 = n;
var digits = cljs.core.List.EMPTY;
var divisor = (1);
while(true){
if((n__$1 === (0))){
return digits;
} else {
var q = cljs.core.quot(n__$1,divisor);
var r = cljs.core.rem(n__$1,divisor);
var G__18217 = q;
var G__18218 = cljs.core.cons(r,digits);
var G__18219 = (divisor + (1));
n__$1 = G__18217;
digits = G__18218;
divisor = G__18219;
continue;
}
break;
}
});
clojure.math.combinatorics.remove_nth = (function clojure$math$combinatorics$remove_nth(l,n){
var acc = cljs.core.PersistentVector.EMPTY;
var l__$1 = l;
var n__$1 = n;
while(true){
if((n__$1 === (0))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(acc,cljs.core.rest(l__$1));
} else {
var G__18220 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,cljs.core.first(l__$1));
var G__18221 = cljs.core.rest(l__$1);
var G__18222 = (n__$1 - (1));
acc = G__18220;
l__$1 = G__18221;
n__$1 = G__18222;
continue;
}
break;
}
});
/**
 * Input should be a sorted sequential collection l of distinct items, 
 * output is nth-permutation (0-based)
 */
clojure.math.combinatorics.nth_permutation_distinct = (function clojure$math$combinatorics$nth_permutation_distinct(l,n){
if((n < clojure.math.combinatorics.factorial(cljs.core.count(l)))){
} else {
throw (new Error(["Assert failed: ",cljs.core.print_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([n,"is too large. Input has only",clojure.math.combinatorics.factorial(cljs.core.count(l)),"permutations."], 0)),"\n","(< n (factorial (count l)))"].join('')));
}

var length = cljs.core.count(l);
var fact_nums = clojure.math.combinatorics.factorial_numbers(n);
var indices = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((length - cljs.core.count(fact_nums)),(0)),fact_nums);
var l__$1 = l;
var perm = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_(indices)){
return perm;
} else {
var i = cljs.core.first(indices);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(l__$1,i);
var G__18223 = cljs.core.rest(indices);
var G__18224 = clojure.math.combinatorics.remove_nth(l__$1,i);
var G__18225 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(perm,item);
indices = G__18223;
l__$1 = G__18224;
perm = G__18225;
continue;
}
break;
}
});
clojure.math.combinatorics.count_permutations_from_frequencies = (function clojure$math$combinatorics$count_permutations_from_frequencies(freqs){
var counts = cljs.core.vals(freqs);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._SLASH_,clojure.math.combinatorics.factorial(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,counts)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.math.combinatorics.factorial,counts));
});
/**
 * Counts the number of distinct permutations of l
 */
clojure.math.combinatorics.count_permutations = (function clojure$math$combinatorics$count_permutations(l){
if(cljs.core.truth_(clojure.math.combinatorics.all_different_QMARK_(l))){
return clojure.math.combinatorics.factorial(cljs.core.count(l));
} else {
return clojure.math.combinatorics.count_permutations_from_frequencies(cljs.core.frequencies(l));
}
});
/**
 * Takes a sorted frequency map and returns how far into the sequence of
 * lexicographic permutations you get by varying the first item
 */
clojure.math.combinatorics.initial_perm_numbers = (function clojure$math$combinatorics$initial_perm_numbers(freqs){
return cljs.core.reductions.cljs$core$IFn$_invoke$arity$3(clojure.math.combinatorics._PLUS__SINGLEQUOTE_,(0),(function (){var iter__4529__auto__ = (function clojure$math$combinatorics$initial_perm_numbers_$_iter__18226(s__18227){
return (new cljs.core.LazySeq(null,(function (){
var s__18227__$1 = s__18227;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__18227__$1);
if(temp__5804__auto__){
var s__18227__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__18227__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__18227__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__18229 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__18228 = (0);
while(true){
if((i__18228 < size__4528__auto__)){
var vec__18230 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__18228);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18230,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18230,(1),null);
cljs.core.chunk_append(b__18229,clojure.math.combinatorics.count_permutations_from_frequencies(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(freqs,k,(v - (1)))));

var G__18236 = (i__18228 + (1));
i__18228 = G__18236;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18229),clojure$math$combinatorics$initial_perm_numbers_$_iter__18226(cljs.core.chunk_rest(s__18227__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18229),null);
}
} else {
var vec__18233 = cljs.core.first(s__18227__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18233,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18233,(1),null);
return cljs.core.cons(clojure.math.combinatorics.count_permutations_from_frequencies(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(freqs,k,(v - (1)))),clojure$math$combinatorics$initial_perm_numbers_$_iter__18226(cljs.core.rest(s__18227__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(freqs);
})());
});
/**
 * Finds the index and remainder from the initial-perm-numbers.
 */
clojure.math.combinatorics.index_remainder = (function clojure$math$combinatorics$index_remainder(perm_numbers,n){
var perm_numbers__$1 = perm_numbers;
var index = (0);
while(true){
if((((cljs.core.first(perm_numbers__$1) <= n)) && ((n < cljs.core.second(perm_numbers__$1))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,(n - cljs.core.first(perm_numbers__$1))], null);
} else {
var G__18237 = cljs.core.rest(perm_numbers__$1);
var G__18238 = (index + (1));
perm_numbers__$1 = G__18237;
index = G__18238;
continue;
}
break;
}
});
clojure.math.combinatorics.dec_key = (function clojure$math$combinatorics$dec_key(m,k){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),(m.cljs$core$IFn$_invoke$arity$1 ? m.cljs$core$IFn$_invoke$arity$1(k) : m.call(null,k)))){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,k);
} else {
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null),cljs.core.dec);
}
});
/**
 * Input is a non-negative base 10 integer n, and a sorted frequency map freqs.
 * Output is a list of 'digits' in this wacky duplicate factorial number system
 */
clojure.math.combinatorics.factorial_numbers_with_duplicates = (function clojure$math$combinatorics$factorial_numbers_with_duplicates(n,freqs){
var n__$1 = n;
var digits = cljs.core.PersistentVector.EMPTY;
var freqs__$1 = freqs;
while(true){
if((n__$1 === (0))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(digits,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.vals(freqs__$1)),(0)));
} else {
var vec__18242 = clojure.math.combinatorics.index_remainder(clojure.math.combinatorics.initial_perm_numbers(freqs__$1),n__$1);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18242,(0),null);
var remainder = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18242,(1),null);
var G__18245 = remainder;
var G__18246 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(digits,index);
var G__18247 = (function (){var nth_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(freqs__$1),index);
return clojure.math.combinatorics.dec_key(freqs__$1,nth_key);
})();
n__$1 = G__18245;
digits = G__18246;
freqs__$1 = G__18247;
continue;
}
break;
}
});
/**
 * Input should be a sorted sequential collection l of distinct items, 
 * output is nth-permutation (0-based)
 */
clojure.math.combinatorics.nth_permutation_duplicates = (function clojure$math$combinatorics$nth_permutation_duplicates(l,n){
if((n < clojure.math.combinatorics.count_permutations(l))){
} else {
throw (new Error(["Assert failed: ",cljs.core.print_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([n,"is too large. Input has only",clojure.math.combinatorics.count_permutations(l),"permutations."], 0)),"\n","(< n (count-permutations l))"].join('')));
}

var freqs = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.sorted_map(),cljs.core.frequencies(l));
var indices = clojure.math.combinatorics.factorial_numbers_with_duplicates(n,freqs);
var perm = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_(indices)){
return perm;
} else {
var i = cljs.core.first(indices);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(freqs),i);
var G__18248 = clojure.math.combinatorics.dec_key(freqs,item);
var G__18249 = cljs.core.rest(indices);
var G__18250 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(perm,item);
freqs = G__18248;
indices = G__18249;
perm = G__18250;
continue;
}
break;
}
});
/**
 * (nth (permutations items)) but calculated more directly.
 */
clojure.math.combinatorics.nth_permutation = (function clojure$math$combinatorics$nth_permutation(items,n){
if(cljs.core.truth_(clojure.math.combinatorics.sorted_numbers_QMARK_(items))){
if(cljs.core.truth_(clojure.math.combinatorics.all_different_QMARK_(items))){
return clojure.math.combinatorics.nth_permutation_distinct(items,n);
} else {
return clojure.math.combinatorics.nth_permutation_duplicates(items,n);
}
} else {
if(cljs.core.truth_(clojure.math.combinatorics.all_different_QMARK_(items))){
var v = cljs.core.vec(items);
var perm_indices = clojure.math.combinatorics.nth_permutation_distinct(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(items)),n);
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(v,perm_indices));
} else {
var v = cljs.core.vec(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(items));
var f = cljs.core.frequencies(items);
var indices = clojure.math.combinatorics.join((function (){var iter__4529__auto__ = (function clojure$math$combinatorics$nth_permutation_$_iter__18251(s__18252){
return (new cljs.core.LazySeq(null,(function (){
var s__18252__$1 = s__18252;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__18252__$1);
if(temp__5804__auto__){
var s__18252__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__18252__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__18252__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__18254 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__18253 = (0);
while(true){
if((i__18253 < size__4528__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__18253);
cljs.core.chunk_append(b__18254,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((function (){var G__18255 = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__18255) : f.call(null,G__18255));
})(),i));

var G__18257 = (i__18253 + (1));
i__18253 = G__18257;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18254),clojure$math$combinatorics$nth_permutation_$_iter__18251(cljs.core.chunk_rest(s__18252__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18254),null);
}
} else {
var i = cljs.core.first(s__18252__$2);
return cljs.core.cons(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((function (){var G__18256 = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__18256) : f.call(null,G__18256));
})(),i),clojure$math$combinatorics$nth_permutation_$_iter__18251(cljs.core.rest(s__18252__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(v)));
})());
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(v,clojure.math.combinatorics.nth_permutation_duplicates(indices,n)));
}
}
});
/**
 * (drop n (permutations items)) but calculated more directly.
 */
clojure.math.combinatorics.drop_permutations = (function clojure$math$combinatorics$drop_permutations(items,n){
if((n === (0))){
return clojure.math.combinatorics.permutations(items);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,clojure.math.combinatorics.count_permutations(items))){
return cljs.core.List.EMPTY;
} else {
if(cljs.core.truth_(clojure.math.combinatorics.sorted_numbers_QMARK_(items))){
if(cljs.core.truth_(clojure.math.combinatorics.all_different_QMARK_(items))){
return clojure.math.combinatorics.vec_lex_permutations(clojure.math.combinatorics.nth_permutation_distinct(items,n));
} else {
return clojure.math.combinatorics.vec_lex_permutations(clojure.math.combinatorics.nth_permutation_duplicates(items,n));
}
} else {
if(cljs.core.truth_(clojure.math.combinatorics.all_different_QMARK_(items))){
var v = cljs.core.vec(items);
var perm_indices = clojure.math.combinatorics.nth_permutation_distinct(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(items)),n);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.map,v),clojure.math.combinatorics.vec_lex_permutations(perm_indices));
} else {
var v = cljs.core.vec(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(items));
var f = cljs.core.frequencies(items);
var indices = clojure.math.combinatorics.join((function (){var iter__4529__auto__ = (function clojure$math$combinatorics$drop_permutations_$_iter__18258(s__18259){
return (new cljs.core.LazySeq(null,(function (){
var s__18259__$1 = s__18259;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__18259__$1);
if(temp__5804__auto__){
var s__18259__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__18259__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__18259__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__18261 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__18260 = (0);
while(true){
if((i__18260 < size__4528__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__18260);
cljs.core.chunk_append(b__18261,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((function (){var G__18262 = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__18262) : f.call(null,G__18262));
})(),i));

var G__18264 = (i__18260 + (1));
i__18260 = G__18264;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18261),clojure$math$combinatorics$drop_permutations_$_iter__18258(cljs.core.chunk_rest(s__18259__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18261),null);
}
} else {
var i = cljs.core.first(s__18259__$2);
return cljs.core.cons(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((function (){var G__18263 = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__18263) : f.call(null,G__18263));
})(),i),clojure$math$combinatorics$drop_permutations_$_iter__18258(cljs.core.rest(s__18259__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(v)));
})());
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.map,v),clojure.math.combinatorics.vec_lex_permutations(clojure.math.combinatorics.nth_permutation_duplicates(indices,n)));
}
}

}
}
});
clojure.math.combinatorics.n_take_k = (function clojure$math$combinatorics$n_take_k(n,k){
while(true){
if((k < (0))){
return (0);
} else {
if((k > n)){
return (0);
} else {
if((k === (0))){
return (1);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,(1))){
return n;
} else {
if((k > cljs.core.quot(n,(2)))){
var G__18265 = n;
var G__18266 = (n - k);
n = G__18265;
k = G__18266;
continue;
} else {
return (cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.math.combinatorics._STAR__SINGLEQUOTE_,cljs.core.range.cljs$core$IFn$_invoke$arity$2(((n - k) + (1)),(n + (1)))) / cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.math.combinatorics._STAR__SINGLEQUOTE_,cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(k + (1)))));

}
}
}
}
}
break;
}
});
clojure.math.combinatorics.count_combinations_from_frequencies = (function clojure$math$combinatorics$count_combinations_from_frequencies(freqs,t){
var counts = cljs.core.vals(freqs);
var sum = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,counts);
if((t === (0))){
return (1);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t,(1))){
return cljs.core.count(freqs);
} else {
if(cljs.core.every_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(1),null], null), null),counts)){
return clojure.math.combinatorics.n_take_k(cljs.core.count(freqs),t);
} else {
if((t > sum)){
return (0);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t,sum)){
return (1);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(freqs),(1))){
return (1);
} else {
var new_freqs = clojure.math.combinatorics.dec_key(freqs,cljs.core.first(cljs.core.keys(freqs)));
var G__18267 = (function (){var G__18269 = new_freqs;
var G__18270 = (t - (1));
return (clojure.math.combinatorics.count_combinations_from_frequencies.cljs$core$IFn$_invoke$arity$2 ? clojure.math.combinatorics.count_combinations_from_frequencies.cljs$core$IFn$_invoke$arity$2(G__18269,G__18270) : clojure.math.combinatorics.count_combinations_from_frequencies.call(null,G__18269,G__18270));
})();
var G__18268 = (function (){var G__18271 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(freqs,cljs.core.first(cljs.core.keys(freqs)));
var G__18272 = t;
return (clojure.math.combinatorics.count_combinations_from_frequencies.cljs$core$IFn$_invoke$arity$2 ? clojure.math.combinatorics.count_combinations_from_frequencies.cljs$core$IFn$_invoke$arity$2(G__18271,G__18272) : clojure.math.combinatorics.count_combinations_from_frequencies.call(null,G__18271,G__18272));
})();
return (clojure.math.combinatorics._PLUS__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 ? clojure.math.combinatorics._PLUS__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2(G__18267,G__18268) : clojure.math.combinatorics._PLUS__SINGLEQUOTE_.call(null,G__18267,G__18268));

}
}
}
}
}
}
});
/**
 * We need an internal version that doesn't memoize each call to count-combinations-from-frequencies
 * so that we can memoize over a series of calls.
 */
clojure.math.combinatorics.count_combinations_unmemoized = (function clojure$math$combinatorics$count_combinations_unmemoized(items,t){
if(cljs.core.truth_(clojure.math.combinatorics.all_different_QMARK_(items))){
return clojure.math.combinatorics.n_take_k(cljs.core.count(items),t);
} else {
return (clojure.math.combinatorics.count_combinations_from_frequencies.cljs$core$IFn$_invoke$arity$2 ? clojure.math.combinatorics.count_combinations_from_frequencies.cljs$core$IFn$_invoke$arity$2(cljs.core.frequencies(items),t) : clojure.math.combinatorics.count_combinations_from_frequencies.call(null,cljs.core.frequencies(items),t));
}
});
/**
 * (count (combinations items t)) but computed more directly
 */
clojure.math.combinatorics.count_combinations = (function clojure$math$combinatorics$count_combinations(items,t){
var count_combinations_from_frequencies_orig_val__18273 = clojure.math.combinatorics.count_combinations_from_frequencies;
var count_combinations_from_frequencies_temp_val__18274 = cljs.core.memoize(clojure.math.combinatorics.count_combinations_from_frequencies);
(clojure.math.combinatorics.count_combinations_from_frequencies = count_combinations_from_frequencies_temp_val__18274);

try{return clojure.math.combinatorics.count_combinations_unmemoized(items,t);
}finally {(clojure.math.combinatorics.count_combinations_from_frequencies = count_combinations_from_frequencies_orig_val__18273);
}});
clojure.math.combinatorics.expt_int = (function clojure$math$combinatorics$expt_int(base,pow){
var n = pow;
var y = (1);
var z = base;
while(true){
var t = cljs.core.even_QMARK_(n);
var n__$1 = cljs.core.quot(n,(2));
if(t){
var G__18275 = n__$1;
var G__18276 = y;
var G__18277 = (clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 ? clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2(z,z) : clojure.math.combinatorics._STAR__SINGLEQUOTE_.call(null,z,z));
n = G__18275;
y = G__18276;
z = G__18277;
continue;
} else {
if((n__$1 === (0))){
return (clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 ? clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2(z,y) : clojure.math.combinatorics._STAR__SINGLEQUOTE_.call(null,z,y));
} else {
var G__18278 = n__$1;
var G__18279 = (clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 ? clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2(z,y) : clojure.math.combinatorics._STAR__SINGLEQUOTE_.call(null,z,y));
var G__18280 = (clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 ? clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2(z,z) : clojure.math.combinatorics._STAR__SINGLEQUOTE_.call(null,z,z));
n = G__18278;
y = G__18279;
z = G__18280;
continue;

}
}
break;
}
});
clojure.math.combinatorics.count_subsets_unmemoized = (function clojure$math$combinatorics$count_subsets_unmemoized(items){
if(cljs.core.empty_QMARK_(items)){
return (1);
} else {
if(cljs.core.truth_(clojure.math.combinatorics.all_different_QMARK_(items))){
return clojure.math.combinatorics.expt_int((2),cljs.core.count(items));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.math.combinatorics._PLUS__SINGLEQUOTE_,(function (){var iter__4529__auto__ = (function clojure$math$combinatorics$count_subsets_unmemoized_$_iter__18281(s__18282){
return (new cljs.core.LazySeq(null,(function (){
var s__18282__$1 = s__18282;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__18282__$1);
if(temp__5804__auto__){
var s__18282__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__18282__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__18282__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__18284 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__18283 = (0);
while(true){
if((i__18283 < size__4528__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__18283);
cljs.core.chunk_append(b__18284,clojure.math.combinatorics.count_combinations_unmemoized(items,i));

var G__18285 = (i__18283 + (1));
i__18283 = G__18285;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18284),clojure$math$combinatorics$count_subsets_unmemoized_$_iter__18281(cljs.core.chunk_rest(s__18282__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18284),null);
}
} else {
var i = cljs.core.first(s__18282__$2);
return cljs.core.cons(clojure.math.combinatorics.count_combinations_unmemoized(items,i),clojure$math$combinatorics$count_subsets_unmemoized_$_iter__18281(cljs.core.rest(s__18282__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),(cljs.core.count(items) + (1))));
})());

}
}
});
/**
 * (count (subsets items)) but computed more directly
 */
clojure.math.combinatorics.count_subsets = (function clojure$math$combinatorics$count_subsets(items){
var count_combinations_from_frequencies_orig_val__18286 = clojure.math.combinatorics.count_combinations_from_frequencies;
var count_combinations_from_frequencies_temp_val__18287 = cljs.core.memoize(clojure.math.combinatorics.count_combinations_from_frequencies);
(clojure.math.combinatorics.count_combinations_from_frequencies = count_combinations_from_frequencies_temp_val__18287);

try{return clojure.math.combinatorics.count_subsets_unmemoized(items);
}finally {(clojure.math.combinatorics.count_combinations_from_frequencies = count_combinations_from_frequencies_orig_val__18286);
}});
/**
 * The nth element of the sequence of t-combinations of items,
 * where items is a collection of distinct elements
 */
clojure.math.combinatorics.nth_combination_distinct = (function clojure$math$combinatorics$nth_combination_distinct(items,t,n){
var comb = cljs.core.PersistentVector.EMPTY;
var items__$1 = items;
var t__$1 = t;
var n__$1 = n;
while(true){
if((((n__$1 === (0))) || (cljs.core.empty_QMARK_(items__$1)))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(comb,cljs.core.take.cljs$core$IFn$_invoke$arity$2(t__$1,items__$1));
} else {
var dc_dt = clojure.math.combinatorics.n_take_k((cljs.core.count(items__$1) - (1)),(t__$1 - (1)));
if((n__$1 < dc_dt)){
var G__18288 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(comb,cljs.core.first(items__$1));
var G__18289 = cljs.core.rest(items__$1);
var G__18290 = (t__$1 - (1));
var G__18291 = n__$1;
comb = G__18288;
items__$1 = G__18289;
t__$1 = G__18290;
n__$1 = G__18291;
continue;
} else {
var G__18292 = comb;
var G__18293 = cljs.core.rest(items__$1);
var G__18294 = t__$1;
var G__18295 = (n__$1 - dc_dt);
comb = G__18292;
items__$1 = G__18293;
t__$1 = G__18294;
n__$1 = G__18295;
continue;
}
}
break;
}
});
/**
 * The nth element of the sequence of t-combinations of the multiset
 * represented by freqs
 */
clojure.math.combinatorics.nth_combination_freqs = (function clojure$math$combinatorics$nth_combination_freqs(freqs,t,n){
var comb = cljs.core.PersistentVector.EMPTY;
var freqs__$1 = freqs;
var t__$1 = t;
var n__$1 = n;
while(true){
if((((n__$1 === (0))) || (cljs.core.empty_QMARK_(freqs__$1)))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(comb,cljs.core.take.cljs$core$IFn$_invoke$arity$2(t__$1,clojure.math.combinatorics.join((function (){var iter__4529__auto__ = ((function (comb,freqs__$1,t__$1,n__$1){
return (function clojure$math$combinatorics$nth_combination_freqs_$_iter__18306(s__18307){
return (new cljs.core.LazySeq(null,((function (comb,freqs__$1,t__$1,n__$1){
return (function (){
var s__18307__$1 = s__18307;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__18307__$1);
if(temp__5804__auto__){
var s__18307__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__18307__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__18307__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__18309 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__18308 = (0);
while(true){
if((i__18308 < size__4528__auto__)){
var vec__18310 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__18308);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18310,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18310,(1),null);
cljs.core.chunk_append(b__18309,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(v,k));

var G__18316 = (i__18308 + (1));
i__18308 = G__18316;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18309),clojure$math$combinatorics$nth_combination_freqs_$_iter__18306(cljs.core.chunk_rest(s__18307__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18309),null);
}
} else {
var vec__18313 = cljs.core.first(s__18307__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18313,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18313,(1),null);
return cljs.core.cons(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(v,k),clojure$math$combinatorics$nth_combination_freqs_$_iter__18306(cljs.core.rest(s__18307__$2)));
}
} else {
return null;
}
break;
}
});})(comb,freqs__$1,t__$1,n__$1))
,null,null));
});})(comb,freqs__$1,t__$1,n__$1))
;
return iter__4529__auto__(freqs__$1);
})())));
} else {
var first_key = cljs.core.first(cljs.core.keys(freqs__$1));
var remove_one_key = clojure.math.combinatorics.dec_key(freqs__$1,first_key);
var dc_dt = (clojure.math.combinatorics.count_combinations_from_frequencies.cljs$core$IFn$_invoke$arity$2 ? clojure.math.combinatorics.count_combinations_from_frequencies.cljs$core$IFn$_invoke$arity$2(remove_one_key,(t__$1 - (1))) : clojure.math.combinatorics.count_combinations_from_frequencies.call(null,remove_one_key,(t__$1 - (1))));
if((n__$1 < dc_dt)){
var G__18317 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(comb,first_key);
var G__18318 = remove_one_key;
var G__18319 = (t__$1 - (1));
var G__18320 = n__$1;
comb = G__18317;
freqs__$1 = G__18318;
t__$1 = G__18319;
n__$1 = G__18320;
continue;
} else {
var G__18321 = comb;
var G__18322 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(freqs__$1,first_key);
var G__18323 = t__$1;
var G__18324 = (n__$1 - dc_dt);
comb = G__18321;
freqs__$1 = G__18322;
t__$1 = G__18323;
n__$1 = G__18324;
continue;
}
}
break;
}
});
/**
 * The nth element of the sequence of t-combinations of items
 */
clojure.math.combinatorics.nth_combination = (function clojure$math$combinatorics$nth_combination(items,t,n){
if((n < clojure.math.combinatorics.count_combinations(items,t))){
} else {
throw (new Error(["Assert failed: ",cljs.core.print_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([n,"is too large. Input has only",clojure.math.combinatorics.count_combinations_unmemoized(items,t),"combinations."], 0)),"\n","(< n (count-combinations items t))"].join('')));
}

if(cljs.core.truth_(clojure.math.combinatorics.all_different_QMARK_(items))){
return clojure.math.combinatorics.nth_combination_distinct(items,t,n);
} else {
var count_combinations_from_frequencies_orig_val__18325 = clojure.math.combinatorics.count_combinations_from_frequencies;
var count_combinations_from_frequencies_temp_val__18326 = cljs.core.memoize(clojure.math.combinatorics.count_combinations_from_frequencies);
(clojure.math.combinatorics.count_combinations_from_frequencies = count_combinations_from_frequencies_temp_val__18326);

try{var v = cljs.core.vec(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(items));
var f = cljs.core.frequencies(items);
var indices = clojure.math.combinatorics.join((function (){var iter__4529__auto__ = (function clojure$math$combinatorics$nth_combination_$_iter__18327(s__18328){
return (new cljs.core.LazySeq(null,(function (){
var s__18328__$1 = s__18328;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__18328__$1);
if(temp__5804__auto__){
var s__18328__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__18328__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__18328__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__18330 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__18329 = (0);
while(true){
if((i__18329 < size__4528__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__18329);
cljs.core.chunk_append(b__18330,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((function (){var G__18331 = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__18331) : f.call(null,G__18331));
})(),i));

var G__18333 = (i__18329 + (1));
i__18329 = G__18333;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18330),clojure$math$combinatorics$nth_combination_$_iter__18327(cljs.core.chunk_rest(s__18328__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18330),null);
}
} else {
var i = cljs.core.first(s__18328__$2);
return cljs.core.cons(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((function (){var G__18332 = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__18332) : f.call(null,G__18332));
})(),i),clojure$math$combinatorics$nth_combination_$_iter__18327(cljs.core.rest(s__18328__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(v)));
})());
var indices_freqs = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.sorted_map(),cljs.core.frequencies(indices));
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(v,clojure.math.combinatorics.nth_combination_freqs(indices_freqs,t,n)));
}finally {(clojure.math.combinatorics.count_combinations_from_frequencies = count_combinations_from_frequencies_orig_val__18325);
}}
});
clojure.math.combinatorics.nth_subset = (function clojure$math$combinatorics$nth_subset(items,n){
if((n < clojure.math.combinatorics.count_subsets(items))){
} else {
throw (new Error(["Assert failed: ",cljs.core.print_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([n,"is too large. Input has only",clojure.math.combinatorics.count_subsets(items),"subsets."], 0)),"\n","(< n (count-subsets items))"].join('')));
}

var size = (0);
var n__$1 = n;
while(true){
var num_combinations = clojure.math.combinatorics.count_combinations(items,size);
if((n__$1 < num_combinations)){
return clojure.math.combinatorics.nth_combination(items,size,n__$1);
} else {
var G__18334 = (size + (1));
var G__18335 = (n__$1 - num_combinations);
size = G__18334;
n__$1 = G__18335;
continue;
}
break;
}
});
/**
 * The opposite of nth, i.e., from an item in a list, find the n
 */
clojure.math.combinatorics.list_index = (function clojure$math$combinatorics$list_index(l,item){
var l__$1 = l;
var n = (0);
while(true){
if(cljs.core.seq(l__$1)){
} else {
throw (new Error("Assert failed: (seq l)"));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(item,cljs.core.first(l__$1))){
return n;
} else {
var G__18336 = cljs.core.rest(l__$1);
var G__18337 = (n + (1));
l__$1 = G__18336;
n = G__18337;
continue;
}
break;
}
});
clojure.math.combinatorics.permutation_index_distinct = (function clojure$math$combinatorics$permutation_index_distinct(l){
var l__$1 = l;
var index = (0);
var n = (cljs.core.count(l__$1) - (1));
while(true){
if(cljs.core.empty_QMARK_(l__$1)){
return index;
} else {
var G__18346 = cljs.core.rest(l__$1);
var G__18347 = (function (){var G__18342 = index;
var G__18343 = (function (){var G__18344 = clojure.math.combinatorics.factorial(n);
var G__18345 = clojure.math.combinatorics.list_index(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(l__$1),cljs.core.first(l__$1));
return (clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 ? clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2(G__18344,G__18345) : clojure.math.combinatorics._STAR__SINGLEQUOTE_.call(null,G__18344,G__18345));
})();
return (clojure.math.combinatorics._PLUS__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 ? clojure.math.combinatorics._PLUS__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2(G__18342,G__18343) : clojure.math.combinatorics._PLUS__SINGLEQUOTE_.call(null,G__18342,G__18343));
})();
var G__18348 = (n - (1));
l__$1 = G__18346;
index = G__18347;
n = G__18348;
continue;
}
break;
}
});
clojure.math.combinatorics.permutation_index_duplicates = (function clojure$math$combinatorics$permutation_index_duplicates(l){
var l__$1 = l;
var index = (0);
var freqs = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.sorted_map(),cljs.core.frequencies(l__$1));
while(true){
if(cljs.core.empty_QMARK_(l__$1)){
return index;
} else {
var G__18358 = cljs.core.rest(l__$1);
var G__18359 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(clojure.math.combinatorics._PLUS__SINGLEQUOTE_,index,(function (){var iter__4529__auto__ = ((function (l__$1,index,freqs){
return (function clojure$math$combinatorics$permutation_index_duplicates_$_iter__18354(s__18355){
return (new cljs.core.LazySeq(null,((function (l__$1,index,freqs){
return (function (){
var s__18355__$1 = s__18355;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__18355__$1);
if(temp__5804__auto__){
var s__18355__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__18355__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__18355__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__18357 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__18356 = (0);
while(true){
if((i__18356 < size__4528__auto__)){
var k = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__18356);
cljs.core.chunk_append(b__18357,clojure.math.combinatorics.count_permutations_from_frequencies(clojure.math.combinatorics.dec_key(freqs,k)));

var G__18361 = (i__18356 + (1));
i__18356 = G__18361;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18357),clojure$math$combinatorics$permutation_index_duplicates_$_iter__18354(cljs.core.chunk_rest(s__18355__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18357),null);
}
} else {
var k = cljs.core.first(s__18355__$2);
return cljs.core.cons(clojure.math.combinatorics.count_permutations_from_frequencies(clojure.math.combinatorics.dec_key(freqs,k)),clojure$math$combinatorics$permutation_index_duplicates_$_iter__18354(cljs.core.rest(s__18355__$2)));
}
} else {
return null;
}
break;
}
});})(l__$1,index,freqs))
,null,null));
});})(l__$1,index,freqs))
;
return iter__4529__auto__(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(((function (l__$1,index,freqs,iter__4529__auto__){
return (function (p1__18349_SHARP_){
return (cljs.core.compare(p1__18349_SHARP_,cljs.core.first(l__$1)) < (0));
});})(l__$1,index,freqs,iter__4529__auto__))
,cljs.core.keys(freqs)));
})());
var G__18360 = clojure.math.combinatorics.dec_key(freqs,cljs.core.first(l__$1));
l__$1 = G__18358;
index = G__18359;
freqs = G__18360;
continue;
}
break;
}
});
/**
 * Input must be a sortable collection of items.  Returns the n such that
 *  (nth-permutation (sort items) n) is items.
 */
clojure.math.combinatorics.permutation_index = (function clojure$math$combinatorics$permutation_index(items){
if(cljs.core.truth_(clojure.math.combinatorics.all_different_QMARK_(items))){
return clojure.math.combinatorics.permutation_index_distinct(items);
} else {
return clojure.math.combinatorics.permutation_index_duplicates(items);
}
});
clojure.math.combinatorics.update = (function clojure$math$combinatorics$update(vec,index,f){
var item = (vec.cljs$core$IFn$_invoke$arity$1 ? vec.cljs$core$IFn$_invoke$arity$1(index) : vec.call(null,index));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(vec,index,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(item) : f.call(null,item)));
});
clojure.math.combinatorics.reify_bool = (function clojure$math$combinatorics$reify_bool(statement){
if(cljs.core.truth_(statement)){
return (1);
} else {
return (0);
}
});
clojure.math.combinatorics.init = (function clojure$math$combinatorics$init(n,s){
if(cljs.core.truth_(s)){
return cljs.core.vec((function (){var iter__4529__auto__ = (function clojure$math$combinatorics$init_$_iter__18362(s__18363){
return (new cljs.core.LazySeq(null,(function (){
var s__18363__$1 = s__18363;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__18363__$1);
if(temp__5804__auto__){
var s__18363__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__18363__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__18363__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__18365 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__18364 = (0);
while(true){
if((i__18364 < size__4528__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__18364);
cljs.core.chunk_append(b__18365,(function (){var x__4214__auto__ = (0);
var y__4215__auto__ = (i - ((n - s) - (-1)));
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})());

var G__18366 = (i__18364 + (1));
i__18364 = G__18366;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18365),clojure$math$combinatorics$init_$_iter__18362(cljs.core.chunk_rest(s__18363__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18365),null);
}
} else {
var i = cljs.core.first(s__18363__$2);
return cljs.core.cons((function (){var x__4214__auto__ = (0);
var y__4215__auto__ = (i - ((n - s) - (-1)));
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})(),clojure$math$combinatorics$init_$_iter__18362(cljs.core.rest(s__18363__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(n + (1))));
})());
} else {
return cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(n,(0)));
}
});
clojure.math.combinatorics.growth_strings_H = (function clojure$math$combinatorics$growth_strings_H(var_args){
var G__18368 = arguments.length;
switch (G__18368) {
case 3:
return clojure.math.combinatorics.growth_strings_H.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 5:
return clojure.math.combinatorics.growth_strings_H.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.math.combinatorics.growth_strings_H.cljs$core$IFn$_invoke$arity$3 = (function (n,r,s){
return clojure.math.combinatorics.growth_strings_H.cljs$core$IFn$_invoke$arity$5(n,clojure.math.combinatorics.init(n,s),cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(n,(1))),r,s);
}));

(clojure.math.combinatorics.growth_strings_H.cljs$core$IFn$_invoke$arity$5 = (function (n,a,b,r,s){
return cljs.core.cons(a,(new cljs.core.LazySeq(null,(function (){
if((((cljs.core.peek(b) > cljs.core.peek(a)))?(cljs.core.truth_(r)?(cljs.core.peek(a) < (r - (1))):true):false)){
return clojure.math.combinatorics.growth_strings_H.cljs$core$IFn$_invoke$arity$5(n,clojure.math.combinatorics.update(a,(n - (1)),cljs.core.inc),b,r,s);
} else {
var j = (function (){var j = (n - (2));
while(true){
if(((((a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1(j) : a.call(null,j)) < (b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(j) : b.call(null,j))))?(((cljs.core.truth_(r)?((a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1(j) : a.call(null,j)) < (r - (1))):true))?(cljs.core.truth_(s)?(((s - (b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(j) : b.call(null,j))) - clojure.math.combinatorics.reify_bool((((a.cljs$core$IFn$_invoke$arity$1 ? a.cljs$core$IFn$_invoke$arity$1(j) : a.call(null,j)) + (1)) === (b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(j) : b.call(null,j))))) <= (n - j)):true):false):false)){
return j;
} else {
var G__18373 = (j - (1));
j = G__18373;
continue;
}
break;
}
})();
if((j === (0))){
return cljs.core.List.EMPTY;
} else {
var a__$1 = clojure.math.combinatorics.update(a,j,cljs.core.inc);
var x = (cljs.core.truth_(s)?(s - ((b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(j) : b.call(null,j)) + clojure.math.combinatorics.reify_bool(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((a__$1.cljs$core$IFn$_invoke$arity$1 ? a__$1.cljs$core$IFn$_invoke$arity$1(j) : a__$1.call(null,j)),(b.cljs$core$IFn$_invoke$arity$1 ? b.cljs$core$IFn$_invoke$arity$1(j) : b.call(null,j)))))):null);
var vec__18369 = (function (){var a__$2 = a__$1;
var b__$1 = b;
var i = (j + (1));
var current_max = ((b__$1.cljs$core$IFn$_invoke$arity$1 ? b__$1.cljs$core$IFn$_invoke$arity$1(j) : b__$1.call(null,j)) + clojure.math.combinatorics.reify_bool(((b__$1.cljs$core$IFn$_invoke$arity$1 ? b__$1.cljs$core$IFn$_invoke$arity$1(j) : b__$1.call(null,j)) === (a__$2.cljs$core$IFn$_invoke$arity$1 ? a__$2.cljs$core$IFn$_invoke$arity$1(j) : a__$2.call(null,j)))));
while(true){
if((i === n)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a__$2,b__$1], null);
} else {
if(cljs.core.truth_((function (){var and__4115__auto__ = s;
if(cljs.core.truth_(and__4115__auto__)){
return (i > ((n - x) - (1)));
} else {
return and__4115__auto__;
}
})())){
var new_a_i = ((i - n) + s);
var G__18374 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(a__$2,i,new_a_i);
var G__18375 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(b__$1,i,current_max);
var G__18376 = (i + (1));
var G__18377 = (function (){var x__4214__auto__ = current_max;
var y__4215__auto__ = (new_a_i + (1));
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})();
a__$2 = G__18374;
b__$1 = G__18375;
i = G__18376;
current_max = G__18377;
continue;
} else {
var G__18378 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(a__$2,i,(0));
var G__18379 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(b__$1,i,current_max);
var G__18380 = (i + (1));
var G__18381 = current_max;
a__$2 = G__18378;
b__$1 = G__18379;
i = G__18380;
current_max = G__18381;
continue;

}
}
break;
}
})();
var a__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18369,(0),null);
var b__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18369,(1),null);
return clojure.math.combinatorics.growth_strings_H.cljs$core$IFn$_invoke$arity$5(n,a__$2,b__$1,r,s);
}
}
}),null,null)));
}));

(clojure.math.combinatorics.growth_strings_H.cljs$lang$maxFixedArity = 5);

clojure.math.combinatorics.lex_partitions_H = (function clojure$math$combinatorics$lex_partitions_H(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18391 = arguments.length;
var i__4737__auto___18392 = (0);
while(true){
if((i__4737__auto___18392 < len__4736__auto___18391)){
args__4742__auto__.push((arguments[i__4737__auto___18392]));

var G__18393 = (i__4737__auto___18392 + (1));
i__4737__auto___18392 = G__18393;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return clojure.math.combinatorics.lex_partitions_H.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(clojure.math.combinatorics.lex_partitions_H.cljs$core$IFn$_invoke$arity$variadic = (function (N,p__18384){
var map__18385 = p__18384;
var map__18385__$1 = (((((!((map__18385 == null))))?(((((map__18385.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18385.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18385):map__18385);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18385__$1,cljs.core.cst$kw$min);
var to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18385__$1,cljs.core.cst$kw$max);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(N,(0))){
if(((((function (){var or__4126__auto__ = from;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})() <= (0))) && (((0) <= (function (){var or__4126__auto__ = to;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})())))){
return cljs.core.list(cljs.core.List.EMPTY);
} else {
return cljs.core.List.EMPTY;
}
} else {
var from__$1 = (cljs.core.truth_((function (){var and__4115__auto__ = from;
if(cljs.core.truth_(and__4115__auto__)){
return (from <= (1));
} else {
return and__4115__auto__;
}
})())?null:from);
var to__$1 = (cljs.core.truth_((function (){var and__4115__auto__ = to;
if(cljs.core.truth_(and__4115__auto__)){
return (to >= N);
} else {
return and__4115__auto__;
}
})())?null:to);
if((!(((((1) <= (function (){var or__4126__auto__ = from__$1;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})())) && (((((function (){var or__4126__auto__ = from__$1;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})() <= (function (){var or__4126__auto__ = to__$1;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return N;
}
})())) && (((function (){var or__4126__auto__ = to__$1;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return N;
}
})() <= N)))))))){
return cljs.core.List.EMPTY;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(N,(0))){
return cljs.core.list(cljs.core.List.EMPTY);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(N,(1))){
return cljs.core.list(cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null)));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(to__$1,(1))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.range.cljs$core$IFn$_invoke$arity$1(N),null,(1),null))))),null,(1),null)))));
} else {
var growth_strings = clojure.math.combinatorics.growth_strings_H.cljs$core$IFn$_invoke$arity$3(N,to__$1,from__$1);
var iter__4529__auto__ = (function clojure$math$combinatorics$iter__18387(s__18388){
return (new cljs.core.LazySeq(null,(function (){
var s__18388__$1 = s__18388;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__18388__$1);
if(temp__5804__auto__){
var s__18388__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__18388__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__18388__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__18390 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__18389 = (0);
while(true){
if((i__18389 < size__4528__auto__)){
var growth_string = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__18389);
var groups = cljs.core.group_by(growth_string,cljs.core.range.cljs$core$IFn$_invoke$arity$1(N));
cljs.core.chunk_append(b__18390,cljs.core.map.cljs$core$IFn$_invoke$arity$2(groups,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(groups))));

var G__18394 = (i__18389 + (1));
i__18389 = G__18394;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18390),clojure$math$combinatorics$iter__18387(cljs.core.chunk_rest(s__18388__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18390),null);
}
} else {
var growth_string = cljs.core.first(s__18388__$2);
var groups = cljs.core.group_by(growth_string,cljs.core.range.cljs$core$IFn$_invoke$arity$1(N));
return cljs.core.cons(cljs.core.map.cljs$core$IFn$_invoke$arity$2(groups,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(groups))),clojure$math$combinatorics$iter__18387(cljs.core.rest(s__18388__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(growth_strings);

}
}
}
}
}
}));

(clojure.math.combinatorics.lex_partitions_H.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(clojure.math.combinatorics.lex_partitions_H.cljs$lang$applyTo = (function (seq18382){
var G__18383 = cljs.core.first(seq18382);
var seq18382__$1 = cljs.core.next(seq18382);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18383,seq18382__$1);
}));

clojure.math.combinatorics.partitions_H = (function clojure$math$combinatorics$partitions_H(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18409 = arguments.length;
var i__4737__auto___18410 = (0);
while(true){
if((i__4737__auto___18410 < len__4736__auto___18409)){
args__4742__auto__.push((arguments[i__4737__auto___18410]));

var G__18411 = (i__4737__auto___18410 + (1));
i__4737__auto___18410 = G__18411;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return clojure.math.combinatorics.partitions_H.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(clojure.math.combinatorics.partitions_H.cljs$core$IFn$_invoke$arity$variadic = (function (items,args){
var items__$1 = cljs.core.vec(items);
var N = cljs.core.count(items__$1);
var lex = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(clojure.math.combinatorics.lex_partitions_H,N,args);
var iter__4529__auto__ = (function clojure$math$combinatorics$iter__18397(s__18398){
return (new cljs.core.LazySeq(null,(function (){
var s__18398__$1 = s__18398;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__18398__$1);
if(temp__5804__auto__){
var s__18398__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__18398__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__18398__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__18400 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__18399 = (0);
while(true){
if((i__18399 < size__4528__auto__)){
var parts = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__18399);
cljs.core.chunk_append(b__18400,(function (){var iter__4529__auto__ = ((function (i__18399,parts,c__4527__auto__,size__4528__auto__,b__18400,s__18398__$2,temp__5804__auto__,items__$1,N,lex){
return (function clojure$math$combinatorics$iter__18397_$_iter__18401(s__18402){
return (new cljs.core.LazySeq(null,((function (i__18399,parts,c__4527__auto__,size__4528__auto__,b__18400,s__18398__$2,temp__5804__auto__,items__$1,N,lex){
return (function (){
var s__18402__$1 = s__18402;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__18402__$1);
if(temp__5804__auto____$1){
var s__18402__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__18402__$2)){
var c__4527__auto____$1 = cljs.core.chunk_first(s__18402__$2);
var size__4528__auto____$1 = cljs.core.count(c__4527__auto____$1);
var b__18404 = cljs.core.chunk_buffer(size__4528__auto____$1);
if((function (){var i__18403 = (0);
while(true){
if((i__18403 < size__4528__auto____$1)){
var part = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto____$1,i__18403);
cljs.core.chunk_append(b__18404,cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (i__18403,i__18399,part,c__4527__auto____$1,size__4528__auto____$1,b__18404,s__18402__$2,temp__5804__auto____$1,parts,c__4527__auto__,size__4528__auto__,b__18400,s__18398__$2,temp__5804__auto__,items__$1,N,lex){
return (function (v,o){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,(items__$1.cljs$core$IFn$_invoke$arity$1 ? items__$1.cljs$core$IFn$_invoke$arity$1(o) : items__$1.call(null,o)));
});})(i__18403,i__18399,part,c__4527__auto____$1,size__4528__auto____$1,b__18404,s__18402__$2,temp__5804__auto____$1,parts,c__4527__auto__,size__4528__auto__,b__18400,s__18398__$2,temp__5804__auto__,items__$1,N,lex))
,cljs.core.transient$(cljs.core.PersistentVector.EMPTY),part)));

var G__18412 = (i__18403 + (1));
i__18403 = G__18412;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18404),clojure$math$combinatorics$iter__18397_$_iter__18401(cljs.core.chunk_rest(s__18402__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18404),null);
}
} else {
var part = cljs.core.first(s__18402__$2);
return cljs.core.cons(cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (i__18399,part,s__18402__$2,temp__5804__auto____$1,parts,c__4527__auto__,size__4528__auto__,b__18400,s__18398__$2,temp__5804__auto__,items__$1,N,lex){
return (function (v,o){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,(items__$1.cljs$core$IFn$_invoke$arity$1 ? items__$1.cljs$core$IFn$_invoke$arity$1(o) : items__$1.call(null,o)));
});})(i__18399,part,s__18402__$2,temp__5804__auto____$1,parts,c__4527__auto__,size__4528__auto__,b__18400,s__18398__$2,temp__5804__auto__,items__$1,N,lex))
,cljs.core.transient$(cljs.core.PersistentVector.EMPTY),part)),clojure$math$combinatorics$iter__18397_$_iter__18401(cljs.core.rest(s__18402__$2)));
}
} else {
return null;
}
break;
}
});})(i__18399,parts,c__4527__auto__,size__4528__auto__,b__18400,s__18398__$2,temp__5804__auto__,items__$1,N,lex))
,null,null));
});})(i__18399,parts,c__4527__auto__,size__4528__auto__,b__18400,s__18398__$2,temp__5804__auto__,items__$1,N,lex))
;
return iter__4529__auto__(parts);
})());

var G__18413 = (i__18399 + (1));
i__18399 = G__18413;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18400),clojure$math$combinatorics$iter__18397(cljs.core.chunk_rest(s__18398__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18400),null);
}
} else {
var parts = cljs.core.first(s__18398__$2);
return cljs.core.cons((function (){var iter__4529__auto__ = ((function (parts,s__18398__$2,temp__5804__auto__,items__$1,N,lex){
return (function clojure$math$combinatorics$iter__18397_$_iter__18405(s__18406){
return (new cljs.core.LazySeq(null,(function (){
var s__18406__$1 = s__18406;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__18406__$1);
if(temp__5804__auto____$1){
var s__18406__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__18406__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__18406__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__18408 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__18407 = (0);
while(true){
if((i__18407 < size__4528__auto__)){
var part = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__18407);
cljs.core.chunk_append(b__18408,cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (i__18407,part,c__4527__auto__,size__4528__auto__,b__18408,s__18406__$2,temp__5804__auto____$1,parts,s__18398__$2,temp__5804__auto__,items__$1,N,lex){
return (function (v,o){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,(items__$1.cljs$core$IFn$_invoke$arity$1 ? items__$1.cljs$core$IFn$_invoke$arity$1(o) : items__$1.call(null,o)));
});})(i__18407,part,c__4527__auto__,size__4528__auto__,b__18408,s__18406__$2,temp__5804__auto____$1,parts,s__18398__$2,temp__5804__auto__,items__$1,N,lex))
,cljs.core.transient$(cljs.core.PersistentVector.EMPTY),part)));

var G__18414 = (i__18407 + (1));
i__18407 = G__18414;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18408),clojure$math$combinatorics$iter__18397_$_iter__18405(cljs.core.chunk_rest(s__18406__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18408),null);
}
} else {
var part = cljs.core.first(s__18406__$2);
return cljs.core.cons(cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (part,s__18406__$2,temp__5804__auto____$1,parts,s__18398__$2,temp__5804__auto__,items__$1,N,lex){
return (function (v,o){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,(items__$1.cljs$core$IFn$_invoke$arity$1 ? items__$1.cljs$core$IFn$_invoke$arity$1(o) : items__$1.call(null,o)));
});})(part,s__18406__$2,temp__5804__auto____$1,parts,s__18398__$2,temp__5804__auto__,items__$1,N,lex))
,cljs.core.transient$(cljs.core.PersistentVector.EMPTY),part)),clojure$math$combinatorics$iter__18397_$_iter__18405(cljs.core.rest(s__18406__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(parts,s__18398__$2,temp__5804__auto__,items__$1,N,lex))
;
return iter__4529__auto__(parts);
})(),clojure$math$combinatorics$iter__18397(cljs.core.rest(s__18398__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(lex);
}));

(clojure.math.combinatorics.partitions_H.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(clojure.math.combinatorics.partitions_H.cljs$lang$applyTo = (function (seq18395){
var G__18396 = cljs.core.first(seq18395);
var seq18395__$1 = cljs.core.next(seq18395);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18396,seq18395__$1);
}));


clojure.math.combinatorics.multiset_partitions_M = (function clojure$math$combinatorics$multiset_partitions_M(var_args){
var G__18416 = arguments.length;
switch (G__18416) {
case 3:
return clojure.math.combinatorics.multiset_partitions_M.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 11:
return clojure.math.combinatorics.multiset_partitions_M.cljs$core$IFn$_invoke$arity$11((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.math.combinatorics.multiset_partitions_M.cljs$core$IFn$_invoke$arity$3 = (function (multiset,r,s){
var n = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.vals(multiset));
var m = cljs.core.count(multiset);
var f = cljs.core.PersistentVector.EMPTY;
var c = cljs.core.PersistentVector.EMPTY;
var u = cljs.core.PersistentVector.EMPTY;
var v = cljs.core.PersistentVector.EMPTY;
var vec__18417 = (function (){var j = (0);
var c__$1 = c;
var u__$1 = u;
var v__$1 = v;
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(j,m)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1,u__$1,v__$1], null);
} else {
var G__18442 = (j + (1));
var G__18443 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(c__$1,j,(j + (1)));
var G__18444 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(u__$1,j,(function (){var G__18422 = (j + (1));
return (multiset.cljs$core$IFn$_invoke$arity$1 ? multiset.cljs$core$IFn$_invoke$arity$1(G__18422) : multiset.call(null,G__18422));
})());
var G__18445 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v__$1,j,(function (){var G__18423 = (j + (1));
return (multiset.cljs$core$IFn$_invoke$arity$1 ? multiset.cljs$core$IFn$_invoke$arity$1(G__18423) : multiset.call(null,G__18423));
})());
j = G__18442;
c__$1 = G__18443;
u__$1 = G__18444;
v__$1 = G__18445;
continue;
}
break;
}
})();
var c__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18417,(0),null);
var u__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18417,(1),null);
var v__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18417,(2),null);
var a = (0);
var b = m;
var l = (0);
var f__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(f,(0),(0),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(1),m], 0));
var stack = cljs.core.List.EMPTY;
return clojure.math.combinatorics.multiset_partitions_M.cljs$core$IFn$_invoke$arity$11(n,m,f__$1,c__$1,u__$1,v__$1,a,b,l,r,s);
}));

(clojure.math.combinatorics.multiset_partitions_M.cljs$core$IFn$_invoke$arity$11 = (function (n,m,f,c,u,v,a,b,l,r,s){
while(true){
var vec__18424 = (function (){var j = a;
var k = b;
var x = false;
var u__$1 = u;
var v__$1 = v;
var c__$1 = c;
while(true){
if((j >= b)){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [u__$1,v__$1,c__$1,j,k], null);
} else {
var u__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(u__$1,k,((u__$1.cljs$core$IFn$_invoke$arity$1 ? u__$1.cljs$core$IFn$_invoke$arity$1(j) : u__$1.call(null,j)) - (v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(j) : v__$1.call(null,j))));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((u__$2.cljs$core$IFn$_invoke$arity$1 ? u__$2.cljs$core$IFn$_invoke$arity$1(k) : u__$2.call(null,k)),(0))){
var G__18446 = (j + (1));
var G__18447 = k;
var G__18448 = true;
var G__18449 = u__$2;
var G__18450 = v__$1;
var G__18451 = c__$1;
j = G__18446;
k = G__18447;
x = G__18448;
u__$1 = G__18449;
v__$1 = G__18450;
c__$1 = G__18451;
continue;
} else {
if(cljs.core.not(x)){
var c__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(c__$1,k,(c__$1.cljs$core$IFn$_invoke$arity$1 ? c__$1.cljs$core$IFn$_invoke$arity$1(j) : c__$1.call(null,j)));
var v__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v__$1,k,(function (){var x__4217__auto__ = (v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(j) : v__$1.call(null,j));
var y__4218__auto__ = (u__$2.cljs$core$IFn$_invoke$arity$1 ? u__$2.cljs$core$IFn$_invoke$arity$1(k) : u__$2.call(null,k));
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})());
var x__$1 = ((u__$2.cljs$core$IFn$_invoke$arity$1 ? u__$2.cljs$core$IFn$_invoke$arity$1(k) : u__$2.call(null,k)) < (v__$2.cljs$core$IFn$_invoke$arity$1 ? v__$2.cljs$core$IFn$_invoke$arity$1(j) : v__$2.call(null,j)));
var k__$1 = (k + (1));
var j__$1 = (j + (1));
var G__18452 = j__$1;
var G__18453 = k__$1;
var G__18454 = x__$1;
var G__18455 = u__$2;
var G__18456 = v__$2;
var G__18457 = c__$2;
j = G__18452;
k = G__18453;
x = G__18454;
u__$1 = G__18455;
v__$1 = G__18456;
c__$1 = G__18457;
continue;
} else {
var c__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(c__$1,k,(c__$1.cljs$core$IFn$_invoke$arity$1 ? c__$1.cljs$core$IFn$_invoke$arity$1(j) : c__$1.call(null,j)));
var v__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v__$1,k,(u__$2.cljs$core$IFn$_invoke$arity$1 ? u__$2.cljs$core$IFn$_invoke$arity$1(k) : u__$2.call(null,k)));
var k__$1 = (k + (1));
var j__$1 = (j + (1));
var G__18458 = j__$1;
var G__18459 = k__$1;
var G__18460 = x;
var G__18461 = u__$2;
var G__18462 = v__$2;
var G__18463 = c__$2;
j = G__18458;
k = G__18459;
x = G__18460;
u__$1 = G__18461;
v__$1 = G__18462;
c__$1 = G__18463;
continue;
}
}
}
break;
}
})();
var u__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18424,(0),null);
var v__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18424,(1),null);
var c__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18424,(2),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18424,(3),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18424,(4),null);
if(cljs.core.truth_((function (){var and__4115__auto__ = r;
if(cljs.core.truth_(and__4115__auto__)){
return (((k > b)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(l,(r - (1)))));
} else {
return and__4115__auto__;
}
})())){
return (clojure.math.combinatorics.m5.cljs$core$IFn$_invoke$arity$11 ? clojure.math.combinatorics.m5.cljs$core$IFn$_invoke$arity$11(n,m,f,c__$1,u__$1,v__$1,a,b,l,r,s) : clojure.math.combinatorics.m5.call(null,n,m,f,c__$1,u__$1,v__$1,a,b,l,r,s));
} else {
if(cljs.core.truth_((function (){var and__4115__auto__ = s;
if(cljs.core.truth_(and__4115__auto__)){
return (((k <= b)) && (((l + (1)) < s)));
} else {
return and__4115__auto__;
}
})())){
return (clojure.math.combinatorics.m5.cljs$core$IFn$_invoke$arity$11 ? clojure.math.combinatorics.m5.cljs$core$IFn$_invoke$arity$11(n,m,f,c__$1,u__$1,v__$1,a,b,l,r,s) : clojure.math.combinatorics.m5.call(null,n,m,f,c__$1,u__$1,v__$1,a,b,l,r,s));
} else {
if((k > b)){
var a__$1 = b;
var b__$1 = k;
var l__$1 = (l + (1));
var f__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(f,(l__$1 + (1)),b__$1);
var G__18464 = n;
var G__18465 = m;
var G__18466 = f__$1;
var G__18467 = c__$1;
var G__18468 = u__$1;
var G__18469 = v__$1;
var G__18470 = a__$1;
var G__18471 = b__$1;
var G__18472 = l__$1;
var G__18473 = r;
var G__18474 = s;
n = G__18464;
m = G__18465;
f = G__18466;
c = G__18467;
u = G__18468;
v = G__18469;
a = G__18470;
b = G__18471;
l = G__18472;
r = G__18473;
s = G__18474;
continue;
} else {
var part = (function (){var iter__4529__auto__ = ((function (n,m,f,c,u,v,a,b,l,r,s,vec__18424,u__$1,v__$1,c__$1,j,k){
return (function clojure$math$combinatorics$iter__18427(s__18428){
return (new cljs.core.LazySeq(null,((function (n,m,f,c,u,v,a,b,l,r,s,vec__18424,u__$1,v__$1,c__$1,j,k){
return (function (){
var s__18428__$1 = s__18428;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__18428__$1);
if(temp__5804__auto__){
var s__18428__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__18428__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__18428__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__18430 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__18429 = (0);
while(true){
if((i__18429 < size__4528__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__18429);
cljs.core.chunk_append(b__18430,(function (){var first_col = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(y) : f.call(null,y));
var last_col = ((function (){var G__18431 = (y + (1));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__18431) : f.call(null,G__18431));
})() - (1));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4529__auto__ = ((function (i__18429,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__4527__auto__,size__4528__auto__,b__18430,s__18428__$2,temp__5804__auto__,vec__18424,u__$1,v__$1,c__$1,j,k){
return (function clojure$math$combinatorics$iter__18427_$_iter__18432(s__18433){
return (new cljs.core.LazySeq(null,((function (i__18429,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__4527__auto__,size__4528__auto__,b__18430,s__18428__$2,temp__5804__auto__,vec__18424,u__$1,v__$1,c__$1,j,k){
return (function (){
var s__18433__$1 = s__18433;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__18433__$1);
if(temp__5804__auto____$1){
var s__18433__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__18433__$2)){
var c__4527__auto____$1 = cljs.core.chunk_first(s__18433__$2);
var size__4528__auto____$1 = cljs.core.count(c__4527__auto____$1);
var b__18435 = cljs.core.chunk_buffer(size__4528__auto____$1);
if((function (){var i__18434 = (0);
while(true){
if((i__18434 < size__4528__auto____$1)){
var z = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto____$1,i__18434);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(z) : v__$1.call(null,z)),(0))){
cljs.core.chunk_append(b__18435,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(c__$1.cljs$core$IFn$_invoke$arity$1 ? c__$1.cljs$core$IFn$_invoke$arity$1(z) : c__$1.call(null,z)),(v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(z) : v__$1.call(null,z))], null));

var G__18475 = (i__18434 + (1));
i__18434 = G__18475;
continue;
} else {
var G__18476 = (i__18434 + (1));
i__18434 = G__18476;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18435),clojure$math$combinatorics$iter__18427_$_iter__18432(cljs.core.chunk_rest(s__18433__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18435),null);
}
} else {
var z = cljs.core.first(s__18433__$2);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(z) : v__$1.call(null,z)),(0))){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(c__$1.cljs$core$IFn$_invoke$arity$1 ? c__$1.cljs$core$IFn$_invoke$arity$1(z) : c__$1.call(null,z)),(v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(z) : v__$1.call(null,z))], null),clojure$math$combinatorics$iter__18427_$_iter__18432(cljs.core.rest(s__18433__$2)));
} else {
var G__18477 = cljs.core.rest(s__18433__$2);
s__18433__$1 = G__18477;
continue;
}
}
} else {
return null;
}
break;
}
});})(i__18429,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__4527__auto__,size__4528__auto__,b__18430,s__18428__$2,temp__5804__auto__,vec__18424,u__$1,v__$1,c__$1,j,k))
,null,null));
});})(i__18429,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__4527__auto__,size__4528__auto__,b__18430,s__18428__$2,temp__5804__auto__,vec__18424,u__$1,v__$1,c__$1,j,k))
;
return iter__4529__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2(first_col,(last_col + (1))));
})());
})());

var G__18478 = (i__18429 + (1));
i__18429 = G__18478;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18430),clojure$math$combinatorics$iter__18427(cljs.core.chunk_rest(s__18428__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18430),null);
}
} else {
var y = cljs.core.first(s__18428__$2);
return cljs.core.cons((function (){var first_col = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(y) : f.call(null,y));
var last_col = ((function (){var G__18436 = (y + (1));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__18436) : f.call(null,G__18436));
})() - (1));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4529__auto__ = ((function (n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__18428__$2,temp__5804__auto__,vec__18424,u__$1,v__$1,c__$1,j,k){
return (function clojure$math$combinatorics$iter__18427_$_iter__18437(s__18438){
return (new cljs.core.LazySeq(null,((function (n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__18428__$2,temp__5804__auto__,vec__18424,u__$1,v__$1,c__$1,j,k){
return (function (){
var s__18438__$1 = s__18438;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__18438__$1);
if(temp__5804__auto____$1){
var s__18438__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__18438__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__18438__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__18440 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__18439 = (0);
while(true){
if((i__18439 < size__4528__auto__)){
var z = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__18439);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(z) : v__$1.call(null,z)),(0))){
cljs.core.chunk_append(b__18440,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(c__$1.cljs$core$IFn$_invoke$arity$1 ? c__$1.cljs$core$IFn$_invoke$arity$1(z) : c__$1.call(null,z)),(v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(z) : v__$1.call(null,z))], null));

var G__18479 = (i__18439 + (1));
i__18439 = G__18479;
continue;
} else {
var G__18480 = (i__18439 + (1));
i__18439 = G__18480;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18440),clojure$math$combinatorics$iter__18427_$_iter__18437(cljs.core.chunk_rest(s__18438__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18440),null);
}
} else {
var z = cljs.core.first(s__18438__$2);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(z) : v__$1.call(null,z)),(0))){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(c__$1.cljs$core$IFn$_invoke$arity$1 ? c__$1.cljs$core$IFn$_invoke$arity$1(z) : c__$1.call(null,z)),(v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(z) : v__$1.call(null,z))], null),clojure$math$combinatorics$iter__18427_$_iter__18437(cljs.core.rest(s__18438__$2)));
} else {
var G__18481 = cljs.core.rest(s__18438__$2);
s__18438__$1 = G__18481;
continue;
}
}
} else {
return null;
}
break;
}
});})(n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__18428__$2,temp__5804__auto__,vec__18424,u__$1,v__$1,c__$1,j,k))
,null,null));
});})(n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__18428__$2,temp__5804__auto__,vec__18424,u__$1,v__$1,c__$1,j,k))
;
return iter__4529__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2(first_col,(last_col + (1))));
})());
})(),clojure$math$combinatorics$iter__18427(cljs.core.rest(s__18428__$2)));
}
} else {
return null;
}
break;
}
});})(n,m,f,c,u,v,a,b,l,r,s,vec__18424,u__$1,v__$1,c__$1,j,k))
,null,null));
});})(n,m,f,c,u,v,a,b,l,r,s,vec__18424,u__$1,v__$1,c__$1,j,k))
;
return iter__4529__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((l + (1))));
})();
return cljs.core.cons(part,(new cljs.core.LazySeq(null,((function (n,m,f,c,u,v,a,b,l,r,s,part,vec__18424,u__$1,v__$1,c__$1,j,k){
return (function (){
return (clojure.math.combinatorics.m5.cljs$core$IFn$_invoke$arity$11 ? clojure.math.combinatorics.m5.cljs$core$IFn$_invoke$arity$11(n,m,f,c__$1,u__$1,v__$1,a,b,l,r,s) : clojure.math.combinatorics.m5.call(null,n,m,f,c__$1,u__$1,v__$1,a,b,l,r,s));
});})(n,m,f,c,u,v,a,b,l,r,s,part,vec__18424,u__$1,v__$1,c__$1,j,k))
,null,null)));

}
}
}
break;
}
}));

(clojure.math.combinatorics.multiset_partitions_M.cljs$lang$maxFixedArity = 11);

clojure.math.combinatorics.m5 = (function clojure$math$combinatorics$m5(n,m,f,c,u,v,a,b,l,r,s){
var j = (function (){var j = (b - (1));
while(true){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(j) : v.call(null,j)),(0))){
return j;
} else {
var G__18486 = (j - (1));
j = G__18486;
continue;
}
break;
}
})();
if(cljs.core.truth_((function (){var and__4115__auto__ = r;
if(cljs.core.truth_(and__4115__auto__)){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(j,a)) && (((((v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(j) : v.call(null,j)) - (1)) * (r - l)) < (u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(j) : u.call(null,j)))));
} else {
return and__4115__auto__;
}
})())){
return (clojure.math.combinatorics.m6.cljs$core$IFn$_invoke$arity$11 ? clojure.math.combinatorics.m6.cljs$core$IFn$_invoke$arity$11(n,m,f,c,u,v,a,b,l,r,s) : clojure.math.combinatorics.m6.call(null,n,m,f,c,u,v,a,b,l,r,s));
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(j,a)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(j) : v.call(null,j)),(1))))){
return (clojure.math.combinatorics.m6.cljs$core$IFn$_invoke$arity$11 ? clojure.math.combinatorics.m6.cljs$core$IFn$_invoke$arity$11(n,m,f,c,u,v,a,b,l,r,s) : clojure.math.combinatorics.m6.call(null,n,m,f,c,u,v,a,b,l,r,s));
} else {
var v__$1 = clojure.math.combinatorics.update(v,j,cljs.core.dec);
var diff_uv = (cljs.core.truth_(s)?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,(function (){var iter__4529__auto__ = (function clojure$math$combinatorics$m5_$_iter__18482(s__18483){
return (new cljs.core.LazySeq(null,(function (){
var s__18483__$1 = s__18483;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__18483__$1);
if(temp__5804__auto__){
var s__18483__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__18483__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__18483__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__18485 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__18484 = (0);
while(true){
if((i__18484 < size__4528__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__18484);
cljs.core.chunk_append(b__18485,((u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(i) : u.call(null,i)) - (v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(i) : v__$1.call(null,i))));

var G__18487 = (i__18484 + (1));
i__18484 = G__18487;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18485),clojure$math$combinatorics$m5_$_iter__18482(cljs.core.chunk_rest(s__18483__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18485),null);
}
} else {
var i = cljs.core.first(s__18483__$2);
return cljs.core.cons(((u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(i) : u.call(null,i)) - (v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(i) : v__$1.call(null,i))),clojure$math$combinatorics$m5_$_iter__18482(cljs.core.rest(s__18483__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2(a,(j + (1))));
})()):null);
var v__$2 = (function (){var ks = cljs.core.range.cljs$core$IFn$_invoke$arity$2((j + (1)),b);
var v__$2 = v__$1;
while(true){
if(cljs.core.empty_QMARK_(ks)){
return v__$2;
} else {
var k = cljs.core.first(ks);
var G__18488 = cljs.core.rest(ks);
var G__18489 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v__$2,k,(u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(k) : u.call(null,k)));
ks = G__18488;
v__$2 = G__18489;
continue;
}
break;
}
})();
var min_partitions_after_this = (cljs.core.truth_(s)?(s - (l + (1))):(0));
var amount_to_dec = (cljs.core.truth_(s)?(function (){var x__4214__auto__ = (0);
var y__4215__auto__ = (min_partitions_after_this - diff_uv);
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})():(0));
var v__$3 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(amount_to_dec,(0)))?v__$2:(function (){var k_1 = (b - (1));
var v__$3 = v__$2;
var amount = amount_to_dec;
while(true){
var vk = (v__$3.cljs$core$IFn$_invoke$arity$1 ? v__$3.cljs$core$IFn$_invoke$arity$1(k_1) : v__$3.call(null,k_1));
if((amount > vk)){
var G__18490 = (k_1 - (1));
var G__18491 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v__$3,k_1,(0));
var G__18492 = (amount - vk);
k_1 = G__18490;
v__$3 = G__18491;
amount = G__18492;
continue;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v__$3,k_1,(vk - amount));
}
break;
}
})());
if(((v__$3.cljs$core$IFn$_invoke$arity$1 ? v__$3.cljs$core$IFn$_invoke$arity$1(a) : v__$3.call(null,a)) === (0))){
return (clojure.math.combinatorics.m6.cljs$core$IFn$_invoke$arity$11 ? clojure.math.combinatorics.m6.cljs$core$IFn$_invoke$arity$11(n,m,f,c,u,v__$3,a,b,l,r,s) : clojure.math.combinatorics.m6.call(null,n,m,f,c,u,v__$3,a,b,l,r,s));
} else {
return clojure.math.combinatorics.multiset_partitions_M.cljs$core$IFn$_invoke$arity$11(n,m,f,c,u,v__$3,a,b,l,r,s);
}

}
}
});
clojure.math.combinatorics.m6 = (function clojure$math$combinatorics$m6(n,m,f,c,u,v,a,b,l,r,s){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(l,(0))){
return cljs.core.List.EMPTY;
} else {
var l__$1 = (l - (1));
var b__$1 = a;
var a__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(l__$1) : f.call(null,l__$1));
return clojure.math.combinatorics.m5(n,m,f,c,u,v,a__$1,b__$1,l__$1,r,s);
}
});
clojure.math.combinatorics.partitions_M = (function clojure$math$combinatorics$partitions_M(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18536 = arguments.length;
var i__4737__auto___18537 = (0);
while(true){
if((i__4737__auto___18537 < len__4736__auto___18536)){
args__4742__auto__.push((arguments[i__4737__auto___18537]));

var G__18538 = (i__4737__auto___18537 + (1));
i__4737__auto___18537 = G__18538;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return clojure.math.combinatorics.partitions_M.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(clojure.math.combinatorics.partitions_M.cljs$core$IFn$_invoke$arity$variadic = (function (items,p__18495){
var map__18496 = p__18495;
var map__18496__$1 = (((((!((map__18496 == null))))?(((((map__18496.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18496.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18496):map__18496);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18496__$1,cljs.core.cst$kw$min);
var to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18496__$1,cljs.core.cst$kw$max);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(items),(0))){
if(((((function (){var or__4126__auto__ = from;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})() <= (0))) && (((0) <= (function (){var or__4126__auto__ = to;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})())))){
return cljs.core.list(cljs.core.List.EMPTY);
} else {
return cljs.core.List.EMPTY;
}
} else {
var items__$1 = cljs.core.vec(items);
var ditems = cljs.core.vec(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(items__$1));
var freqs = cljs.core.frequencies(items__$1);
var N = cljs.core.count(items__$1);
var M = cljs.core.count(ditems);
var from__$1 = (cljs.core.truth_((function (){var and__4115__auto__ = from;
if(cljs.core.truth_(and__4115__auto__)){
return (from <= (1));
} else {
return and__4115__auto__;
}
})())?null:from);
var to__$1 = (cljs.core.truth_((function (){var and__4115__auto__ = to;
if(cljs.core.truth_(and__4115__auto__)){
return (to >= N);
} else {
return and__4115__auto__;
}
})())?null:to);
if((!(((((1) <= (function (){var or__4126__auto__ = from__$1;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})())) && (((((function (){var or__4126__auto__ = from__$1;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})() <= (function (){var or__4126__auto__ = to__$1;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return N;
}
})())) && (((function (){var or__4126__auto__ = to__$1;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return N;
}
})() <= N)))))))){
return cljs.core.List.EMPTY;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(N,(1))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.first(items__$1),null,(1),null)))))),null,(1),null))))),null,(1),null)))));
} else {
var start_multiset = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4529__auto__ = (function clojure$math$combinatorics$iter__18498(s__18499){
return (new cljs.core.LazySeq(null,(function (){
var s__18499__$1 = s__18499;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__18499__$1);
if(temp__5804__auto__){
var s__18499__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__18499__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__18499__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__18501 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__18500 = (0);
while(true){
if((i__18500 < size__4528__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__18500);
var j = (i + (1));
cljs.core.chunk_append(b__18501,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,(function (){var G__18502 = (ditems.cljs$core$IFn$_invoke$arity$1 ? ditems.cljs$core$IFn$_invoke$arity$1(i) : ditems.call(null,i));
return (freqs.cljs$core$IFn$_invoke$arity$1 ? freqs.cljs$core$IFn$_invoke$arity$1(G__18502) : freqs.call(null,G__18502));
})()], null));

var G__18539 = (i__18500 + (1));
i__18500 = G__18539;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18501),clojure$math$combinatorics$iter__18498(cljs.core.chunk_rest(s__18499__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18501),null);
}
} else {
var i = cljs.core.first(s__18499__$2);
var j = (i + (1));
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,(function (){var G__18503 = (ditems.cljs$core$IFn$_invoke$arity$1 ? ditems.cljs$core$IFn$_invoke$arity$1(i) : ditems.call(null,i));
return (freqs.cljs$core$IFn$_invoke$arity$1 ? freqs.cljs$core$IFn$_invoke$arity$1(G__18503) : freqs.call(null,G__18503));
})()], null),clojure$math$combinatorics$iter__18498(cljs.core.rest(s__18499__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(M));
})());
var parts = clojure.math.combinatorics.multiset_partitions_M.cljs$core$IFn$_invoke$arity$3(start_multiset,to__$1,from__$1);
var iter__4529__auto__ = (function clojure$math$combinatorics$iter__18504(s__18505){
return (new cljs.core.LazySeq(null,(function (){
var s__18505__$1 = s__18505;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__18505__$1);
if(temp__5804__auto__){
var s__18505__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__18505__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__18505__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__18507 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__18506 = (0);
while(true){
if((i__18506 < size__4528__auto__)){
var part = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__18506);
cljs.core.chunk_append(b__18507,(function (){var iter__4529__auto__ = ((function (i__18506,part,c__4527__auto__,size__4528__auto__,b__18507,s__18505__$2,temp__5804__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__18496,map__18496__$1,from,to){
return (function clojure$math$combinatorics$iter__18504_$_iter__18508(s__18509){
return (new cljs.core.LazySeq(null,((function (i__18506,part,c__4527__auto__,size__4528__auto__,b__18507,s__18505__$2,temp__5804__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__18496,map__18496__$1,from,to){
return (function (){
var s__18509__$1 = s__18509;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__18509__$1);
if(temp__5804__auto____$1){
var s__18509__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__18509__$2)){
var c__4527__auto____$1 = cljs.core.chunk_first(s__18509__$2);
var size__4528__auto____$1 = cljs.core.count(c__4527__auto____$1);
var b__18511 = cljs.core.chunk_buffer(size__4528__auto____$1);
if((function (){var i__18510 = (0);
while(true){
if((i__18510 < size__4528__auto____$1)){
var multiset = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto____$1,i__18510);
cljs.core.chunk_append(b__18511,cljs.core.vec(clojure.math.combinatorics.mapjoin(((function (i__18510,i__18506,multiset,c__4527__auto____$1,size__4528__auto____$1,b__18511,s__18509__$2,temp__5804__auto____$1,part,c__4527__auto__,size__4528__auto__,b__18507,s__18505__$2,temp__5804__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__18496,map__18496__$1,from,to){
return (function (p__18512){
var vec__18513 = p__18512;
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18513,(0),null);
var numtimes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18513,(1),null);
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(numtimes,(function (){var G__18516 = (index - (1));
return (ditems.cljs$core$IFn$_invoke$arity$1 ? ditems.cljs$core$IFn$_invoke$arity$1(G__18516) : ditems.call(null,G__18516));
})());
});})(i__18510,i__18506,multiset,c__4527__auto____$1,size__4528__auto____$1,b__18511,s__18509__$2,temp__5804__auto____$1,part,c__4527__auto__,size__4528__auto__,b__18507,s__18505__$2,temp__5804__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__18496,map__18496__$1,from,to))
,multiset)));

var G__18540 = (i__18510 + (1));
i__18510 = G__18540;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18511),clojure$math$combinatorics$iter__18504_$_iter__18508(cljs.core.chunk_rest(s__18509__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18511),null);
}
} else {
var multiset = cljs.core.first(s__18509__$2);
return cljs.core.cons(cljs.core.vec(clojure.math.combinatorics.mapjoin(((function (i__18506,multiset,s__18509__$2,temp__5804__auto____$1,part,c__4527__auto__,size__4528__auto__,b__18507,s__18505__$2,temp__5804__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__18496,map__18496__$1,from,to){
return (function (p__18517){
var vec__18518 = p__18517;
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18518,(0),null);
var numtimes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18518,(1),null);
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(numtimes,(function (){var G__18521 = (index - (1));
return (ditems.cljs$core$IFn$_invoke$arity$1 ? ditems.cljs$core$IFn$_invoke$arity$1(G__18521) : ditems.call(null,G__18521));
})());
});})(i__18506,multiset,s__18509__$2,temp__5804__auto____$1,part,c__4527__auto__,size__4528__auto__,b__18507,s__18505__$2,temp__5804__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__18496,map__18496__$1,from,to))
,multiset)),clojure$math$combinatorics$iter__18504_$_iter__18508(cljs.core.rest(s__18509__$2)));
}
} else {
return null;
}
break;
}
});})(i__18506,part,c__4527__auto__,size__4528__auto__,b__18507,s__18505__$2,temp__5804__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__18496,map__18496__$1,from,to))
,null,null));
});})(i__18506,part,c__4527__auto__,size__4528__auto__,b__18507,s__18505__$2,temp__5804__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__18496,map__18496__$1,from,to))
;
return iter__4529__auto__(part);
})());

var G__18541 = (i__18506 + (1));
i__18506 = G__18541;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18507),clojure$math$combinatorics$iter__18504(cljs.core.chunk_rest(s__18505__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18507),null);
}
} else {
var part = cljs.core.first(s__18505__$2);
return cljs.core.cons((function (){var iter__4529__auto__ = ((function (part,s__18505__$2,temp__5804__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__18496,map__18496__$1,from,to){
return (function clojure$math$combinatorics$iter__18504_$_iter__18522(s__18523){
return (new cljs.core.LazySeq(null,(function (){
var s__18523__$1 = s__18523;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__18523__$1);
if(temp__5804__auto____$1){
var s__18523__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__18523__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__18523__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__18525 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__18524 = (0);
while(true){
if((i__18524 < size__4528__auto__)){
var multiset = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__18524);
cljs.core.chunk_append(b__18525,cljs.core.vec(clojure.math.combinatorics.mapjoin(((function (i__18524,multiset,c__4527__auto__,size__4528__auto__,b__18525,s__18523__$2,temp__5804__auto____$1,part,s__18505__$2,temp__5804__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__18496,map__18496__$1,from,to){
return (function (p__18526){
var vec__18527 = p__18526;
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18527,(0),null);
var numtimes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18527,(1),null);
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(numtimes,(function (){var G__18530 = (index - (1));
return (ditems.cljs$core$IFn$_invoke$arity$1 ? ditems.cljs$core$IFn$_invoke$arity$1(G__18530) : ditems.call(null,G__18530));
})());
});})(i__18524,multiset,c__4527__auto__,size__4528__auto__,b__18525,s__18523__$2,temp__5804__auto____$1,part,s__18505__$2,temp__5804__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__18496,map__18496__$1,from,to))
,multiset)));

var G__18542 = (i__18524 + (1));
i__18524 = G__18542;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18525),clojure$math$combinatorics$iter__18504_$_iter__18522(cljs.core.chunk_rest(s__18523__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18525),null);
}
} else {
var multiset = cljs.core.first(s__18523__$2);
return cljs.core.cons(cljs.core.vec(clojure.math.combinatorics.mapjoin(((function (multiset,s__18523__$2,temp__5804__auto____$1,part,s__18505__$2,temp__5804__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__18496,map__18496__$1,from,to){
return (function (p__18531){
var vec__18532 = p__18531;
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18532,(0),null);
var numtimes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18532,(1),null);
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(numtimes,(function (){var G__18535 = (index - (1));
return (ditems.cljs$core$IFn$_invoke$arity$1 ? ditems.cljs$core$IFn$_invoke$arity$1(G__18535) : ditems.call(null,G__18535));
})());
});})(multiset,s__18523__$2,temp__5804__auto____$1,part,s__18505__$2,temp__5804__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__18496,map__18496__$1,from,to))
,multiset)),clojure$math$combinatorics$iter__18504_$_iter__18522(cljs.core.rest(s__18523__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(part,s__18505__$2,temp__5804__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__18496,map__18496__$1,from,to))
;
return iter__4529__auto__(part);
})(),clojure$math$combinatorics$iter__18504(cljs.core.rest(s__18505__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(parts);

}
}
}
}));

(clojure.math.combinatorics.partitions_M.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(clojure.math.combinatorics.partitions_M.cljs$lang$applyTo = (function (seq18493){
var G__18494 = cljs.core.first(seq18493);
var seq18493__$1 = cljs.core.next(seq18493);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18494,seq18493__$1);
}));

/**
 * All the lexicographic distinct partitions of items.
 *  Optionally pass in :min and/or :max to specify inclusive bounds on the number of parts the items can be split into.
 */
clojure.math.combinatorics.partitions = (function clojure$math$combinatorics$partitions(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18545 = arguments.length;
var i__4737__auto___18546 = (0);
while(true){
if((i__4737__auto___18546 < len__4736__auto___18545)){
args__4742__auto__.push((arguments[i__4737__auto___18546]));

var G__18547 = (i__4737__auto___18546 + (1));
i__4737__auto___18546 = G__18547;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return clojure.math.combinatorics.partitions.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(clojure.math.combinatorics.partitions.cljs$core$IFn$_invoke$arity$variadic = (function (items,args){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(items),(0))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(clojure.math.combinatorics.partitions_H,items,args);
} else {
if(cljs.core.truth_(clojure.math.combinatorics.all_different_QMARK_(items))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(clojure.math.combinatorics.partitions_H,items,args);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(clojure.math.combinatorics.partitions_M,items,args);

}
}
}));

(clojure.math.combinatorics.partitions.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(clojure.math.combinatorics.partitions.cljs$lang$applyTo = (function (seq18543){
var G__18544 = cljs.core.first(seq18543);
var seq18543__$1 = cljs.core.next(seq18543);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18544,seq18543__$1);
}));

