// Compiled by ClojureScript 1.10.764 {:static-fns true, :optimize-constants true}
goog.provide('c3kit.wire.util');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('c3kit.apron.corec');
goog.require('c3kit.apron.log');
goog.require('clojure.string');
goog.require('clojure.walk');
goog.require('goog.dom');
goog.require('goog.dom.forms');
c3kit.wire.util.errors__GT_strings = (function c3kit$wire$util$errors__GT_strings(errors){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__13695){
var vec__13696 = p__13695;
var field = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13696,(0),null);
var error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13696,(1),null);
return [cljs.core.name(field)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(error)].join('');
}),errors);
});
c3kit.wire.util._PLUS_class_if = (function c3kit$wire$util$_PLUS_class_if(var_args){
var G__13700 = arguments.length;
switch (G__13700) {
case 2:
return c3kit.wire.util._PLUS_class_if.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return c3kit.wire.util._PLUS_class_if.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.util._PLUS_class_if.cljs$core$IFn$_invoke$arity$2 = (function (condition,class_name){
return c3kit.wire.util._PLUS_class_if.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,condition,class_name);
}));

(c3kit.wire.util._PLUS_class_if.cljs$core$IFn$_invoke$arity$3 = (function (attributes,condition,class_name){
var attributes__$1 = (function (){var or__4126__auto__ = attributes;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var class_name__$1 = cljs.core.name(class_name);
if(cljs.core.truth_(condition)){
var temp__5802__auto__ = cljs.core.cst$kw$class.cljs$core$IFn$_invoke$arity$1(attributes__$1);
if(cljs.core.truth_(temp__5802__auto__)){
var class_value = temp__5802__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(attributes__$1,cljs.core.cst$kw$class,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_value)," ",class_name__$1].join(''));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(attributes__$1,cljs.core.cst$kw$class,class_name__$1);
}
} else {
return attributes__$1;
}
}));

(c3kit.wire.util._PLUS_class_if.cljs$lang$maxFixedArity = 3);

c3kit.wire.util.__GT_css_class = (function c3kit$wire$util$__GT_css_class(var_args){
var args__4742__auto__ = [];
var len__4736__auto___13703 = arguments.length;
var i__4737__auto___13704 = (0);
while(true){
if((i__4737__auto___13704 < len__4736__auto___13703)){
args__4742__auto__.push((arguments[i__4737__auto___13704]));

var G__13705 = (i__4737__auto___13704 + (1));
i__4737__auto___13704 = G__13705;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return c3kit.wire.util.__GT_css_class.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(c3kit.wire.util.__GT_css_class.cljs$core$IFn$_invoke$arity$variadic = (function (classes){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten(classes)));
}));

(c3kit.wire.util.__GT_css_class.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(c3kit.wire.util.__GT_css_class.cljs$lang$applyTo = (function (seq13702){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13702));
}));

c3kit.wire.util.id_counter = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
c3kit.wire.util.uid = (function c3kit$wire$util$uid(){
var result = ["A_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(c3kit.wire.util.id_counter))].join('');
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(c3kit.wire.util.id_counter,cljs.core.inc);

return result;
});
c3kit.wire.util.with_react_keys = (function c3kit$wire$util$with_react_keys(col){
var G__13706 = (function (p__13708){
var vec__13709 = p__13708;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13709,(0),null);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13709,(1),null);
if((((!((n == null))))?(((((n.cljs$lang$protocol_mask$partition0$ & (262144))) || ((cljs.core.PROTOCOL_SENTINEL === n.cljs$core$IWithMeta$))))?true:(((!n.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IWithMeta,n):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IWithMeta,n))){
var m = cljs.core.meta(n);
if(cljs.core.truth_(cljs.core.cst$kw$key.cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return cljs.core.with_meta(n,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,cljs.core.cst$kw$key,i));
}
} else {
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,n], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,i], null));
}
});
var G__13707 = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(col,cljs.core.range.cljs$core$IFn$_invoke$arity$0()));
return (c3kit.apron.corec.map_all.cljs$core$IFn$_invoke$arity$2 ? c3kit.apron.corec.map_all.cljs$core$IFn$_invoke$arity$2(G__13706,G__13707) : c3kit.apron.corec.map_all.call(null,G__13706,G__13707));
});
c3kit.wire.util.keyed_list = (function c3kit$wire$util$keyed_list(var_args){
var args__4742__auto__ = [];
var len__4736__auto___13714 = arguments.length;
var i__4737__auto___13715 = (0);
while(true){
if((i__4737__auto___13715 < len__4736__auto___13714)){
args__4742__auto__.push((arguments[i__4737__auto___13715]));

var G__13716 = (i__4737__auto___13715 + (1));
i__4737__auto___13715 = G__13716;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return c3kit.wire.util.keyed_list.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(c3kit.wire.util.keyed_list.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return c3kit.wire.util.with_react_keys(args);
}));

(c3kit.wire.util.keyed_list.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(c3kit.wire.util.keyed_list.cljs$lang$applyTo = (function (seq13713){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13713));
}));

c3kit.wire.util.next_key = (function (){var k = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(k,cljs.core.inc);
});
})();
c3kit.wire.util.with_nested_react_keys = (function c3kit$wire$util$with_nested_react_keys(tree){
return clojure.walk.postwalk((function (node){
if(cljs.core.vector_QMARK_(node)){
return cljs.core.with_meta(node,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.meta(node),cljs.core.cst$kw$key,(c3kit.wire.util.next_key.cljs$core$IFn$_invoke$arity$0 ? c3kit.wire.util.next_key.cljs$core$IFn$_invoke$arity$0() : c3kit.wire.util.next_key.call(null))));
} else {
return node;
}
}),tree);
});
/**
 * Used to keep track of cursor state.
 *   Usage: (defonce flash (reagent/cursor (a/atom-observer ratom) [:flash]))
 */
c3kit.wire.util.atom_observer = (function c3kit$wire$util$atom_observer(state){
return (function() {
var G__13717 = null;
var G__13717__1 = (function (path){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),path);
});
var G__13717__2 = (function (path,value){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$debug,"c3kit.wire.util",null,null,cljs.core.cst$kw$p,cljs.core.cst$kw$auto,(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["updating atom:",path,value], null);
}),null)),null,(23),null);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc_in,path,value);
});
G__13717 = function(path,value){
switch(arguments.length){
case 1:
return G__13717__1.call(this,path);
case 2:
return G__13717__2.call(this,path,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__13717.cljs$core$IFn$_invoke$arity$1 = G__13717__1;
G__13717.cljs$core$IFn$_invoke$arity$2 = G__13717__2;
return G__13717;
})()
});
c3kit.wire.util.watch_atom = (function c3kit$wire$util$watch_atom(key,atom){
return cljs.core.add_watch(atom,key,(function (k,r,o,n){
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$debug,"c3kit.wire.util",null,null,cljs.core.cst$kw$p,cljs.core.cst$kw$auto,(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["updating atom ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(key),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join('')], null);
}),null)),null,(24),null);
}));
});
/**
 * Given an if of a form element, loads all the inputs and returns a map {:keyword value}.
 */
c3kit.wire.util.form_data = (function c3kit$wire$util$form_data(form){
var form_map = (function (){var G__13718 = goog.dom.getElement(cljs.core.name(form));
return goog.dom.forms.getFormDataMap(G__13718);
})();
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,key){
var value = form_map.get(key);
if(cljs.core.truth_((function (){var and__4115__auto__ = value;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(value));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(key),cljs.core.first(value));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(key),value);
}
}),cljs.core.PersistentArrayMap.EMPTY,form_map.getKeys());
});
