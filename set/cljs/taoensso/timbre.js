// Compiled by ClojureScript 1.10.764 {:static-fns true, :optimize-constants true}
goog.provide('taoensso.timbre');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('taoensso.encore');
goog.require('taoensso.timbre.appenders.core');
goog.require('goog.i18n.DateTimeFormat');
taoensso.encore.assert_min_encore_version(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(49),(0)], null));
taoensso.timbre.swap_config_BANG_ = (function taoensso$timbre$swap_config_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___14314 = arguments.length;
var i__4737__auto___14315 = (0);
while(true){
if((i__4737__auto___14315 < len__4736__auto___14314)){
args__4742__auto__.push((arguments[i__4737__auto___14315]));

var G__14316 = (i__4737__auto___14315 + (1));
i__4737__auto___14315 = G__14316;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return taoensso.timbre.swap_config_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(taoensso.timbre.swap_config_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return (taoensso.timbre._STAR_config_STAR_ = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,taoensso.timbre._STAR_config_STAR_,args));
}));

(taoensso.timbre.swap_config_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.timbre.swap_config_BANG_.cljs$lang$applyTo = (function (seq14312){
var G__14313 = cljs.core.first(seq14312);
var seq14312__$1 = cljs.core.next(seq14312);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14313,seq14312__$1);
}));

taoensso.timbre.set_config_BANG_ = (function taoensso$timbre$set_config_BANG_(config){
return taoensso.timbre.swap_config_BANG_((function (_old){
return config;
}));
});
taoensso.timbre.merge_config_BANG_ = (function taoensso$timbre$merge_config_BANG_(config){
return taoensso.timbre.swap_config_BANG_((function (old){
return taoensso.encore.nested_merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([old,config], 0));
}));
});
var err_14319 = "Invalid Timbre logging level: should be e/o #{:trace :debug :info :warn :error :fatal :report}";
var level__GT_int_14320 = (function (p1__14317_SHARP_){
var G__14318 = p1__14317_SHARP_;
var G__14318__$1 = (((G__14318 instanceof cljs.core.Keyword))?G__14318.fqn:null);
switch (G__14318__$1) {
case "trace":
return (0);

break;
case "debug":
return (1);

break;
case "info":
return (2);

break;
case "warn":
return (3);

break;
case "error":
return (4);

break;
case "fatal":
return (5);

break;
case "report":
return (6);

break;
default:
return null;

}
});
taoensso.timbre.valid_level_QMARK_ = (function taoensso$timbre$valid_level_QMARK_(x){
if(cljs.core.truth_(level__GT_int_14320(x))){
return true;
} else {
return false;
}
});

taoensso.timbre.valid_level = (function taoensso$timbre$valid_level(x){
if(cljs.core.truth_(level__GT_int_14320(x))){
return x;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(err_14319,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$given,x,cljs.core.cst$kw$type,cljs.core.type(x)], null));
}
});

taoensso.timbre.valid_level__GT_int = (function taoensso$timbre$valid_level__GT_int(x){
var or__4126__auto__ = level__GT_int_14320(x);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(err_14319,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$given,x,cljs.core.cst$kw$type,cljs.core.type(x)], null));
}
});
var valid_level__GT_int_14322 = taoensso.timbre.valid_level__GT_int;
/**
 * Implementation detail.
 */
taoensso.timbre.level_GT__EQ_ = (function taoensso$timbre$level_GT__EQ_(x,y){
return ((valid_level__GT_int_14322.cljs$core$IFn$_invoke$arity$1 ? valid_level__GT_int_14322.cljs$core$IFn$_invoke$arity$1(x) : valid_level__GT_int_14322.call(null,x)) >= (valid_level__GT_int_14322.cljs$core$IFn$_invoke$arity$1 ? valid_level__GT_int_14322.cljs$core$IFn$_invoke$arity$1(y) : valid_level__GT_int_14322.call(null,y)));
});
var fn_QMARK__14328 = cljs.core.fn_QMARK_;
var compile_14329 = taoensso.encore.fmemoize((function (x){
return taoensso.encore.compile_str_filter(x);
}));
var conform_QMARK__STAR__14330 = taoensso.encore.fmemoize((function (x,ns){
var fexpr__14323 = (compile_14329.cljs$core$IFn$_invoke$arity$1 ? compile_14329.cljs$core$IFn$_invoke$arity$1(x) : compile_14329.call(null,x));
return (fexpr__14323.cljs$core$IFn$_invoke$arity$1 ? fexpr__14323.cljs$core$IFn$_invoke$arity$1(ns) : fexpr__14323.call(null,ns));
}));
var conform_QMARK__14331 = (function (ns_filter,ns){
if(cljs.core.truth_((fn_QMARK__14328.cljs$core$IFn$_invoke$arity$1 ? fn_QMARK__14328.cljs$core$IFn$_invoke$arity$1(ns_filter) : fn_QMARK__14328.call(null,ns_filter)))){
return (ns_filter.cljs$core$IFn$_invoke$arity$1 ? ns_filter.cljs$core$IFn$_invoke$arity$1(ns) : ns_filter.call(null,ns));
} else {
return (conform_QMARK__STAR__14330.cljs$core$IFn$_invoke$arity$2 ? conform_QMARK__STAR__14330.cljs$core$IFn$_invoke$arity$2(ns_filter,ns) : conform_QMARK__STAR__14330.call(null,ns_filter,ns));
}
});
/**
 * Implementation detail.
 */
taoensso.timbre.may_log_ns_QMARK_ = (function taoensso$timbre$may_log_ns_QMARK_(ns_filter,ns){
if(cljs.core.truth_(conform_QMARK__14331(ns_filter,ns))){
return true;
} else {
return false;
}
});

/**
 * [[<ns-pattern> <min-level>] ... ["*" <default-min-level>]], ns -> ?min-level
 */
taoensso.timbre.ns__GT__QMARK_min_level = taoensso.encore.fmemoize((function (specs,ns){
return taoensso.encore.rsome.cljs$core$IFn$_invoke$arity$2((function (p__14324){
var vec__14325 = p__14324;
var ns_pattern = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14325,(0),null);
var min_level = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14325,(1),null);
if(cljs.core.truth_((conform_QMARK__STAR__14330.cljs$core$IFn$_invoke$arity$2 ? conform_QMARK__STAR__14330.cljs$core$IFn$_invoke$arity$2(ns_pattern,ns) : conform_QMARK__STAR__14330.call(null,ns_pattern,ns)))){
return taoensso.timbre.valid_level(min_level);
} else {
return null;
}
}),specs);
}));
var valid_level_14333 = taoensso.timbre.valid_level;
var ns__GT__QMARK_min_level_14334 = taoensso.timbre.ns__GT__QMARK_min_level;
taoensso.timbre.get_min_level = (function taoensso$timbre$get_min_level(default$,x,ns){
var G__14332 = (function (){var or__4126__auto__ = ((cljs.core.vector_QMARK_(x))?(ns__GT__QMARK_min_level_14334.cljs$core$IFn$_invoke$arity$2 ? ns__GT__QMARK_min_level_14334.cljs$core$IFn$_invoke$arity$2(x,ns) : ns__GT__QMARK_min_level_14334.call(null,x,ns)):x);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return default$;
}
})();
return (valid_level_14333.cljs$core$IFn$_invoke$arity$1 ? valid_level_14333.cljs$core$IFn$_invoke$arity$1(G__14332) : valid_level_14333.call(null,G__14332));
});
var leglist_14336 = (function (x){
if(cljs.core.truth_(x)){
if(cljs.core.truth_((function (){var fexpr__14335 = cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.PersistentVector.EMPTY,cljs.core.PersistentHashSet.EMPTY]);
return (fexpr__14335.cljs$core$IFn$_invoke$arity$1 ? fexpr__14335.cljs$core$IFn$_invoke$arity$1(x) : fexpr__14335.call(null,x));
})())){
return null;
} else {
return x;
}
} else {
return null;
}
});
taoensso.timbre.legacy_ns_filter = (function taoensso$timbre$legacy_ns_filter(ns_whitelist,ns_blacklist){
var ns_whitelist__$1 = leglist_14336(ns_whitelist);
var ns_blacklist__$1 = leglist_14336(ns_blacklist);
if(cljs.core.truth_((function (){var or__4126__auto__ = ns_whitelist__$1;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return ns_blacklist__$1;
}
})())){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$allow,ns_whitelist__$1,cljs.core.cst$kw$deny,ns_blacklist__$1], null);
} else {
return null;
}
});
var level_GT__EQ__14344 = taoensso.timbre.level_GT__EQ_;
var may_log_ns_QMARK__14345 = taoensso.timbre.may_log_ns_QMARK_;
var get_min_level_14346 = taoensso.timbre.get_min_level;
var legacy_ns_filter_14347 = taoensso.timbre.legacy_ns_filter;
/**
 * Implementation detail.
 *  Returns true iff level and ns are runtime unfiltered.
 */
taoensso.timbre.may_log_QMARK_ = (function taoensso$timbre$may_log_QMARK_(var_args){
var G__14338 = arguments.length;
switch (G__14338) {
case 1:
return taoensso.timbre.may_log_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.timbre.may_log_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.timbre.may_log_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.timbre.may_log_QMARK_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.timbre.may_log_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (level){
return taoensso.timbre.may_log_QMARK_.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$trace,level,null,null);
}));

(taoensso.timbre.may_log_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (level,_QMARK_ns_str){
return taoensso.timbre.may_log_QMARK_.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$trace,level,_QMARK_ns_str,null);
}));

(taoensso.timbre.may_log_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (level,_QMARK_ns_str,_QMARK_config){
return taoensso.timbre.may_log_QMARK_.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$trace,level,_QMARK_ns_str,_QMARK_config);
}));

(taoensso.timbre.may_log_QMARK_.cljs$core$IFn$_invoke$arity$4 = (function (default_min_level,level,_QMARK_ns_str,_QMARK_config){
var config = (function (){var or__4126__auto__ = _QMARK_config;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return taoensso.timbre._STAR_config_STAR_;
}
})();
var min_level = (function (){var G__14339 = default_min_level;
var G__14340 = (function (){var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(config,cljs.core.cst$kw$min_DASH_level);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(config,cljs.core.cst$kw$level);
}
})();
var G__14341 = _QMARK_ns_str;
return (get_min_level_14346.cljs$core$IFn$_invoke$arity$3 ? get_min_level_14346.cljs$core$IFn$_invoke$arity$3(G__14339,G__14340,G__14341) : get_min_level_14346.call(null,G__14339,G__14340,G__14341));
})();
if(cljs.core.truth_((level_GT__EQ__14344.cljs$core$IFn$_invoke$arity$2 ? level_GT__EQ__14344.cljs$core$IFn$_invoke$arity$2(level,min_level) : level_GT__EQ__14344.call(null,level,min_level)))){
var temp__5802__auto__ = (function (){var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(config,cljs.core.cst$kw$ns_DASH_filter);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var G__14342 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(config,cljs.core.cst$kw$ns_DASH_whitelist);
var G__14343 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(config,cljs.core.cst$kw$ns_DASH_blacklist);
return (legacy_ns_filter_14347.cljs$core$IFn$_invoke$arity$2 ? legacy_ns_filter_14347.cljs$core$IFn$_invoke$arity$2(G__14342,G__14343) : legacy_ns_filter_14347.call(null,G__14342,G__14343));
}
})();
if(cljs.core.truth_(temp__5802__auto__)){
var ns_filter = temp__5802__auto__;
if(cljs.core.truth_((may_log_ns_QMARK__14345.cljs$core$IFn$_invoke$arity$2 ? may_log_ns_QMARK__14345.cljs$core$IFn$_invoke$arity$2(ns_filter,_QMARK_ns_str) : may_log_ns_QMARK__14345.call(null,ns_filter,_QMARK_ns_str)))){
return true;
} else {
return false;
}
} else {
return true;
}
} else {
return false;
}
}));

(taoensso.timbre.may_log_QMARK_.cljs$lang$maxFixedArity = 4);

taoensso.timbre.set_min_level = (function taoensso$timbre$set_min_level(config,min_level){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(config,cljs.core.cst$kw$min_DASH_level,taoensso.timbre.valid_level(min_level));
});
taoensso.timbre.set_min_level_BANG_ = (function taoensso$timbre$set_min_level_BANG_(min_level){
return taoensso.timbre.swap_config_BANG_((function (old){
return taoensso.timbre.set_min_level(old,min_level);
}));
});
/**
 * Returns given Timbre `config` with its `:min-level` modified so that
 *   the given namespace has the specified minimum logging level.
 * 
 *   When no namespace is provided, `*ns*` will be used.
 *   When `?min-level` is nil, any minimum level specifications for the
 *   *exact* given namespace will be removed.
 * 
 *   See `*config*` docstring for more about `:min-level`.
 *   See also `set-min-level!` for a util to directly modify `*config*`.
 */
taoensso.timbre.set_ns_min_level = (function taoensso$timbre$set_ns_min_level(config,ns,_QMARK_min_level){
var ns__$1 = cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var e = (function (){try{if(taoensso.truss.impl.some_QMARK_(ns)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e14350){if((e14350 instanceof Error)){
var e = e14350;
return e;
} else {
throw e14350;

}
}})();
if((e == null)){
return ns;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,cljs.core.cst$sym$taoensso$timbre,249,cljs.core.cst$sym$taoensso$truss$impl_SLASH_some_QMARK_,cljs.core.cst$sym$ns,ns,e,null);
}
})());
var min_level_STAR_ = (function (){var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(config,cljs.core.cst$kw$min_DASH_level);
if(cljs.core.vector_QMARK_(x)){
return x;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["*",taoensso.timbre.valid_level(x)], null)], null);
}
})();
var min_level_STAR___$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__14351){
var vec__14352 = p__14351;
var ns_pattern = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14352,(0),null);
var _pattern_min_level = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14352,(1),null);
var entry = vec__14352;
var temp__5802__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns_pattern,ns__$1)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns_pattern,cljs.core.PersistentHashSet.createAsIfByAssoc([ns__$1]))));
if(temp__5802__auto__){
var exact_match_QMARK_ = temp__5802__auto__;
return acc;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,entry);
}
}),(function (){var temp__5802__auto__ = _QMARK_min_level;
if(cljs.core.truth_(temp__5802__auto__)){
var new_min_level = temp__5802__auto__;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns__$1,taoensso.timbre.valid_level(new_min_level)], null)], null);
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),min_level_STAR_);
var min_level_STAR___$2 = (function (){var temp__5802__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(min_level_STAR___$1),(1)))?(function (){var vec__14355 = min_level_STAR___$1;
var vec__14358 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14355,(0),null);
var ns_pattern = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14358,(0),null);
var level = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14358,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns_pattern,"*")){
return level;
} else {
return null;
}
})():null);
if(cljs.core.truth_(temp__5802__auto__)){
var simplified = temp__5802__auto__;
return simplified;
} else {
return cljs.core.not_empty(min_level_STAR___$1);
}
})();
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(config,cljs.core.cst$kw$min_DASH_level,min_level_STAR___$2);
});
var ret__4785__auto___14364 = (function (){
/**
 * Like `set-ns-min-level` but directly modifies `*config*`.
 * 
 *   Can conveniently set the minimum log level for the current ns:
 *  (set-ns-min-level! :info) => Sets min-level for current *ns*
 * 
 *   See `set-ns-min-level` for details.
 */
taoensso.timbre.set_ns_min_level_BANG_ = (function taoensso$timbre$set_ns_min_level_BANG_(var_args){
var G__14363 = arguments.length;
switch (G__14363) {
case 3:
return taoensso.timbre.set_ns_min_level_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.timbre.set_ns_min_level_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (2)))].join('')));

}
});

(taoensso.timbre.set_ns_min_level_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,_QMARK_min_level){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$taoensso$timbre_SLASH_set_DASH_ns_DASH_min_DASH_level_BANG_,null,(1),null)),(new cljs.core.List(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core._STAR_ns_STAR_),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,_QMARK_min_level,null,(1),null))], 0))));
}));

(taoensso.timbre.set_ns_min_level_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,ns,_QMARK_min_level){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.cst$sym$taoensso$timbre_SLASH_swap_DASH_config_BANG_,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$cljs$core_SLASH_fn,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.cst$sym$config__14361__auto__,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.cst$sym$taoensso$timbre_SLASH_set_DASH_ns_DASH_min_DASH_level,null,(1),null)),(new cljs.core.List(null,cljs.core.cst$sym$config__14361__auto__,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),null,(1),null)),(new cljs.core.List(null,_QMARK_min_level,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)))));
}));

(taoensso.timbre.set_ns_min_level_BANG_.cljs$lang$maxFixedArity = 4);

return null;
})()
;
(taoensso.timbre.set_ns_min_level_BANG_.cljs$lang$macro = true);

if((typeof taoensso !== 'undefined') && (typeof taoensso.timbre !== 'undefined') && (typeof taoensso.timbre.get_rate_limiter !== 'undefined')){
} else {
taoensso.timbre.get_rate_limiter = taoensso.encore.fmemoize((function (appender_id,specs){
return taoensso.encore.limiter.cljs$core$IFn$_invoke$arity$1(specs);
}));
}
taoensso.timbre.get_timestamp = (function taoensso$timbre$get_timestamp(timestamp_opts,instant){
var map__14366 = timestamp_opts;
var map__14366__$1 = (((((!((map__14366 == null))))?(((((map__14366.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14366.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14366):map__14366);
var pattern = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14366__$1,cljs.core.cst$kw$pattern);
if(cljs.core.truth_((function (){var G__14368 = pattern;
var G__14369 = cljs.core.cst$kw$iso8601;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__14368,G__14369) : taoensso.encore.kw_identical_QMARK_.call(null,G__14368,G__14369));
})())){
return (new Date(instant)).toISOString();
} else {
return (new goog.i18n.DateTimeFormat(pattern)).format(instant);
}
});

/**
 * Default (fn [data]) -> final output string, used to produce
 *   final formatted output_ string from final log data.
 * 
 *   Options (included as `:output-opts` in data sent to fns below):
 * 
 *  :error-fn ; When present and (:?err data) present,
 *            ; (error-fn data) will be called to generate output
 *            ; (e.g. a stacktrace) for the error.
 *            ;
 *            ; Default value: `default-output-error-fn`.
 *            ; Use `nil` value to exclude error output.
 * 
 *  :msg-fn   ; When present, (msg-fn data) will be called to
 *            ; generate a message from `vargs` (vector of raw
 *            ; logging arguments).
 *            ;
 *            ; Default value: `default-output-msg-fn`.
 *            ; Use `nil` value to exclude message output.
 */
taoensso.timbre.default_output_fn = (function taoensso$timbre$default_output_fn(var_args){
var G__14371 = arguments.length;
switch (G__14371) {
case 2:
return taoensso.timbre.default_output_fn.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return taoensso.timbre.default_output_fn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.timbre.default_output_fn.cljs$core$IFn$_invoke$arity$2 = (function (base_output_opts,data){
var data__$1 = ((cljs.core.empty_QMARK_(base_output_opts))?data:cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data,cljs.core.cst$kw$output_DASH_opts,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(base_output_opts,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.cst$kw$output_DASH_opts))));
return taoensso.timbre.default_output_fn.cljs$core$IFn$_invoke$arity$1(data__$1);
}));

(taoensso.timbre.default_output_fn.cljs$core$IFn$_invoke$arity$1 = (function (data){
var map__14372 = data;
var map__14372__$1 = (((((!((map__14372 == null))))?(((((map__14372.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14372.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14372):map__14372);
var output_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14372__$1,cljs.core.cst$kw$output_DASH_opts);
var msg_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14372__$1,cljs.core.cst$kw$msg_);
var _QMARK_file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14372__$1,cljs.core.cst$kw$_QMARK_file);
var hostname_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14372__$1,cljs.core.cst$kw$hostname_);
var _QMARK_ns_str = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14372__$1,cljs.core.cst$kw$_QMARK_ns_DASH_str);
var level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14372__$1,cljs.core.cst$kw$level);
var _QMARK_err = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14372__$1,cljs.core.cst$kw$_QMARK_err);
var timestamp_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14372__$1,cljs.core.cst$kw$timestamp_);
var _QMARK_line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14372__$1,cljs.core.cst$kw$_QMARK_line);
return [(function (){var temp__5804__auto__ = cljs.core.force(timestamp_);
if(cljs.core.truth_(temp__5804__auto__)){
var ts = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ts)," "].join('');
} else {
return null;
}
})(),clojure.string.upper_case(cljs.core.name(level))," ","[",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = _QMARK_ns_str;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = _QMARK_file;
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return "?";
}
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = _QMARK_line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "?";
}
})()),"] - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(output_opts,cljs.core.cst$kw$msg_DASH_fn,taoensso.timbre.default_output_msg_fn);
if(cljs.core.truth_(temp__5804__auto__)){
var msg_fn = temp__5804__auto__;
return (msg_fn.cljs$core$IFn$_invoke$arity$1 ? msg_fn.cljs$core$IFn$_invoke$arity$1(data) : msg_fn.call(null,data));
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5804__auto__ = _QMARK_err;
if(cljs.core.truth_(temp__5804__auto__)){
var err = temp__5804__auto__;
var temp__5804__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(output_opts,cljs.core.cst$kw$error_DASH_fn,taoensso.timbre.default_output_error_fn);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ef = temp__5804__auto____$1;
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(output_opts,cljs.core.cst$kw$no_DASH_stacktrace_QMARK_))){
return null;
} else {
try{return [taoensso.encore.system_newline,cljs.core.str.cljs$core$IFn$_invoke$arity$1((ef.cljs$core$IFn$_invoke$arity$1 ? ef.cljs$core$IFn$_invoke$arity$1(data) : ef.call(null,data)))].join('');
}catch (e14377){var _ = e14377;
return [taoensso.encore.system_newline,"[TIMBRE WARNING]: `error-fn` failed, falling back to `pr-str`:",taoensso.encore.system_newline,cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){try{return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([err], 0));
}catch (e14379){var ___$1 = e14379;
return "<pr-str failed>";
}})())].join('');
}}
} else {
return null;
}
} else {
return null;
}
})())].join('');
}));

(taoensso.timbre.default_output_fn.cljs$lang$maxFixedArity = 2);

taoensso.timbre.default_arg__GT_str_fn = (function taoensso$timbre$default_arg__GT_str_fn(x){
if((x == null)){
return "nil";
} else {
if(typeof x === 'string'){
return x;
} else {
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0));
}
}
});
taoensso.timbre.legacy_arg__GT_str_fn = (function taoensso$timbre$legacy_arg__GT_str_fn(x){
if((x == null)){
return "nil";
} else {
if(cljs.core.record_QMARK_(x)){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0));
} else {
return x;
}
}
});
taoensso.timbre.str_join = (function taoensso$timbre$str_join(var_args){
var G__14382 = arguments.length;
switch (G__14382) {
case 1:
return taoensso.timbre.str_join.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.timbre.str_join.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.timbre.str_join.cljs$core$IFn$_invoke$arity$1 = (function (xs){
return taoensso.timbre.str_join.cljs$core$IFn$_invoke$arity$2(taoensso.timbre.default_arg__GT_str_fn,xs);
}));

(taoensso.timbre.str_join.cljs$core$IFn$_invoke$arity$2 = (function (arg__GT_str_fn,xs){
return taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$3(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$1(arg__GT_str_fn),xs);
}));

(taoensso.timbre.str_join.cljs$lang$maxFixedArity = 2);

/**
 * (fn [data]) -> string, used by `default-output-fn` to generate output
 *   for `:vargs` value (vector of raw logging arguments) in log data.
 */
taoensso.timbre.default_output_msg_fn = (function taoensso$timbre$default_output_msg_fn(p__14384){
var map__14385 = p__14384;
var map__14385__$1 = (((((!((map__14385 == null))))?(((((map__14385.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14385.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14385):map__14385);
var data = map__14385__$1;
var msg_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14385__$1,cljs.core.cst$kw$msg_DASH_type);
var _QMARK_msg_fmt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14385__$1,cljs.core.cst$kw$_QMARK_msg_DASH_fmt);
var vargs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14385__$1,cljs.core.cst$kw$vargs);
var output_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14385__$1,cljs.core.cst$kw$output_DASH_opts);
var map__14387 = output_opts;
var map__14387__$1 = (((((!((map__14387 == null))))?(((((map__14387.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14387.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14387):map__14387);
var arg__GT_str_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__14387__$1,cljs.core.cst$kw$arg_DASH__GT_str_DASH_fn,taoensso.timbre.default_arg__GT_str_fn);
var G__14389 = msg_type;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__14389)){
return "";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$p,G__14389)){
return taoensso.timbre.str_join.cljs$core$IFn$_invoke$arity$2(arg__GT_str_fn,vargs);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$f,G__14389)){
if(typeof _QMARK_msg_fmt === 'string'){
return taoensso.encore.format_STAR_.cljs$core$IFn$_invoke$arity$2(_QMARK_msg_fmt,vargs);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Timbre format-style logging call without a format pattern string",new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$_QMARK_msg_DASH_fmt,_QMARK_msg_fmt,cljs.core.cst$kw$type,cljs.core.type(_QMARK_msg_fmt),cljs.core.cst$kw$vargs,vargs], null));
}
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14389)].join('')));

}
}
}
});
/**
 * Default (fn [data]) -> string, used by `default-output-fn` to
 *   generate output for `:?err` value in log data.
 * 
 *   For Clj:
 *   Uses `io.aviso/pretty` to return an attractive stacktrace.
 *   Options:
 *     :stacktrace-fonts ; See `io.aviso.exception/*fonts*`
 * 
 *   For Cljs:
 *   Returns simple stacktrace string.
 */
taoensso.timbre.default_output_error_fn = (function taoensso$timbre$default_output_error_fn(p__14390){
var map__14391 = p__14390;
var map__14391__$1 = (((((!((map__14391 == null))))?(((((map__14391.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14391.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14391):map__14391);
var data = map__14391__$1;
var _QMARK_err = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14391__$1,cljs.core.cst$kw$_QMARK_err);
var output_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14391__$1,cljs.core.cst$kw$output_DASH_opts);
var err = (function (){var e = (function (){try{if(taoensso.truss.impl.some_QMARK_(_QMARK_err)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e14393){if((e14393 instanceof Error)){
var e = e14393;
return e;
} else {
throw e14393;

}
}})();
if((e == null)){
return _QMARK_err;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,cljs.core.cst$sym$taoensso$timbre,508,cljs.core.cst$sym$taoensso$truss$impl_SLASH_some_QMARK_,cljs.core.cst$sym$_QMARK_err,_QMARK_err,e,null);
}
})();
var nl = taoensso.encore.system_newline;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(err.stack),(function (){var temp__5804__auto__ = cljs.core.ex_data(err);
if(cljs.core.truth_(temp__5804__auto__)){
var d = temp__5804__auto__;
return [nl,"ex-data:",nl,"    ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([d], 0))].join('');
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_cause(err);
if(cljs.core.truth_(temp__5804__auto__)){
var c = temp__5804__auto__;
return [nl,nl,"Caused by:",nl,cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__14397 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data,cljs.core.cst$kw$_QMARK_err,c);
return (taoensso.timbre.default_output_error_fn.cljs$core$IFn$_invoke$arity$1 ? taoensso.timbre.default_output_error_fn.cljs$core$IFn$_invoke$arity$1(G__14397) : taoensso.timbre.default_output_error_fn.call(null,G__14397));
})())].join('');
} else {
return null;
}
})()].join('');
});
/**
 * General-purpose dynamic logging context
 */
taoensso.timbre._STAR_context_STAR_ = null;
/**
 * vargs -> [?err ?meta ?msg-fmt api-vargs]
 */
taoensso.timbre.parse_vargs = (function taoensso$timbre$parse_vargs(_QMARK_err,msg_type,vargs){
var auto_error_QMARK_ = (function (){var G__14401 = _QMARK_err;
var G__14402 = cljs.core.cst$kw$auto;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__14401,G__14402) : taoensso.encore.kw_identical_QMARK_.call(null,G__14401,G__14402));
})();
var fmt_msg_QMARK_ = (function (){var G__14403 = msg_type;
var G__14404 = cljs.core.cst$kw$f;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__14403,G__14404) : taoensso.encore.kw_identical_QMARK_.call(null,G__14403,G__14404));
})();
var vec__14398 = vargs;
var v0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14398,(0),null);
if(cljs.core.truth_((function (){var and__4115__auto__ = auto_error_QMARK_;
if(cljs.core.truth_(and__4115__auto__)){
return taoensso.encore.error_QMARK_(v0);
} else {
return and__4115__auto__;
}
})())){
var _QMARK_err__$1 = v0;
var _QMARK_meta = null;
var vargs__$1 = taoensso.encore.vrest(vargs);
var _QMARK_msg_fmt = (cljs.core.truth_(fmt_msg_QMARK_)?(function (){var vec__14405 = vargs__$1;
var v0__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14405,(0),null);
return v0__$1;
})():null);
var vargs__$2 = (cljs.core.truth_(fmt_msg_QMARK_)?taoensso.encore.vrest(vargs__$1):vargs__$1);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_err__$1,_QMARK_meta,_QMARK_msg_fmt,vargs__$2], null);
} else {
var _QMARK_meta = (cljs.core.truth_(((cljs.core.map_QMARK_(v0))?cljs.core.cst$kw$meta.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v0)):false))?v0:null);
var _QMARK_err__$1 = (function (){var or__4126__auto__ = cljs.core.cst$kw$err.cljs$core$IFn$_invoke$arity$1(_QMARK_meta);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.truth_(auto_error_QMARK_)){
return null;
} else {
return _QMARK_err;
}
}
})();
var _QMARK_meta__$1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(_QMARK_meta,cljs.core.cst$kw$err);
var vargs__$1 = (cljs.core.truth_(_QMARK_meta__$1)?taoensso.encore.vrest(vargs):vargs);
var _QMARK_msg_fmt = (cljs.core.truth_(fmt_msg_QMARK_)?(function (){var vec__14408 = vargs__$1;
var v0__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14408,(0),null);
return v0__$1;
})():null);
var vargs__$2 = (cljs.core.truth_(fmt_msg_QMARK_)?taoensso.encore.vrest(vargs__$1):vargs__$1);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_err__$1,_QMARK_meta__$1,_QMARK_msg_fmt,vargs__$2], null);
}
});
taoensso.timbre.protected_fn = (function taoensso$timbre$protected_fn(error_msg,f){
return (function (data){
try{return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(data) : f.call(null,data));
}catch (e14411){var t = e14411;
var map__14412 = data;
var map__14412__$1 = (((((!((map__14412 == null))))?(((((map__14412.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14412.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14412):map__14412);
var level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14412__$1,cljs.core.cst$kw$level);
var _QMARK_ns_str = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14412__$1,cljs.core.cst$kw$_QMARK_ns_DASH_str);
var _QMARK_file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14412__$1,cljs.core.cst$kw$_QMARK_file);
var _QMARK_line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14412__$1,cljs.core.cst$kw$_QMARK_line);
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3(error_msg,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$level,level,cljs.core.cst$kw$data,data,cljs.core.cst$kw$location,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = _QMARK_ns_str;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = _QMARK_file;
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return "?";
}
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = _QMARK_line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "?";
}
})())].join(''),cljs.core.cst$kw$output_DASH_fn,f], null),t);
}});
});
/**
 * Core low-level log fn. Implementation detail!
 */
taoensso.timbre._log_BANG_ = (function taoensso$timbre$_log_BANG_(var_args){
var G__14415 = arguments.length;
switch (G__14415) {
case 9:
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$9((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]));

break;
case 10:
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]));

break;
case 11:
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$9 = (function (config,level,_QMARK_ns_str,_QMARK_file,_QMARK_line,msg_type,_QMARK_err,vargs_,_QMARK_base_data){
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(config,level,_QMARK_ns_str,_QMARK_file,_QMARK_line,msg_type,_QMARK_err,vargs_,_QMARK_base_data,null,false);
}));

(taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10 = (function (config,level,_QMARK_ns_str,_QMARK_file,_QMARK_line,msg_type,_QMARK_err,vargs_,_QMARK_base_data,callsite_id){
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(config,level,_QMARK_ns_str,_QMARK_file,_QMARK_line,msg_type,_QMARK_err,vargs_,_QMARK_base_data,callsite_id,false);
}));

(taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11 = (function (config,level,_QMARK_ns_str,_QMARK_file,_QMARK_line,msg_type,_QMARK_err,vargs_,_QMARK_base_data,callsite_id,spying_QMARK_){
if(taoensso.timbre.may_log_QMARK_.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$report,level,_QMARK_ns_str,config)){
var instant_14440 = (new Date());
var context_14441 = taoensso.timbre._STAR_context_STAR_;
var vargs_14442 = cljs.core.deref(vargs_);
var vec__14416_14443 = taoensso.timbre.parse_vargs(_QMARK_err,msg_type,vargs_14442);
var _QMARK_err_14444__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14416_14443,(0),null);
var _QMARK_meta_14445 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14416_14443,(1),null);
var _QMARK_msg_fmt_14446 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14416_14443,(2),null);
var vargs_14447__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14416_14443,(3),null);
var data_14448 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var or__4126__auto__ = _QMARK_base_data;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$instant,cljs.core.cst$kw$spying_QMARK_,cljs.core.cst$kw$config,cljs.core.cst$kw$vargs,cljs.core.cst$kw$_QMARK_file,cljs.core.cst$kw$error_DASH_level_QMARK_,cljs.core.cst$kw$_QMARK_ns_DASH_str,cljs.core.cst$kw$level,cljs.core.cst$kw$msg_DASH_type,cljs.core.cst$kw$_QMARK_err,cljs.core.cst$kw$context,cljs.core.cst$kw$_QMARK_line,cljs.core.cst$kw$_QMARK_meta,cljs.core.cst$kw$_QMARK_msg_DASH_fmt],[instant_14440,spying_QMARK_,config,vargs_14447__$1,_QMARK_file,cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fatal,null,cljs.core.cst$kw$error,null], null), null),level),_QMARK_ns_str,level,msg_type,_QMARK_err_14444__$1,context_14441,_QMARK_line,_QMARK_meta_14445,_QMARK_msg_fmt_14446]));
var _QMARK_data_14449 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,mf){
var result = (mf.cljs$core$IFn$_invoke$arity$1 ? mf.cljs$core$IFn$_invoke$arity$1(acc) : mf.call(null,acc));
if((result == null)){
return cljs.core.reduced(null);
} else {
return result;
}
}),data_14448,cljs.core.get.cljs$core$IFn$_invoke$arity$2(config,cljs.core.cst$kw$middleware));
var temp__5804__auto___14450 = _QMARK_data_14449;
if(cljs.core.truth_(temp__5804__auto___14450)){
var data_14451__$1 = temp__5804__auto___14450;
var map__14419_14452 = data_14451__$1;
var map__14419_14453__$1 = (((((!((map__14419_14452 == null))))?(((((map__14419_14452.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14419_14452.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14419_14452):map__14419_14452);
var vargs_14454__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14419_14453__$1,cljs.core.cst$kw$vargs);
var data_14455__$2 = taoensso.encore.assoc_nx.cljs$core$IFn$_invoke$arity$variadic(data_14451__$1,cljs.core.cst$kw$msg_,(new cljs.core.Delay((function (){
var fexpr__14421 = taoensso.timbre.protected_fn("Timbre error when calling (msg-fn <data>)",taoensso.timbre.default_output_msg_fn);
return (fexpr__14421.cljs$core$IFn$_invoke$arity$1 ? fexpr__14421.cljs$core$IFn$_invoke$arity$1(data_14451__$1) : fexpr__14421.call(null,data_14451__$1));
}),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$hash_,(new cljs.core.Delay((function (){
return cljs.core.hash((function (){var b2__1501__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(_QMARK_meta_14445,cljs.core.cst$kw$id);
if(cljs.core.truth_(b2__1501__auto__)){
var id = b2__1501__auto__;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,callsite_id,level], null);
} else {
var b2__1501__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(_QMARK_meta_14445,cljs.core.cst$kw$id_BANG_);
if(cljs.core.truth_(b2__1501__auto____$1)){
var id = b2__1501__auto____$1;
return id;
} else {
var b2__1501__auto____$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(_QMARK_meta_14445,cljs.core.cst$kw$hash);
if(cljs.core.truth_(b2__1501__auto____$2)){
var h = b2__1501__auto____$2;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [h,callsite_id,_QMARK_msg_fmt_14446,level], null);
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [vargs_14454__$2,callsite_id,_QMARK_msg_fmt_14446,level], null);
}
}
}
})());
}),null))], 0));
var get_timestamp_delay_14456 = (function (){var get_shared_delay = taoensso.encore.fmemoize((function (opts){
return (new cljs.core.Delay((function (){
return taoensso.timbre.get_timestamp(opts,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data_14455__$2,cljs.core.cst$kw$instant));
}),null));
}));
var base_opts_ = (new cljs.core.Delay((function (){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(taoensso.timbre.default_timestamp_opts,cljs.core.get.cljs$core$IFn$_invoke$arity$2(config,cljs.core.cst$kw$timestamp_DASH_opts));
}),null));
return (function (_QMARK_appender_opts){
if(cljs.core.truth_((function (){var or__4126__auto__ = (_QMARK_appender_opts == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var G__14424 = _QMARK_appender_opts;
var G__14425 = cljs.core.cst$kw$inherit;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__14424,G__14425) : taoensso.encore.kw_identical_QMARK_.call(null,G__14424,G__14425));
}
})())){
var G__14426 = cljs.core.deref(base_opts_);
return (get_shared_delay.cljs$core$IFn$_invoke$arity$1 ? get_shared_delay.cljs$core$IFn$_invoke$arity$1(G__14426) : get_shared_delay.call(null,G__14426));
} else {
var G__14427 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(base_opts_),_QMARK_appender_opts);
return (get_shared_delay.cljs$core$IFn$_invoke$arity$1 ? get_shared_delay.cljs$core$IFn$_invoke$arity$1(G__14427) : get_shared_delay.call(null,G__14427));
}
});
})();
var get_output_fn_14457 = (function (){var base_fn = taoensso.encore.fmemoize(cljs.core.get.cljs$core$IFn$_invoke$arity$3(config,cljs.core.cst$kw$output_DASH_fn,taoensso.timbre.default_output_fn));
return (function (_QMARK_appender_fn){
return taoensso.timbre.protected_fn("Timbre error when calling (output-fn <data>)",(cljs.core.truth_((function (){var or__4126__auto__ = (_QMARK_appender_fn == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var G__14430 = _QMARK_appender_fn;
var G__14431 = cljs.core.cst$kw$inherit;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__14430,G__14431) : taoensso.encore.kw_identical_QMARK_.call(null,G__14430,G__14431));
}
})())?base_fn:_QMARK_appender_fn));
});
})();
var base_output_opts_14458 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(config,cljs.core.cst$kw$output_DASH_opts);
cljs.core.reduce_kv((function (_,id,appender){
if(cljs.core.truth_((function (){var and__4115__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(appender,cljs.core.cst$kw$enabled_QMARK_);
if(cljs.core.truth_(and__4115__auto__)){
return taoensso.timbre.may_log_QMARK_.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$trace,level,_QMARK_ns_str,appender);
} else {
return and__4115__auto__;
}
})())){
var rate_limit_specs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(appender,cljs.core.cst$kw$rate_DASH_limit);
var rate_limit_okay_QMARK_ = (function (){var or__4126__auto__ = cljs.core.empty_QMARK_(rate_limit_specs);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var rl_fn = (taoensso.timbre.get_rate_limiter.cljs$core$IFn$_invoke$arity$2 ? taoensso.timbre.get_rate_limiter.cljs$core$IFn$_invoke$arity$2(id,rate_limit_specs) : taoensso.timbre.get_rate_limiter.call(null,id,rate_limit_specs));
return cljs.core.not((function (){var G__14433 = cljs.core.force(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data_14455__$2,cljs.core.cst$kw$hash_));
return (rl_fn.cljs$core$IFn$_invoke$arity$1 ? rl_fn.cljs$core$IFn$_invoke$arity$1(G__14433) : rl_fn.call(null,G__14433));
})());
}
})();
if(rate_limit_okay_QMARK_){
var map__14434 = appender;
var map__14434__$1 = (((((!((map__14434 == null))))?(((((map__14434.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14434.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14434):map__14434);
var apfn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14434__$1,cljs.core.cst$kw$fn);
var async_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14434__$1,cljs.core.cst$kw$async_QMARK_);
var timestamp_ = (function (){var G__14436 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(appender,cljs.core.cst$kw$timestamp_DASH_opts);
return (get_timestamp_delay_14456.cljs$core$IFn$_invoke$arity$1 ? get_timestamp_delay_14456.cljs$core$IFn$_invoke$arity$1(G__14436) : get_timestamp_delay_14456.call(null,G__14436));
})();
var output_fn = (function (){var G__14437 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(appender,cljs.core.cst$kw$output_DASH_fn);
return (get_output_fn_14457.cljs$core$IFn$_invoke$arity$1 ? get_output_fn_14457.cljs$core$IFn$_invoke$arity$1(G__14437) : get_output_fn_14457.call(null,G__14437));
})();
var output_opts = (function (){var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(appender,cljs.core.cst$kw$output_DASH_opts);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return base_output_opts_14458;
}
})();
var output_ = (new cljs.core.Delay((function (){
var G__14438 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data_14455__$2,cljs.core.cst$kw$timestamp_,timestamp_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$output_DASH_opts,output_opts], 0));
return (output_fn.cljs$core$IFn$_invoke$arity$1 ? output_fn.cljs$core$IFn$_invoke$arity$1(G__14438) : output_fn.call(null,G__14438));
}),null));
var data__$3 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(data_14455__$2,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$appender_DASH_id,id,cljs.core.cst$kw$appender,appender,cljs.core.cst$kw$output_DASH_opts,output_opts,cljs.core.cst$kw$output_DASH_fn,output_fn,cljs.core.cst$kw$output_,output_,cljs.core.cst$kw$timestamp_,timestamp_], null));
var _QMARK_data__$1 = (function (){var temp__5802__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(appender,cljs.core.cst$kw$middleware_DASH_fn);
if(cljs.core.truth_(temp__5802__auto__)){
var mfn = temp__5802__auto__;
return (mfn.cljs$core$IFn$_invoke$arity$1 ? mfn.cljs$core$IFn$_invoke$arity$1(data__$3) : mfn.call(null,data__$3));
} else {
return data__$3;
}
})();
var temp__5804__auto____$1 = _QMARK_data__$1;
if(cljs.core.truth_(temp__5804__auto____$1)){
var data__$4 = temp__5804__auto____$1;
return (apfn.cljs$core$IFn$_invoke$arity$1 ? apfn.cljs$core$IFn$_invoke$arity$1(data__$4) : apfn.call(null,data__$4));
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
}),null,cljs.core.get.cljs$core$IFn$_invoke$arity$2(config,cljs.core.cst$kw$appenders));
} else {
}
} else {
}

return null;
}));

(taoensso.timbre._log_BANG_.cljs$lang$maxFixedArity = 11);

taoensso.timbre.fline = (function taoensso$timbre$fline(and_form){
return cljs.core.cst$kw$line.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(and_form));
});
if((typeof taoensso !== 'undefined') && (typeof taoensso.timbre !== 'undefined') && (typeof taoensso.timbre.callsite_counter !== 'undefined')){
} else {
/**
 * Simple counter, used to uniquely identify each log macro expansion.
 */
taoensso.timbre.callsite_counter = taoensso.encore.counter.cljs$core$IFn$_invoke$arity$0();
}
/**
 * Alpha, subject to change.
 * 
 *   Iterates through all appenders in config (enabled or not), and
 *   calls (:shutdown-fn appender) whenever that fn exists.
 * 
 *   This signals to these appenders that they should immediately
 *   close/release any resources that they may have open/acquired,
 *   and permanently noop on future logging requests.
 * 
 *   Returns the set of appender-ids that had a shutdown-fn called.
 * 
 *   This fn is called automatically on JVM shutdown, but can also
 *   be called manually.
 */
taoensso.timbre.shutdown_appenders_BANG_ = (function taoensso$timbre$shutdown_appenders_BANG_(var_args){
var G__14463 = arguments.length;
switch (G__14463) {
case 0:
return taoensso.timbre.shutdown_appenders_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.timbre.shutdown_appenders_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.timbre.shutdown_appenders_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return taoensso.timbre.shutdown_appenders_BANG_.cljs$core$IFn$_invoke$arity$1(taoensso.timbre._STAR_config_STAR_);
}));

(taoensso.timbre.shutdown_appenders_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (config){
return cljs.core.reduce_kv((function (acc,appender_id,appender){
var temp__5802__auto__ = cljs.core.cst$kw$shutdown_DASH_fn.cljs$core$IFn$_invoke$arity$1(appender);
if(cljs.core.truth_(temp__5802__auto__)){
var sfn = temp__5802__auto__;
(sfn.cljs$core$IFn$_invoke$arity$0 ? sfn.cljs$core$IFn$_invoke$arity$0() : sfn.call(null));

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,appender_id);
} else {
return acc;
}
}),cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$appenders.cljs$core$IFn$_invoke$arity$1(config));
}));

(taoensso.timbre.shutdown_appenders_BANG_.cljs$lang$maxFixedArity = 1);

taoensso.timbre.println_appender = taoensso.timbre.appenders.core.println_appender;
taoensso.timbre.console_appender = taoensso.timbre.appenders.core.console_appender;
/**
 * Controls (:timestamp_ data)
 */
taoensso.timbre.default_timestamp_opts = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$pattern,cljs.core.cst$kw$iso8601], null);
/**
 * Default/example Timbre `*config*` value:
 * 
 *  {:min-level :debug #_[["taoensso.*" :error] ["*" :debug]]
 *   :ns-filter #{"*"} #_{:deny #{"taoensso.*"} :allow #{"*"}}
 * 
 *   :middleware [] ; (fns [data]) -> ?data, applied left->right
 * 
 *   :timestamp-opts default-timestamp-opts ; {:pattern _ :locale _ :timezone _}
 *   :output-fn default-output-fn ; (fn [data]) -> final output for use by appenders
 * 
 *   :appenders
 *   #?(:clj
 *      {:println (println-appender {:stream :auto})
 *       ;; :spit (spit-appender    {:fname "./timbre-spit.log"})
 *       }
 * 
 *      :cljs
 *      (if (exists? js/window)
 *        {:console (console-appender {})}
 *        {:println (println-appender {})}))}
 * 
 *  See `*config*` for more info.
 */
taoensso.timbre.default_config = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$min_DASH_level,cljs.core.cst$kw$debug,cljs.core.cst$kw$ns_DASH_filter,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["*",null], null), null),cljs.core.cst$kw$middleware,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$timestamp_DASH_opts,taoensso.timbre.default_timestamp_opts,cljs.core.cst$kw$output_DASH_fn,taoensso.timbre.default_output_fn,cljs.core.cst$kw$appenders,(((typeof window !== 'undefined'))?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$console,(function (){var G__14465 = cljs.core.PersistentArrayMap.EMPTY;
return (taoensso.timbre.console_appender.cljs$core$IFn$_invoke$arity$1 ? taoensso.timbre.console_appender.cljs$core$IFn$_invoke$arity$1(G__14465) : taoensso.timbre.console_appender.call(null,G__14465));
})()], null):new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$println,(function (){var G__14466 = cljs.core.PersistentArrayMap.EMPTY;
return (taoensso.timbre.println_appender.cljs$core$IFn$_invoke$arity$1 ? taoensso.timbre.println_appender.cljs$core$IFn$_invoke$arity$1(G__14466) : taoensso.timbre.println_appender.call(null,G__14466));
})()], null))], null);
if((typeof taoensso !== 'undefined') && (typeof taoensso.timbre !== 'undefined') && (typeof taoensso.timbre._STAR_config_STAR_ !== 'undefined')){
} else {
/**
 * This config map controls all Timbre behaviour including:
 *  - When to log (via min-level and namespace filtering)
 *  - How  to log (which appenders to use, etc.)
 *  - What to log (how log data will be transformed to final
 *                 output for use by appenders)
 * 
 *   Initial config value will be (in descending order of preference):
 * 
 *  1. `taoensso.timbre.config.edn`   JVM property  (read as EDN)
 *  2. `TAOENSSO_TIMBRE_CONFIG_EDN`   Env var       (read as EDN)
 *  3. `./taoensso.timbre.config.edn` resource file (read as EDN)
 *  4. Value of `default-config`
 * 
 *   For all EDN cases (1-3): the EDN can represent either a Clojure map
 *   to merge into `default-config`, or a qualified symbol that'll
 *   resolve to a Clojure map to merge into `default-config`.
 * 
 *   See `default-config` for more info on the base/default config.
 * 
 *   You can modify the config value with standard `alter-var-root`,
 *   or `binding`.
 * 
 *   For convenience, there's also some dedicated helper utils:
 * 
 *  - `set-config!`, `merge-config!`        ; Mutate *config*
 *  - `set-min-level!`, `set-min-ns-level!` ; Mutate *config* :min-level
 *  - `with-config`, `with-merged-config`   ; Bind *config*
 *  - `with-min-level`                      ; Bind *config* :min-level
 * 
 *   MAIN CONFIG OPTIONS
 *  :min-level
 *    Logging will occur only if a logging call's level is >= this
 *    min-level. Possible values, in order:
 * 
 *      :trace  = level 0
 *      :debug  = level 1 ; Default min-level
 *      :info   = level 2
 *      :warn   = level 3
 *      :error  = level 4 ; Error type
 *      :fatal  = level 5 ; Error type
 *      :report = level 6 ; High general-purpose (non-error) type
 * 
 *    It's also possible to set a namespace-specific min-level by
 *    providing a vector that maps `ns-pattern`s to min-levels, e.g.:
 *    `[[#{"taoensso.*"} :error] ... [#{"*"} :debug]]`.
 * 
 *    Example `ns-pattern`s:
 *      #{}, "*", "foo.bar", "foo.bar.*", #{"foo" "bar.*"},
 *      {:allow #{"foo" "bar.*"} :deny #{"foo.*.bar.*"}}.
 * 
 *    See also `set-min-ns-level!` for a helper tool.
 * 
 *  :ns-filter
 *    Logging will occur only if a logging call's namespace is permitted
 *    by this ns-filter. Possible values:
 * 
 *      - Arbitrary (fn may-log-ns? [ns]) predicate fn.
 *      - An `ns-pattern` (see :min-level docs above).
 * 
 *    Useful for turning off logging in noisy libraries, etc.
 * 
 *  :middleware
 *    Vector of simple (fn [data]) -> ?new-data fns (applied left->right)
 *    that transform the data map dispatched to appender fns. If any middleware
 *    returns nil, NO dispatch will occur (i.e. the event will be filtered).
 * 
 *    Useful for layering advanced functionality. Similar to Ring middleware.
 * 
 *  :timestamp-opts ; Config map, see `default-timestamp-opts`
 *  :output-fn      ; (fn [data]) -> final output for use by appenders,
 *                  ; see `default-output-fn` for example
 *  :output-opts    ; Optional map added to data sent to output-fn
 * 
 *  :appenders ; {<appender-id> <appender-map>}
 * 
 *    Where each appender-map has keys:
 *      :enabled?        ; Must be truthy to log
 *      :min-level       ; Optional *additional* appender-specific min-level
 *      :ns-filter       ; Optional *additional* appender-specific ns-filter
 * 
 *      :async?          ; Dispatch using agent? Useful for slow appenders (clj only)
 *                       ; Tip: consider calling (shutdown-agents) as part of your
 *                       ; application shutdown if you have this enabled for any
 *                       ; appenders.
 * 
 *      :rate-limit      ; [[<ncalls-limit> <window-msecs>] ...], or nil
 *                       ; Appender will noop a call after exceeding given number
 *                       ; of the "same" calls within given rolling window/s.
 *                       ;
 *                       ; Example:
 *                       ;   [[100  (encore/ms :mins  1)]
 *                       ;    [1000 (encore/ms :hours 1)]] will noop a call after:
 *                       ;
 *                       ;   - >100  "same" calls in 1 rolling minute, or
 *                       ;   - >1000 "same" calls in 1 rolling hour
 *                       ;
 *                       ; "Same" calls are identified by default as the
 *                       ; combined hash of:
 *                       ;   - Callsite (i.e. each individual Timbre macro form)
 *                       ;   - Logging level
 *                       ;   - All arguments provided for logging
 *                       ;
 *                       ; You can manually override call identification:
 *                       ;   (timbre/infof ^:meta {:id "my-limiter-call-id"} ...)
 *                       ;
 * 
 *      :timestamp-opts  ; Optional appender-specific override for top-level option
 *      :output-fn       ; Optional appender-specific override for top-level option
 *      :output-opts     ; Optional appender-specific override for top-level option
 * 
 *      :fn              ; (fn [data]) -> side-effects, with keys described below
 * 
 *   LOG DATA
 *  A single map with keys:
 *    :config          ; Entire active config map
 *    :context         ; `*context*` value at log time (see `with-context`)
 *    :appender-id     ; Id of appender currently dispatching
 *    :appender        ; Entire map of appender currently dispatching
 *    :instant         ; Platform date (java.util.Date or js/Date)
 *    :level           ; Call's level keyword (e.g. :info) (>= active min-level)
 *    :error-level?    ; Is level e/o #{:error :fatal}?
 *    :spying?         ; Is call occuring via the `spy` macro?
 *    :?ns-str         ; String,  or nil
 *    :?file           ; String,  or nil
 *    :?line           ; Integer, or nil ; Waiting on CLJ-865
 *    :?err            ; First-arg platform error, or nil
 *    :?meta           ; First-arg map when it has ^:meta metadata, used as a
 *                       way of passing advanced per-call options to appenders
 *    :vargs           ; Vector of raw args provided to logging call
 *    :timestamp_      ; Forceable - string
 *    :hostname_       ; Forceable - string (clj only)
 *    :output-fn       ; (fn [data]) -> final output for use by appenders
 *    :output_         ; Forceable result of calling (output-fn <this-data-map>)
 * 
 *    **NB** - any keys not specifically documented here should be
 *    considered private / subject to change without notice.
 * 
 *   COMPILE-TIME LEVEL/NS ELISION
 *  To control :min-level and :ns-filter at compile-time, use:
 * 
 *    - `taoensso.timbre.min-level.edn`  JVM property (read as EDN)
 *    - `taoensso.timbre.ns-pattern.edn` JVM property (read as EDN)
 * 
 *    - `TAOENSSO_TIMBRE_MIN_LEVEL_EDN`  env var      (read as EDN)
 *    - `TAOENSSO_TIMBRE_NS_PATTERN_EDN` env var      (read as EDN)
 * 
 *  Note that compile-time options will OVERRIDE options in `*config*`.
 * 
 *   DEBUGGING INITIAL CONFIG
 *  See `:_init-config` for information re: Timbre's config on initial load.
 *  These keys are set only once on initial load, and changing them will
 *  have no effect:
 *    :loaded-from-source  ; e/o #{:default :prop :res :res-env}
 *    :compile-time-config ; {:keys [min-level ns-filter]} for compile-time elision
 */
taoensso.timbre._STAR_config_STAR_ = taoensso.timbre.default_config;
}
taoensso.timbre.console__QMARK_appender = taoensso.timbre.appenders.core.console_appender;

taoensso.timbre.ordered_levels = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$trace,cljs.core.cst$kw$debug,cljs.core.cst$kw$info,cljs.core.cst$kw$warn,cljs.core.cst$kw$error,cljs.core.cst$kw$fatal,cljs.core.cst$kw$report], null);

taoensso.timbre.log_QMARK_ = taoensso.timbre.may_log_QMARK_;

/**
 * DEPRECATED, prefer `default-config`
 */
taoensso.timbre.example_config = taoensso.timbre.default_config;

taoensso.timbre.logging_enabled_QMARK_ = (function taoensso$timbre$logging_enabled_QMARK_(level,compile_time_ns){
return taoensso.timbre.may_log_QMARK_.cljs$core$IFn$_invoke$arity$2(level,cljs.core.str.cljs$core$IFn$_invoke$arity$1(compile_time_ns));
});

taoensso.timbre.str_println = (function taoensso$timbre$str_println(var_args){
var args__4742__auto__ = [];
var len__4736__auto___14470 = arguments.length;
var i__4737__auto___14471 = (0);
while(true){
if((i__4737__auto___14471 < len__4736__auto___14470)){
args__4742__auto__.push((arguments[i__4737__auto___14471]));

var G__14472 = (i__4737__auto___14471 + (1));
i__4737__auto___14471 = G__14472;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return taoensso.timbre.str_println.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(taoensso.timbre.str_println.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return taoensso.timbre.str_join.cljs$core$IFn$_invoke$arity$1(xs);
}));

(taoensso.timbre.str_println.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(taoensso.timbre.str_println.cljs$lang$applyTo = (function (seq14467){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14467));
}));


/**
 * DEPRECATED, prefer `set-min-level!`
 */
taoensso.timbre.set_level_BANG_ = (function taoensso$timbre$set_level_BANG_(level){
return taoensso.timbre.swap_config_BANG_((function (m){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,cljs.core.cst$kw$min_DASH_level,level);
}));
});

/**
 * DEPRECATED, use `default-output-error-fn` instead
 */
taoensso.timbre.stacktrace = (function taoensso$timbre$stacktrace(var_args){
var G__14469 = arguments.length;
switch (G__14469) {
case 1:
return taoensso.timbre.stacktrace.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.timbre.stacktrace.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.timbre.stacktrace.cljs$core$IFn$_invoke$arity$1 = (function (err){
return taoensso.timbre.stacktrace.cljs$core$IFn$_invoke$arity$2(err,null);
}));

(taoensso.timbre.stacktrace.cljs$core$IFn$_invoke$arity$2 = (function (err,opts){
return taoensso.timbre.default_output_error_fn(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$_QMARK_err,err,cljs.core.cst$kw$output_DASH_opts,opts], null));
}));

(taoensso.timbre.stacktrace.cljs$lang$maxFixedArity = 2);

