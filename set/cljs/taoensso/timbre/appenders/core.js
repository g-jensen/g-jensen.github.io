// Compiled by ClojureScript 1.10.764 {:static-fns true, :optimize-constants true}
goog.provide('taoensso.timbre.appenders.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('taoensso.encore');
/**
 * Returns a simple `println` appender for Clojure/Script.
 *   Use with ClojureScript requires that `cljs.core/*print-fn*` be set.
 * 
 *   :stream (clj only) - e/o #{:auto :*out* :*err* :std-err :std-out <io-stream>}.
 */
taoensso.timbre.appenders.core.println_appender = (function taoensso$timbre$appenders$core$println_appender(var_args){
var args__4742__auto__ = [];
var len__4736__auto___14128 = arguments.length;
var i__4737__auto___14129 = (0);
while(true){
if((i__4737__auto___14129 < len__4736__auto___14128)){
args__4742__auto__.push((arguments[i__4737__auto___14129]));

var G__14130 = (i__4737__auto___14129 + (1));
i__4737__auto___14129 = G__14130;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return taoensso.timbre.appenders.core.println_appender.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(taoensso.timbre.appenders.core.println_appender.cljs$core$IFn$_invoke$arity$variadic = (function (p__14122){
var vec__14123 = p__14122;
var _opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14123,(0),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$enabled_QMARK_,true,cljs.core.cst$kw$fn,(function (data){
var map__14126 = data;
var map__14126__$1 = (((((!((map__14126 == null))))?(((((map__14126.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14126.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14126):map__14126);
var output_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14126__$1,cljs.core.cst$kw$output_);
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.force(output_)], 0));
})], null);
}));

(taoensso.timbre.appenders.core.println_appender.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(taoensso.timbre.appenders.core.println_appender.cljs$lang$applyTo = (function (seq14121){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14121));
}));

/**
 * Returns a simple js/console appender for ClojureScript.
 * 
 *   Raw logging
 * 
 *     There's 2 ways that Timbre can log to a web browser console:
 *       1. As a prepared output string (default)
 *       2. As a list of raw argument objects
 * 
 *     The benefit of #2 is that it allows the browser to offer type-specific
 *     object printing and inspection (e.g. for maps, etc.).
 * 
 *     Raw logging can be enabled or disabled as follows:
 * 
 *       1. On a per-call basis via a special 1st argument to your logging call:
 *            (info ^:meta {:raw-console? true} arg1 ...)
 * 
 *       2. Via middleware, by adding an option to your log data:
 *            (fn my-middleware [data] (assoc data :raw-console? true))
 * 
 *       3. Via an option provided to this appender constructor:
 *            (console-appender {:raw-console? <bool>})
 * 
 *   Ignoring library / "blackbox" code for accurate line numbers, etc.
 * 
 *     Most web browsers offer a feature to ignore library or "blackbox" code
 *     in their debugger.
 * 
 *     You'll probably want to ignore at least the following:
 *       `/taoensso/timbre/appenders/core\.js$` ; Timbre console appender
 *       `/taoensso/timbre\.js$`                ; Timbre core
 *       `/cljs/core\.js$`                      ; ClojureScript core
 * 
 *     Depending on the browser, you can usually set up these exclusions through
 *     right-click popups and/or through a configurable list in a settings menu.
 * 
 *     For example:
 *       https://developer.chrome.com/docs/devtools/settings/ignore-list/
 *       https://webkit.org/web-inspector/web-inspector-settings/
 *       https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/ignoring_sources/index.html
 *       etc.
 */
taoensso.timbre.appenders.core.console_appender = (function taoensso$timbre$appenders$core$console_appender(var_args){
var args__4742__auto__ = [];
var len__4736__auto___14142 = arguments.length;
var i__4737__auto___14143 = (0);
while(true){
if((i__4737__auto___14143 < len__4736__auto___14142)){
args__4742__auto__.push((arguments[i__4737__auto___14143]));

var G__14144 = (i__4737__auto___14143 + (1));
i__4737__auto___14143 = G__14144;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return taoensso.timbre.appenders.core.console_appender.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(taoensso.timbre.appenders.core.console_appender.cljs$core$IFn$_invoke$arity$variadic = (function (p__14132){
var vec__14133 = p__14132;
var map__14136 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14133,(0),null);
var map__14136__$1 = (((((!((map__14136 == null))))?(((((map__14136.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14136.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14136):map__14136);
var raw_console_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14136__$1,cljs.core.cst$kw$raw_DASH_console_QMARK_);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$enabled_QMARK_,true,cljs.core.cst$kw$fn,(((!((typeof console !== 'undefined'))))?(function (data){
return null;
}):(function (){var level__GT_logger = (function (level){
var or__4126__auto__ = (function (){var G__14139 = level;
var G__14139__$1 = (((G__14139 instanceof cljs.core.Keyword))?G__14139.fqn:null);
switch (G__14139__$1) {
case "trace":
return console.trace;

break;
case "debug":
return console.debug;

break;
case "info":
return console.info;

break;
case "warn":
return console.warn;

break;
case "error":
return console.error;

break;
case "fatal":
return console.error;

break;
case "report":
return console.info;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14139__$1)].join('')));

}
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return console.log;
}
});
return (function (data){
var temp__5804__auto__ = level__GT_logger(cljs.core.cst$kw$level.cljs$core$IFn$_invoke$arity$1(data));
if(cljs.core.truth_(temp__5804__auto__)){
var logger = temp__5804__auto__;
var temp__5802__auto__ = (function (){var _QMARK_meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.cst$kw$_QMARK_meta);
if(cljs.core.contains_QMARK_(_QMARK_meta,cljs.core.cst$kw$raw_DASH_console_QMARK_)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(_QMARK_meta,cljs.core.cst$kw$raw_DASH_console_QMARK_);
} else {
if(cljs.core.contains_QMARK_(data,cljs.core.cst$kw$raw_DASH_console_QMARK_)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.cst$kw$raw_DASH_console_QMARK_);
} else {
return raw_console_QMARK_;
}
}
})();
if(cljs.core.truth_(temp__5802__auto__)){
var raw_console_QMARK___$1 = temp__5802__auto__;
var output = (function (){var G__14141 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.cst$kw$msg_,"",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$_QMARK_err,null], 0));
var fexpr__14140 = cljs.core.cst$kw$output_DASH_fn.cljs$core$IFn$_invoke$arity$1(data);
return (fexpr__14140.cljs$core$IFn$_invoke$arity$1 ? fexpr__14140.cljs$core$IFn$_invoke$arity$1(G__14141) : fexpr__14140.call(null,G__14141));
})();
var args = (function (){var vargs = cljs.core.cst$kw$vargs.cljs$core$IFn$_invoke$arity$1(data);
var temp__5802__auto____$1 = cljs.core.cst$kw$_QMARK_err.cljs$core$IFn$_invoke$arity$1(data);
if(cljs.core.truth_(temp__5802__auto____$1)){
var err = temp__5802__auto____$1;
return cljs.core.cons(output,cljs.core.cons(err,vargs));
} else {
return cljs.core.cons(output,vargs);
}
})();
return logger.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(args));
} else {
return logger.call(console,cljs.core.force(cljs.core.cst$kw$output_.cljs$core$IFn$_invoke$arity$1(data)));
}
} else {
return null;
}
});
})())], null);
}));

(taoensso.timbre.appenders.core.console_appender.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(taoensso.timbre.appenders.core.console_appender.cljs$lang$applyTo = (function (seq14131){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14131));
}));

/**
 * DEPRECATED
 */
taoensso.timbre.appenders.core.console__QMARK_appender = taoensso.timbre.appenders.core.console_appender;
