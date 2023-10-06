// Compiled by ClojureScript 1.10.764 {:static-fns true, :optimize-constants true}
goog.provide('taoensso.truss.impl');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.set');
goog.require('cljs.analyzer');
taoensso.truss.impl.rsome = (function taoensso$truss$impl$rsome(pred,coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,in$){
var temp__5804__auto__ = (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(in$) : pred.call(null,in$));
if(cljs.core.truth_(temp__5804__auto__)){
var p = temp__5804__auto__;
return cljs.core.reduced(p);
} else {
return null;
}
}),null,coll);
});
taoensso.truss.impl.revery_QMARK_ = (function taoensso$truss$impl$revery_QMARK_(pred,coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,in$){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(in$) : pred.call(null,in$)))){
return true;
} else {
return cljs.core.reduced(null);
}
}),true,coll);
});
taoensso.truss.impl.revery = (function taoensso$truss$impl$revery(pred,coll){
if(cljs.core.truth_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,in$){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(in$) : pred.call(null,in$)))){
return true;
} else {
return cljs.core.reduced(null);
}
}),true,coll))){
return coll;
} else {
return null;
}
});
taoensso.truss.impl.some_QMARK_ = (function taoensso$truss$impl$some_QMARK_(x){
if((x == null)){
return false;
} else {
return true;
}
});
taoensso.truss.impl.ensure_set = (function taoensso$truss$impl$ensure_set(x){
if(cljs.core.set_QMARK_(x)){
return x;
} else {
return cljs.core.set(x);
}
});
var ensure_set_11666 = taoensso.truss.impl.ensure_set;
taoensso.truss.impl.ks_EQ_ = (function taoensso$truss$impl$ks_EQ_(ks,m){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(m)),(ensure_set_11666.cljs$core$IFn$_invoke$arity$1 ? ensure_set_11666.cljs$core$IFn$_invoke$arity$1(ks) : ensure_set_11666.call(null,ks)));
});

taoensso.truss.impl.ks_LT__EQ_ = (function taoensso$truss$impl$ks_LT__EQ_(ks,m){
return clojure.set.subset_QMARK_(cljs.core.set(cljs.core.keys(m)),(ensure_set_11666.cljs$core$IFn$_invoke$arity$1 ? ensure_set_11666.cljs$core$IFn$_invoke$arity$1(ks) : ensure_set_11666.call(null,ks)));
});

taoensso.truss.impl.ks_GT__EQ_ = (function taoensso$truss$impl$ks_GT__EQ_(ks,m){
return clojure.set.superset_QMARK_(cljs.core.set(cljs.core.keys(m)),(ensure_set_11666.cljs$core$IFn$_invoke$arity$1 ? ensure_set_11666.cljs$core$IFn$_invoke$arity$1(ks) : ensure_set_11666.call(null,ks)));
});

taoensso.truss.impl.ks_nnil_QMARK_ = (function taoensso$truss$impl$ks_nnil_QMARK_(ks,m){
return taoensso.truss.impl.revery_QMARK_((function (p1__11665_SHARP_){
return taoensso.truss.impl.some_QMARK_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,p1__11665_SHARP_));
}),ks);
});
taoensso.truss.impl.default_error_fn = (function taoensso$truss$impl$default_error_fn(data_){
var data = cljs.core.deref(data_);
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.core.cst$kw$msg_.cljs$core$IFn$_invoke$arity$1(data)),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(data,cljs.core.cst$kw$msg_));
});
taoensso.truss.impl._STAR_data_STAR_ = null;
taoensso.truss.impl._STAR_error_fn_STAR_ = taoensso.truss.impl.default_error_fn;
taoensso.truss.impl.safe = (function taoensso$truss$impl$safe(pred){
return (function (x){
try{return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(x) : pred.call(null,x));
}catch (e11667){if((e11667 instanceof Error)){
var _ = e11667;
return null;
} else {
throw e11667;

}
}});
});
/**
 * [Optimization] Returns true for common preds that are naturally non-throwing.
 */
taoensso.truss.impl.safe_QMARK_ = (function taoensso$truss$impl$safe_QMARK_(env,p){
var or__4126__auto__ = (p instanceof cljs.core.Keyword);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = cljs.core.map_QMARK_(p);
if(or__4126__auto____$1){
return or__4126__auto____$1;
} else {
var or__4126__auto____$2 = cljs.core.set_QMARK_(p);
if(or__4126__auto____$2){
return or__4126__auto____$2;
} else {
var p__$1 = (((p instanceof cljs.core.Symbol))?(function (){var temp__5802__auto__ = cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(env,p);
if(cljs.core.truth_(temp__5802__auto__)){
var v = temp__5802__auto__;
return cljs.core.deref(v);
} else {
return p;
}
})():p);
return cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.fn_QMARK_,cljs.core.vector_QMARK_,cljs.core.boolean$,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.reversible_QMARK_,cljs.core.identity,cljs.core.string_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.counted_QMARK_,cljs.core.sorted_QMARK_,cljs.core.nil_QMARK_,cljs.core.not,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.delay_QMARK_,cljs.core.ifn_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.number_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_]),p__$1);
}
}
}
});
taoensso.truss.impl.error_message = (function taoensso$truss$impl$error_message(x){
if((x instanceof Error)){
return x.message;
} else {
return null;
}
});

/**
* @constructor
*/
taoensso.truss.impl.WrappedError = (function (val){
this.val = val;
});

(taoensso.truss.impl.WrappedError.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$val], null);
}));

(taoensso.truss.impl.WrappedError.cljs$lang$type = true);

(taoensso.truss.impl.WrappedError.cljs$lang$ctorStr = "taoensso.truss.impl/WrappedError");

(taoensso.truss.impl.WrappedError.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"taoensso.truss.impl/WrappedError");
}));

/**
 * Positional factory function for taoensso.truss.impl/WrappedError.
 */
taoensso.truss.impl.__GT_WrappedError = (function taoensso$truss$impl$__GT_WrappedError(val){
return (new taoensso.truss.impl.WrappedError(val));
});

taoensso.truss.impl._assertion_error = (function taoensso$truss$impl$_assertion_error(msg){
return (new Error(msg));
});
taoensso.truss.impl._dummy_error = ({});
taoensso.truss.impl._invar_violation_BANG_ = (function taoensso$truss$impl$_invar_violation_BANG_(elidable_QMARK_,ns_sym,_QMARK_line,pred,arg_form,arg,_QMARK_err,_QMARK_data_fn){
var temp__5804__auto__ = taoensso.truss.impl._STAR_error_fn_STAR_;
if(cljs.core.truth_(temp__5804__auto__)){
var error_fn = temp__5804__auto__;
var G__11670 = (new cljs.core.Delay((function (){
var instant = (new Date());
var undefn_arg_QMARK_ = (arg instanceof taoensso.truss.impl.WrappedError);
var arg_val = ((undefn_arg_QMARK_)?cljs.core.cst$sym$truss_SLASH_undefined_DASH_arg:arg);
var arg_type = ((undefn_arg_QMARK_)?cljs.core.cst$sym$truss_SLASH_undefined_DASH_arg:cljs.core.type(arg));
var _QMARK_err__$1 = (((taoensso.truss.impl._dummy_error === _QMARK_err))?null:(((_QMARK_err instanceof taoensso.truss.impl.WrappedError))?_QMARK_err.val:_QMARK_err
));
var msg_ = (new cljs.core.Delay((function (){
var msg = ["Invariant failed at ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns_sym),(cljs.core.truth_(_QMARK_line)?["|",cljs.core.str.cljs$core$IFn$_invoke$arity$1(_QMARK_line)].join(''):null),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,pred,(new cljs.core.List(null,arg_val,null,(1),null)),(2),null)))].join('');
var temp__5802__auto__ = _QMARK_err__$1;
if(cljs.core.truth_(temp__5802__auto__)){
var err = temp__5802__auto__;
var err_msg = taoensso.truss.impl.error_message(err);
if(undefn_arg_QMARK_){
return [msg,"\r\n\r\nError evaluating arg: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(err_msg)].join('');
} else {
return [msg,"\r\n\r\nError evaluating pred: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(err_msg)].join('');
}
} else {
return msg;
}
}),null));
var _QMARK_data = (function (){var dynamic = taoensso.truss.impl._STAR_data_STAR_;
var arg__$1 = (function (){var temp__5804__auto____$1 = _QMARK_data_fn;
if(cljs.core.truth_(temp__5804__auto____$1)){
var data_fn = temp__5804__auto____$1;
try{return (data_fn.cljs$core$IFn$_invoke$arity$0 ? data_fn.cljs$core$IFn$_invoke$arity$0() : data_fn.call(null));
}catch (e11671){if((e11671 instanceof Error)){
var e = e11671;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$truss_SLASH_error,e], null);
} else {
throw e11671;

}
}} else {
return null;
}
})();
if(cljs.core.truth_((function (){var or__4126__auto__ = dynamic;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return arg__$1;
}
})())){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$dynamic,dynamic,cljs.core.cst$kw$arg,arg__$1], null);
} else {
return null;
}
})();
var output = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$msg_,msg_,cljs.core.cst$kw$dt,instant,cljs.core.cst$kw$pred,pred,cljs.core.cst$kw$arg,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$form,arg_form,cljs.core.cst$kw$value,arg_val,cljs.core.cst$kw$type,arg_type], null),cljs.core.cst$kw$loc,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ns,ns_sym,cljs.core.cst$kw$line,_QMARK_line], null),cljs.core.cst$kw$env,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$elidable_QMARK_,elidable_QMARK_,cljs.core.cst$kw$_STAR_assert_STAR_,cljs.core._STAR_assert_STAR_], null)], null);
var output__$1 = (function (){var temp__5802__auto__ = _QMARK_data;
if(cljs.core.truth_(temp__5802__auto__)){
var v = temp__5802__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(output,cljs.core.cst$kw$data,v);
} else {
return output;
}
})();
var output__$2 = (function (){var temp__5802__auto__ = _QMARK_err__$1;
if(cljs.core.truth_(temp__5802__auto__)){
var v = temp__5802__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(output__$1,cljs.core.cst$kw$err,v);
} else {
return output__$1;
}
})();
return output__$2;
}),null));
return (error_fn.cljs$core$IFn$_invoke$arity$1 ? error_fn.cljs$core$IFn$_invoke$arity$1(G__11670) : error_fn.call(null,G__11670));
} else {
return null;
}
});
taoensso.truss.impl.ns_sym = (function taoensso$truss$impl$ns_sym(){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core._STAR_ns_STAR_));
});
