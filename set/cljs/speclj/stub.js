// Compiled by ClojureScript 1.10.764 {:static-fns true, :optimize-constants true}
goog.provide('speclj.stub');
goog.require('cljs.core');
goog.require('cljs.core.constants');
speclj.stub.check_recording = (function speclj$stub$check_recording(){
if(cljs.core.truth_(speclj.stub._STAR_stubbed_invocations_STAR_)){
return null;
} else {
throw (new Error("Stub recoding not bound.  Please add (with-stubs) to the decribe/context."));
}
});
/**
 * Removes all previous stub invocations to continue with a blank slate.
 */
speclj.stub.clear_BANG_ = (function speclj$stub$clear_BANG_(){
speclj.stub.check_recording();

return cljs.core.reset_BANG_(speclj.stub._STAR_stubbed_invocations_STAR_,cljs.core.PersistentVector.EMPTY);
});
speclj.stub._record_invocation = (function speclj$stub$_record_invocation(name,args){
speclj.stub.check_recording();

var args__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,args))?cljs.core.PersistentVector.EMPTY:cljs.core.vec(args));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(speclj.stub._STAR_stubbed_invocations_STAR_,cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,args__$1], null));
});
speclj.stub.invoke_delegate = (function speclj$stub$invoke_delegate(name,delegate,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(delegate,args);
});
speclj.stub.stub = (function speclj$stub$stub(var_args){
var G__21969 = arguments.length;
switch (G__21969) {
case 1:
return speclj.stub.stub.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return speclj.stub.stub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(speclj.stub.stub.cljs$core$IFn$_invoke$arity$1 = (function (name){
return speclj.stub.stub.cljs$core$IFn$_invoke$arity$2(name,cljs.core.PersistentArrayMap.EMPTY);
}));

(speclj.stub.stub.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
var delegate = cljs.core.cst$kw$invoke.cljs$core$IFn$_invoke$arity$1(options);
if(cljs.core.truth_((function (){var and__4115__auto__ = delegate;
if(cljs.core.truth_(and__4115__auto__)){
return (!(cljs.core.ifn_QMARK_(delegate)));
} else {
return and__4115__auto__;
}
})())){
throw (new Error("stub's :invoke argument must be an ifn"));
} else {
}

return (function() { 
var G__21971__delegate = function (args){
speclj.stub._record_invocation(name,args);

var result = (cljs.core.truth_(delegate)?speclj.stub.invoke_delegate(name,delegate,args):null);
var temp__5804__auto___21972 = cljs.core.cst$kw$throw.cljs$core$IFn$_invoke$arity$1(options);
if(cljs.core.truth_(temp__5804__auto___21972)){
var throwable_21973 = temp__5804__auto___21972;
throw throwable_21973;
} else {
}

if(cljs.core.contains_QMARK_(options,cljs.core.cst$kw$return)){
return cljs.core.cst$kw$return.cljs$core$IFn$_invoke$arity$1(options);
} else {
return result;
}
};
var G__21971 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21974__i = 0, G__21974__a = new Array(arguments.length -  0);
while (G__21974__i < G__21974__a.length) {G__21974__a[G__21974__i] = arguments[G__21974__i + 0]; ++G__21974__i;}
  args = new cljs.core.IndexedSeq(G__21974__a,0,null);
} 
return G__21971__delegate.call(this,args);};
G__21971.cljs$lang$maxFixedArity = 0;
G__21971.cljs$lang$applyTo = (function (arglist__21975){
var args = cljs.core.seq(arglist__21975);
return G__21971__delegate(args);
});
G__21971.cljs$core$IFn$_invoke$arity$variadic = G__21971__delegate;
return G__21971;
})()
;
}));

(speclj.stub.stub.cljs$lang$maxFixedArity = 2);

/**
 * Returns a list of argument lists representing each invocation of the specified stub.
 */
speclj.stub.invocations_of = (function speclj$stub$invocations_of(name){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__21976_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name,cljs.core.first(p1__21976_SHARP_));
}),cljs.core.deref(speclj.stub._STAR_stubbed_invocations_STAR_)));
});
/**
 * Returns the list of arguments passed into the first invocation of the specified stub, nil if it was never invoked.
 */
speclj.stub.first_invocation_of = (function speclj$stub$first_invocation_of(name){
return cljs.core.first(speclj.stub.invocations_of(name));
});
/**
 * Returns the list of arguments passed into the last invocation of the specified stub, nil if it was never invoked.
 */
speclj.stub.last_invocation_of = (function speclj$stub$last_invocation_of(name){
return cljs.core.last(speclj.stub.invocations_of(name));
});
speclj.stub.params_match_QMARK_ = (function speclj$stub$params_match_QMARK_(expected,actual){
return ((cljs.core.sequential_QMARK_(expected)) && (cljs.core.sequential_QMARK_(actual)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(expected),cljs.core.count(actual))) && (cljs.core.every_QMARK_(cljs.core.true_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (e,a){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$_STAR_,e)){
return true;
} else {
if(cljs.core.fn_QMARK_(e)){
var or__4126__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e,a);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return (e.cljs$core$IFn$_invoke$arity$1 ? e.cljs$core$IFn$_invoke$arity$1(a) : e.call(null,a));
}
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e,a);

}
}
}),expected,actual))));
});
