// Compiled by ClojureScript 1.10.764 {:static-fns true, :optimize-constants true}
goog.provide('speclj.report.progress');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('speclj.config');
goog.require('speclj.platform');
goog.require('speclj.reporting');
goog.require('speclj.results');
speclj.report.progress.full_name = (function speclj$report$progress$full_name(characteristic){
var context = cljs.core.deref(characteristic.parent);
var name = characteristic.name;
while(true){
if(cljs.core.truth_(context)){
var G__21114 = cljs.core.deref(context.parent);
var G__21115 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(context.name)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('');
context = G__21114;
name = G__21115;
continue;
} else {
return name;
}
break;
}
});
speclj.report.progress.print_failure = (function speclj$report$progress$print_failure(id,result){
var characteristic = result.characteristic;
var failure = result.failure;
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([speclj.reporting.indent.cljs$core$IFn$_invoke$arity$variadic((1),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id,") ",speclj.report.progress.full_name(characteristic)], 0))], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__21116 = speclj.reporting.indent.cljs$core$IFn$_invoke$arity$variadic(2.5,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([speclj.platform.error_message(failure)], 0));
return (speclj.reporting.red.cljs$core$IFn$_invoke$arity$1 ? speclj.reporting.red.cljs$core$IFn$_invoke$arity$1(G__21116) : speclj.reporting.red.call(null,G__21116));
})()], 0));

if(speclj.platform.failure_QMARK_(failure)){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__21117 = speclj.reporting.indent.cljs$core$IFn$_invoke$arity$variadic(2.5,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([speclj.platform.failure_source(failure)], 0));
return (speclj.reporting.grey.cljs$core$IFn$_invoke$arity$1 ? speclj.reporting.grey.cljs$core$IFn$_invoke$arity$1(G__21117) : speclj.reporting.grey.call(null,G__21117));
})()], 0));
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__21118 = speclj.reporting.indent.cljs$core$IFn$_invoke$arity$variadic(2.5,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([speclj.reporting.stack_trace_str(failure)], 0));
return (speclj.reporting.grey.cljs$core$IFn$_invoke$arity$1 ? speclj.reporting.grey.cljs$core$IFn$_invoke$arity$1(G__21118) : speclj.reporting.grey.call(null,G__21118));
})()], 0));
}
});
speclj.report.progress.print_failures = (function speclj$report$progress$print_failures(failures){
if(cljs.core.seq(failures)){
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Failures:"], 0));
} else {
}

var n__4613__auto__ = cljs.core.count(failures);
var i = (0);
while(true){
if((i < n__4613__auto__)){
speclj.report.progress.print_failure((i + (1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(failures,i));

var G__21119 = (i + (1));
i = G__21119;
continue;
} else {
return null;
}
break;
}
});
speclj.report.progress.print_pendings = (function speclj$report$progress$print_pendings(pending_results){
if(cljs.core.truth_(speclj.config._STAR_omit_pending_QMARK__STAR_)){
return null;
} else {
if(cljs.core.seq(pending_results)){
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Pending:"], 0));
} else {
}

var seq__21120 = cljs.core.seq(pending_results);
var chunk__21121 = null;
var count__21122 = (0);
var i__21123 = (0);
while(true){
if((i__21123 < count__21122)){
var result = chunk__21121.cljs$core$IIndexed$_nth$arity$2(null,i__21123);
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__21130 = ["  ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(speclj.report.progress.full_name(result.characteristic))].join('');
return (speclj.reporting.yellow.cljs$core$IFn$_invoke$arity$1 ? speclj.reporting.yellow.cljs$core$IFn$_invoke$arity$1(G__21130) : speclj.reporting.yellow.call(null,G__21130));
})()], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__21131 = ["    ; ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(speclj.platform.error_message(result.exception))].join('');
return (speclj.reporting.grey.cljs$core$IFn$_invoke$arity$1 ? speclj.reporting.grey.cljs$core$IFn$_invoke$arity$1(G__21131) : speclj.reporting.grey.call(null,G__21131));
})()], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__21132 = ["    ; ",speclj.platform.failure_source(result.exception)].join('');
return (speclj.reporting.grey.cljs$core$IFn$_invoke$arity$1 ? speclj.reporting.grey.cljs$core$IFn$_invoke$arity$1(G__21132) : speclj.reporting.grey.call(null,G__21132));
})()], 0));


var G__21136 = seq__21120;
var G__21137 = chunk__21121;
var G__21138 = count__21122;
var G__21139 = (i__21123 + (1));
seq__21120 = G__21136;
chunk__21121 = G__21137;
count__21122 = G__21138;
i__21123 = G__21139;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__21120);
if(temp__5804__auto__){
var seq__21120__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21120__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__21120__$1);
var G__21140 = cljs.core.chunk_rest(seq__21120__$1);
var G__21141 = c__4556__auto__;
var G__21142 = cljs.core.count(c__4556__auto__);
var G__21143 = (0);
seq__21120 = G__21140;
chunk__21121 = G__21141;
count__21122 = G__21142;
i__21123 = G__21143;
continue;
} else {
var result = cljs.core.first(seq__21120__$1);
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__21133 = ["  ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(speclj.report.progress.full_name(result.characteristic))].join('');
return (speclj.reporting.yellow.cljs$core$IFn$_invoke$arity$1 ? speclj.reporting.yellow.cljs$core$IFn$_invoke$arity$1(G__21133) : speclj.reporting.yellow.call(null,G__21133));
})()], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__21134 = ["    ; ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(speclj.platform.error_message(result.exception))].join('');
return (speclj.reporting.grey.cljs$core$IFn$_invoke$arity$1 ? speclj.reporting.grey.cljs$core$IFn$_invoke$arity$1(G__21134) : speclj.reporting.grey.call(null,G__21134));
})()], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__21135 = ["    ; ",speclj.platform.failure_source(result.exception)].join('');
return (speclj.reporting.grey.cljs$core$IFn$_invoke$arity$1 ? speclj.reporting.grey.cljs$core$IFn$_invoke$arity$1(G__21135) : speclj.reporting.grey.call(null,G__21135));
})()], 0));


var G__21144 = cljs.core.next(seq__21120__$1);
var G__21145 = null;
var G__21146 = (0);
var G__21147 = (0);
seq__21120 = G__21144;
chunk__21121 = G__21145;
count__21122 = G__21146;
i__21123 = G__21147;
continue;
}
} else {
return null;
}
}
break;
}
}
});
speclj.report.progress.print_errors = (function speclj$report$progress$print_errors(error_results){
if(cljs.core.seq(error_results)){
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Errors:"], 0));
} else {
}

var seq__21148_21172 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.iterate(cljs.core.inc,(1)),error_results)));
var chunk__21149_21173 = null;
var count__21150_21174 = (0);
var i__21151_21175 = (0);
while(true){
if((i__21151_21175 < count__21150_21174)){
var vec__21162_21176 = chunk__21149_21173.cljs$core$IIndexed$_nth$arity$2(null,i__21151_21175);
var number_21177 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21162_21176,(0),null);
var result_21178 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21162_21176,(1),null);
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([speclj.reporting.indent.cljs$core$IFn$_invoke$arity$variadic((1),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([number_21177,") ",(function (){var G__21165 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(result_21178.exception);
return (speclj.reporting.red.cljs$core$IFn$_invoke$arity$1 ? speclj.reporting.red.cljs$core$IFn$_invoke$arity$1(G__21165) : speclj.reporting.red.call(null,G__21165));
})()], 0))], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__21166 = speclj.reporting.indent.cljs$core$IFn$_invoke$arity$variadic(2.5,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([speclj.reporting.stack_trace_str(result_21178.exception)], 0));
return (speclj.reporting.grey.cljs$core$IFn$_invoke$arity$1 ? speclj.reporting.grey.cljs$core$IFn$_invoke$arity$1(G__21166) : speclj.reporting.grey.call(null,G__21166));
})()], 0));


var G__21179 = seq__21148_21172;
var G__21180 = chunk__21149_21173;
var G__21181 = count__21150_21174;
var G__21182 = (i__21151_21175 + (1));
seq__21148_21172 = G__21179;
chunk__21149_21173 = G__21180;
count__21150_21174 = G__21181;
i__21151_21175 = G__21182;
continue;
} else {
var temp__5804__auto___21183 = cljs.core.seq(seq__21148_21172);
if(temp__5804__auto___21183){
var seq__21148_21184__$1 = temp__5804__auto___21183;
if(cljs.core.chunked_seq_QMARK_(seq__21148_21184__$1)){
var c__4556__auto___21185 = cljs.core.chunk_first(seq__21148_21184__$1);
var G__21186 = cljs.core.chunk_rest(seq__21148_21184__$1);
var G__21187 = c__4556__auto___21185;
var G__21188 = cljs.core.count(c__4556__auto___21185);
var G__21189 = (0);
seq__21148_21172 = G__21186;
chunk__21149_21173 = G__21187;
count__21150_21174 = G__21188;
i__21151_21175 = G__21189;
continue;
} else {
var vec__21167_21190 = cljs.core.first(seq__21148_21184__$1);
var number_21191 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21167_21190,(0),null);
var result_21192 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21167_21190,(1),null);
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([speclj.reporting.indent.cljs$core$IFn$_invoke$arity$variadic((1),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([number_21191,") ",(function (){var G__21170 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(result_21192.exception);
return (speclj.reporting.red.cljs$core$IFn$_invoke$arity$1 ? speclj.reporting.red.cljs$core$IFn$_invoke$arity$1(G__21170) : speclj.reporting.red.call(null,G__21170));
})()], 0))], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__21171 = speclj.reporting.indent.cljs$core$IFn$_invoke$arity$variadic(2.5,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([speclj.reporting.stack_trace_str(result_21192.exception)], 0));
return (speclj.reporting.grey.cljs$core$IFn$_invoke$arity$1 ? speclj.reporting.grey.cljs$core$IFn$_invoke$arity$1(G__21171) : speclj.reporting.grey.call(null,G__21171));
})()], 0));


var G__21193 = cljs.core.next(seq__21148_21184__$1);
var G__21194 = null;
var G__21195 = (0);
var G__21196 = (0);
seq__21148_21172 = G__21193;
chunk__21149_21173 = G__21194;
count__21150_21174 = G__21195;
i__21151_21175 = G__21196;
continue;
}
} else {
}
}
break;
}

return cljs.core.flush();
});
speclj.report.progress.print_duration = (function speclj$report$progress$print_duration(results){
cljs.core.println();

return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Finished in",speclj.platform.format_seconds(speclj.reporting.tally_time(results)),"seconds"], 0));
});
speclj.report.progress.color_fn_for = (function speclj$report$progress$color_fn_for(result_map){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.count(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$fail.cljs$core$IFn$_invoke$arity$1(result_map),cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(result_map))))){
return speclj.reporting.red;
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.count(cljs.core.cst$kw$pending.cljs$core$IFn$_invoke$arity$1(result_map)))){
return speclj.reporting.yellow;
} else {
return speclj.reporting.green;

}
}
});
speclj.report.progress.apply_pending_tally = (function speclj$report$progress$apply_pending_tally(report,tally){
if((cljs.core.cst$kw$pending.cljs$core$IFn$_invoke$arity$1(tally) > (0))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(report,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$pending.cljs$core$IFn$_invoke$arity$1(tally))," pending"].join(''));
} else {
return report;
}
});
speclj.report.progress.apply_error_tally = (function speclj$report$progress$apply_error_tally(report,tally){
if((cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(tally) > (0))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(report,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(tally))," errors"].join(''));
} else {
return report;
}
});
speclj.report.progress.describe_counts_for = (function speclj$report$progress$describe_counts_for(result_map){
var tally = cljs.core.zipmap(cljs.core.keys(result_map),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,cljs.core.vals(result_map)));
var always_on_counts = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.vals(tally)))," examples"].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$fail.cljs$core$IFn$_invoke$arity$1(tally))," failures"].join('')], null);
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",speclj.report.progress.apply_error_tally(speclj.report.progress.apply_pending_tally(always_on_counts,tally),tally));
});
speclj.report.progress.print_tally = (function speclj$report$progress$print_tally(result_map){
var color_fn = speclj.report.progress.color_fn_for(result_map);
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__21197 = speclj.report.progress.describe_counts_for(result_map);
return (color_fn.cljs$core$IFn$_invoke$arity$1 ? color_fn.cljs$core$IFn$_invoke$arity$1(G__21197) : color_fn.call(null,G__21197));
})()], 0));
});
speclj.report.progress.print_summary = (function speclj$report$progress$print_summary(results){
var result_map = speclj.results.categorize(results);
speclj.report.progress.print_failures(cljs.core.cst$kw$fail.cljs$core$IFn$_invoke$arity$1(result_map));

speclj.report.progress.print_pendings(cljs.core.cst$kw$pending.cljs$core$IFn$_invoke$arity$1(result_map));

speclj.report.progress.print_errors(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(result_map));

speclj.report.progress.print_duration(results);

return speclj.report.progress.print_tally(result_map);
});

/**
* @constructor
 * @implements {speclj.reporting.Reporter}
*/
speclj.report.progress.ProgressReporter = (function (){
});
(speclj.report.progress.ProgressReporter.prototype.speclj$reporting$Reporter$ = cljs.core.PROTOCOL_SENTINEL);

(speclj.report.progress.ProgressReporter.prototype.speclj$reporting$Reporter$report_message$arity$2 = (function (this$,message){
var self__ = this;
var this$__$1 = this;
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([message], 0));

return cljs.core.flush();
}));

(speclj.report.progress.ProgressReporter.prototype.speclj$reporting$Reporter$report_description$arity$2 = (function (this$,description){
var self__ = this;
var this$__$1 = this;
return null;
}));

(speclj.report.progress.ProgressReporter.prototype.speclj$reporting$Reporter$report_pass$arity$2 = (function (this$,result){
var self__ = this;
var this$__$1 = this;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(speclj.reporting.green.cljs$core$IFn$_invoke$arity$1 ? speclj.reporting.green.cljs$core$IFn$_invoke$arity$1(".") : speclj.reporting.green.call(null,"."))], 0));

return cljs.core.flush();
}));

(speclj.report.progress.ProgressReporter.prototype.speclj$reporting$Reporter$report_pending$arity$2 = (function (this$,result){
var self__ = this;
var this$__$1 = this;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(speclj.reporting.yellow.cljs$core$IFn$_invoke$arity$1 ? speclj.reporting.yellow.cljs$core$IFn$_invoke$arity$1("*") : speclj.reporting.yellow.call(null,"*"))], 0));

return cljs.core.flush();
}));

(speclj.report.progress.ProgressReporter.prototype.speclj$reporting$Reporter$report_fail$arity$2 = (function (this$,result){
var self__ = this;
var this$__$1 = this;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(speclj.reporting.red.cljs$core$IFn$_invoke$arity$1 ? speclj.reporting.red.cljs$core$IFn$_invoke$arity$1("F") : speclj.reporting.red.call(null,"F"))], 0));

return cljs.core.flush();
}));

(speclj.report.progress.ProgressReporter.prototype.speclj$reporting$Reporter$report_error$arity$2 = (function (this$,result){
var self__ = this;
var this$__$1 = this;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(speclj.reporting.red.cljs$core$IFn$_invoke$arity$1 ? speclj.reporting.red.cljs$core$IFn$_invoke$arity$1("E") : speclj.reporting.red.call(null,"E"))], 0));

return cljs.core.flush();
}));

(speclj.report.progress.ProgressReporter.prototype.speclj$reporting$Reporter$report_runs$arity$2 = (function (this$,results){
var self__ = this;
var this$__$1 = this;
cljs.core.println();

return speclj.report.progress.print_summary(results);
}));

(speclj.report.progress.ProgressReporter.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(speclj.report.progress.ProgressReporter.cljs$lang$type = true);

(speclj.report.progress.ProgressReporter.cljs$lang$ctorStr = "speclj.report.progress/ProgressReporter");

(speclj.report.progress.ProgressReporter.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"speclj.report.progress/ProgressReporter");
}));

/**
 * Positional factory function for speclj.report.progress/ProgressReporter.
 */
speclj.report.progress.__GT_ProgressReporter = (function speclj$report$progress$__GT_ProgressReporter(){
return (new speclj.report.progress.ProgressReporter());
});

speclj.report.progress.new_progress_reporter = (function speclj$report$progress$new_progress_reporter(){
return (new speclj.report.progress.ProgressReporter());
});
cljs.core.reset_BANG_(speclj.config.default_reporters,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [speclj.report.progress.new_progress_reporter()], null));
