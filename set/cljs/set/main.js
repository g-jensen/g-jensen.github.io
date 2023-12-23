// Compiled by ClojureScript 1.10.764 {:static-fns true, :optimize-constants true}
goog.provide('set.main');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.math.combinatorics');
set.main.attributes = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$color,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$red,cljs.core.cst$kw$green,cljs.core.cst$kw$purple], null),cljs.core.cst$kw$count,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$one,cljs.core.cst$kw$two,cljs.core.cst$kw$three], null),cljs.core.cst$kw$shape,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$diamond,cljs.core.cst$kw$oval,cljs.core.cst$kw$squiggle], null),cljs.core.cst$kw$shade,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$open,cljs.core.cst$kw$solid,cljs.core.cst$kw$striped], null)], null);
set.main.card = (function set$main$card(color,count,shape,shade){
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$color,color,cljs.core.cst$kw$count,count,cljs.core.cst$kw$shape,shape,cljs.core.cst$kw$shade,shade], null);
});
set.main.deck = (function (){var iter__4529__auto__ = (function set$main$iter__17381(s__17382){
return (new cljs.core.LazySeq(null,(function (){
var s__17382__$1 = s__17382;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__17382__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var color = cljs.core.first(xs__6360__auto__);
var iterys__4525__auto__ = ((function (s__17382__$1,color,xs__6360__auto__,temp__5804__auto__){
return (function set$main$iter__17381_$_iter__17383(s__17384){
return (new cljs.core.LazySeq(null,((function (s__17382__$1,color,xs__6360__auto__,temp__5804__auto__){
return (function (){
var s__17384__$1 = s__17384;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__17384__$1);
if(temp__5804__auto____$1){
var xs__6360__auto____$1 = temp__5804__auto____$1;
var count = cljs.core.first(xs__6360__auto____$1);
var iterys__4525__auto__ = ((function (s__17384__$1,s__17382__$1,count,xs__6360__auto____$1,temp__5804__auto____$1,color,xs__6360__auto__,temp__5804__auto__){
return (function set$main$iter__17381_$_iter__17383_$_iter__17385(s__17386){
return (new cljs.core.LazySeq(null,((function (s__17384__$1,s__17382__$1,count,xs__6360__auto____$1,temp__5804__auto____$1,color,xs__6360__auto__,temp__5804__auto__){
return (function (){
var s__17386__$1 = s__17386;
while(true){
var temp__5804__auto____$2 = cljs.core.seq(s__17386__$1);
if(temp__5804__auto____$2){
var xs__6360__auto____$2 = temp__5804__auto____$2;
var shape = cljs.core.first(xs__6360__auto____$2);
var iterys__4525__auto__ = ((function (s__17386__$1,s__17384__$1,s__17382__$1,shape,xs__6360__auto____$2,temp__5804__auto____$2,count,xs__6360__auto____$1,temp__5804__auto____$1,color,xs__6360__auto__,temp__5804__auto__){
return (function set$main$iter__17381_$_iter__17383_$_iter__17385_$_iter__17387(s__17388){
return (new cljs.core.LazySeq(null,((function (s__17386__$1,s__17384__$1,s__17382__$1,shape,xs__6360__auto____$2,temp__5804__auto____$2,count,xs__6360__auto____$1,temp__5804__auto____$1,color,xs__6360__auto__,temp__5804__auto__){
return (function (){
var s__17388__$1 = s__17388;
while(true){
var temp__5804__auto____$3 = cljs.core.seq(s__17388__$1);
if(temp__5804__auto____$3){
var s__17388__$2 = temp__5804__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__17388__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__17388__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__17390 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__17389 = (0);
while(true){
if((i__17389 < size__4528__auto__)){
var shade = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__17389);
cljs.core.chunk_append(b__17390,set.main.card(color,count,shape,shade));

var G__17391 = (i__17389 + (1));
i__17389 = G__17391;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17390),set$main$iter__17381_$_iter__17383_$_iter__17385_$_iter__17387(cljs.core.chunk_rest(s__17388__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17390),null);
}
} else {
var shade = cljs.core.first(s__17388__$2);
return cljs.core.cons(set.main.card(color,count,shape,shade),set$main$iter__17381_$_iter__17383_$_iter__17385_$_iter__17387(cljs.core.rest(s__17388__$2)));
}
} else {
return null;
}
break;
}
});})(s__17386__$1,s__17384__$1,s__17382__$1,shape,xs__6360__auto____$2,temp__5804__auto____$2,count,xs__6360__auto____$1,temp__5804__auto____$1,color,xs__6360__auto__,temp__5804__auto__))
,null,null));
});})(s__17386__$1,s__17384__$1,s__17382__$1,shape,xs__6360__auto____$2,temp__5804__auto____$2,count,xs__6360__auto____$1,temp__5804__auto____$1,color,xs__6360__auto__,temp__5804__auto__))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(cljs.core.cst$kw$shade.cljs$core$IFn$_invoke$arity$1(set.main.attributes)));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,set$main$iter__17381_$_iter__17383_$_iter__17385(cljs.core.rest(s__17386__$1)));
} else {
var G__17392 = cljs.core.rest(s__17386__$1);
s__17386__$1 = G__17392;
continue;
}
} else {
return null;
}
break;
}
});})(s__17384__$1,s__17382__$1,count,xs__6360__auto____$1,temp__5804__auto____$1,color,xs__6360__auto__,temp__5804__auto__))
,null,null));
});})(s__17384__$1,s__17382__$1,count,xs__6360__auto____$1,temp__5804__auto____$1,color,xs__6360__auto__,temp__5804__auto__))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(cljs.core.cst$kw$shape.cljs$core$IFn$_invoke$arity$1(set.main.attributes)));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,set$main$iter__17381_$_iter__17383(cljs.core.rest(s__17384__$1)));
} else {
var G__17393 = cljs.core.rest(s__17384__$1);
s__17384__$1 = G__17393;
continue;
}
} else {
return null;
}
break;
}
});})(s__17382__$1,color,xs__6360__auto__,temp__5804__auto__))
,null,null));
});})(s__17382__$1,color,xs__6360__auto__,temp__5804__auto__))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(cljs.core.cst$kw$count.cljs$core$IFn$_invoke$arity$1(set.main.attributes)));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,set$main$iter__17381(cljs.core.rest(s__17382__$1)));
} else {
var G__17394 = cljs.core.rest(s__17382__$1);
s__17382__$1 = G__17394;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.cst$kw$color.cljs$core$IFn$_invoke$arity$1(set.main.attributes));
})();
set.main.distinct_or_all_same = (function set$main$distinct_or_all_same(vec){
var or__4126__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.distinct_QMARK_,vec);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,vec);
}
});
set.main.values_are_distinct_or_all_same_QMARK_ = (function set$main$values_are_distinct_or_all_same_QMARK_(m){
return cljs.core.every_QMARK_(cljs.core.true_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__17395_SHARP_){
return set.main.distinct_or_all_same(cljs.core.map.cljs$core$IFn$_invoke$arity$2(p1__17395_SHARP_,m));
}),cljs.core.keys(set.main.attributes)));
});
set.main.set_QMARK_ = (function set$main$set_QMARK_(cards){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cards),(3))) && (set.main.values_are_distinct_or_all_same_QMARK_(cards)));
});
set.main.contains_set_QMARK_ = (function set$main$contains_set_QMARK_(cards){
return cljs.core.some(cljs.core.true_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(set.main.set_QMARK_,clojure.math.combinatorics.combinations(cards,(3))));
});
