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
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.first(s),(function (){var G__22564 = cljs.core.rest(s);
return (clojure.math.combinatorics.join.cljs$core$IFn$_invoke$arity$1 ? clojure.math.combinatorics.join.cljs$core$IFn$_invoke$arity$1(G__22564) : clojure.math.combinatorics.join.call(null,G__22564));
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
var c = cljs.core.vec(cljs.core.cons(null,(function (){var iter__4529__auto__ = (function clojure$math$combinatorics$index_combinations_$_iter__22565(s__22566){
return (new cljs.core.LazySeq(null,(function (){
var s__22566__$1 = s__22566;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__22566__$1);
if(temp__5804__auto__){
var s__22566__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22566__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__22566__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__22568 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__22567 = (0);
while(true){
if((i__22567 < size__4528__auto__)){
var j = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__22567);
cljs.core.chunk_append(b__22568,((j + cnt) + (- (n + (1)))));

var G__22569 = (i__22567 + (1));
i__22567 = G__22569;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22568),clojure$math$combinatorics$index_combinations_$_iter__22565(cljs.core.chunk_rest(s__22566__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22568),null);
}
} else {
var j = cljs.core.first(s__22566__$2);
return cljs.core.cons(((j + cnt) + (- (n + (1)))),clojure$math$combinatorics$index_combinations_$_iter__22565(cljs.core.rest(s__22566__$2)));
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
var G__22570 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(c__$3,(j__$1 - (1)),((c__$3.cljs$core$IFn$_invoke$arity$1 ? c__$3.cljs$core$IFn$_invoke$arity$1(j__$1) : c__$3.call(null,j__$1)) - (1)));
var G__22571 = (j__$1 - (1));
c__$3 = G__22570;
j__$1 = G__22571;
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
var G__22572 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(distribution__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [index__$1,mi,(already_distributed__$1 + mi)], null));
var G__22573 = (index__$1 + (1));
var G__22574 = (already_distributed__$1 + mi);
distribution__$1 = G__22572;
index__$1 = G__22573;
already_distributed__$1 = G__22574;
continue;
}
}
break;
}
});
clojure.math.combinatorics.next_distribution = (function clojure$math$combinatorics$next_distribution(m,total,distribution){
var vec__22575 = cljs.core.peek(distribution);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22575,(0),null);
var this_bucket = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22575,(1),null);
var this_and_to_the_left = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22575,(2),null);
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
var vec__22578 = cljs.core.peek(distribution__$1);
var index__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22578,(0),null);
var this_bucket__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22578,(1),null);
var this_and_to_the_left__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22578,(2),null);
var distribution__$2 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this_bucket__$1,(1)))?cljs.core.pop(distribution__$1):cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.pop(distribution__$1),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [index__$1,(this_bucket__$1 - (1)),(this_and_to_the_left__$1 - (1))], null)));
if(((total - (this_and_to_the_left__$1 - (1))) <= cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(m,(index__$1 + (1)))))){
return clojure.math.combinatorics.distribute(m,(index__$1 + (1)),total,distribution__$2,(this_and_to_the_left__$1 - (1)));
} else {
if(cljs.core.seq(distribution__$2)){
var G__22581 = distribution__$2;
distribution__$1 = G__22581;
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
var m = cljs.core.vec((function (){var iter__4529__auto__ = (function clojure$math$combinatorics$multi_comb_$_iter__22582(s__22583){
return (new cljs.core.LazySeq(null,(function (){
var s__22583__$1 = s__22583;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__22583__$1);
if(temp__5804__auto__){
var s__22583__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22583__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__22583__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__22585 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__22584 = (0);
while(true){
if((i__22584 < size__4528__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__22584);
cljs.core.chunk_append(b__22585,(function (){var G__22586 = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__22586) : f.call(null,G__22586));
})());

var G__22612 = (i__22584 + (1));
i__22584 = G__22612;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22585),clojure$math$combinatorics$multi_comb_$_iter__22582(cljs.core.chunk_rest(s__22583__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22585),null);
}
} else {
var i = cljs.core.first(s__22583__$2);
return cljs.core.cons((function (){var G__22587 = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__22587) : f.call(null,G__22587));
})(),clojure$math$combinatorics$multi_comb_$_iter__22582(cljs.core.rest(s__22583__$2)));
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
var iter__4529__auto__ = (function clojure$math$combinatorics$multi_comb_$_iter__22588(s__22589){
return (new cljs.core.LazySeq(null,(function (){
var s__22589__$1 = s__22589;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__22589__$1);
if(temp__5804__auto__){
var s__22589__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22589__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__22589__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__22591 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__22590 = (0);
while(true){
if((i__22590 < size__4528__auto__)){
var q = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__22590);
cljs.core.chunk_append(b__22591,clojure.math.combinatorics.join((function (){var iter__4529__auto__ = ((function (i__22590,q,c__4527__auto__,size__4528__auto__,b__22591,s__22589__$2,temp__5804__auto__,f,v,domain,m,qs){
return (function clojure$math$combinatorics$multi_comb_$_iter__22588_$_iter__22592(s__22593){
return (new cljs.core.LazySeq(null,((function (i__22590,q,c__4527__auto__,size__4528__auto__,b__22591,s__22589__$2,temp__5804__auto__,f,v,domain,m,qs){
return (function (){
var s__22593__$1 = s__22593;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__22593__$1);
if(temp__5804__auto____$1){
var s__22593__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__22593__$2)){
var c__4527__auto____$1 = cljs.core.chunk_first(s__22593__$2);
var size__4528__auto____$1 = cljs.core.count(c__4527__auto____$1);
var b__22595 = cljs.core.chunk_buffer(size__4528__auto____$1);
if((function (){var i__22594 = (0);
while(true){
if((i__22594 < size__4528__auto____$1)){
var vec__22596 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto____$1,i__22594);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22596,(0),null);
var this_bucket = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22596,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22596,(2),null);
cljs.core.chunk_append(b__22595,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(this_bucket,(v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(index) : v.call(null,index))));

var G__22613 = (i__22594 + (1));
i__22594 = G__22613;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22595),clojure$math$combinatorics$multi_comb_$_iter__22588_$_iter__22592(cljs.core.chunk_rest(s__22593__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22595),null);
}
} else {
var vec__22599 = cljs.core.first(s__22593__$2);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22599,(0),null);
var this_bucket = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22599,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22599,(2),null);
return cljs.core.cons(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(this_bucket,(v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(index) : v.call(null,index))),clojure$math$combinatorics$multi_comb_$_iter__22588_$_iter__22592(cljs.core.rest(s__22593__$2)));
}
} else {
return null;
}
break;
}
});})(i__22590,q,c__4527__auto__,size__4528__auto__,b__22591,s__22589__$2,temp__5804__auto__,f,v,domain,m,qs))
,null,null));
});})(i__22590,q,c__4527__auto__,size__4528__auto__,b__22591,s__22589__$2,temp__5804__auto__,f,v,domain,m,qs))
;
return iter__4529__auto__(q);
})()));

var G__22614 = (i__22590 + (1));
i__22590 = G__22614;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22591),clojure$math$combinatorics$multi_comb_$_iter__22588(cljs.core.chunk_rest(s__22589__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22591),null);
}
} else {
var q = cljs.core.first(s__22589__$2);
return cljs.core.cons(clojure.math.combinatorics.join((function (){var iter__4529__auto__ = ((function (q,s__22589__$2,temp__5804__auto__,f,v,domain,m,qs){
return (function clojure$math$combinatorics$multi_comb_$_iter__22588_$_iter__22602(s__22603){
return (new cljs.core.LazySeq(null,(function (){
var s__22603__$1 = s__22603;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__22603__$1);
if(temp__5804__auto____$1){
var s__22603__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__22603__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__22603__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__22605 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__22604 = (0);
while(true){
if((i__22604 < size__4528__auto__)){
var vec__22606 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__22604);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22606,(0),null);
var this_bucket = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22606,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22606,(2),null);
cljs.core.chunk_append(b__22605,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(this_bucket,(v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(index) : v.call(null,index))));

var G__22615 = (i__22604 + (1));
i__22604 = G__22615;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22605),clojure$math$combinatorics$multi_comb_$_iter__22588_$_iter__22602(cljs.core.chunk_rest(s__22603__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22605),null);
}
} else {
var vec__22609 = cljs.core.first(s__22603__$2);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22609,(0),null);
var this_bucket = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22609,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22609,(2),null);
return cljs.core.cons(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(this_bucket,(v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(index) : v.call(null,index))),clojure$math$combinatorics$multi_comb_$_iter__22588_$_iter__22602(cljs.core.rest(s__22603__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(q,s__22589__$2,temp__5804__auto__,f,v,domain,m,qs))
;
return iter__4529__auto__(q);
})()),clojure$math$combinatorics$multi_comb_$_iter__22588(cljs.core.rest(s__22589__$2)));
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
var iter__4529__auto__ = (function clojure$math$combinatorics$combinations_$_iter__22617(s__22618){
return (new cljs.core.LazySeq(null,(function (){
var s__22618__$1 = s__22618;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__22618__$1);
if(temp__5804__auto__){
var s__22618__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22618__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__22618__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__22620 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__22619 = (0);
while(true){
if((i__22619 < size__4528__auto__)){
var item = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__22619);
cljs.core.chunk_append(b__22620,(new cljs.core.List(null,item,null,(1),null)));

var G__22621 = (i__22619 + (1));
i__22619 = G__22621;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22620),clojure$math$combinatorics$combinations_$_iter__22617(cljs.core.chunk_rest(s__22618__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22620),null);
}
} else {
var item = cljs.core.first(s__22618__$2);
return cljs.core.cons((new cljs.core.List(null,item,null,(1),null)),clojure$math$combinatorics$combinations_$_iter__22617(cljs.core.rest(s__22618__$2)));
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
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__22616_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(v_items,p1__22616_SHARP_);
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
return cljs.core.cons(cljs.core.first(s),(function (){var G__22622 = cljs.core.rest(s);
return (clojure.math.combinatorics.unchunk.cljs$core$IFn$_invoke$arity$1 ? clojure.math.combinatorics.unchunk.cljs$core$IFn$_invoke$arity$1(G__22622) : clojure.math.combinatorics.unchunk.call(null,G__22622));
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
var len__4736__auto___22624 = arguments.length;
var i__4737__auto___22625 = (0);
while(true){
if((i__4737__auto___22625 < len__4736__auto___22624)){
args__4742__auto__.push((arguments[i__4737__auto___22625]));

var G__22626 = (i__4737__auto___22625 + (1));
i__4737__auto___22625 = G__22626;
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
var G__22627 = (i - (1));
var G__22628 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v_seqs__$2,i,(v_original_seqs.cljs$core$IFn$_invoke$arity$1 ? v_original_seqs.cljs$core$IFn$_invoke$arity$1(i) : v_original_seqs.call(null,i)));
i = G__22627;
v_seqs__$2 = G__22628;
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
(clojure.math.combinatorics.cartesian_product.cljs$lang$applyTo = (function (seq22623){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq22623));
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
if(((v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i)) < (function (){var G__22629 = (i + (1));
return (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(G__22629) : v.call(null,G__22629));
})())){
return i;
} else {
var G__22630 = (i - (1));
i = G__22630;
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
var G__22631 = (i - (1));
i = G__22631;
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
var G__22632 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(v__$1,k,(v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(l__$1) : v__$1.call(null,l__$1)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([l__$1,(v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(k) : v__$1.call(null,k))], 0));
var G__22633 = (k + (1));
var G__22634 = (l__$1 - (1));
v__$1 = G__22632;
k = G__22633;
l__$1 = G__22634;
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
var G__22635 = clojure.math.combinatorics.iter_perm(v);
return (clojure.math.combinatorics.vec_lex_permutations.cljs$core$IFn$_invoke$arity$1 ? clojure.math.combinatorics.vec_lex_permutations.cljs$core$IFn$_invoke$arity$1(G__22635) : clojure.math.combinatorics.vec_lex_permutations.call(null,G__22635));
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
var indices = clojure.math.combinatorics.join((function (){var iter__4529__auto__ = (function clojure$math$combinatorics$multi_perm_$_iter__22636(s__22637){
return (new cljs.core.LazySeq(null,(function (){
var s__22637__$1 = s__22637;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__22637__$1);
if(temp__5804__auto__){
var s__22637__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22637__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__22637__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__22639 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__22638 = (0);
while(true){
if((i__22638 < size__4528__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__22638);
cljs.core.chunk_append(b__22639,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((function (){var G__22640 = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__22640) : f.call(null,G__22640));
})(),i));

var G__22642 = (i__22638 + (1));
i__22638 = G__22642;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22639),clojure$math$combinatorics$multi_perm_$_iter__22636(cljs.core.chunk_rest(s__22637__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22639),null);
}
} else {
var i = cljs.core.first(s__22637__$2);
return cljs.core.cons(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((function (){var G__22641 = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__22641) : f.call(null,G__22641));
})(),i),clojure$math$combinatorics$multi_perm_$_iter__22636(cljs.core.rest(s__22637__$2)));
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
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__22643_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(v,p1__22643_SHARP_);
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
var G__22644 = (clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 ? clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2(acc,n__$1) : clojure.math.combinatorics._STAR__SINGLEQUOTE_.call(null,acc,n__$1));
var G__22645 = (n__$1 - (1));
acc = G__22644;
n__$1 = G__22645;
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
var G__22646 = q;
var G__22647 = cljs.core.cons(r,digits);
var G__22648 = (divisor + (1));
n__$1 = G__22646;
digits = G__22647;
divisor = G__22648;
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
var G__22649 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,cljs.core.first(l__$1));
var G__22650 = cljs.core.rest(l__$1);
var G__22651 = (n__$1 - (1));
acc = G__22649;
l__$1 = G__22650;
n__$1 = G__22651;
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
var G__22652 = cljs.core.rest(indices);
var G__22653 = clojure.math.combinatorics.remove_nth(l__$1,i);
var G__22654 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(perm,item);
indices = G__22652;
l__$1 = G__22653;
perm = G__22654;
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
return cljs.core.reductions.cljs$core$IFn$_invoke$arity$3(clojure.math.combinatorics._PLUS__SINGLEQUOTE_,(0),(function (){var iter__4529__auto__ = (function clojure$math$combinatorics$initial_perm_numbers_$_iter__22655(s__22656){
return (new cljs.core.LazySeq(null,(function (){
var s__22656__$1 = s__22656;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__22656__$1);
if(temp__5804__auto__){
var s__22656__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22656__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__22656__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__22658 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__22657 = (0);
while(true){
if((i__22657 < size__4528__auto__)){
var vec__22659 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__22657);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22659,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22659,(1),null);
cljs.core.chunk_append(b__22658,clojure.math.combinatorics.count_permutations_from_frequencies(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(freqs,k,(v - (1)))));

var G__22665 = (i__22657 + (1));
i__22657 = G__22665;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22658),clojure$math$combinatorics$initial_perm_numbers_$_iter__22655(cljs.core.chunk_rest(s__22656__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22658),null);
}
} else {
var vec__22662 = cljs.core.first(s__22656__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22662,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22662,(1),null);
return cljs.core.cons(clojure.math.combinatorics.count_permutations_from_frequencies(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(freqs,k,(v - (1)))),clojure$math$combinatorics$initial_perm_numbers_$_iter__22655(cljs.core.rest(s__22656__$2)));
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
var G__22666 = cljs.core.rest(perm_numbers__$1);
var G__22667 = (index + (1));
perm_numbers__$1 = G__22666;
index = G__22667;
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
var vec__22671 = clojure.math.combinatorics.index_remainder(clojure.math.combinatorics.initial_perm_numbers(freqs__$1),n__$1);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22671,(0),null);
var remainder = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22671,(1),null);
var G__22674 = remainder;
var G__22675 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(digits,index);
var G__22676 = (function (){var nth_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(freqs__$1),index);
return clojure.math.combinatorics.dec_key(freqs__$1,nth_key);
})();
n__$1 = G__22674;
digits = G__22675;
freqs__$1 = G__22676;
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
var G__22677 = clojure.math.combinatorics.dec_key(freqs,item);
var G__22678 = cljs.core.rest(indices);
var G__22679 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(perm,item);
freqs = G__22677;
indices = G__22678;
perm = G__22679;
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
var indices = clojure.math.combinatorics.join((function (){var iter__4529__auto__ = (function clojure$math$combinatorics$nth_permutation_$_iter__22680(s__22681){
return (new cljs.core.LazySeq(null,(function (){
var s__22681__$1 = s__22681;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__22681__$1);
if(temp__5804__auto__){
var s__22681__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22681__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__22681__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__22683 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__22682 = (0);
while(true){
if((i__22682 < size__4528__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__22682);
cljs.core.chunk_append(b__22683,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((function (){var G__22684 = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__22684) : f.call(null,G__22684));
})(),i));

var G__22686 = (i__22682 + (1));
i__22682 = G__22686;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22683),clojure$math$combinatorics$nth_permutation_$_iter__22680(cljs.core.chunk_rest(s__22681__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22683),null);
}
} else {
var i = cljs.core.first(s__22681__$2);
return cljs.core.cons(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((function (){var G__22685 = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__22685) : f.call(null,G__22685));
})(),i),clojure$math$combinatorics$nth_permutation_$_iter__22680(cljs.core.rest(s__22681__$2)));
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
var indices = clojure.math.combinatorics.join((function (){var iter__4529__auto__ = (function clojure$math$combinatorics$drop_permutations_$_iter__22687(s__22688){
return (new cljs.core.LazySeq(null,(function (){
var s__22688__$1 = s__22688;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__22688__$1);
if(temp__5804__auto__){
var s__22688__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22688__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__22688__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__22690 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__22689 = (0);
while(true){
if((i__22689 < size__4528__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__22689);
cljs.core.chunk_append(b__22690,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((function (){var G__22691 = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__22691) : f.call(null,G__22691));
})(),i));

var G__22693 = (i__22689 + (1));
i__22689 = G__22693;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22690),clojure$math$combinatorics$drop_permutations_$_iter__22687(cljs.core.chunk_rest(s__22688__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22690),null);
}
} else {
var i = cljs.core.first(s__22688__$2);
return cljs.core.cons(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((function (){var G__22692 = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__22692) : f.call(null,G__22692));
})(),i),clojure$math$combinatorics$drop_permutations_$_iter__22687(cljs.core.rest(s__22688__$2)));
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
var G__22694 = n;
var G__22695 = (n - k);
n = G__22694;
k = G__22695;
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
var G__22696 = (function (){var G__22698 = new_freqs;
var G__22699 = (t - (1));
return (clojure.math.combinatorics.count_combinations_from_frequencies.cljs$core$IFn$_invoke$arity$2 ? clojure.math.combinatorics.count_combinations_from_frequencies.cljs$core$IFn$_invoke$arity$2(G__22698,G__22699) : clojure.math.combinatorics.count_combinations_from_frequencies.call(null,G__22698,G__22699));
})();
var G__22697 = (function (){var G__22700 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(freqs,cljs.core.first(cljs.core.keys(freqs)));
var G__22701 = t;
return (clojure.math.combinatorics.count_combinations_from_frequencies.cljs$core$IFn$_invoke$arity$2 ? clojure.math.combinatorics.count_combinations_from_frequencies.cljs$core$IFn$_invoke$arity$2(G__22700,G__22701) : clojure.math.combinatorics.count_combinations_from_frequencies.call(null,G__22700,G__22701));
})();
return (clojure.math.combinatorics._PLUS__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 ? clojure.math.combinatorics._PLUS__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2(G__22696,G__22697) : clojure.math.combinatorics._PLUS__SINGLEQUOTE_.call(null,G__22696,G__22697));

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
var count_combinations_from_frequencies_orig_val__22702 = clojure.math.combinatorics.count_combinations_from_frequencies;
var count_combinations_from_frequencies_temp_val__22703 = cljs.core.memoize(clojure.math.combinatorics.count_combinations_from_frequencies);
(clojure.math.combinatorics.count_combinations_from_frequencies = count_combinations_from_frequencies_temp_val__22703);

try{return clojure.math.combinatorics.count_combinations_unmemoized(items,t);
}finally {(clojure.math.combinatorics.count_combinations_from_frequencies = count_combinations_from_frequencies_orig_val__22702);
}});
clojure.math.combinatorics.expt_int = (function clojure$math$combinatorics$expt_int(base,pow){
var n = pow;
var y = (1);
var z = base;
while(true){
var t = cljs.core.even_QMARK_(n);
var n__$1 = cljs.core.quot(n,(2));
if(t){
var G__22704 = n__$1;
var G__22705 = y;
var G__22706 = (clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 ? clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2(z,z) : clojure.math.combinatorics._STAR__SINGLEQUOTE_.call(null,z,z));
n = G__22704;
y = G__22705;
z = G__22706;
continue;
} else {
if((n__$1 === (0))){
return (clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 ? clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2(z,y) : clojure.math.combinatorics._STAR__SINGLEQUOTE_.call(null,z,y));
} else {
var G__22707 = n__$1;
var G__22708 = (clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 ? clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2(z,y) : clojure.math.combinatorics._STAR__SINGLEQUOTE_.call(null,z,y));
var G__22709 = (clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 ? clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2(z,z) : clojure.math.combinatorics._STAR__SINGLEQUOTE_.call(null,z,z));
n = G__22707;
y = G__22708;
z = G__22709;
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
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.math.combinatorics._PLUS__SINGLEQUOTE_,(function (){var iter__4529__auto__ = (function clojure$math$combinatorics$count_subsets_unmemoized_$_iter__22710(s__22711){
return (new cljs.core.LazySeq(null,(function (){
var s__22711__$1 = s__22711;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__22711__$1);
if(temp__5804__auto__){
var s__22711__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22711__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__22711__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__22713 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__22712 = (0);
while(true){
if((i__22712 < size__4528__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__22712);
cljs.core.chunk_append(b__22713,clojure.math.combinatorics.count_combinations_unmemoized(items,i));

var G__22714 = (i__22712 + (1));
i__22712 = G__22714;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22713),clojure$math$combinatorics$count_subsets_unmemoized_$_iter__22710(cljs.core.chunk_rest(s__22711__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22713),null);
}
} else {
var i = cljs.core.first(s__22711__$2);
return cljs.core.cons(clojure.math.combinatorics.count_combinations_unmemoized(items,i),clojure$math$combinatorics$count_subsets_unmemoized_$_iter__22710(cljs.core.rest(s__22711__$2)));
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
var count_combinations_from_frequencies_orig_val__22715 = clojure.math.combinatorics.count_combinations_from_frequencies;
var count_combinations_from_frequencies_temp_val__22716 = cljs.core.memoize(clojure.math.combinatorics.count_combinations_from_frequencies);
(clojure.math.combinatorics.count_combinations_from_frequencies = count_combinations_from_frequencies_temp_val__22716);

try{return clojure.math.combinatorics.count_subsets_unmemoized(items);
}finally {(clojure.math.combinatorics.count_combinations_from_frequencies = count_combinations_from_frequencies_orig_val__22715);
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
var G__22717 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(comb,cljs.core.first(items__$1));
var G__22718 = cljs.core.rest(items__$1);
var G__22719 = (t__$1 - (1));
var G__22720 = n__$1;
comb = G__22717;
items__$1 = G__22718;
t__$1 = G__22719;
n__$1 = G__22720;
continue;
} else {
var G__22721 = comb;
var G__22722 = cljs.core.rest(items__$1);
var G__22723 = t__$1;
var G__22724 = (n__$1 - dc_dt);
comb = G__22721;
items__$1 = G__22722;
t__$1 = G__22723;
n__$1 = G__22724;
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
return (function clojure$math$combinatorics$nth_combination_freqs_$_iter__22735(s__22736){
return (new cljs.core.LazySeq(null,((function (comb,freqs__$1,t__$1,n__$1){
return (function (){
var s__22736__$1 = s__22736;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__22736__$1);
if(temp__5804__auto__){
var s__22736__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22736__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__22736__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__22738 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__22737 = (0);
while(true){
if((i__22737 < size__4528__auto__)){
var vec__22739 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__22737);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22739,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22739,(1),null);
cljs.core.chunk_append(b__22738,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(v,k));

var G__22745 = (i__22737 + (1));
i__22737 = G__22745;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22738),clojure$math$combinatorics$nth_combination_freqs_$_iter__22735(cljs.core.chunk_rest(s__22736__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22738),null);
}
} else {
var vec__22742 = cljs.core.first(s__22736__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22742,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22742,(1),null);
return cljs.core.cons(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(v,k),clojure$math$combinatorics$nth_combination_freqs_$_iter__22735(cljs.core.rest(s__22736__$2)));
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
var G__22746 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(comb,first_key);
var G__22747 = remove_one_key;
var G__22748 = (t__$1 - (1));
var G__22749 = n__$1;
comb = G__22746;
freqs__$1 = G__22747;
t__$1 = G__22748;
n__$1 = G__22749;
continue;
} else {
var G__22750 = comb;
var G__22751 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(freqs__$1,first_key);
var G__22752 = t__$1;
var G__22753 = (n__$1 - dc_dt);
comb = G__22750;
freqs__$1 = G__22751;
t__$1 = G__22752;
n__$1 = G__22753;
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
var count_combinations_from_frequencies_orig_val__22754 = clojure.math.combinatorics.count_combinations_from_frequencies;
var count_combinations_from_frequencies_temp_val__22755 = cljs.core.memoize(clojure.math.combinatorics.count_combinations_from_frequencies);
(clojure.math.combinatorics.count_combinations_from_frequencies = count_combinations_from_frequencies_temp_val__22755);

try{var v = cljs.core.vec(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(items));
var f = cljs.core.frequencies(items);
var indices = clojure.math.combinatorics.join((function (){var iter__4529__auto__ = (function clojure$math$combinatorics$nth_combination_$_iter__22756(s__22757){
return (new cljs.core.LazySeq(null,(function (){
var s__22757__$1 = s__22757;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__22757__$1);
if(temp__5804__auto__){
var s__22757__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22757__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__22757__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__22759 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__22758 = (0);
while(true){
if((i__22758 < size__4528__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__22758);
cljs.core.chunk_append(b__22759,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((function (){var G__22760 = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__22760) : f.call(null,G__22760));
})(),i));

var G__22762 = (i__22758 + (1));
i__22758 = G__22762;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22759),clojure$math$combinatorics$nth_combination_$_iter__22756(cljs.core.chunk_rest(s__22757__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22759),null);
}
} else {
var i = cljs.core.first(s__22757__$2);
return cljs.core.cons(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((function (){var G__22761 = (v.cljs$core$IFn$_invoke$arity$1 ? v.cljs$core$IFn$_invoke$arity$1(i) : v.call(null,i));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__22761) : f.call(null,G__22761));
})(),i),clojure$math$combinatorics$nth_combination_$_iter__22756(cljs.core.rest(s__22757__$2)));
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
}finally {(clojure.math.combinatorics.count_combinations_from_frequencies = count_combinations_from_frequencies_orig_val__22754);
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
var G__22763 = (size + (1));
var G__22764 = (n__$1 - num_combinations);
size = G__22763;
n__$1 = G__22764;
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
var G__22765 = cljs.core.rest(l__$1);
var G__22766 = (n + (1));
l__$1 = G__22765;
n = G__22766;
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
var G__22775 = cljs.core.rest(l__$1);
var G__22776 = (function (){var G__22771 = index;
var G__22772 = (function (){var G__22773 = clojure.math.combinatorics.factorial(n);
var G__22774 = clojure.math.combinatorics.list_index(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(l__$1),cljs.core.first(l__$1));
return (clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 ? clojure.math.combinatorics._STAR__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2(G__22773,G__22774) : clojure.math.combinatorics._STAR__SINGLEQUOTE_.call(null,G__22773,G__22774));
})();
return (clojure.math.combinatorics._PLUS__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 ? clojure.math.combinatorics._PLUS__SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2(G__22771,G__22772) : clojure.math.combinatorics._PLUS__SINGLEQUOTE_.call(null,G__22771,G__22772));
})();
var G__22777 = (n - (1));
l__$1 = G__22775;
index = G__22776;
n = G__22777;
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
var G__22787 = cljs.core.rest(l__$1);
var G__22788 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(clojure.math.combinatorics._PLUS__SINGLEQUOTE_,index,(function (){var iter__4529__auto__ = ((function (l__$1,index,freqs){
return (function clojure$math$combinatorics$permutation_index_duplicates_$_iter__22783(s__22784){
return (new cljs.core.LazySeq(null,((function (l__$1,index,freqs){
return (function (){
var s__22784__$1 = s__22784;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__22784__$1);
if(temp__5804__auto__){
var s__22784__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22784__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__22784__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__22786 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__22785 = (0);
while(true){
if((i__22785 < size__4528__auto__)){
var k = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__22785);
cljs.core.chunk_append(b__22786,clojure.math.combinatorics.count_permutations_from_frequencies(clojure.math.combinatorics.dec_key(freqs,k)));

var G__22790 = (i__22785 + (1));
i__22785 = G__22790;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22786),clojure$math$combinatorics$permutation_index_duplicates_$_iter__22783(cljs.core.chunk_rest(s__22784__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22786),null);
}
} else {
var k = cljs.core.first(s__22784__$2);
return cljs.core.cons(clojure.math.combinatorics.count_permutations_from_frequencies(clojure.math.combinatorics.dec_key(freqs,k)),clojure$math$combinatorics$permutation_index_duplicates_$_iter__22783(cljs.core.rest(s__22784__$2)));
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
return (function (p1__22778_SHARP_){
return (cljs.core.compare(p1__22778_SHARP_,cljs.core.first(l__$1)) < (0));
});})(l__$1,index,freqs,iter__4529__auto__))
,cljs.core.keys(freqs)));
})());
var G__22789 = clojure.math.combinatorics.dec_key(freqs,cljs.core.first(l__$1));
l__$1 = G__22787;
index = G__22788;
freqs = G__22789;
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
return cljs.core.vec((function (){var iter__4529__auto__ = (function clojure$math$combinatorics$init_$_iter__22791(s__22792){
return (new cljs.core.LazySeq(null,(function (){
var s__22792__$1 = s__22792;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__22792__$1);
if(temp__5804__auto__){
var s__22792__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22792__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__22792__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__22794 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__22793 = (0);
while(true){
if((i__22793 < size__4528__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__22793);
cljs.core.chunk_append(b__22794,(function (){var x__4214__auto__ = (0);
var y__4215__auto__ = (i - ((n - s) - (-1)));
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})());

var G__22795 = (i__22793 + (1));
i__22793 = G__22795;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22794),clojure$math$combinatorics$init_$_iter__22791(cljs.core.chunk_rest(s__22792__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22794),null);
}
} else {
var i = cljs.core.first(s__22792__$2);
return cljs.core.cons((function (){var x__4214__auto__ = (0);
var y__4215__auto__ = (i - ((n - s) - (-1)));
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})(),clojure$math$combinatorics$init_$_iter__22791(cljs.core.rest(s__22792__$2)));
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
var G__22797 = arguments.length;
switch (G__22797) {
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
var G__22802 = (j - (1));
j = G__22802;
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
var vec__22798 = (function (){var a__$2 = a__$1;
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
var G__22803 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(a__$2,i,new_a_i);
var G__22804 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(b__$1,i,current_max);
var G__22805 = (i + (1));
var G__22806 = (function (){var x__4214__auto__ = current_max;
var y__4215__auto__ = (new_a_i + (1));
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})();
a__$2 = G__22803;
b__$1 = G__22804;
i = G__22805;
current_max = G__22806;
continue;
} else {
var G__22807 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(a__$2,i,(0));
var G__22808 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(b__$1,i,current_max);
var G__22809 = (i + (1));
var G__22810 = current_max;
a__$2 = G__22807;
b__$1 = G__22808;
i = G__22809;
current_max = G__22810;
continue;

}
}
break;
}
})();
var a__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22798,(0),null);
var b__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22798,(1),null);
return clojure.math.combinatorics.growth_strings_H.cljs$core$IFn$_invoke$arity$5(n,a__$2,b__$1,r,s);
}
}
}),null,null)));
}));

(clojure.math.combinatorics.growth_strings_H.cljs$lang$maxFixedArity = 5);

clojure.math.combinatorics.lex_partitions_H = (function clojure$math$combinatorics$lex_partitions_H(var_args){
var args__4742__auto__ = [];
var len__4736__auto___22820 = arguments.length;
var i__4737__auto___22821 = (0);
while(true){
if((i__4737__auto___22821 < len__4736__auto___22820)){
args__4742__auto__.push((arguments[i__4737__auto___22821]));

var G__22822 = (i__4737__auto___22821 + (1));
i__4737__auto___22821 = G__22822;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return clojure.math.combinatorics.lex_partitions_H.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(clojure.math.combinatorics.lex_partitions_H.cljs$core$IFn$_invoke$arity$variadic = (function (N,p__22813){
var map__22814 = p__22813;
var map__22814__$1 = (((((!((map__22814 == null))))?(((((map__22814.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22814.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22814):map__22814);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22814__$1,cljs.core.cst$kw$min);
var to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22814__$1,cljs.core.cst$kw$max);
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
var iter__4529__auto__ = (function clojure$math$combinatorics$iter__22816(s__22817){
return (new cljs.core.LazySeq(null,(function (){
var s__22817__$1 = s__22817;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__22817__$1);
if(temp__5804__auto__){
var s__22817__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22817__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__22817__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__22819 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__22818 = (0);
while(true){
if((i__22818 < size__4528__auto__)){
var growth_string = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__22818);
var groups = cljs.core.group_by(growth_string,cljs.core.range.cljs$core$IFn$_invoke$arity$1(N));
cljs.core.chunk_append(b__22819,cljs.core.map.cljs$core$IFn$_invoke$arity$2(groups,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(groups))));

var G__22823 = (i__22818 + (1));
i__22818 = G__22823;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22819),clojure$math$combinatorics$iter__22816(cljs.core.chunk_rest(s__22817__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22819),null);
}
} else {
var growth_string = cljs.core.first(s__22817__$2);
var groups = cljs.core.group_by(growth_string,cljs.core.range.cljs$core$IFn$_invoke$arity$1(N));
return cljs.core.cons(cljs.core.map.cljs$core$IFn$_invoke$arity$2(groups,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(groups))),clojure$math$combinatorics$iter__22816(cljs.core.rest(s__22817__$2)));
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
(clojure.math.combinatorics.lex_partitions_H.cljs$lang$applyTo = (function (seq22811){
var G__22812 = cljs.core.first(seq22811);
var seq22811__$1 = cljs.core.next(seq22811);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22812,seq22811__$1);
}));

clojure.math.combinatorics.partitions_H = (function clojure$math$combinatorics$partitions_H(var_args){
var args__4742__auto__ = [];
var len__4736__auto___22838 = arguments.length;
var i__4737__auto___22839 = (0);
while(true){
if((i__4737__auto___22839 < len__4736__auto___22838)){
args__4742__auto__.push((arguments[i__4737__auto___22839]));

var G__22840 = (i__4737__auto___22839 + (1));
i__4737__auto___22839 = G__22840;
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
var iter__4529__auto__ = (function clojure$math$combinatorics$iter__22826(s__22827){
return (new cljs.core.LazySeq(null,(function (){
var s__22827__$1 = s__22827;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__22827__$1);
if(temp__5804__auto__){
var s__22827__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22827__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__22827__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__22829 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__22828 = (0);
while(true){
if((i__22828 < size__4528__auto__)){
var parts = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__22828);
cljs.core.chunk_append(b__22829,(function (){var iter__4529__auto__ = ((function (i__22828,parts,c__4527__auto__,size__4528__auto__,b__22829,s__22827__$2,temp__5804__auto__,items__$1,N,lex){
return (function clojure$math$combinatorics$iter__22826_$_iter__22830(s__22831){
return (new cljs.core.LazySeq(null,((function (i__22828,parts,c__4527__auto__,size__4528__auto__,b__22829,s__22827__$2,temp__5804__auto__,items__$1,N,lex){
return (function (){
var s__22831__$1 = s__22831;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__22831__$1);
if(temp__5804__auto____$1){
var s__22831__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__22831__$2)){
var c__4527__auto____$1 = cljs.core.chunk_first(s__22831__$2);
var size__4528__auto____$1 = cljs.core.count(c__4527__auto____$1);
var b__22833 = cljs.core.chunk_buffer(size__4528__auto____$1);
if((function (){var i__22832 = (0);
while(true){
if((i__22832 < size__4528__auto____$1)){
var part = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto____$1,i__22832);
cljs.core.chunk_append(b__22833,cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (i__22832,i__22828,part,c__4527__auto____$1,size__4528__auto____$1,b__22833,s__22831__$2,temp__5804__auto____$1,parts,c__4527__auto__,size__4528__auto__,b__22829,s__22827__$2,temp__5804__auto__,items__$1,N,lex){
return (function (v,o){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,(items__$1.cljs$core$IFn$_invoke$arity$1 ? items__$1.cljs$core$IFn$_invoke$arity$1(o) : items__$1.call(null,o)));
});})(i__22832,i__22828,part,c__4527__auto____$1,size__4528__auto____$1,b__22833,s__22831__$2,temp__5804__auto____$1,parts,c__4527__auto__,size__4528__auto__,b__22829,s__22827__$2,temp__5804__auto__,items__$1,N,lex))
,cljs.core.transient$(cljs.core.PersistentVector.EMPTY),part)));

var G__22841 = (i__22832 + (1));
i__22832 = G__22841;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22833),clojure$math$combinatorics$iter__22826_$_iter__22830(cljs.core.chunk_rest(s__22831__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22833),null);
}
} else {
var part = cljs.core.first(s__22831__$2);
return cljs.core.cons(cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (i__22828,part,s__22831__$2,temp__5804__auto____$1,parts,c__4527__auto__,size__4528__auto__,b__22829,s__22827__$2,temp__5804__auto__,items__$1,N,lex){
return (function (v,o){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,(items__$1.cljs$core$IFn$_invoke$arity$1 ? items__$1.cljs$core$IFn$_invoke$arity$1(o) : items__$1.call(null,o)));
});})(i__22828,part,s__22831__$2,temp__5804__auto____$1,parts,c__4527__auto__,size__4528__auto__,b__22829,s__22827__$2,temp__5804__auto__,items__$1,N,lex))
,cljs.core.transient$(cljs.core.PersistentVector.EMPTY),part)),clojure$math$combinatorics$iter__22826_$_iter__22830(cljs.core.rest(s__22831__$2)));
}
} else {
return null;
}
break;
}
});})(i__22828,parts,c__4527__auto__,size__4528__auto__,b__22829,s__22827__$2,temp__5804__auto__,items__$1,N,lex))
,null,null));
});})(i__22828,parts,c__4527__auto__,size__4528__auto__,b__22829,s__22827__$2,temp__5804__auto__,items__$1,N,lex))
;
return iter__4529__auto__(parts);
})());

var G__22842 = (i__22828 + (1));
i__22828 = G__22842;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22829),clojure$math$combinatorics$iter__22826(cljs.core.chunk_rest(s__22827__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22829),null);
}
} else {
var parts = cljs.core.first(s__22827__$2);
return cljs.core.cons((function (){var iter__4529__auto__ = ((function (parts,s__22827__$2,temp__5804__auto__,items__$1,N,lex){
return (function clojure$math$combinatorics$iter__22826_$_iter__22834(s__22835){
return (new cljs.core.LazySeq(null,(function (){
var s__22835__$1 = s__22835;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__22835__$1);
if(temp__5804__auto____$1){
var s__22835__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__22835__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__22835__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__22837 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__22836 = (0);
while(true){
if((i__22836 < size__4528__auto__)){
var part = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__22836);
cljs.core.chunk_append(b__22837,cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (i__22836,part,c__4527__auto__,size__4528__auto__,b__22837,s__22835__$2,temp__5804__auto____$1,parts,s__22827__$2,temp__5804__auto__,items__$1,N,lex){
return (function (v,o){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,(items__$1.cljs$core$IFn$_invoke$arity$1 ? items__$1.cljs$core$IFn$_invoke$arity$1(o) : items__$1.call(null,o)));
});})(i__22836,part,c__4527__auto__,size__4528__auto__,b__22837,s__22835__$2,temp__5804__auto____$1,parts,s__22827__$2,temp__5804__auto__,items__$1,N,lex))
,cljs.core.transient$(cljs.core.PersistentVector.EMPTY),part)));

var G__22843 = (i__22836 + (1));
i__22836 = G__22843;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22837),clojure$math$combinatorics$iter__22826_$_iter__22834(cljs.core.chunk_rest(s__22835__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22837),null);
}
} else {
var part = cljs.core.first(s__22835__$2);
return cljs.core.cons(cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (part,s__22835__$2,temp__5804__auto____$1,parts,s__22827__$2,temp__5804__auto__,items__$1,N,lex){
return (function (v,o){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,(items__$1.cljs$core$IFn$_invoke$arity$1 ? items__$1.cljs$core$IFn$_invoke$arity$1(o) : items__$1.call(null,o)));
});})(part,s__22835__$2,temp__5804__auto____$1,parts,s__22827__$2,temp__5804__auto__,items__$1,N,lex))
,cljs.core.transient$(cljs.core.PersistentVector.EMPTY),part)),clojure$math$combinatorics$iter__22826_$_iter__22834(cljs.core.rest(s__22835__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(parts,s__22827__$2,temp__5804__auto__,items__$1,N,lex))
;
return iter__4529__auto__(parts);
})(),clojure$math$combinatorics$iter__22826(cljs.core.rest(s__22827__$2)));
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
(clojure.math.combinatorics.partitions_H.cljs$lang$applyTo = (function (seq22824){
var G__22825 = cljs.core.first(seq22824);
var seq22824__$1 = cljs.core.next(seq22824);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22825,seq22824__$1);
}));


clojure.math.combinatorics.multiset_partitions_M = (function clojure$math$combinatorics$multiset_partitions_M(var_args){
var G__22845 = arguments.length;
switch (G__22845) {
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
var vec__22846 = (function (){var j = (0);
var c__$1 = c;
var u__$1 = u;
var v__$1 = v;
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(j,m)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [c__$1,u__$1,v__$1], null);
} else {
var G__22871 = (j + (1));
var G__22872 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(c__$1,j,(j + (1)));
var G__22873 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(u__$1,j,(function (){var G__22851 = (j + (1));
return (multiset.cljs$core$IFn$_invoke$arity$1 ? multiset.cljs$core$IFn$_invoke$arity$1(G__22851) : multiset.call(null,G__22851));
})());
var G__22874 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v__$1,j,(function (){var G__22852 = (j + (1));
return (multiset.cljs$core$IFn$_invoke$arity$1 ? multiset.cljs$core$IFn$_invoke$arity$1(G__22852) : multiset.call(null,G__22852));
})());
j = G__22871;
c__$1 = G__22872;
u__$1 = G__22873;
v__$1 = G__22874;
continue;
}
break;
}
})();
var c__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22846,(0),null);
var u__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22846,(1),null);
var v__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22846,(2),null);
var a = (0);
var b = m;
var l = (0);
var f__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(f,(0),(0),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(1),m], 0));
var stack = cljs.core.List.EMPTY;
return clojure.math.combinatorics.multiset_partitions_M.cljs$core$IFn$_invoke$arity$11(n,m,f__$1,c__$1,u__$1,v__$1,a,b,l,r,s);
}));

(clojure.math.combinatorics.multiset_partitions_M.cljs$core$IFn$_invoke$arity$11 = (function (n,m,f,c,u,v,a,b,l,r,s){
while(true){
var vec__22853 = (function (){var j = a;
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
var G__22875 = (j + (1));
var G__22876 = k;
var G__22877 = true;
var G__22878 = u__$2;
var G__22879 = v__$1;
var G__22880 = c__$1;
j = G__22875;
k = G__22876;
x = G__22877;
u__$1 = G__22878;
v__$1 = G__22879;
c__$1 = G__22880;
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
var G__22881 = j__$1;
var G__22882 = k__$1;
var G__22883 = x__$1;
var G__22884 = u__$2;
var G__22885 = v__$2;
var G__22886 = c__$2;
j = G__22881;
k = G__22882;
x = G__22883;
u__$1 = G__22884;
v__$1 = G__22885;
c__$1 = G__22886;
continue;
} else {
var c__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(c__$1,k,(c__$1.cljs$core$IFn$_invoke$arity$1 ? c__$1.cljs$core$IFn$_invoke$arity$1(j) : c__$1.call(null,j)));
var v__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v__$1,k,(u__$2.cljs$core$IFn$_invoke$arity$1 ? u__$2.cljs$core$IFn$_invoke$arity$1(k) : u__$2.call(null,k)));
var k__$1 = (k + (1));
var j__$1 = (j + (1));
var G__22887 = j__$1;
var G__22888 = k__$1;
var G__22889 = x;
var G__22890 = u__$2;
var G__22891 = v__$2;
var G__22892 = c__$2;
j = G__22887;
k = G__22888;
x = G__22889;
u__$1 = G__22890;
v__$1 = G__22891;
c__$1 = G__22892;
continue;
}
}
}
break;
}
})();
var u__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22853,(0),null);
var v__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22853,(1),null);
var c__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22853,(2),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22853,(3),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22853,(4),null);
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
var G__22893 = n;
var G__22894 = m;
var G__22895 = f__$1;
var G__22896 = c__$1;
var G__22897 = u__$1;
var G__22898 = v__$1;
var G__22899 = a__$1;
var G__22900 = b__$1;
var G__22901 = l__$1;
var G__22902 = r;
var G__22903 = s;
n = G__22893;
m = G__22894;
f = G__22895;
c = G__22896;
u = G__22897;
v = G__22898;
a = G__22899;
b = G__22900;
l = G__22901;
r = G__22902;
s = G__22903;
continue;
} else {
var part = (function (){var iter__4529__auto__ = ((function (n,m,f,c,u,v,a,b,l,r,s,vec__22853,u__$1,v__$1,c__$1,j,k){
return (function clojure$math$combinatorics$iter__22856(s__22857){
return (new cljs.core.LazySeq(null,((function (n,m,f,c,u,v,a,b,l,r,s,vec__22853,u__$1,v__$1,c__$1,j,k){
return (function (){
var s__22857__$1 = s__22857;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__22857__$1);
if(temp__5804__auto__){
var s__22857__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22857__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__22857__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__22859 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__22858 = (0);
while(true){
if((i__22858 < size__4528__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__22858);
cljs.core.chunk_append(b__22859,(function (){var first_col = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(y) : f.call(null,y));
var last_col = ((function (){var G__22860 = (y + (1));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__22860) : f.call(null,G__22860));
})() - (1));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4529__auto__ = ((function (i__22858,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__4527__auto__,size__4528__auto__,b__22859,s__22857__$2,temp__5804__auto__,vec__22853,u__$1,v__$1,c__$1,j,k){
return (function clojure$math$combinatorics$iter__22856_$_iter__22861(s__22862){
return (new cljs.core.LazySeq(null,((function (i__22858,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__4527__auto__,size__4528__auto__,b__22859,s__22857__$2,temp__5804__auto__,vec__22853,u__$1,v__$1,c__$1,j,k){
return (function (){
var s__22862__$1 = s__22862;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__22862__$1);
if(temp__5804__auto____$1){
var s__22862__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__22862__$2)){
var c__4527__auto____$1 = cljs.core.chunk_first(s__22862__$2);
var size__4528__auto____$1 = cljs.core.count(c__4527__auto____$1);
var b__22864 = cljs.core.chunk_buffer(size__4528__auto____$1);
if((function (){var i__22863 = (0);
while(true){
if((i__22863 < size__4528__auto____$1)){
var z = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto____$1,i__22863);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(z) : v__$1.call(null,z)),(0))){
cljs.core.chunk_append(b__22864,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(c__$1.cljs$core$IFn$_invoke$arity$1 ? c__$1.cljs$core$IFn$_invoke$arity$1(z) : c__$1.call(null,z)),(v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(z) : v__$1.call(null,z))], null));

var G__22904 = (i__22863 + (1));
i__22863 = G__22904;
continue;
} else {
var G__22905 = (i__22863 + (1));
i__22863 = G__22905;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22864),clojure$math$combinatorics$iter__22856_$_iter__22861(cljs.core.chunk_rest(s__22862__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22864),null);
}
} else {
var z = cljs.core.first(s__22862__$2);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(z) : v__$1.call(null,z)),(0))){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(c__$1.cljs$core$IFn$_invoke$arity$1 ? c__$1.cljs$core$IFn$_invoke$arity$1(z) : c__$1.call(null,z)),(v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(z) : v__$1.call(null,z))], null),clojure$math$combinatorics$iter__22856_$_iter__22861(cljs.core.rest(s__22862__$2)));
} else {
var G__22906 = cljs.core.rest(s__22862__$2);
s__22862__$1 = G__22906;
continue;
}
}
} else {
return null;
}
break;
}
});})(i__22858,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__4527__auto__,size__4528__auto__,b__22859,s__22857__$2,temp__5804__auto__,vec__22853,u__$1,v__$1,c__$1,j,k))
,null,null));
});})(i__22858,n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,c__4527__auto__,size__4528__auto__,b__22859,s__22857__$2,temp__5804__auto__,vec__22853,u__$1,v__$1,c__$1,j,k))
;
return iter__4529__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2(first_col,(last_col + (1))));
})());
})());

var G__22907 = (i__22858 + (1));
i__22858 = G__22907;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22859),clojure$math$combinatorics$iter__22856(cljs.core.chunk_rest(s__22857__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22859),null);
}
} else {
var y = cljs.core.first(s__22857__$2);
return cljs.core.cons((function (){var first_col = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(y) : f.call(null,y));
var last_col = ((function (){var G__22865 = (y + (1));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__22865) : f.call(null,G__22865));
})() - (1));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4529__auto__ = ((function (n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__22857__$2,temp__5804__auto__,vec__22853,u__$1,v__$1,c__$1,j,k){
return (function clojure$math$combinatorics$iter__22856_$_iter__22866(s__22867){
return (new cljs.core.LazySeq(null,((function (n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__22857__$2,temp__5804__auto__,vec__22853,u__$1,v__$1,c__$1,j,k){
return (function (){
var s__22867__$1 = s__22867;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__22867__$1);
if(temp__5804__auto____$1){
var s__22867__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__22867__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__22867__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__22869 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__22868 = (0);
while(true){
if((i__22868 < size__4528__auto__)){
var z = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__22868);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(z) : v__$1.call(null,z)),(0))){
cljs.core.chunk_append(b__22869,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(c__$1.cljs$core$IFn$_invoke$arity$1 ? c__$1.cljs$core$IFn$_invoke$arity$1(z) : c__$1.call(null,z)),(v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(z) : v__$1.call(null,z))], null));

var G__22908 = (i__22868 + (1));
i__22868 = G__22908;
continue;
} else {
var G__22909 = (i__22868 + (1));
i__22868 = G__22909;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22869),clojure$math$combinatorics$iter__22856_$_iter__22866(cljs.core.chunk_rest(s__22867__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22869),null);
}
} else {
var z = cljs.core.first(s__22867__$2);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(z) : v__$1.call(null,z)),(0))){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(c__$1.cljs$core$IFn$_invoke$arity$1 ? c__$1.cljs$core$IFn$_invoke$arity$1(z) : c__$1.call(null,z)),(v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(z) : v__$1.call(null,z))], null),clojure$math$combinatorics$iter__22856_$_iter__22866(cljs.core.rest(s__22867__$2)));
} else {
var G__22910 = cljs.core.rest(s__22867__$2);
s__22867__$1 = G__22910;
continue;
}
}
} else {
return null;
}
break;
}
});})(n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__22857__$2,temp__5804__auto__,vec__22853,u__$1,v__$1,c__$1,j,k))
,null,null));
});})(n,m,f,c,u,v,a,b,l,r,s,first_col,last_col,y,s__22857__$2,temp__5804__auto__,vec__22853,u__$1,v__$1,c__$1,j,k))
;
return iter__4529__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2(first_col,(last_col + (1))));
})());
})(),clojure$math$combinatorics$iter__22856(cljs.core.rest(s__22857__$2)));
}
} else {
return null;
}
break;
}
});})(n,m,f,c,u,v,a,b,l,r,s,vec__22853,u__$1,v__$1,c__$1,j,k))
,null,null));
});})(n,m,f,c,u,v,a,b,l,r,s,vec__22853,u__$1,v__$1,c__$1,j,k))
;
return iter__4529__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((l + (1))));
})();
return cljs.core.cons(part,(new cljs.core.LazySeq(null,((function (n,m,f,c,u,v,a,b,l,r,s,part,vec__22853,u__$1,v__$1,c__$1,j,k){
return (function (){
return (clojure.math.combinatorics.m5.cljs$core$IFn$_invoke$arity$11 ? clojure.math.combinatorics.m5.cljs$core$IFn$_invoke$arity$11(n,m,f,c__$1,u__$1,v__$1,a,b,l,r,s) : clojure.math.combinatorics.m5.call(null,n,m,f,c__$1,u__$1,v__$1,a,b,l,r,s));
});})(n,m,f,c,u,v,a,b,l,r,s,part,vec__22853,u__$1,v__$1,c__$1,j,k))
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
var G__22915 = (j - (1));
j = G__22915;
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
var diff_uv = (cljs.core.truth_(s)?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,(function (){var iter__4529__auto__ = (function clojure$math$combinatorics$m5_$_iter__22911(s__22912){
return (new cljs.core.LazySeq(null,(function (){
var s__22912__$1 = s__22912;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__22912__$1);
if(temp__5804__auto__){
var s__22912__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22912__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__22912__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__22914 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__22913 = (0);
while(true){
if((i__22913 < size__4528__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__22913);
cljs.core.chunk_append(b__22914,((u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(i) : u.call(null,i)) - (v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(i) : v__$1.call(null,i))));

var G__22916 = (i__22913 + (1));
i__22913 = G__22916;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22914),clojure$math$combinatorics$m5_$_iter__22911(cljs.core.chunk_rest(s__22912__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22914),null);
}
} else {
var i = cljs.core.first(s__22912__$2);
return cljs.core.cons(((u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(i) : u.call(null,i)) - (v__$1.cljs$core$IFn$_invoke$arity$1 ? v__$1.cljs$core$IFn$_invoke$arity$1(i) : v__$1.call(null,i))),clojure$math$combinatorics$m5_$_iter__22911(cljs.core.rest(s__22912__$2)));
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
var G__22917 = cljs.core.rest(ks);
var G__22918 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v__$2,k,(u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(k) : u.call(null,k)));
ks = G__22917;
v__$2 = G__22918;
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
var G__22919 = (k_1 - (1));
var G__22920 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v__$3,k_1,(0));
var G__22921 = (amount - vk);
k_1 = G__22919;
v__$3 = G__22920;
amount = G__22921;
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
var len__4736__auto___22965 = arguments.length;
var i__4737__auto___22966 = (0);
while(true){
if((i__4737__auto___22966 < len__4736__auto___22965)){
args__4742__auto__.push((arguments[i__4737__auto___22966]));

var G__22967 = (i__4737__auto___22966 + (1));
i__4737__auto___22966 = G__22967;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return clojure.math.combinatorics.partitions_M.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(clojure.math.combinatorics.partitions_M.cljs$core$IFn$_invoke$arity$variadic = (function (items,p__22924){
var map__22925 = p__22924;
var map__22925__$1 = (((((!((map__22925 == null))))?(((((map__22925.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22925.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22925):map__22925);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22925__$1,cljs.core.cst$kw$min);
var to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22925__$1,cljs.core.cst$kw$max);
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
var start_multiset = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4529__auto__ = (function clojure$math$combinatorics$iter__22927(s__22928){
return (new cljs.core.LazySeq(null,(function (){
var s__22928__$1 = s__22928;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__22928__$1);
if(temp__5804__auto__){
var s__22928__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22928__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__22928__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__22930 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__22929 = (0);
while(true){
if((i__22929 < size__4528__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__22929);
var j = (i + (1));
cljs.core.chunk_append(b__22930,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,(function (){var G__22931 = (ditems.cljs$core$IFn$_invoke$arity$1 ? ditems.cljs$core$IFn$_invoke$arity$1(i) : ditems.call(null,i));
return (freqs.cljs$core$IFn$_invoke$arity$1 ? freqs.cljs$core$IFn$_invoke$arity$1(G__22931) : freqs.call(null,G__22931));
})()], null));

var G__22968 = (i__22929 + (1));
i__22929 = G__22968;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22930),clojure$math$combinatorics$iter__22927(cljs.core.chunk_rest(s__22928__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22930),null);
}
} else {
var i = cljs.core.first(s__22928__$2);
var j = (i + (1));
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [j,(function (){var G__22932 = (ditems.cljs$core$IFn$_invoke$arity$1 ? ditems.cljs$core$IFn$_invoke$arity$1(i) : ditems.call(null,i));
return (freqs.cljs$core$IFn$_invoke$arity$1 ? freqs.cljs$core$IFn$_invoke$arity$1(G__22932) : freqs.call(null,G__22932));
})()], null),clojure$math$combinatorics$iter__22927(cljs.core.rest(s__22928__$2)));
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
var iter__4529__auto__ = (function clojure$math$combinatorics$iter__22933(s__22934){
return (new cljs.core.LazySeq(null,(function (){
var s__22934__$1 = s__22934;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__22934__$1);
if(temp__5804__auto__){
var s__22934__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22934__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__22934__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__22936 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__22935 = (0);
while(true){
if((i__22935 < size__4528__auto__)){
var part = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__22935);
cljs.core.chunk_append(b__22936,(function (){var iter__4529__auto__ = ((function (i__22935,part,c__4527__auto__,size__4528__auto__,b__22936,s__22934__$2,temp__5804__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__22925,map__22925__$1,from,to){
return (function clojure$math$combinatorics$iter__22933_$_iter__22937(s__22938){
return (new cljs.core.LazySeq(null,((function (i__22935,part,c__4527__auto__,size__4528__auto__,b__22936,s__22934__$2,temp__5804__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__22925,map__22925__$1,from,to){
return (function (){
var s__22938__$1 = s__22938;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__22938__$1);
if(temp__5804__auto____$1){
var s__22938__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__22938__$2)){
var c__4527__auto____$1 = cljs.core.chunk_first(s__22938__$2);
var size__4528__auto____$1 = cljs.core.count(c__4527__auto____$1);
var b__22940 = cljs.core.chunk_buffer(size__4528__auto____$1);
if((function (){var i__22939 = (0);
while(true){
if((i__22939 < size__4528__auto____$1)){
var multiset = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto____$1,i__22939);
cljs.core.chunk_append(b__22940,cljs.core.vec(clojure.math.combinatorics.mapjoin(((function (i__22939,i__22935,multiset,c__4527__auto____$1,size__4528__auto____$1,b__22940,s__22938__$2,temp__5804__auto____$1,part,c__4527__auto__,size__4528__auto__,b__22936,s__22934__$2,temp__5804__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__22925,map__22925__$1,from,to){
return (function (p__22941){
var vec__22942 = p__22941;
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22942,(0),null);
var numtimes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22942,(1),null);
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(numtimes,(function (){var G__22945 = (index - (1));
return (ditems.cljs$core$IFn$_invoke$arity$1 ? ditems.cljs$core$IFn$_invoke$arity$1(G__22945) : ditems.call(null,G__22945));
})());
});})(i__22939,i__22935,multiset,c__4527__auto____$1,size__4528__auto____$1,b__22940,s__22938__$2,temp__5804__auto____$1,part,c__4527__auto__,size__4528__auto__,b__22936,s__22934__$2,temp__5804__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__22925,map__22925__$1,from,to))
,multiset)));

var G__22969 = (i__22939 + (1));
i__22939 = G__22969;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22940),clojure$math$combinatorics$iter__22933_$_iter__22937(cljs.core.chunk_rest(s__22938__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22940),null);
}
} else {
var multiset = cljs.core.first(s__22938__$2);
return cljs.core.cons(cljs.core.vec(clojure.math.combinatorics.mapjoin(((function (i__22935,multiset,s__22938__$2,temp__5804__auto____$1,part,c__4527__auto__,size__4528__auto__,b__22936,s__22934__$2,temp__5804__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__22925,map__22925__$1,from,to){
return (function (p__22946){
var vec__22947 = p__22946;
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22947,(0),null);
var numtimes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22947,(1),null);
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(numtimes,(function (){var G__22950 = (index - (1));
return (ditems.cljs$core$IFn$_invoke$arity$1 ? ditems.cljs$core$IFn$_invoke$arity$1(G__22950) : ditems.call(null,G__22950));
})());
});})(i__22935,multiset,s__22938__$2,temp__5804__auto____$1,part,c__4527__auto__,size__4528__auto__,b__22936,s__22934__$2,temp__5804__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__22925,map__22925__$1,from,to))
,multiset)),clojure$math$combinatorics$iter__22933_$_iter__22937(cljs.core.rest(s__22938__$2)));
}
} else {
return null;
}
break;
}
});})(i__22935,part,c__4527__auto__,size__4528__auto__,b__22936,s__22934__$2,temp__5804__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__22925,map__22925__$1,from,to))
,null,null));
});})(i__22935,part,c__4527__auto__,size__4528__auto__,b__22936,s__22934__$2,temp__5804__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__22925,map__22925__$1,from,to))
;
return iter__4529__auto__(part);
})());

var G__22970 = (i__22935 + (1));
i__22935 = G__22970;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22936),clojure$math$combinatorics$iter__22933(cljs.core.chunk_rest(s__22934__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22936),null);
}
} else {
var part = cljs.core.first(s__22934__$2);
return cljs.core.cons((function (){var iter__4529__auto__ = ((function (part,s__22934__$2,temp__5804__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__22925,map__22925__$1,from,to){
return (function clojure$math$combinatorics$iter__22933_$_iter__22951(s__22952){
return (new cljs.core.LazySeq(null,(function (){
var s__22952__$1 = s__22952;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__22952__$1);
if(temp__5804__auto____$1){
var s__22952__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__22952__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__22952__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__22954 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__22953 = (0);
while(true){
if((i__22953 < size__4528__auto__)){
var multiset = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__22953);
cljs.core.chunk_append(b__22954,cljs.core.vec(clojure.math.combinatorics.mapjoin(((function (i__22953,multiset,c__4527__auto__,size__4528__auto__,b__22954,s__22952__$2,temp__5804__auto____$1,part,s__22934__$2,temp__5804__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__22925,map__22925__$1,from,to){
return (function (p__22955){
var vec__22956 = p__22955;
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22956,(0),null);
var numtimes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22956,(1),null);
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(numtimes,(function (){var G__22959 = (index - (1));
return (ditems.cljs$core$IFn$_invoke$arity$1 ? ditems.cljs$core$IFn$_invoke$arity$1(G__22959) : ditems.call(null,G__22959));
})());
});})(i__22953,multiset,c__4527__auto__,size__4528__auto__,b__22954,s__22952__$2,temp__5804__auto____$1,part,s__22934__$2,temp__5804__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__22925,map__22925__$1,from,to))
,multiset)));

var G__22971 = (i__22953 + (1));
i__22953 = G__22971;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22954),clojure$math$combinatorics$iter__22933_$_iter__22951(cljs.core.chunk_rest(s__22952__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22954),null);
}
} else {
var multiset = cljs.core.first(s__22952__$2);
return cljs.core.cons(cljs.core.vec(clojure.math.combinatorics.mapjoin(((function (multiset,s__22952__$2,temp__5804__auto____$1,part,s__22934__$2,temp__5804__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__22925,map__22925__$1,from,to){
return (function (p__22960){
var vec__22961 = p__22960;
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22961,(0),null);
var numtimes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22961,(1),null);
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(numtimes,(function (){var G__22964 = (index - (1));
return (ditems.cljs$core$IFn$_invoke$arity$1 ? ditems.cljs$core$IFn$_invoke$arity$1(G__22964) : ditems.call(null,G__22964));
})());
});})(multiset,s__22952__$2,temp__5804__auto____$1,part,s__22934__$2,temp__5804__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__22925,map__22925__$1,from,to))
,multiset)),clojure$math$combinatorics$iter__22933_$_iter__22951(cljs.core.rest(s__22952__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(part,s__22934__$2,temp__5804__auto__,start_multiset,parts,items__$1,ditems,freqs,N,M,from__$1,to__$1,map__22925,map__22925__$1,from,to))
;
return iter__4529__auto__(part);
})(),clojure$math$combinatorics$iter__22933(cljs.core.rest(s__22934__$2)));
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
(clojure.math.combinatorics.partitions_M.cljs$lang$applyTo = (function (seq22922){
var G__22923 = cljs.core.first(seq22922);
var seq22922__$1 = cljs.core.next(seq22922);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22923,seq22922__$1);
}));

/**
 * All the lexicographic distinct partitions of items.
 *  Optionally pass in :min and/or :max to specify inclusive bounds on the number of parts the items can be split into.
 */
clojure.math.combinatorics.partitions = (function clojure$math$combinatorics$partitions(var_args){
var args__4742__auto__ = [];
var len__4736__auto___22974 = arguments.length;
var i__4737__auto___22975 = (0);
while(true){
if((i__4737__auto___22975 < len__4736__auto___22974)){
args__4742__auto__.push((arguments[i__4737__auto___22975]));

var G__22976 = (i__4737__auto___22975 + (1));
i__4737__auto___22975 = G__22976;
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
(clojure.math.combinatorics.partitions.cljs$lang$applyTo = (function (seq22972){
var G__22973 = cljs.core.first(seq22972);
var seq22972__$1 = cljs.core.next(seq22972);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22973,seq22972__$1);
}));

