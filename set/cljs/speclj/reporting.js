// Compiled by ClojureScript 1.10.764 {:static-fns true, :optimize-constants true}
goog.provide('speclj.reporting');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('speclj.config');
goog.require('speclj.platform');
goog.require('speclj.results');
speclj.reporting.tally_time = (function speclj$reporting$tally_time(results){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__17555_SHARP_){
return p1__17555_SHARP_.seconds;
}),results));
});

/**
 * @interface
 */
speclj.reporting.Reporter = function(){};

var speclj$reporting$Reporter$report_message$dyn_17556 = (function (reporter,message){
var x__4428__auto__ = (((reporter == null))?null:reporter);
var m__4429__auto__ = (speclj.reporting.report_message[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(reporter,message) : m__4429__auto__.call(null,reporter,message));
} else {
var m__4426__auto__ = (speclj.reporting.report_message["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(reporter,message) : m__4426__auto__.call(null,reporter,message));
} else {
throw cljs.core.missing_protocol("Reporter.report-message",reporter);
}
}
});
speclj.reporting.report_message = (function speclj$reporting$report_message(reporter,message){
if((((!((reporter == null)))) && ((!((reporter.speclj$reporting$Reporter$report_message$arity$2 == null)))))){
return reporter.speclj$reporting$Reporter$report_message$arity$2(reporter,message);
} else {
return speclj$reporting$Reporter$report_message$dyn_17556(reporter,message);
}
});

var speclj$reporting$Reporter$report_description$dyn_17557 = (function (this$,description){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (speclj.reporting.report_description[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(this$,description) : m__4429__auto__.call(null,this$,description));
} else {
var m__4426__auto__ = (speclj.reporting.report_description["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(this$,description) : m__4426__auto__.call(null,this$,description));
} else {
throw cljs.core.missing_protocol("Reporter.report-description",this$);
}
}
});
speclj.reporting.report_description = (function speclj$reporting$report_description(this$,description){
if((((!((this$ == null)))) && ((!((this$.speclj$reporting$Reporter$report_description$arity$2 == null)))))){
return this$.speclj$reporting$Reporter$report_description$arity$2(this$,description);
} else {
return speclj$reporting$Reporter$report_description$dyn_17557(this$,description);
}
});

var speclj$reporting$Reporter$report_pass$dyn_17558 = (function (this$,result){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (speclj.reporting.report_pass[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(this$,result) : m__4429__auto__.call(null,this$,result));
} else {
var m__4426__auto__ = (speclj.reporting.report_pass["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(this$,result) : m__4426__auto__.call(null,this$,result));
} else {
throw cljs.core.missing_protocol("Reporter.report-pass",this$);
}
}
});
speclj.reporting.report_pass = (function speclj$reporting$report_pass(this$,result){
if((((!((this$ == null)))) && ((!((this$.speclj$reporting$Reporter$report_pass$arity$2 == null)))))){
return this$.speclj$reporting$Reporter$report_pass$arity$2(this$,result);
} else {
return speclj$reporting$Reporter$report_pass$dyn_17558(this$,result);
}
});

var speclj$reporting$Reporter$report_pending$dyn_17559 = (function (this$,result){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (speclj.reporting.report_pending[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(this$,result) : m__4429__auto__.call(null,this$,result));
} else {
var m__4426__auto__ = (speclj.reporting.report_pending["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(this$,result) : m__4426__auto__.call(null,this$,result));
} else {
throw cljs.core.missing_protocol("Reporter.report-pending",this$);
}
}
});
speclj.reporting.report_pending = (function speclj$reporting$report_pending(this$,result){
if((((!((this$ == null)))) && ((!((this$.speclj$reporting$Reporter$report_pending$arity$2 == null)))))){
return this$.speclj$reporting$Reporter$report_pending$arity$2(this$,result);
} else {
return speclj$reporting$Reporter$report_pending$dyn_17559(this$,result);
}
});

var speclj$reporting$Reporter$report_fail$dyn_17560 = (function (this$,result){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (speclj.reporting.report_fail[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(this$,result) : m__4429__auto__.call(null,this$,result));
} else {
var m__4426__auto__ = (speclj.reporting.report_fail["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(this$,result) : m__4426__auto__.call(null,this$,result));
} else {
throw cljs.core.missing_protocol("Reporter.report-fail",this$);
}
}
});
speclj.reporting.report_fail = (function speclj$reporting$report_fail(this$,result){
if((((!((this$ == null)))) && ((!((this$.speclj$reporting$Reporter$report_fail$arity$2 == null)))))){
return this$.speclj$reporting$Reporter$report_fail$arity$2(this$,result);
} else {
return speclj$reporting$Reporter$report_fail$dyn_17560(this$,result);
}
});

var speclj$reporting$Reporter$report_runs$dyn_17561 = (function (this$,results){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (speclj.reporting.report_runs[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(this$,results) : m__4429__auto__.call(null,this$,results));
} else {
var m__4426__auto__ = (speclj.reporting.report_runs["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(this$,results) : m__4426__auto__.call(null,this$,results));
} else {
throw cljs.core.missing_protocol("Reporter.report-runs",this$);
}
}
});
speclj.reporting.report_runs = (function speclj$reporting$report_runs(this$,results){
if((((!((this$ == null)))) && ((!((this$.speclj$reporting$Reporter$report_runs$arity$2 == null)))))){
return this$.speclj$reporting$Reporter$report_runs$arity$2(this$,results);
} else {
return speclj$reporting$Reporter$report_runs$dyn_17561(this$,results);
}
});

var speclj$reporting$Reporter$report_error$dyn_17562 = (function (this$,exception){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (speclj.reporting.report_error[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(this$,exception) : m__4429__auto__.call(null,this$,exception));
} else {
var m__4426__auto__ = (speclj.reporting.report_error["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(this$,exception) : m__4426__auto__.call(null,this$,exception));
} else {
throw cljs.core.missing_protocol("Reporter.report-error",this$);
}
}
});
speclj.reporting.report_error = (function speclj$reporting$report_error(this$,exception){
if((((!((this$ == null)))) && ((!((this$.speclj$reporting$Reporter$report_error$arity$2 == null)))))){
return this$.speclj$reporting$Reporter$report_error$arity$2(this$,exception);
} else {
return speclj$reporting$Reporter$report_error$dyn_17562(this$,exception);
}
});

if((typeof speclj !== 'undefined') && (typeof speclj.reporting !== 'undefined') && (typeof speclj.reporting.report_run !== 'undefined')){
} else {
speclj.reporting.report_run = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,(function (){var fexpr__17563 = cljs.core.get_global_hierarchy;
return (fexpr__17563.cljs$core$IFn$_invoke$arity$0 ? fexpr__17563.cljs$core$IFn$_invoke$arity$0() : fexpr__17563.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("speclj.reporting","report-run"),(function (result,reporters){
return cljs.core.type(result);
}),cljs.core.cst$kw$default,hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
speclj.reporting.report_run.cljs$core$IMultiFn$_add_method$arity$3(null,speclj.results.PassResult,(function (result,reporters){
var seq__17564 = cljs.core.seq(reporters);
var chunk__17565 = null;
var count__17566 = (0);
var i__17567 = (0);
while(true){
if((i__17567 < count__17566)){
var reporter = chunk__17565.cljs$core$IIndexed$_nth$arity$2(null,i__17567);
speclj.reporting.report_pass(reporter,result);


var G__17568 = seq__17564;
var G__17569 = chunk__17565;
var G__17570 = count__17566;
var G__17571 = (i__17567 + (1));
seq__17564 = G__17568;
chunk__17565 = G__17569;
count__17566 = G__17570;
i__17567 = G__17571;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17564);
if(temp__5804__auto__){
var seq__17564__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17564__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__17564__$1);
var G__17572 = cljs.core.chunk_rest(seq__17564__$1);
var G__17573 = c__4556__auto__;
var G__17574 = cljs.core.count(c__4556__auto__);
var G__17575 = (0);
seq__17564 = G__17572;
chunk__17565 = G__17573;
count__17566 = G__17574;
i__17567 = G__17575;
continue;
} else {
var reporter = cljs.core.first(seq__17564__$1);
speclj.reporting.report_pass(reporter,result);


var G__17576 = cljs.core.next(seq__17564__$1);
var G__17577 = null;
var G__17578 = (0);
var G__17579 = (0);
seq__17564 = G__17576;
chunk__17565 = G__17577;
count__17566 = G__17578;
i__17567 = G__17579;
continue;
}
} else {
return null;
}
}
break;
}
}));
speclj.reporting.report_run.cljs$core$IMultiFn$_add_method$arity$3(null,speclj.results.FailResult,(function (result,reporters){
var seq__17580 = cljs.core.seq(reporters);
var chunk__17581 = null;
var count__17582 = (0);
var i__17583 = (0);
while(true){
if((i__17583 < count__17582)){
var reporter = chunk__17581.cljs$core$IIndexed$_nth$arity$2(null,i__17583);
speclj.reporting.report_fail(reporter,result);


var G__17584 = seq__17580;
var G__17585 = chunk__17581;
var G__17586 = count__17582;
var G__17587 = (i__17583 + (1));
seq__17580 = G__17584;
chunk__17581 = G__17585;
count__17582 = G__17586;
i__17583 = G__17587;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17580);
if(temp__5804__auto__){
var seq__17580__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17580__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__17580__$1);
var G__17588 = cljs.core.chunk_rest(seq__17580__$1);
var G__17589 = c__4556__auto__;
var G__17590 = cljs.core.count(c__4556__auto__);
var G__17591 = (0);
seq__17580 = G__17588;
chunk__17581 = G__17589;
count__17582 = G__17590;
i__17583 = G__17591;
continue;
} else {
var reporter = cljs.core.first(seq__17580__$1);
speclj.reporting.report_fail(reporter,result);


var G__17592 = cljs.core.next(seq__17580__$1);
var G__17593 = null;
var G__17594 = (0);
var G__17595 = (0);
seq__17580 = G__17592;
chunk__17581 = G__17593;
count__17582 = G__17594;
i__17583 = G__17595;
continue;
}
} else {
return null;
}
}
break;
}
}));
speclj.reporting.report_run.cljs$core$IMultiFn$_add_method$arity$3(null,speclj.results.PendingResult,(function (result,reporters){
var seq__17596 = cljs.core.seq(reporters);
var chunk__17597 = null;
var count__17598 = (0);
var i__17599 = (0);
while(true){
if((i__17599 < count__17598)){
var reporter = chunk__17597.cljs$core$IIndexed$_nth$arity$2(null,i__17599);
speclj.reporting.report_pending(reporter,result);


var G__17600 = seq__17596;
var G__17601 = chunk__17597;
var G__17602 = count__17598;
var G__17603 = (i__17599 + (1));
seq__17596 = G__17600;
chunk__17597 = G__17601;
count__17598 = G__17602;
i__17599 = G__17603;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17596);
if(temp__5804__auto__){
var seq__17596__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17596__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__17596__$1);
var G__17604 = cljs.core.chunk_rest(seq__17596__$1);
var G__17605 = c__4556__auto__;
var G__17606 = cljs.core.count(c__4556__auto__);
var G__17607 = (0);
seq__17596 = G__17604;
chunk__17597 = G__17605;
count__17598 = G__17606;
i__17599 = G__17607;
continue;
} else {
var reporter = cljs.core.first(seq__17596__$1);
speclj.reporting.report_pending(reporter,result);


var G__17608 = cljs.core.next(seq__17596__$1);
var G__17609 = null;
var G__17610 = (0);
var G__17611 = (0);
seq__17596 = G__17608;
chunk__17597 = G__17609;
count__17598 = G__17610;
i__17599 = G__17611;
continue;
}
} else {
return null;
}
}
break;
}
}));
speclj.reporting.report_run.cljs$core$IMultiFn$_add_method$arity$3(null,speclj.results.ErrorResult,(function (result,reporters){
var seq__17612 = cljs.core.seq(reporters);
var chunk__17613 = null;
var count__17614 = (0);
var i__17615 = (0);
while(true){
if((i__17615 < count__17614)){
var reporter = chunk__17613.cljs$core$IIndexed$_nth$arity$2(null,i__17615);
speclj.reporting.report_error(reporter,result);


var G__17616 = seq__17612;
var G__17617 = chunk__17613;
var G__17618 = count__17614;
var G__17619 = (i__17615 + (1));
seq__17612 = G__17616;
chunk__17613 = G__17617;
count__17614 = G__17618;
i__17615 = G__17619;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17612);
if(temp__5804__auto__){
var seq__17612__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17612__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__17612__$1);
var G__17620 = cljs.core.chunk_rest(seq__17612__$1);
var G__17621 = c__4556__auto__;
var G__17622 = cljs.core.count(c__4556__auto__);
var G__17623 = (0);
seq__17612 = G__17620;
chunk__17613 = G__17621;
count__17614 = G__17622;
i__17615 = G__17623;
continue;
} else {
var reporter = cljs.core.first(seq__17612__$1);
speclj.reporting.report_error(reporter,result);


var G__17624 = cljs.core.next(seq__17612__$1);
var G__17625 = null;
var G__17626 = (0);
var G__17627 = (0);
seq__17612 = G__17624;
chunk__17613 = G__17625;
count__17614 = G__17626;
i__17615 = G__17627;
continue;
}
} else {
return null;
}
}
break;
}
}));
speclj.reporting.stylizer = (function speclj$reporting$stylizer(code){
return (function (text){
if(cljs.core.truth_(speclj.config._STAR_color_QMARK__STAR_)){
return ["\u001B[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(code),"m",cljs.core.str.cljs$core$IFn$_invoke$arity$1(text),"\u001B[0m"].join('');
} else {
return text;
}
});
});
speclj.reporting.red = speclj.reporting.stylizer("31");
speclj.reporting.green = speclj.reporting.stylizer("32");
speclj.reporting.yellow = speclj.reporting.stylizer("33");
speclj.reporting.grey = speclj.reporting.stylizer("90");
speclj.reporting.print_elides = (function speclj$reporting$print_elides(n){
if((n > (0))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["\t...",n,"stack levels elided ..."], 0));
} else {
return null;
}
});
speclj.reporting.print_stack_levels = (function speclj$reporting$print_stack_levels(exception){
var levels_17628 = speclj.platform.stack_trace(exception);
var elides_17629 = (0);
while(true){
if(cljs.core.seq(levels_17628)){
var level_17630 = cljs.core.first(levels_17628);
if(speclj.platform.elide_level_QMARK_(level_17630)){
var G__17631 = cljs.core.rest(levels_17628);
var G__17632 = (elides_17629 + (1));
levels_17628 = G__17631;
elides_17629 = G__17632;
continue;
} else {
speclj.reporting.print_elides(elides_17629);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(level_17630)], 0));

var G__17633 = cljs.core.rest(levels_17628);
var G__17634 = (0);
levels_17628 = G__17633;
elides_17629 = G__17634;
continue;
}
} else {
speclj.reporting.print_elides(elides_17629);
}
break;
}

var temp__5802__auto__ = speclj.platform.cause(exception);
if(cljs.core.truth_(temp__5802__auto__)){
var cause = temp__5802__auto__;
return (speclj.reporting.print_exception.cljs$core$IFn$_invoke$arity$2 ? speclj.reporting.print_exception.cljs$core$IFn$_invoke$arity$2("Caused by:",cause) : speclj.reporting.print_exception.call(null,"Caused by:",cause));
} else {
return null;
}
});
speclj.reporting.print_exception = (function speclj$reporting$print_exception(prefix,exception){
if(cljs.core.truth_(prefix)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prefix,cljs.core.str.cljs$core$IFn$_invoke$arity$1(exception)], 0));
} else {
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(exception)], 0));
}

return speclj.reporting.print_stack_levels(exception);
});
speclj.reporting.stack_trace_str = (function speclj$reporting$stack_trace_str(exception){
var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__17635_17639 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__17636_17640 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__17637_17641 = true;
var _STAR_print_fn_STAR__temp_val__17638_17642 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__17637_17641);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__17638_17642);

try{if(cljs.core.truth_(speclj.config._STAR_full_stack_trace_QMARK__STAR_)){
speclj.platform.print_stack_trace(exception);
} else {
speclj.reporting.print_exception(null,exception);
}
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__17636_17640);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__17635_17639);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
});
speclj.reporting.prefix = (function speclj$reporting$prefix(var_args){
var args__4742__auto__ = [];
var len__4736__auto___17646 = arguments.length;
var i__4737__auto___17647 = (0);
while(true){
if((i__4737__auto___17647 < len__4736__auto___17646)){
args__4742__auto__.push((arguments[i__4737__auto___17647]));

var G__17648 = (i__4737__auto___17647 + (1));
i__4737__auto___17647 = G__17648;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return speclj.reporting.prefix.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(speclj.reporting.prefix.cljs$core$IFn$_invoke$arity$variadic = (function (pre,args){
var value = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args);
var lines = clojure.string.split.cljs$core$IFn$_invoke$arity$2(value,/[\r\n]+/);
var prefixed_lines = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__17643_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(pre),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__17643_SHARP_)].join('');
}),lines);
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(speclj.platform.endl,prefixed_lines);
}));

(speclj.reporting.prefix.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(speclj.reporting.prefix.cljs$lang$applyTo = (function (seq17644){
var G__17645 = cljs.core.first(seq17644);
var seq17644__$1 = cljs.core.next(seq17644);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17645,seq17644__$1);
}));

speclj.reporting.indent = (function speclj$reporting$indent(var_args){
var args__4742__auto__ = [];
var len__4736__auto___17651 = arguments.length;
var i__4737__auto___17652 = (0);
while(true){
if((i__4737__auto___17652 < len__4736__auto___17651)){
args__4742__auto__.push((arguments[i__4737__auto___17652]));

var G__17653 = (i__4737__auto___17652 + (1));
i__4737__auto___17652 = G__17653;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return speclj.reporting.indent.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(speclj.reporting.indent.cljs$core$IFn$_invoke$arity$variadic = (function (n,args){
var spaces = ((n * 2.0) | (0));
var indention = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p,_){
return [" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p)].join('');
}),"",cljs.core.range.cljs$core$IFn$_invoke$arity$1(spaces));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(speclj.reporting.prefix,indention,args);
}));

(speclj.reporting.indent.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(speclj.reporting.indent.cljs$lang$applyTo = (function (seq17649){
var G__17650 = cljs.core.first(seq17649);
var seq17649__$1 = cljs.core.next(seq17649);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17650,seq17649__$1);
}));

speclj.reporting.report_description_STAR_ = (function speclj$reporting$report_description_STAR_(reporters,description){
var seq__17654 = cljs.core.seq(reporters);
var chunk__17655 = null;
var count__17656 = (0);
var i__17657 = (0);
while(true){
if((i__17657 < count__17656)){
var reporter = chunk__17655.cljs$core$IIndexed$_nth$arity$2(null,i__17657);
speclj.reporting.report_description(reporter,description);


var G__17658 = seq__17654;
var G__17659 = chunk__17655;
var G__17660 = count__17656;
var G__17661 = (i__17657 + (1));
seq__17654 = G__17658;
chunk__17655 = G__17659;
count__17656 = G__17660;
i__17657 = G__17661;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17654);
if(temp__5804__auto__){
var seq__17654__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17654__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__17654__$1);
var G__17662 = cljs.core.chunk_rest(seq__17654__$1);
var G__17663 = c__4556__auto__;
var G__17664 = cljs.core.count(c__4556__auto__);
var G__17665 = (0);
seq__17654 = G__17662;
chunk__17655 = G__17663;
count__17656 = G__17664;
i__17657 = G__17665;
continue;
} else {
var reporter = cljs.core.first(seq__17654__$1);
speclj.reporting.report_description(reporter,description);


var G__17666 = cljs.core.next(seq__17654__$1);
var G__17667 = null;
var G__17668 = (0);
var G__17669 = (0);
seq__17654 = G__17666;
chunk__17655 = G__17667;
count__17656 = G__17668;
i__17657 = G__17669;
continue;
}
} else {
return null;
}
}
break;
}
});
speclj.reporting.report_runs_STAR_ = (function speclj$reporting$report_runs_STAR_(reporters,results){
var seq__17670 = cljs.core.seq(reporters);
var chunk__17671 = null;
var count__17672 = (0);
var i__17673 = (0);
while(true){
if((i__17673 < count__17672)){
var reporter = chunk__17671.cljs$core$IIndexed$_nth$arity$2(null,i__17673);
speclj.reporting.report_runs(reporter,results);


var G__17674 = seq__17670;
var G__17675 = chunk__17671;
var G__17676 = count__17672;
var G__17677 = (i__17673 + (1));
seq__17670 = G__17674;
chunk__17671 = G__17675;
count__17672 = G__17676;
i__17673 = G__17677;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17670);
if(temp__5804__auto__){
var seq__17670__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17670__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__17670__$1);
var G__17678 = cljs.core.chunk_rest(seq__17670__$1);
var G__17679 = c__4556__auto__;
var G__17680 = cljs.core.count(c__4556__auto__);
var G__17681 = (0);
seq__17670 = G__17678;
chunk__17671 = G__17679;
count__17672 = G__17680;
i__17673 = G__17681;
continue;
} else {
var reporter = cljs.core.first(seq__17670__$1);
speclj.reporting.report_runs(reporter,results);


var G__17682 = cljs.core.next(seq__17670__$1);
var G__17683 = null;
var G__17684 = (0);
var G__17685 = (0);
seq__17670 = G__17682;
chunk__17671 = G__17683;
count__17672 = G__17684;
i__17673 = G__17685;
continue;
}
} else {
return null;
}
}
break;
}
});
speclj.reporting.report_message_STAR_ = (function speclj$reporting$report_message_STAR_(reporters,message){
var seq__17686 = cljs.core.seq(reporters);
var chunk__17687 = null;
var count__17688 = (0);
var i__17689 = (0);
while(true){
if((i__17689 < count__17688)){
var reporter = chunk__17687.cljs$core$IIndexed$_nth$arity$2(null,i__17689);
speclj.reporting.report_message(reporter,message);


var G__17690 = seq__17686;
var G__17691 = chunk__17687;
var G__17692 = count__17688;
var G__17693 = (i__17689 + (1));
seq__17686 = G__17690;
chunk__17687 = G__17691;
count__17688 = G__17692;
i__17689 = G__17693;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17686);
if(temp__5804__auto__){
var seq__17686__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17686__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__17686__$1);
var G__17694 = cljs.core.chunk_rest(seq__17686__$1);
var G__17695 = c__4556__auto__;
var G__17696 = cljs.core.count(c__4556__auto__);
var G__17697 = (0);
seq__17686 = G__17694;
chunk__17687 = G__17695;
count__17688 = G__17696;
i__17689 = G__17697;
continue;
} else {
var reporter = cljs.core.first(seq__17686__$1);
speclj.reporting.report_message(reporter,message);


var G__17698 = cljs.core.next(seq__17686__$1);
var G__17699 = null;
var G__17700 = (0);
var G__17701 = (0);
seq__17686 = G__17698;
chunk__17687 = G__17699;
count__17688 = G__17700;
i__17689 = G__17701;
continue;
}
} else {
return null;
}
}
break;
}
});
speclj.reporting.report_error_STAR_ = (function speclj$reporting$report_error_STAR_(reporters,exception){
var seq__17702 = cljs.core.seq(reporters);
var chunk__17703 = null;
var count__17704 = (0);
var i__17705 = (0);
while(true){
if((i__17705 < count__17704)){
var reporter = chunk__17703.cljs$core$IIndexed$_nth$arity$2(null,i__17705);
speclj.reporting.report_error(reporter,exception);


var G__17706 = seq__17702;
var G__17707 = chunk__17703;
var G__17708 = count__17704;
var G__17709 = (i__17705 + (1));
seq__17702 = G__17706;
chunk__17703 = G__17707;
count__17704 = G__17708;
i__17705 = G__17709;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17702);
if(temp__5804__auto__){
var seq__17702__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17702__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__17702__$1);
var G__17710 = cljs.core.chunk_rest(seq__17702__$1);
var G__17711 = c__4556__auto__;
var G__17712 = cljs.core.count(c__4556__auto__);
var G__17713 = (0);
seq__17702 = G__17710;
chunk__17703 = G__17711;
count__17704 = G__17712;
i__17705 = G__17713;
continue;
} else {
var reporter = cljs.core.first(seq__17702__$1);
speclj.reporting.report_error(reporter,exception);


var G__17714 = cljs.core.next(seq__17702__$1);
var G__17715 = null;
var G__17716 = (0);
var G__17717 = (0);
seq__17702 = G__17714;
chunk__17703 = G__17715;
count__17704 = G__17716;
i__17705 = G__17717;
continue;
}
} else {
return null;
}
}
break;
}
});
