// Compiled by ClojureScript 1.10.764 {:static-fns true, :optimize-constants true}
goog.provide('c3kit.apron.log');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('c3kit.apron.corec');
goog.require('clojure.string');
goog.require('taoensso.timbre');
c3kit.apron.log.captured_logs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
c3kit.apron.log.test_levels = (function c3kit$apron$log$test_levels(msg){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$report,"c3kit.apron.log",null,null,cljs.core.cst$kw$p,cljs.core.cst$kw$auto,(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null);
}),null)),null,(15),null);

taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$fatal,"c3kit.apron.log",null,null,cljs.core.cst$kw$p,cljs.core.cst$kw$auto,(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null);
}),null)),null,(16),null);

taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$error,"c3kit.apron.log",null,null,cljs.core.cst$kw$p,cljs.core.cst$kw$auto,(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null);
}),null)),null,(17),null);

taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$warn,"c3kit.apron.log",null,null,cljs.core.cst$kw$p,cljs.core.cst$kw$auto,(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null);
}),null)),null,(18),null);

taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$info,"c3kit.apron.log",null,null,cljs.core.cst$kw$p,cljs.core.cst$kw$auto,(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null);
}),null)),null,(19),null);

taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$debug,"c3kit.apron.log",null,null,cljs.core.cst$kw$p,cljs.core.cst$kw$auto,(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null);
}),null)),null,(20),null);

return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$trace,"c3kit.apron.log",null,null,cljs.core.cst$kw$p,cljs.core.cst$kw$auto,(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null);
}),null)),null,(21),null);
});
c3kit.apron.log.level = (function c3kit$apron$log$level(){
return cljs.core.cst$kw$min_DASH_level.cljs$core$IFn$_invoke$arity$1(taoensso.timbre._STAR_config_STAR_);
});
c3kit.apron.log.set_level_BANG_ = (function c3kit$apron$log$set_level_BANG_(new_level){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c3kit.apron.log.level(),new_level)){
return null;
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$report,"c3kit.apron.log",null,null,cljs.core.cst$kw$p,cljs.core.cst$kw$auto,(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["Setting log level: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new_level)].join('')], null);
}),null)),null,(22),null);

return taoensso.timbre.set_min_level_BANG_(new_level);
}
});
c3kit.apron.log.off_BANG_ = (function c3kit$apron$log$off_BANG_(){
return c3kit.apron.log.set_level_BANG_(cljs.core.cst$kw$report);
});
c3kit.apron.log.fatal_BANG_ = (function c3kit$apron$log$fatal_BANG_(){
return c3kit.apron.log.set_level_BANG_(cljs.core.cst$kw$fatal);
});
c3kit.apron.log.error_BANG_ = (function c3kit$apron$log$error_BANG_(){
return c3kit.apron.log.set_level_BANG_(cljs.core.cst$kw$error);
});
c3kit.apron.log.warn_BANG_ = (function c3kit$apron$log$warn_BANG_(){
return c3kit.apron.log.set_level_BANG_(cljs.core.cst$kw$warn);
});
c3kit.apron.log.info_BANG_ = (function c3kit$apron$log$info_BANG_(){
return c3kit.apron.log.set_level_BANG_(cljs.core.cst$kw$info);
});
c3kit.apron.log.debug_BANG_ = (function c3kit$apron$log$debug_BANG_(){
return c3kit.apron.log.set_level_BANG_(cljs.core.cst$kw$debug);
});
c3kit.apron.log.all_BANG_ = (function c3kit$apron$log$all_BANG_(){
return c3kit.apron.log.set_level_BANG_(cljs.core.cst$kw$trace);
});
c3kit.apron.log.parse_captured_logs = (function c3kit$apron$log$parse_captured_logs(){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__13682){
var vec__13683 = p__13682;
var config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13683,(0),null);
var level = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13683,(1),null);
var _QMARK_ns_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13683,(2),null);
var _QMARK_file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13683,(3),null);
var _QMARK_line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13683,(4),null);
var msg_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13683,(5),null);
var _QMARK_err = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13683,(6),null);
var vargs_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13683,(7),null);
var _QMARK_base_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13683,(8),null);
var callsite_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13683,(9),null);
var spying_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13683,(10),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$level,level,cljs.core.cst$kw$message,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.deref(vargs_))], null);
}),cljs.core.deref(c3kit.apron.log.captured_logs));
});
c3kit.apron.log.captured_logs_str = (function c3kit$apron$log$captured_logs_str(){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__13686_SHARP_){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",p1__13686_SHARP_);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__13687_SHARP_){
return cljs.core.deref(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__13687_SHARP_,(7)));
}),cljs.core.deref(c3kit.apron.log.captured_logs))));
});
c3kit.apron.log.table_spec = (function c3kit$apron$log$table_spec(var_args){
var args__4742__auto__ = [];
var len__4736__auto___13690 = arguments.length;
var i__4737__auto___13691 = (0);
while(true){
if((i__4737__auto___13691 < len__4736__auto___13690)){
args__4742__auto__.push((arguments[i__4737__auto___13691]));

var G__13692 = (i__4737__auto___13691 + (1));
i__4737__auto___13691 = G__13692;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return c3kit.apron.log.table_spec.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(c3kit.apron.log.table_spec.cljs$core$IFn$_invoke$arity$variadic = (function (cols){
var width = (cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,cols)) + cljs.core.count(cols));
var format_str = clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__13688_SHARP_){
return ["%-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__13688_SHARP_)),"s"].join('');
}),cols));
return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$cols,cols,cljs.core.cst$kw$format,format_str,cljs.core.cst$kw$width,width,cljs.core.cst$kw$title_DASH_fn,(function (title){
var pad = ((width - title.length()) / (2));
return [clojure.string.join.cljs$core$IFn$_invoke$arity$2("",cljs.core.take.cljs$core$IFn$_invoke$arity$2(pad,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(" "))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(title),"\n"].join('');
}),cljs.core.cst$kw$header,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(c3kit.apron.corec.formats,format_str),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cols))),"\n",clojure.string.join.cljs$core$IFn$_invoke$arity$2("",cljs.core.take.cljs$core$IFn$_invoke$arity$2(width,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1("-"))),"\n"].join('')], null);
}));

(c3kit.apron.log.table_spec.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(c3kit.apron.log.table_spec.cljs$lang$applyTo = (function (seq13689){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13689));
}));

/**
 * For ANSI color codes: https://en.wikipedia.org/wiki/ANSI_escape_code
 */
c3kit.apron.log.color_pr = (function c3kit$apron$log$color_pr(message,color){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\u001B[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(color),"m",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message),"\u001B[0m"].join('')], 0));
});
