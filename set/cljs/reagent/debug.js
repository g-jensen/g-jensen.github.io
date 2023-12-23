// Compiled by ClojureScript 1.10.764 {:static-fns true, :optimize-constants true}
goog.provide('reagent.debug');
goog.require('cljs.core');
goog.require('cljs.core.constants');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__7096__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$warn], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__7096 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7097__i = 0, G__7097__a = new Array(arguments.length -  0);
while (G__7097__i < G__7097__a.length) {G__7097__a[G__7097__i] = arguments[G__7097__i + 0]; ++G__7097__i;}
  args = new cljs.core.IndexedSeq(G__7097__a,0,null);
} 
return G__7096__delegate.call(this,args);};
G__7096.cljs$lang$maxFixedArity = 0;
G__7096.cljs$lang$applyTo = (function (arglist__7098){
var args = cljs.core.seq(arglist__7098);
return G__7096__delegate(args);
});
G__7096.cljs$core$IFn$_invoke$arity$variadic = G__7096__delegate;
return G__7096;
})()
);

(o.error = (function() { 
var G__7099__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__7099 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7100__i = 0, G__7100__a = new Array(arguments.length -  0);
while (G__7100__i < G__7100__a.length) {G__7100__a[G__7100__i] = arguments[G__7100__i + 0]; ++G__7100__i;}
  args = new cljs.core.IndexedSeq(G__7100__a,0,null);
} 
return G__7099__delegate.call(this,args);};
G__7099.cljs$lang$maxFixedArity = 0;
G__7099.cljs$lang$applyTo = (function (arglist__7101){
var args = cljs.core.seq(arglist__7101);
return G__7099__delegate(args);
});
G__7099.cljs$core$IFn$_invoke$arity$variadic = G__7099__delegate;
return G__7099;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});
