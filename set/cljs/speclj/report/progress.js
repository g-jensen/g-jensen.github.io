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
var G__17720 = cljs.core.deref(context.parent);
var G__17721 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(context.name)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('');
context = G__17720;
name = G__17721;
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

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__17722 = speclj.reporting.indent.cljs$core$IFn$_invoke$arity$variadic(2.5,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([speclj.platform.error_message(failure)], 0));
return (speclj.reporting.red.cljs$core$IFn$_invoke$arity$1 ? speclj.reporting.red.cljs$core$IFn$_invoke$arity$1(G__17722) : speclj.reporting.red.call(null,G__17722));
})()], 0));

if(speclj.platform.failure_QMARK_(failure)){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__17723 = speclj.reporting.indent.cljs$core$IFn$_invoke$arity$variadic(2.5,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([speclj.platform.failure_source(failure)], 0));
return (speclj.reporting.grey.cljs$core$IFn$_invoke$arity$1 ? speclj.reporting.grey.cljs$core$IFn$_invoke$arity$1(G__17723) : speclj.reporting.grey.call(null,G__17723));
})()], 0));
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__17724 = speclj.reporting.indent.cljs$core$IFn$_invoke$arity$variadic(2.5,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([speclj.reporting.stack_trace_str(failure)], 0));
return (speclj.reporting.grey.cljs$core$IFn$_invoke$arity$1 ? speclj.reporting.grey.cljs$core$IFn$_invoke$arity$1(G__17724) : speclj.reporting.grey.call(null,G__17724));
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

var G__17725 = (i + (1));
i = G__17725;
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

var seq__17726 = cljs.core.seq(pending_results);
var chunk__17727 = null;
var count__17728 = (0);
var i__17729 = (0);
while(true){
if((i__17729 < count__17728)){
var result = chunk__17727.cljs$core$IIndexed$_nth$arity$2(null,i__17729);
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__17736 = ["  ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(speclj.report.progress.full_name(result.characteristic))].join('');
return (speclj.reporting.yellow.cljs$core$IFn$_invoke$arity$1 ? speclj.reporting.yellow.cljs$core$IFn$_invoke$arity$1(G__17736) : speclj.reporting.yellow.call(null,G__17736));
})()], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__17737 = ["    ; ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(speclj.platform.error_message(result.exception))].join('');
return (speclj.reporting.grey.cljs$core$IFn$_invoke$arity$1 ? speclj.reporting.grey.cljs$core$IFn$_invoke$arity$1(G__17737) : speclj.reporting.grey.call(null,G__17737));
})()], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__17738 = ["    ; ",speclj.platform.failure_source(result.exception)].join('');
return (speclj.reporting.grey.cljs$core$IFn$_invoke$arity$1 ? speclj.reporting.grey.cljs$core$IFn$_invoke$arity$1(G__17738) : speclj.reporting.grey.call(null,G__17738));
})()], 0));


var G__17742 = seq__17726;
var G__17743 = chunk__17727;
var G__17744 = count__17728;
var G__17745 = (i__17729 + (1));
seq__17726 = G__17742;
chunk__17727 = G__17743;
count__17728 = G__17744;
i__17729 = G__17745;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17726);
if(temp__5804__auto__){
var seq__17726__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17726__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__17726__$1);
var G__17746 = cljs.core.chunk_rest(seq__17726__$1);
var G__17747 = c__4556__auto__;
var G__17748 = cljs.core.count(c__4556__auto__);
var G__17749 = (0);
seq__17726 = G__17746;
chunk__17727 = G__17747;
count__17728 = G__17748;
i__17729 = G__17749;
continue;
} else {
var result = cljs.core.first(seq__17726__$1);
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__17739 = ["  ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(speclj.report.progress.full_name(result.characteristic))].join('');
return (speclj.reporting.yellow.cljs$core$IFn$_invoke$arity$1 ? speclj.reporting.yellow.cljs$core$IFn$_invoke$arity$1(G__17739) : speclj.reporting.yellow.call(null,G__17739));
})()], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__17740 = ["    ; ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(speclj.platform.error_message(result.exception))].join('');
return (speclj.reporting.grey.cljs$core$IFn$_invoke$arity$1 ? speclj.reporting.grey.cljs$core$IFn$_invoke$arity$1(G__17740) : speclj.reporting.grey.call(null,G__17740));
})()], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__17741 = ["    ; ",speclj.platform.failure_source(result.exception)].join('');
return (speclj.reporting.grey.cljs$core$IFn$_invoke$arity$1 ? speclj.reporting.grey.cljs$core$IFn$_invoke$arity$1(G__17741) : speclj.reporting.grey.call(null,G__17741));
})()], 0));


var G__17750 = cljs.core.next(seq__17726__$1);
var G__17751 = null;
var G__17752 = (0);
var G__17753 = (0);
seq__17726 = G__17750;
chunk__17727 = G__17751;
count__17728 = G__17752;
i__17729 = G__17753;
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

var seq__17754_17778 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.iterate(cljs.core.inc,(1)),error_results)));
var chunk__17755_17779 = null;
var count__17756_17780 = (0);
var i__17757_17781 = (0);
while(true){
if((i__17757_17781 < count__17756_17780)){
var vec__17768_17782 = chunk__17755_17779.cljs$core$IIndexed$_nth$arity$2(null,i__17757_17781);
var number_17783 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17768_17782,(0),null);
var result_17784 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17768_17782,(1),null);
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([speclj.reporting.indent.cljs$core$IFn$_invoke$arity$variadic((1),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([number_17783,") ",(function (){var G__17771 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(result_17784.exception);
return (speclj.reporting.red.cljs$core$IFn$_invoke$arity$1 ? speclj.reporting.red.cljs$core$IFn$_invoke$arity$1(G__17771) : speclj.reporting.red.call(null,G__17771));
})()], 0))], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__17772 = speclj.reporting.indent.cljs$core$IFn$_invoke$arity$variadic(2.5,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([speclj.reporting.stack_trace_str(result_17784.exception)], 0));
return (speclj.reporting.grey.cljs$core$IFn$_invoke$arity$1 ? speclj.reporting.grey.cljs$core$IFn$_invoke$arity$1(G__17772) : speclj.reporting.grey.call(null,G__17772));
})()], 0));


var G__17785 = seq__17754_17778;
var G__17786 = chunk__17755_17779;
var G__17787 = count__17756_17780;
var G__17788 = (i__17757_17781 + (1));
seq__17754_17778 = G__17785;
chunk__17755_17779 = G__17786;
count__17756_17780 = G__17787;
i__17757_17781 = G__17788;
continue;
} else {
var temp__5804__auto___17789 = cljs.core.seq(seq__17754_17778);
if(temp__5804__auto___17789){
var seq__17754_17790__$1 = temp__5804__auto___17789;
if(cljs.core.chunked_seq_QMARK_(seq__17754_17790__$1)){
var c__4556__auto___17791 = cljs.core.chunk_first(seq__17754_17790__$1);
var G__17792 = cljs.core.chunk_rest(seq__17754_17790__$1);
var G__17793 = c__4556__auto___17791;
var G__17794 = cljs.core.count(c__4556__auto___17791);
var G__17795 = (0);
seq__17754_17778 = G__17792;
chunk__17755_17779 = G__17793;
count__17756_17780 = G__17794;
i__17757_17781 = G__17795;
continue;
} else {
var vec__17773_17796 = cljs.core.first(seq__17754_17790__$1);
var number_17797 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17773_17796,(0),null);
var result_17798 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17773_17796,(1),null);
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([speclj.reporting.indent.cljs$core$IFn$_invoke$arity$variadic((1),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([number_17797,") ",(function (){var G__17776 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(result_17798.exception);
return (speclj.reporting.red.cljs$core$IFn$_invoke$arity$1 ? speclj.reporting.red.cljs$core$IFn$_invoke$arity$1(G__17776) : speclj.reporting.red.call(null,G__17776));
})()], 0))], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__17777 = speclj.reporting.indent.cljs$core$IFn$_invoke$arity$variadic(2.5,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([speclj.reporting.stack_trace_str(result_17798.exception)], 0));
return (speclj.reporting.grey.cljs$core$IFn$_invoke$arity$1 ? speclj.reporting.grey.cljs$core$IFn$_invoke$arity$1(G__17777) : speclj.reporting.grey.call(null,G__17777));
})()], 0));


var G__17799 = cljs.core.next(seq__17754_17790__$1);
var G__17800 = null;
var G__17801 = (0);
var G__17802 = (0);
seq__17754_17778 = G__17799;
chunk__17755_17779 = G__17800;
count__17756_17780 = G__17801;
i__17757_17781 = G__17802;
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
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__17803 = speclj.report.progress.describe_counts_for(result_map);
return (color_fn.cljs$core$IFn$_invoke$arity$1 ? color_fn.cljs$core$IFn$_invoke$arity$1(G__17803) : color_fn.call(null,G__17803));
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
