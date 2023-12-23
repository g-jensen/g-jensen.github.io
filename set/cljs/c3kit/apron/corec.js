// Compiled by ClojureScript 1.10.764 {:static-fns true, :optimize-constants true}
goog.provide('c3kit.apron.corec');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('goog.string.format');
goog.require('goog.object');
/**
 * Like for-all, but with map
 */
c3kit.apron.corec.map_all = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.doall,cljs.core.map);
/**
 * Like for-all, but with map-indexed
 */
c3kit.apron.corec.map_all_indexed = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.doall,cljs.core.map_indexed);
/**
 * assoc for js objects
 */
c3kit.apron.corec.oset = (function c3kit$apron$corec$oset(o,k,v){
if((o == null)){
var G__7834 = cljs.core.name(k);
var obj7836 = ({});
goog.object.set(obj7836,G__7834,v);

return obj7836;
} else {
goog.object.set(o,cljs.core.name(k),v);

return o;
}
});
/**
 * assoc-in for js objects
 */
c3kit.apron.corec.oset_in = (function c3kit$apron$corec$oset_in(o,ks,v){
if(cljs.core.not(cljs.core.seq(ks))){
return o;
} else {
var o__$1 = (((o == null))?({}):o);
var o_7849__$2 = o__$1;
var ks_7850__$1 = ks;
while(true){
var vec__7844_7851 = ks_7850__$1;
var seq__7845_7852 = cljs.core.seq(vec__7844_7851);
var first__7846_7853 = cljs.core.first(seq__7845_7852);
var seq__7845_7854__$1 = cljs.core.next(seq__7845_7852);
var k_7855 = first__7846_7853;
var ks_7856__$2 = seq__7845_7854__$1;
var k_7857__$1 = ((typeof k_7855 === 'number')?k_7855:cljs.core.name(k_7855));
if(cljs.core.seq(ks_7856__$2)){
var temp__5802__auto___7858 = goog.object.get(o_7849__$2,k_7857__$1);
if(cljs.core.truth_(temp__5802__auto___7858)){
var o_next_7859 = temp__5802__auto___7858;
var G__7860 = o_next_7859;
var G__7861 = ks_7856__$2;
o_7849__$2 = G__7860;
ks_7850__$1 = G__7861;
continue;
} else {
var o_next_7862 = ({});
goog.object.set(o_7849__$2,k_7857__$1,o_next_7862);

var G__7863 = o_next_7862;
var G__7864 = ks_7856__$2;
o_7849__$2 = G__7863;
ks_7850__$1 = G__7864;
continue;
}
} else {
goog.object.set(o_7849__$2,k_7857__$1,v);
}
break;
}

return o__$1;
}
});
/**
 * get for js objects
 */
c3kit.apron.corec.oget = (function c3kit$apron$corec$oget(var_args){
var G__7866 = arguments.length;
switch (G__7866) {
case 2:
return c3kit.apron.corec.oget.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return c3kit.apron.corec.oget.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.apron.corec.oget.cljs$core$IFn$_invoke$arity$2 = (function (o,k){
return goog.object.get(o,cljs.core.name(k),null);
}));

(c3kit.apron.corec.oget.cljs$core$IFn$_invoke$arity$3 = (function (o,k,not_found){
return goog.object.get(o,cljs.core.name(k),not_found);
}));

(c3kit.apron.corec.oget.cljs$lang$maxFixedArity = 3);

/**
 * get-in for js objects
 */
c3kit.apron.corec.oget_in = (function c3kit$apron$corec$oget_in(var_args){
var G__7870 = arguments.length;
switch (G__7870) {
case 2:
return c3kit.apron.corec.oget_in.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return c3kit.apron.corec.oget_in.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.apron.corec.oget_in.cljs$core$IFn$_invoke$arity$2 = (function (o,ks){
return c3kit.apron.corec.oget_in.cljs$core$IFn$_invoke$arity$3(o,ks,null);
}));

(c3kit.apron.corec.oget_in.cljs$core$IFn$_invoke$arity$3 = (function (o,ks,not_found){
var or__4126__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.object.getValueByKeys,o,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__7868_SHARP_){
if(typeof p1__7868_SHARP_ === 'number'){
return p1__7868_SHARP_;
} else {
return cljs.core.name(p1__7868_SHARP_);
}
}),ks));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return not_found;
}
}));

(c3kit.apron.corec.oget_in.cljs$lang$maxFixedArity = 3);

c3kit.apron.corec.new_uuid = (function c3kit$apron$corec$new_uuid(){
return cljs.core.random_uuid();
});
/**
 * ensures the seq is a vector before conj-ing
 */
c3kit.apron.corec.conjv = (function c3kit$apron$corec$conjv(col,item){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(col),item);
});
/**
 * ensures the seq is a vector after concat-ing
 */
c3kit.apron.corec.concatv = (function c3kit$apron$corec$concatv(var_args){
var args__4742__auto__ = [];
var len__4736__auto___7873 = arguments.length;
var i__4737__auto___7874 = (0);
while(true){
if((i__4737__auto___7874 < len__4736__auto___7873)){
args__4742__auto__.push((arguments[i__4737__auto___7874]));

var G__7875 = (i__4737__auto___7874 + (1));
i__4737__auto___7874 = G__7875;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return c3kit.apron.corec.concatv.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(c3kit.apron.corec.concatv.cljs$core$IFn$_invoke$arity$variadic = (function (cols){
return cljs.core.vec(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cols));
}));

(c3kit.apron.corec.concatv.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(c3kit.apron.corec.concatv.cljs$lang$applyTo = (function (seq7872){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq7872));
}));

/**
 * insert elem into vector at index 
 */
c3kit.apron.corec.assocv = (function c3kit$apron$corec$assocv(coll,i,elem){
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(coll,(0),i),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [elem], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(coll,i)], 0)));
});
/**
 * removes the item at index i from the vector
 */
c3kit.apron.corec.dissocv = (function c3kit$apron$corec$dissocv(coll,i){
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(coll,(0),i),cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(coll,(i + (1)))));
});
/**
 * assocv with coll as last param
 */
c3kit.apron.corec.assocv_GT__GT_ = (function c3kit$apron$corec$assocv_GT__GT_(i,elem,coll){
return c3kit.apron.corec.assocv(coll,i,elem);
});
/**
 * dissocv with coll as last param
 */
c3kit.apron.corec.dissocv_GT__GT_ = (function c3kit$apron$corec$dissocv_GT__GT_(i,coll){
return c3kit.apron.corec.dissocv(coll,i);
});
c3kit.apron.corec.removev = (function c3kit$apron$corec$removev(pred,col){

return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pred,col));
});
c3kit.apron.corec.removev_EQ_ = (function c3kit$apron$corec$removev_EQ_(col,item){

return c3kit.apron.corec.removev((function (p1__7876_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__7876_SHARP_,item);
}),col);
});
/**
 * Same as (first (filter ...)), but faster!
 */
c3kit.apron.corec.ffilter = (function c3kit$apron$corec$ffilter(pred,coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (_,b){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(b) : pred.call(null,b)))){
return cljs.core.reduced(b);
} else {
return null;
}
}),null,coll);
});
/**
 * Counts the number of entities that satisfy a predicate
 */
c3kit.apron.corec.count_where = (function c3kit$apron$corec$count_where(pred,es){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__7878_SHARP_,p2__7877_SHARP_){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(p2__7877_SHARP_) : pred.call(null,p2__7877_SHARP_)))){
return (p1__7878_SHARP_ + (1));
} else {
return p1__7878_SHARP_;
}
}),(0),es);
});
/**
 * Counts the number of entities that
 * exactly match some given key-value pairs
 */
c3kit.apron.corec.count_by = (function c3kit$apron$corec$count_by(var_args){
var args__4742__auto__ = [];
var len__4736__auto___7882 = arguments.length;
var i__4737__auto___7883 = (0);
while(true){
if((i__4737__auto___7883 < len__4736__auto___7882)){
args__4742__auto__.push((arguments[i__4737__auto___7883]));

var G__7884 = (i__4737__auto___7883 + (1));
i__4737__auto___7883 = G__7884;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return c3kit.apron.corec.count_by.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(c3kit.apron.corec.count_by.cljs$core$IFn$_invoke$arity$variadic = (function (es,kvs){
var test = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,kvs);
var keys = cljs.core.keys(test);
return c3kit.apron.corec.count_where((function (p1__7879_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(test,cljs.core.select_keys(p1__7879_SHARP_,keys));
}),es);
}));

(c3kit.apron.corec.count_by.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(c3kit.apron.corec.count_by.cljs$lang$applyTo = (function (seq7880){
var G__7881 = cljs.core.first(seq7880);
var seq7880__$1 = cljs.core.next(seq7880);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__7881,seq7880__$1);
}));

/**
 * Sums the results of a function applied to the elements of a collection
 */
c3kit.apron.corec.sum_by = (function c3kit$apron$corec$sum_by(f,coll){
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(cljs.core.map.cljs$core$IFn$_invoke$arity$1(f),cljs.core._PLUS_,coll);
});
/**
 * Like (filter some? (map f coll)).
 * Returns a transducer when no collection is provided.
 */
c3kit.apron.corec.map_some = (function c3kit$apron$corec$map_some(var_args){
var G__7889 = arguments.length;
switch (G__7889) {
case 1:
return c3kit.apron.corec.map_some.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return c3kit.apron.corec.map_some.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___7891 = arguments.length;
var i__4737__auto___7892 = (0);
while(true){
if((i__4737__auto___7892 < len__4736__auto___7891)){
args_arr__4757__auto__.push((arguments[i__4737__auto___7892]));

var G__7893 = (i__4737__auto___7892 + (1));
i__4737__auto___7892 = G__7893;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((2)),(0),null));
return c3kit.apron.corec.map_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4758__auto__);

}
});

(c3kit.apron.corec.map_some.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1(f),cljs.core.filter.cljs$core$IFn$_invoke$arity$1(cljs.core.some_QMARK_));
}));

(c3kit.apron.corec.map_some.cljs$core$IFn$_invoke$arity$2 = (function (f,coll){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$2(c3kit.apron.corec.map_some.cljs$core$IFn$_invoke$arity$1(f),coll);
}));

(c3kit.apron.corec.map_some.cljs$core$IFn$_invoke$arity$variadic = (function (f,coll,colls){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.sequence,c3kit.apron.corec.map_some.cljs$core$IFn$_invoke$arity$1(f),coll,colls);
}));

/** @this {Function} */
(c3kit.apron.corec.map_some.cljs$lang$applyTo = (function (seq7886){
var G__7887 = cljs.core.first(seq7886);
var seq7886__$1 = cljs.core.next(seq7886);
var G__7888 = cljs.core.first(seq7886__$1);
var seq7886__$2 = cljs.core.next(seq7886__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__7887,G__7888,seq7886__$2);
}));

(c3kit.apron.corec.map_some.cljs$lang$maxFixedArity = (2));

/**
 * Like (map f (filter some? coll)).
 * Returns a transducer when no collection is provided.
 */
c3kit.apron.corec.some_map = (function c3kit$apron$corec$some_map(var_args){
var G__7895 = arguments.length;
switch (G__7895) {
case 1:
return c3kit.apron.corec.some_map.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return c3kit.apron.corec.some_map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.apron.corec.some_map.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$1(cljs.core.some_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$1(f));
}));

(c3kit.apron.corec.some_map.cljs$core$IFn$_invoke$arity$2 = (function (f,coll){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$2(c3kit.apron.corec.some_map.cljs$core$IFn$_invoke$arity$1(f),coll);
}));

(c3kit.apron.corec.some_map.cljs$lang$maxFixedArity = 2);

/**
 * Like (set (map f coll))
 */
c3kit.apron.corec.map_set = (function c3kit$apron$corec$map_set(f,coll){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(f),coll);
});
/**
 * Like (distinct (map f coll))
 */
c3kit.apron.corec.map_distinct = (function c3kit$apron$corec$map_distinct(var_args){
var G__7898 = arguments.length;
switch (G__7898) {
case 1:
return c3kit.apron.corec.map_distinct.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return c3kit.apron.corec.map_distinct.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.apron.corec.map_distinct.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1(f),cljs.core.distinct.cljs$core$IFn$_invoke$arity$0());
}));

(c3kit.apron.corec.map_distinct.cljs$core$IFn$_invoke$arity$2 = (function (f,coll){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$2(c3kit.apron.corec.map_distinct.cljs$core$IFn$_invoke$arity$1(f),coll);
}));

(c3kit.apron.corec.map_distinct.cljs$lang$maxFixedArity = 2);

/**
 * Same as sort, but reversed
 */
c3kit.apron.corec.rsort = (function c3kit$apron$corec$rsort(var_args){
var G__7901 = arguments.length;
switch (G__7901) {
case 1:
return c3kit.apron.corec.rsort.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return c3kit.apron.corec.rsort.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.apron.corec.rsort.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return c3kit.apron.corec.rsort.cljs$core$IFn$_invoke$arity$2(cljs.core.compare,coll);
}));

(c3kit.apron.corec.rsort.cljs$core$IFn$_invoke$arity$2 = (function (comp,coll){
return cljs.core.sort.cljs$core$IFn$_invoke$arity$2((function (x,y){
return (comp.cljs$core$IFn$_invoke$arity$2 ? comp.cljs$core$IFn$_invoke$arity$2(y,x) : comp.call(null,y,x));
}),coll);
}));

(c3kit.apron.corec.rsort.cljs$lang$maxFixedArity = 2);

/**
 * Same as sort-by, but reversed
 */
c3kit.apron.corec.rsort_by = (function c3kit$apron$corec$rsort_by(var_args){
var G__7904 = arguments.length;
switch (G__7904) {
case 2:
return c3kit.apron.corec.rsort_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return c3kit.apron.corec.rsort_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.apron.corec.rsort_by.cljs$core$IFn$_invoke$arity$2 = (function (keyfn,coll){
return c3kit.apron.corec.rsort_by.cljs$core$IFn$_invoke$arity$3(keyfn,cljs.core.compare,coll);
}));

(c3kit.apron.corec.rsort_by.cljs$core$IFn$_invoke$arity$3 = (function (keyfn,comp,coll){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(keyfn,(function (x,y){
return (comp.cljs$core$IFn$_invoke$arity$2 ? comp.cljs$core$IFn$_invoke$arity$2(y,x) : comp.call(null,y,x));
}),coll);
}));

(c3kit.apron.corec.rsort_by.cljs$lang$maxFixedArity = 3);

c3kit.apron.corec.greatest_v = (function c3kit$apron$corec$greatest_v(var_args){
var G__7912 = arguments.length;
switch (G__7912) {
case 1:
return c3kit.apron.corec.greatest_v.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___7915 = arguments.length;
var i__4737__auto___7916 = (0);
while(true){
if((i__4737__auto___7916 < len__4736__auto___7915)){
args_arr__4757__auto__.push((arguments[i__4737__auto___7916]));

var G__7917 = (i__4737__auto___7916 + (1));
i__4737__auto___7916 = G__7917;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((2)),(0),null));
return c3kit.apron.corec.greatest_v.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4758__auto__);

}
});

(c3kit.apron.corec.greatest_v.cljs$core$IFn$_invoke$arity$1 = (function (_){
return null;
}));

(c3kit.apron.corec.greatest_v.cljs$core$IFn$_invoke$arity$variadic = (function (greater_QMARK_,init,vals){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__7906_SHARP_,p2__7907_SHARP_){
if(cljs.core.truth_((function (){var G__7913 = cljs.core.compare(p1__7906_SHARP_,p2__7907_SHARP_);
return (greater_QMARK_.cljs$core$IFn$_invoke$arity$1 ? greater_QMARK_.cljs$core$IFn$_invoke$arity$1(G__7913) : greater_QMARK_.call(null,G__7913));
})())){
return p1__7906_SHARP_;
} else {
return p2__7907_SHARP_;
}
}),init,vals);
}));

/** @this {Function} */
(c3kit.apron.corec.greatest_v.cljs$lang$applyTo = (function (seq7909){
var G__7910 = cljs.core.first(seq7909);
var seq7909__$1 = cljs.core.next(seq7909);
var G__7911 = cljs.core.first(seq7909__$1);
var seq7909__$2 = cljs.core.next(seq7909__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__7910,G__7911,seq7909__$2);
}));

(c3kit.apron.corec.greatest_v.cljs$lang$maxFixedArity = (2));

/**
 * Like max, but works with non-numeric values
 */
c3kit.apron.corec.max_v = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(c3kit.apron.corec.greatest_v,cljs.core.pos_QMARK_);
/**
 * Like min, but works with non-numeric values
 */
c3kit.apron.corec.min_v = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(c3kit.apron.corec.greatest_v,cljs.core.neg_QMARK_);
c3kit.apron.corec.greatest_m = (function c3kit$apron$corec$greatest_m(greater_QMARK_,k,comp,x,y){
if(cljs.core.truth_((function (){var G__7918 = (function (){var G__7919 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(x,k);
var G__7920 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(y,k);
return (comp.cljs$core$IFn$_invoke$arity$2 ? comp.cljs$core$IFn$_invoke$arity$2(G__7919,G__7920) : comp.call(null,G__7919,G__7920));
})();
return (greater_QMARK_.cljs$core$IFn$_invoke$arity$1 ? greater_QMARK_.cljs$core$IFn$_invoke$arity$1(G__7918) : greater_QMARK_.call(null,G__7918));
})())){
return x;
} else {
return y;
}
});
c3kit.apron.corec.greatest_by = (function c3kit$apron$corec$greatest_by(var_args){
var G__7924 = arguments.length;
switch (G__7924) {
case 3:
return c3kit.apron.corec.greatest_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return c3kit.apron.corec.greatest_by.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.apron.corec.greatest_by.cljs$core$IFn$_invoke$arity$3 = (function (pos_neg_QMARK_,k,coll){
return c3kit.apron.corec.greatest_by.cljs$core$IFn$_invoke$arity$4(pos_neg_QMARK_,k,cljs.core.compare,coll);
}));

(c3kit.apron.corec.greatest_by.cljs$core$IFn$_invoke$arity$4 = (function (pos_neg_QMARK_,k,comp,p__7925){
var vec__7926 = p__7925;
var seq__7927 = cljs.core.seq(vec__7926);
var first__7928 = cljs.core.first(seq__7927);
var seq__7927__$1 = cljs.core.next(seq__7927);
var first = first__7928;
var rest = seq__7927__$1;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__7921_SHARP_,p2__7922_SHARP_){
return c3kit.apron.corec.greatest_m(pos_neg_QMARK_,k,comp,p1__7921_SHARP_,p2__7922_SHARP_);
}),first,rest);
}));

(c3kit.apron.corec.greatest_by.cljs$lang$maxFixedArity = 4);

/**
 * Like max-key, but works with non-numeric values.
 */
c3kit.apron.corec.max_by = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(c3kit.apron.corec.greatest_by,cljs.core.pos_QMARK_);
/**
 * Like min-key, but works with non-numeric values.
 */
c3kit.apron.corec.min_by = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(c3kit.apron.corec.greatest_by,cljs.core.neg_QMARK_);
/**
 * Insert in threading macro to print the value.
 */
c3kit.apron.corec.__GT_inspect = (function c3kit$apron$corec$__GT_inspect(v){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["->inspect: ",v], 0));

return v;
});
/**
 * Returns the index of e (using =) in the seq. nil if missing.
 */
c3kit.apron.corec.index_of = (function c3kit$apron$corec$index_of(e,coll){
return cljs.core.first(cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__7931_SHARP_,p2__7930_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e,p2__7930_SHARP_)){
return p1__7931_SHARP_;
} else {
return null;
}
}),coll));
});
/**
 * Takes keyword argument and converts them to a map.  If the args are prefixed with a map, the rest of the
 *   args are merged in.
 */
c3kit.apron.corec.__GT_options = (function c3kit$apron$corec$__GT_options(options){
if((options == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null),options)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
if(cljs.core.map_QMARK_(cljs.core.first(options))){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.first(options),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,cljs.core.rest(options))], 0));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,options);

}
}
}
});
/**
 * Platform agnostic string format fm
 */
c3kit.apron.corec.formats = (function c3kit$apron$corec$formats(var_args){
var args__4742__auto__ = [];
var len__4736__auto___7934 = arguments.length;
var i__4737__auto___7935 = (0);
while(true){
if((i__4737__auto___7935 < len__4736__auto___7934)){
args__4742__auto__.push((arguments[i__4737__auto___7935]));

var G__7936 = (i__4737__auto___7935 + (1));
i__4737__auto___7935 = G__7936;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return c3kit.apron.corec.formats.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(c3kit.apron.corec.formats.cljs$core$IFn$_invoke$arity$variadic = (function (format,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.string.format,format,args);
}));

(c3kit.apron.corec.formats.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(c3kit.apron.corec.formats.cljs$lang$applyTo = (function (seq7932){
var G__7933 = cljs.core.first(seq7932);
var seq7932__$1 = cljs.core.next(seq7932);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__7933,seq7932__$1);
}));

/**
 * Creates a string of a given length by repeating the provided value.
 */
c3kit.apron.corec.__GT_string = (function c3kit$apron$corec$__GT_string(v,length){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(length,v));
});
/**
 * Pads the left side of a string.
 * If no character is provided, spaces will be used.
 * If the string is greater than or equal to the pad length,
 * the unmodified string will be returned.
 */
c3kit.apron.corec.pad_left = (function c3kit$apron$corec$pad_left(var_args){
var G__7938 = arguments.length;
switch (G__7938) {
case 2:
return c3kit.apron.corec.pad_left.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return c3kit.apron.corec.pad_left.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.apron.corec.pad_left.cljs$core$IFn$_invoke$arity$2 = (function (s,length){
return c3kit.apron.corec.pad_left.cljs$core$IFn$_invoke$arity$3(s,length," ");
}));

(c3kit.apron.corec.pad_left.cljs$core$IFn$_invoke$arity$3 = (function (s,length,v){
var size = cljs.core.count(s);
var G__7939 = s;
if((length > size)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(c3kit.apron.corec.__GT_string(v,(length - size))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__7939)].join('');
} else {
return G__7939;
}
}));

(c3kit.apron.corec.pad_left.cljs$lang$maxFixedArity = 3);

/**
 * Pads the right side of a string.
 * If no character is provided, spaces will be used.
 * If the string is greater than or equal to the pad length,
 * the unmodified string will be returned.
 */
c3kit.apron.corec.pad_right = (function c3kit$apron$corec$pad_right(var_args){
var G__7942 = arguments.length;
switch (G__7942) {
case 2:
return c3kit.apron.corec.pad_right.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return c3kit.apron.corec.pad_right.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.apron.corec.pad_right.cljs$core$IFn$_invoke$arity$2 = (function (s,length){
return c3kit.apron.corec.pad_right.cljs$core$IFn$_invoke$arity$3(s,length," ");
}));

(c3kit.apron.corec.pad_right.cljs$core$IFn$_invoke$arity$3 = (function (s,length,v){
var size = cljs.core.count(s);
var G__7943 = s;
if((length > size)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__7943),cljs.core.str.cljs$core$IFn$_invoke$arity$1(c3kit.apron.corec.__GT_string(v,(length - size)))].join('');
} else {
return G__7943;
}
}));

(c3kit.apron.corec.pad_right.cljs$lang$maxFixedArity = 3);

/**
 * Same as pad-left, except the string will be trimmed to the desired length.
 */
c3kit.apron.corec.pad_left_BANG_ = (function c3kit$apron$corec$pad_left_BANG_(var_args){
var G__7946 = arguments.length;
switch (G__7946) {
case 2:
return c3kit.apron.corec.pad_left_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return c3kit.apron.corec.pad_left_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.apron.corec.pad_left_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (s,length){
return c3kit.apron.corec.pad_left_BANG_.cljs$core$IFn$_invoke$arity$3(s,length," ");
}));

(c3kit.apron.corec.pad_left_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (s,length,v){
var size = cljs.core.count(s);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(length,size)){
return s;
} else {
if((size > length)){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(size - length));
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(c3kit.apron.corec.__GT_string(v,(length - size))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('');

}
}
}));

(c3kit.apron.corec.pad_left_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Same as pad-right, except the string will be trimmed to the desired length.
 */
c3kit.apron.corec.pad_right_BANG_ = (function c3kit$apron$corec$pad_right_BANG_(var_args){
var G__7949 = arguments.length;
switch (G__7949) {
case 2:
return c3kit.apron.corec.pad_right_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return c3kit.apron.corec.pad_right_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.apron.corec.pad_right_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (s,length){
return c3kit.apron.corec.pad_right_BANG_.cljs$core$IFn$_invoke$arity$3(s,length," ");
}));

(c3kit.apron.corec.pad_right_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (s,length,v){
var size = cljs.core.count(s);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(length,size)){
return s;
} else {
if((size > length)){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),length);
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),cljs.core.str.cljs$core$IFn$_invoke$arity$1(c3kit.apron.corec.__GT_string(v,(length - size)))].join('');

}
}
}));

(c3kit.apron.corec.pad_right_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Char code at the given index of a string
 */
c3kit.apron.corec.char_code_at = (function c3kit$apron$corec$char_code_at(s,i){
return s.charCodeAt(i);
});
/**
 * Char code at index 0 of a string
 */
c3kit.apron.corec.first_char_code = (function c3kit$apron$corec$first_char_code(s){
return c3kit.apron.corec.char_code_at(s,(0));
});
c3kit.apron.corec.not_blank_QMARK_ = cljs.core.complement(clojure.string.blank_QMARK_);
/**
 * Return a map where all the keys with nil values are removed
 */
c3kit.apron.corec.remove_nils = (function c3kit$apron$corec$remove_nils(e){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (r,p__7951){
var vec__7952 = p__7951;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7952,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7952,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,v)){
return r;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(r,k,v);
}
}),cljs.core.PersistentArrayMap.EMPTY,e);
});
/**
 * Returns true is e is an exception/error for the running platform
 */
c3kit.apron.corec.ex_QMARK_ = (function c3kit$apron$corec$ex_QMARK_(e){
return (e instanceof Error);
});
/**
 * Does nothing
 */
c3kit.apron.corec.noop = (function c3kit$apron$corec$noop(var_args){
var args__4742__auto__ = [];
var len__4736__auto___7956 = arguments.length;
var i__4737__auto___7957 = (0);
while(true){
if((i__4737__auto___7957 < len__4736__auto___7956)){
args__4742__auto__.push((arguments[i__4737__auto___7957]));

var G__7958 = (i__4737__auto___7957 + (1));
i__4737__auto___7957 = G__7958;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return c3kit.apron.corec.noop.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(c3kit.apron.corec.noop.cljs$core$IFn$_invoke$arity$variadic = (function (_){
return null;
}));

(c3kit.apron.corec.noop.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(c3kit.apron.corec.noop.cljs$lang$applyTo = (function (seq7955){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq7955));
}));

/**
 * Insert in threading macro to invoke a function with a given set of arguments.
 */
c3kit.apron.corec.invoke = (function c3kit$apron$corec$invoke(var_args){
var args__4742__auto__ = [];
var len__4736__auto___7961 = arguments.length;
var i__4737__auto___7962 = (0);
while(true){
if((i__4737__auto___7962 < len__4736__auto___7961)){
args__4742__auto__.push((arguments[i__4737__auto___7962]));

var G__7963 = (i__4737__auto___7962 + (1));
i__4737__auto___7962 = G__7963;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return c3kit.apron.corec.invoke.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(c3kit.apron.corec.invoke.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
}));

(c3kit.apron.corec.invoke.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(c3kit.apron.corec.invoke.cljs$lang$applyTo = (function (seq7959){
var G__7960 = cljs.core.first(seq7959);
var seq7959__$1 = cljs.core.next(seq7959);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__7960,seq7959__$1);
}));

/**
 * Create an n-arity function from a 0-arity function
 */
c3kit.apron.corec.narity = (function c3kit$apron$corec$narity(f){
return (function() { 
var G__7964__delegate = function (_){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
};
var G__7964 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__7965__i = 0, G__7965__a = new Array(arguments.length -  0);
while (G__7965__i < G__7965__a.length) {G__7965__a[G__7965__i] = arguments[G__7965__i + 0]; ++G__7965__i;}
  _ = new cljs.core.IndexedSeq(G__7965__a,0,null);
} 
return G__7964__delegate.call(this,_);};
G__7964.cljs$lang$maxFixedArity = 0;
G__7964.cljs$lang$applyTo = (function (arglist__7966){
var _ = cljs.core.seq(arglist__7966);
return G__7964__delegate(_);
});
G__7964.cljs$core$IFn$_invoke$arity$variadic = G__7964__delegate;
return G__7964;
})()
;
});
