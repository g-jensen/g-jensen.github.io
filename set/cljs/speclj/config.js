// Compiled by ClojureScript 1.10.764 {:static-fns true, :optimize-constants true}
goog.provide('speclj.config');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('speclj.platform');
speclj.config.default_reporters = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
speclj.config.active_reporters = (function speclj$config$active_reporters(){
if(cljs.core.truth_(speclj.config._STAR_reporters_STAR_)){
return speclj.config._STAR_reporters_STAR_;
} else {
var temp__5802__auto__ = cljs.core.deref(speclj.config.default_reporters);
if(cljs.core.truth_(temp__5802__auto__)){
var reporters = temp__5802__auto__;
return reporters;
} else {
throw (new Error("*reporters* is unbound and no default value has been provided"));
}
}
});
speclj.config.default_runner = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
speclj.config.default_runner_fn = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
speclj.config.active_runner = (function speclj$config$active_runner(){
if(cljs.core.truth_(speclj.config._STAR_runner_STAR_)){
return speclj.config._STAR_runner_STAR_;
} else {
var temp__5802__auto__ = cljs.core.deref(speclj.config.default_runner);
if(cljs.core.truth_(temp__5802__auto__)){
var runner = temp__5802__auto__;
return runner;
} else {
throw (new Error("*runner* is unbound and no default value has been provided"));
}
}
});
speclj.config._STAR_omit_pending_QMARK__STAR_ = false;
speclj.config._STAR_color_QMARK__STAR_ = false;
speclj.config._STAR_full_stack_trace_QMARK__STAR_ = false;
speclj.config._STAR_tag_filter_STAR_ = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$include,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$exclude,cljs.core.PersistentHashSet.EMPTY], null);
speclj.config.default_config = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$specs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["spec"], null),cljs.core.cst$kw$runner,"standard",cljs.core.cst$kw$reporters,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["progress"], null),cljs.core.cst$kw$tags,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$omit_DASH_pending,false], null);
speclj.config.config_bindings = (function speclj$config$config_bindings(){
throw "Not Supported in ClojureScript";
});
speclj.config.load_runner = (function speclj$config$load_runner(name){
try{return speclj.platform.dynamically_invoke(["speclj.run.",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),["new-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"-runner"].join(''));
}catch (e17516){var e = e17516;
throw (new Error(["Failed to load runner: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),e));
}});
speclj.config.load_reporter_by_name = (function speclj$config$load_reporter_by_name(name){
try{return speclj.platform.dynamically_invoke(["speclj.report.",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),["new-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"-reporter"].join(''));
}catch (e17517){var e = e17517;
throw (new Error(["Failed to load reporter: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''),e));
}});
speclj.config.load_reporter = (function speclj$config$load_reporter(name_or_object){
if(typeof name_or_object === 'string'){
return speclj.config.load_reporter_by_name(name_or_object);
} else {
return name_or_object;
}
});
speclj.config.parse_tags = (function speclj$config$parse_tags(values){
var result = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$includes,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$excludes,cljs.core.PersistentHashSet.EMPTY], null);
var values__$1 = values;
while(true){
if(cljs.core.seq(values__$1)){
var value = cljs.core.name(cljs.core.first(values__$1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("~",cljs.core.first(value))){
var G__17518 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$excludes], null),cljs.core.conj,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.rest(value))));
var G__17519 = cljs.core.rest(values__$1);
result = G__17518;
values__$1 = G__17519;
continue;
} else {
var G__17520 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$includes], null),cljs.core.conj,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(value));
var G__17521 = cljs.core.rest(values__$1);
result = G__17520;
values__$1 = G__17521;
continue;
}
} else {
return result;
}
break;
}
});
speclj.config.config_mappings = (function speclj$config$config_mappings(_){
throw "Not Supported in ClojureScript";
});
/**
 * Runs the given function with all the configurations set.  Useful in cljs because config-mappings can't be used.
 */
speclj.config.with_config = (function speclj$config$with_config(config,action){
var _STAR_runner_STAR__orig_val__17522 = speclj.config._STAR_runner_STAR_;
var _STAR_reporters_STAR__orig_val__17523 = speclj.config._STAR_reporters_STAR_;
var _STAR_specs_STAR__orig_val__17524 = speclj.config._STAR_specs_STAR_;
var _STAR_color_QMARK__STAR__orig_val__17525 = speclj.config._STAR_color_QMARK__STAR_;
var _STAR_omit_pending_QMARK__STAR__orig_val__17526 = speclj.config._STAR_omit_pending_QMARK__STAR_;
var _STAR_full_stack_trace_QMARK__STAR__orig_val__17527 = speclj.config._STAR_full_stack_trace_QMARK__STAR_;
var _STAR_tag_filter_STAR__orig_val__17528 = speclj.config._STAR_tag_filter_STAR_;
var _STAR_runner_STAR__temp_val__17529 = (cljs.core.truth_(cljs.core.cst$kw$runner.cljs$core$IFn$_invoke$arity$1(config))?(function (){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["loading runner in config"], 0));

return speclj.config.load_runner(cljs.core.cst$kw$runner.cljs$core$IFn$_invoke$arity$1(config));
})()
:speclj.config.active_runner());
var _STAR_reporters_STAR__temp_val__17530 = (cljs.core.truth_(cljs.core.cst$kw$reporters.cljs$core$IFn$_invoke$arity$1(config))?cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(speclj.config.load_reporter,cljs.core.cst$kw$reporters.cljs$core$IFn$_invoke$arity$1(config)):speclj.config.active_reporters());
var _STAR_specs_STAR__temp_val__17531 = cljs.core.cst$kw$specs.cljs$core$IFn$_invoke$arity$1(config);
var _STAR_color_QMARK__STAR__temp_val__17532 = cljs.core.cst$kw$color.cljs$core$IFn$_invoke$arity$1(config);
var _STAR_omit_pending_QMARK__STAR__temp_val__17533 = cljs.core.cst$kw$omit_DASH_pending.cljs$core$IFn$_invoke$arity$1(config);
var _STAR_full_stack_trace_QMARK__STAR__temp_val__17534 = (!((cljs.core.cst$kw$stacktrace.cljs$core$IFn$_invoke$arity$1(config) == null)));
var _STAR_tag_filter_STAR__temp_val__17535 = speclj.config.parse_tags(cljs.core.cst$kw$tags.cljs$core$IFn$_invoke$arity$1(config));
(speclj.config._STAR_runner_STAR_ = _STAR_runner_STAR__temp_val__17529);

(speclj.config._STAR_reporters_STAR_ = _STAR_reporters_STAR__temp_val__17530);

(speclj.config._STAR_specs_STAR_ = _STAR_specs_STAR__temp_val__17531);

(speclj.config._STAR_color_QMARK__STAR_ = _STAR_color_QMARK__STAR__temp_val__17532);

(speclj.config._STAR_omit_pending_QMARK__STAR_ = _STAR_omit_pending_QMARK__STAR__temp_val__17533);

(speclj.config._STAR_full_stack_trace_QMARK__STAR_ = _STAR_full_stack_trace_QMARK__STAR__temp_val__17534);

(speclj.config._STAR_tag_filter_STAR_ = _STAR_tag_filter_STAR__temp_val__17535);

try{return (action.cljs$core$IFn$_invoke$arity$0 ? action.cljs$core$IFn$_invoke$arity$0() : action.call(null));
}finally {(speclj.config._STAR_tag_filter_STAR_ = _STAR_tag_filter_STAR__orig_val__17528);

(speclj.config._STAR_full_stack_trace_QMARK__STAR_ = _STAR_full_stack_trace_QMARK__STAR__orig_val__17527);

(speclj.config._STAR_omit_pending_QMARK__STAR_ = _STAR_omit_pending_QMARK__STAR__orig_val__17526);

(speclj.config._STAR_color_QMARK__STAR_ = _STAR_color_QMARK__STAR__orig_val__17525);

(speclj.config._STAR_specs_STAR_ = _STAR_specs_STAR__orig_val__17524);

(speclj.config._STAR_reporters_STAR_ = _STAR_reporters_STAR__orig_val__17523);

(speclj.config._STAR_runner_STAR_ = _STAR_runner_STAR__orig_val__17522);
}});
