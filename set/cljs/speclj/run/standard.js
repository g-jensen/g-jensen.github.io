// Compiled by ClojureScript 1.10.764 {:static-fns true, :optimize-constants true}
goog.provide('speclj.run.standard');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('speclj.components');
goog.require('speclj.config');
goog.require('speclj.report.progress');
goog.require('speclj.reporting');
goog.require('speclj.results');
goog.require('speclj.running');
goog.require('speclj.tags');
speclj.run.standard.counter = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));

/**
* @constructor
 * @implements {speclj.running.Runner}
*/
speclj.run.standard.StandardRunner = (function (num,descriptions,results){
this.num = num;
this.descriptions = descriptions;
this.results = results;
});
(speclj.run.standard.StandardRunner.prototype.speclj$running$Runner$ = cljs.core.PROTOCOL_SENTINEL);

(speclj.run.standard.StandardRunner.prototype.speclj$running$Runner$run_directories$arity$3 = (function (this$,directories,reporters){
var self__ = this;
var this$__$1 = this;
return alert("StandardRunner.run-directories:  I don't know how to do this.");
}));

(speclj.run.standard.StandardRunner.prototype.speclj$running$Runner$submit_description$arity$2 = (function (this$,description){
var self__ = this;
var this$__$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.descriptions,cljs.core.conj,description);
}));

(speclj.run.standard.StandardRunner.prototype.speclj$running$Runner$run_description$arity$3 = (function (this$,description,reporters){
var self__ = this;
var this$__$1 = this;
var run_results = speclj.running.do_description(description,reporters);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.results,cljs.core.into,run_results);
}));

(speclj.run.standard.StandardRunner.prototype.speclj$running$Runner$run_and_report$arity$2 = (function (this$,reporters){
var self__ = this;
var this$__$1 = this;
var seq__18102_18106 = cljs.core.seq(speclj.running.filter_focused(cljs.core.deref(self__.descriptions)));
var chunk__18103_18107 = null;
var count__18104_18108 = (0);
var i__18105_18109 = (0);
while(true){
if((i__18105_18109 < count__18104_18108)){
var description_18110 = chunk__18103_18107.cljs$core$IIndexed$_nth$arity$2(null,i__18105_18109);
this$__$1.speclj$running$Runner$run_description$arity$3(null,description_18110,reporters);


var G__18111 = seq__18102_18106;
var G__18112 = chunk__18103_18107;
var G__18113 = count__18104_18108;
var G__18114 = (i__18105_18109 + (1));
seq__18102_18106 = G__18111;
chunk__18103_18107 = G__18112;
count__18104_18108 = G__18113;
i__18105_18109 = G__18114;
continue;
} else {
var temp__5804__auto___18115 = cljs.core.seq(seq__18102_18106);
if(temp__5804__auto___18115){
var seq__18102_18116__$1 = temp__5804__auto___18115;
if(cljs.core.chunked_seq_QMARK_(seq__18102_18116__$1)){
var c__4556__auto___18117 = cljs.core.chunk_first(seq__18102_18116__$1);
var G__18118 = cljs.core.chunk_rest(seq__18102_18116__$1);
var G__18119 = c__4556__auto___18117;
var G__18120 = cljs.core.count(c__4556__auto___18117);
var G__18121 = (0);
seq__18102_18106 = G__18118;
chunk__18103_18107 = G__18119;
count__18104_18108 = G__18120;
i__18105_18109 = G__18121;
continue;
} else {
var description_18122 = cljs.core.first(seq__18102_18116__$1);
this$__$1.speclj$running$Runner$run_description$arity$3(null,description_18122,reporters);


var G__18123 = cljs.core.next(seq__18102_18116__$1);
var G__18124 = null;
var G__18125 = (0);
var G__18126 = (0);
seq__18102_18106 = G__18123;
chunk__18103_18107 = G__18124;
count__18104_18108 = G__18125;
i__18105_18109 = G__18126;
continue;
}
} else {
}
}
break;
}

return speclj.reporting.report_runs_STAR_(reporters,cljs.core.deref(self__.results));
}));

(speclj.run.standard.StandardRunner.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$num,cljs.core.cst$sym$descriptions,cljs.core.cst$sym$results], null);
}));

(speclj.run.standard.StandardRunner.cljs$lang$type = true);

(speclj.run.standard.StandardRunner.cljs$lang$ctorStr = "speclj.run.standard/StandardRunner");

(speclj.run.standard.StandardRunner.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"speclj.run.standard/StandardRunner");
}));

/**
 * Positional factory function for speclj.run.standard/StandardRunner.
 */
speclj.run.standard.__GT_StandardRunner = (function speclj$run$standard$__GT_StandardRunner(num,descriptions,results){
return (new speclj.run.standard.StandardRunner(num,descriptions,results));
});

(speclj.run.standard.StandardRunner.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL);

(speclj.run.standard.StandardRunner.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (x,writer,opts){
var x__$1 = this;
cljs.core._write(writer,["#<speclj.run.standard.StandardRunner(num: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x__$1.num),", descriptions: "].join(''));

cljs.core._pr_writer(cljs.core.deref(x__$1.descriptions),writer,opts);

return cljs.core._write(writer,")>");
}));

(speclj.components.Description.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL);

(speclj.components.Description.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (x,writer,opts){
var x__$1 = this;
return cljs.core._write(writer,["#<speclj.component.Description(name: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x__$1.name),")>"].join(''));
}));
speclj.run.standard.new_standard_runner = (function speclj$run$standard$new_standard_runner(){
return (new speclj.run.standard.StandardRunner(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(speclj.run.standard.counter,cljs.core.inc),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY)));
});
cljs.core.reset_BANG_(speclj.config.default_runner_fn,speclj.run.standard.new_standard_runner);
cljs.core.reset_BANG_(speclj.config.default_runner,speclj.run.standard.new_standard_runner());
speclj.run.standard.armed = false;
speclj.run.standard.run_specs = (function speclj$run$standard$run_specs(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18128 = arguments.length;
var i__4737__auto___18129 = (0);
while(true){
if((i__4737__auto___18129 < len__4736__auto___18128)){
args__4742__auto__.push((arguments[i__4737__auto___18129]));

var G__18130 = (i__4737__auto___18129 + (1));
i__4737__auto___18129 = G__18130;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return speclj.run.standard.run_specs.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(speclj.run.standard.run_specs.cljs$core$IFn$_invoke$arity$variadic = (function (configurations){

if(speclj.run.standard.armed){
return speclj.config.with_config(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(speclj.config.default_config,cljs.core.cst$kw$runner),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,configurations)], 0)),(function (){
var temp__5802__auto___18131 = speclj.tags.describe_filter.cljs$core$IFn$_invoke$arity$0();
if(cljs.core.truth_(temp__5802__auto___18131)){
var filter_msg_18132 = temp__5802__auto___18131;
speclj.reporting.report_message_STAR_(speclj.config.active_reporters(),filter_msg_18132);
} else {
}

speclj.running.run_and_report(speclj.config.active_runner(),speclj.config.active_reporters());

return speclj.results.fail_count(cljs.core.deref(speclj.config.active_runner().results));
}));
} else {
return null;
}
}));

(speclj.run.standard.run_specs.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(speclj.run.standard.run_specs.cljs$lang$applyTo = (function (seq18127){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18127));
}));

