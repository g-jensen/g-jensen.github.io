// Compiled by ClojureScript 1.10.764 {}
goog.provide('set.mainc');
goog.require('cljs.core');
goog.require('clojure.math.combinatorics');
set.mainc.attributes = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"red","red",-969428204),new cljs.core.Keyword(null,"green","green",-945526839),new cljs.core.Keyword(null,"purple","purple",-876021126)], null),new cljs.core.Keyword(null,"count","count",2139924085),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"one","one",935007904),new cljs.core.Keyword(null,"two","two",627606869),new cljs.core.Keyword(null,"three","three",-1651831795)], null),new cljs.core.Keyword(null,"shape","shape",1190694006),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"diamond","diamond",2136949587),new cljs.core.Keyword(null,"oval","oval",910486219),new cljs.core.Keyword(null,"squiggle","squiggle",759155407)], null),new cljs.core.Keyword(null,"shade","shade",-1569952450),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"open","open",-1763596448),new cljs.core.Keyword(null,"solid","solid",-2023773691),new cljs.core.Keyword(null,"striped","striped",-628686784)], null)], null);
set.mainc.card = (function set$mainc$card(color,count,shape,shade){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"color","color",1011675173),color,new cljs.core.Keyword(null,"count","count",2139924085),count,new cljs.core.Keyword(null,"shape","shape",1190694006),shape,new cljs.core.Keyword(null,"shade","shade",-1569952450),shade], null);
});
set.mainc.deck = (function (){var iter__4529__auto__ = (function set$mainc$iter__6410(s__6411){
return (new cljs.core.LazySeq(null,(function (){
var s__6411__$1 = s__6411;
while(true){
var temp__5804__auto__ = cljs.core.seq.call(null,s__6411__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var color = cljs.core.first.call(null,xs__6360__auto__);
var iterys__4525__auto__ = ((function (s__6411__$1,color,xs__6360__auto__,temp__5804__auto__){
return (function set$mainc$iter__6410_$_iter__6412(s__6413){
return (new cljs.core.LazySeq(null,((function (s__6411__$1,color,xs__6360__auto__,temp__5804__auto__){
return (function (){
var s__6413__$1 = s__6413;
while(true){
var temp__5804__auto____$1 = cljs.core.seq.call(null,s__6413__$1);
if(temp__5804__auto____$1){
var xs__6360__auto____$1 = temp__5804__auto____$1;
var count = cljs.core.first.call(null,xs__6360__auto____$1);
var iterys__4525__auto__ = ((function (s__6413__$1,s__6411__$1,count,xs__6360__auto____$1,temp__5804__auto____$1,color,xs__6360__auto__,temp__5804__auto__){
return (function set$mainc$iter__6410_$_iter__6412_$_iter__6414(s__6415){
return (new cljs.core.LazySeq(null,((function (s__6413__$1,s__6411__$1,count,xs__6360__auto____$1,temp__5804__auto____$1,color,xs__6360__auto__,temp__5804__auto__){
return (function (){
var s__6415__$1 = s__6415;
while(true){
var temp__5804__auto____$2 = cljs.core.seq.call(null,s__6415__$1);
if(temp__5804__auto____$2){
var xs__6360__auto____$2 = temp__5804__auto____$2;
var shape = cljs.core.first.call(null,xs__6360__auto____$2);
var iterys__4525__auto__ = ((function (s__6415__$1,s__6413__$1,s__6411__$1,shape,xs__6360__auto____$2,temp__5804__auto____$2,count,xs__6360__auto____$1,temp__5804__auto____$1,color,xs__6360__auto__,temp__5804__auto__){
return (function set$mainc$iter__6410_$_iter__6412_$_iter__6414_$_iter__6416(s__6417){
return (new cljs.core.LazySeq(null,((function (s__6415__$1,s__6413__$1,s__6411__$1,shape,xs__6360__auto____$2,temp__5804__auto____$2,count,xs__6360__auto____$1,temp__5804__auto____$1,color,xs__6360__auto__,temp__5804__auto__){
return (function (){
var s__6417__$1 = s__6417;
while(true){
var temp__5804__auto____$3 = cljs.core.seq.call(null,s__6417__$1);
if(temp__5804__auto____$3){
var s__6417__$2 = temp__5804__auto____$3;
if(cljs.core.chunked_seq_QMARK_.call(null,s__6417__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__6417__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__6419 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__6418 = (0);
while(true){
if((i__6418 < size__4528__auto__)){
var shade = cljs.core._nth.call(null,c__4527__auto__,i__6418);
cljs.core.chunk_append.call(null,b__6419,set.mainc.card.call(null,color,count,shape,shade));

var G__6420 = (i__6418 + (1));
i__6418 = G__6420;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6419),set$mainc$iter__6410_$_iter__6412_$_iter__6414_$_iter__6416.call(null,cljs.core.chunk_rest.call(null,s__6417__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6419),null);
}
} else {
var shade = cljs.core.first.call(null,s__6417__$2);
return cljs.core.cons.call(null,set.mainc.card.call(null,color,count,shape,shade),set$mainc$iter__6410_$_iter__6412_$_iter__6414_$_iter__6416.call(null,cljs.core.rest.call(null,s__6417__$2)));
}
} else {
return null;
}
break;
}
});})(s__6415__$1,s__6413__$1,s__6411__$1,shape,xs__6360__auto____$2,temp__5804__auto____$2,count,xs__6360__auto____$1,temp__5804__auto____$1,color,xs__6360__auto__,temp__5804__auto__))
,null,null));
});})(s__6415__$1,s__6413__$1,s__6411__$1,shape,xs__6360__auto____$2,temp__5804__auto____$2,count,xs__6360__auto____$1,temp__5804__auto____$1,color,xs__6360__auto__,temp__5804__auto__))
;
var fs__4526__auto__ = cljs.core.seq.call(null,iterys__4525__auto__.call(null,new cljs.core.Keyword(null,"shade","shade",-1569952450).cljs$core$IFn$_invoke$arity$1(set.mainc.attributes)));
if(fs__4526__auto__){
return cljs.core.concat.call(null,fs__4526__auto__,set$mainc$iter__6410_$_iter__6412_$_iter__6414.call(null,cljs.core.rest.call(null,s__6415__$1)));
} else {
var G__6421 = cljs.core.rest.call(null,s__6415__$1);
s__6415__$1 = G__6421;
continue;
}
} else {
return null;
}
break;
}
});})(s__6413__$1,s__6411__$1,count,xs__6360__auto____$1,temp__5804__auto____$1,color,xs__6360__auto__,temp__5804__auto__))
,null,null));
});})(s__6413__$1,s__6411__$1,count,xs__6360__auto____$1,temp__5804__auto____$1,color,xs__6360__auto__,temp__5804__auto__))
;
var fs__4526__auto__ = cljs.core.seq.call(null,iterys__4525__auto__.call(null,new cljs.core.Keyword(null,"shape","shape",1190694006).cljs$core$IFn$_invoke$arity$1(set.mainc.attributes)));
if(fs__4526__auto__){
return cljs.core.concat.call(null,fs__4526__auto__,set$mainc$iter__6410_$_iter__6412.call(null,cljs.core.rest.call(null,s__6413__$1)));
} else {
var G__6422 = cljs.core.rest.call(null,s__6413__$1);
s__6413__$1 = G__6422;
continue;
}
} else {
return null;
}
break;
}
});})(s__6411__$1,color,xs__6360__auto__,temp__5804__auto__))
,null,null));
});})(s__6411__$1,color,xs__6360__auto__,temp__5804__auto__))
;
var fs__4526__auto__ = cljs.core.seq.call(null,iterys__4525__auto__.call(null,new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(set.mainc.attributes)));
if(fs__4526__auto__){
return cljs.core.concat.call(null,fs__4526__auto__,set$mainc$iter__6410.call(null,cljs.core.rest.call(null,s__6411__$1)));
} else {
var G__6423 = cljs.core.rest.call(null,s__6411__$1);
s__6411__$1 = G__6423;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(set.mainc.attributes));
})();
set.mainc.distinct_or_all_same = (function set$mainc$distinct_or_all_same(vec){
var or__4126__auto__ = cljs.core.apply.call(null,cljs.core.distinct_QMARK_,vec);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.apply.call(null,cljs.core._EQ_,vec);
}
});
set.mainc.values_are_distinct_or_all_same_QMARK_ = (function set$mainc$values_are_distinct_or_all_same_QMARK_(m){
return cljs.core.every_QMARK_.call(null,cljs.core.true_QMARK_,cljs.core.map.call(null,(function (p1__6424_SHARP_){
return set.mainc.distinct_or_all_same.call(null,cljs.core.map.call(null,p1__6424_SHARP_,m));
}),cljs.core.keys.call(null,set.mainc.attributes)));
});
set.mainc.set_QMARK_ = (function set$mainc$set_QMARK_(cards){
return ((cljs.core._EQ_.call(null,cljs.core.count.call(null,cards),(3))) && (set.mainc.values_are_distinct_or_all_same_QMARK_.call(null,cards)));
});
set.mainc.contains_set_QMARK_ = (function set$mainc$contains_set_QMARK_(cards){
return cljs.core.some.call(null,cljs.core.true_QMARK_,cljs.core.map.call(null,set.mainc.set_QMARK_,clojure.math.combinatorics.combinations.call(null,cards,(3))));
});

//# sourceMappingURL=mainc.js.map
