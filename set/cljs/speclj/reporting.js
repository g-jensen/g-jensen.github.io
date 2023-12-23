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
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__20863_SHARP_){
return p1__20863_SHARP_.seconds;
}),results));
});

/**
 * @interface
 */
speclj.reporting.Reporter = function(){};

var speclj$reporting$Reporter$report_message$dyn_20864 = (function (reporter,message){
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
return speclj$reporting$Reporter$report_message$dyn_20864(reporter,message);
}
});

var speclj$reporting$Reporter$report_description$dyn_20865 = (function (this$,description){
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
return speclj$reporting$Reporter$report_description$dyn_20865(this$,description);
}
});

var speclj$reporting$Reporter$report_pass$dyn_20866 = (function (this$,result){
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
return speclj$reporting$Reporter$report_pass$dyn_20866(this$,result);
}
});

var speclj$reporting$Reporter$report_pending$dyn_20867 = (function (this$,result){
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
return speclj$reporting$Reporter$report_pending$dyn_20867(this$,result);
}
});

var speclj$reporting$Reporter$report_fail$dyn_20868 = (function (this$,result){
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
return speclj$reporting$Reporter$report_fail$dyn_20868(this$,result);
}
});

var speclj$reporting$Reporter$report_runs$dyn_20869 = (function (this$,results){
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
return speclj$reporting$Reporter$report_runs$dyn_20869(this$,results);
}
});

var speclj$reporting$Reporter$report_error$dyn_20870 = (function (this$,exception){
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
return speclj$reporting$Reporter$report_error$dyn_20870(this$,exception);
}
});

if((typeof speclj !== 'undefined') && (typeof speclj.reporting !== 'undefined') && (typeof speclj.reporting.report_run !== 'undefined')){
} else {
speclj.reporting.report_run = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,(function (){var fexpr__20871 = cljs.core.get_global_hierarchy;
return (fexpr__20871.cljs$core$IFn$_invoke$arity$0 ? fexpr__20871.cljs$core$IFn$_invoke$arity$0() : fexpr__20871.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("speclj.reporting","report-run"),(function (result,reporters){
return cljs.core.type(result);
}),cljs.core.cst$kw$default,hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
speclj.reporting.report_run.cljs$core$IMultiFn$_add_method$arity$3(null,speclj.results.PassResult,(function (result,reporters){
var seq__20872 = cljs.core.seq(reporters);
var chunk__20873 = null;
var count__20874 = (0);
var i__20875 = (0);
while(true){
if((i__20875 < count__20874)){
var reporter = chunk__20873.cljs$core$IIndexed$_nth$arity$2(null,i__20875);
speclj.reporting.report_pass(reporter,result);


var G__20876 = seq__20872;
var G__20877 = chunk__20873;
var G__20878 = count__20874;
var G__20879 = (i__20875 + (1));
seq__20872 = G__20876;
chunk__20873 = G__20877;
count__20874 = G__20878;
i__20875 = G__20879;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20872);
if(temp__5804__auto__){
var seq__20872__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20872__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__20872__$1);
var G__20880 = cljs.core.chunk_rest(seq__20872__$1);
var G__20881 = c__4556__auto__;
var G__20882 = cljs.core.count(c__4556__auto__);
var G__20883 = (0);
seq__20872 = G__20880;
chunk__20873 = G__20881;
count__20874 = G__20882;
i__20875 = G__20883;
continue;
} else {
var reporter = cljs.core.first(seq__20872__$1);
speclj.reporting.report_pass(reporter,result);


var G__20884 = cljs.core.next(seq__20872__$1);
var G__20885 = null;
var G__20886 = (0);
var G__20887 = (0);
seq__20872 = G__20884;
chunk__20873 = G__20885;
count__20874 = G__20886;
i__20875 = G__20887;
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
var seq__20888 = cljs.core.seq(reporters);
var chunk__20889 = null;
var count__20890 = (0);
var i__20891 = (0);
while(true){
if((i__20891 < count__20890)){
var reporter = chunk__20889.cljs$core$IIndexed$_nth$arity$2(null,i__20891);
speclj.reporting.report_fail(reporter,result);


var G__20892 = seq__20888;
var G__20893 = chunk__20889;
var G__20894 = count__20890;
var G__20895 = (i__20891 + (1));
seq__20888 = G__20892;
chunk__20889 = G__20893;
count__20890 = G__20894;
i__20891 = G__20895;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20888);
if(temp__5804__auto__){
var seq__20888__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20888__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__20888__$1);
var G__20896 = cljs.core.chunk_rest(seq__20888__$1);
var G__20897 = c__4556__auto__;
var G__20898 = cljs.core.count(c__4556__auto__);
var G__20899 = (0);
seq__20888 = G__20896;
chunk__20889 = G__20897;
count__20890 = G__20898;
i__20891 = G__20899;
continue;
} else {
var reporter = cljs.core.first(seq__20888__$1);
speclj.reporting.report_fail(reporter,result);


var G__20900 = cljs.core.next(seq__20888__$1);
var G__20901 = null;
var G__20902 = (0);
var G__20903 = (0);
seq__20888 = G__20900;
chunk__20889 = G__20901;
count__20890 = G__20902;
i__20891 = G__20903;
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
var seq__20904 = cljs.core.seq(reporters);
var chunk__20905 = null;
var count__20906 = (0);
var i__20907 = (0);
while(true){
if((i__20907 < count__20906)){
var reporter = chunk__20905.cljs$core$IIndexed$_nth$arity$2(null,i__20907);
speclj.reporting.report_pending(reporter,result);


var G__20908 = seq__20904;
var G__20909 = chunk__20905;
var G__20910 = count__20906;
var G__20911 = (i__20907 + (1));
seq__20904 = G__20908;
chunk__20905 = G__20909;
count__20906 = G__20910;
i__20907 = G__20911;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20904);
if(temp__5804__auto__){
var seq__20904__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20904__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__20904__$1);
var G__20912 = cljs.core.chunk_rest(seq__20904__$1);
var G__20913 = c__4556__auto__;
var G__20914 = cljs.core.count(c__4556__auto__);
var G__20915 = (0);
seq__20904 = G__20912;
chunk__20905 = G__20913;
count__20906 = G__20914;
i__20907 = G__20915;
continue;
} else {
var reporter = cljs.core.first(seq__20904__$1);
speclj.reporting.report_pending(reporter,result);


var G__20916 = cljs.core.next(seq__20904__$1);
var G__20917 = null;
var G__20918 = (0);
var G__20919 = (0);
seq__20904 = G__20916;
chunk__20905 = G__20917;
count__20906 = G__20918;
i__20907 = G__20919;
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
var seq__20920 = cljs.core.seq(reporters);
var chunk__20921 = null;
var count__20922 = (0);
var i__20923 = (0);
while(true){
if((i__20923 < count__20922)){
var reporter = chunk__20921.cljs$core$IIndexed$_nth$arity$2(null,i__20923);
speclj.reporting.report_error(reporter,result);


var G__20924 = seq__20920;
var G__20925 = chunk__20921;
var G__20926 = count__20922;
var G__20927 = (i__20923 + (1));
seq__20920 = G__20924;
chunk__20921 = G__20925;
count__20922 = G__20926;
i__20923 = G__20927;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20920);
if(temp__5804__auto__){
var seq__20920__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20920__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__20920__$1);
var G__20928 = cljs.core.chunk_rest(seq__20920__$1);
var G__20929 = c__4556__auto__;
var G__20930 = cljs.core.count(c__4556__auto__);
var G__20931 = (0);
seq__20920 = G__20928;
chunk__20921 = G__20929;
count__20922 = G__20930;
i__20923 = G__20931;
continue;
} else {
var reporter = cljs.core.first(seq__20920__$1);
speclj.reporting.report_error(reporter,result);


var G__20932 = cljs.core.next(seq__20920__$1);
var G__20933 = null;
var G__20934 = (0);
var G__20935 = (0);
seq__20920 = G__20932;
chunk__20921 = G__20933;
count__20922 = G__20934;
i__20923 = G__20935;
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
var levels_20936 = speclj.platform.stack_trace(exception);
var elides_20937 = (0);
while(true){
if(cljs.core.seq(levels_20936)){
var level_20938 = cljs.core.first(levels_20936);
if(speclj.platform.elide_level_QMARK_(level_20938)){
var G__20939 = cljs.core.rest(levels_20936);
var G__20940 = (elides_20937 + (1));
levels_20936 = G__20939;
elides_20937 = G__20940;
continue;
} else {
speclj.reporting.print_elides(elides_20937);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(level_20938)], 0));

var G__20941 = cljs.core.rest(levels_20936);
var G__20942 = (0);
levels_20936 = G__20941;
elides_20937 = G__20942;
continue;
}
} else {
speclj.reporting.print_elides(elides_20937);
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
var _STAR_print_newline_STAR__orig_val__20943_20947 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__20944_20948 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__20945_20949 = true;
var _STAR_print_fn_STAR__temp_val__20946_20950 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__20945_20949);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__20946_20950);

try{if(cljs.core.truth_(speclj.config._STAR_full_stack_trace_QMARK__STAR_)){
speclj.platform.print_stack_trace(exception);
} else {
speclj.reporting.print_exception(null,exception);
}
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__20944_20948);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__20943_20947);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
});
speclj.reporting.prefix = (function speclj$reporting$prefix(var_args){
var args__4742__auto__ = [];
var len__4736__auto___20954 = arguments.length;
var i__4737__auto___20955 = (0);
while(true){
if((i__4737__auto___20955 < len__4736__auto___20954)){
args__4742__auto__.push((arguments[i__4737__auto___20955]));

var G__20956 = (i__4737__auto___20955 + (1));
i__4737__auto___20955 = G__20956;
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
var prefixed_lines = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__20951_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(pre),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__20951_SHARP_)].join('');
}),lines);
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(speclj.platform.endl,prefixed_lines);
}));

(speclj.reporting.prefix.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(speclj.reporting.prefix.cljs$lang$applyTo = (function (seq20952){
var G__20953 = cljs.core.first(seq20952);
var seq20952__$1 = cljs.core.next(seq20952);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20953,seq20952__$1);
}));

speclj.reporting.indent = (function speclj$reporting$indent(var_args){
var args__4742__auto__ = [];
var len__4736__auto___20959 = arguments.length;
var i__4737__auto___20960 = (0);
while(true){
if((i__4737__auto___20960 < len__4736__auto___20959)){
args__4742__auto__.push((arguments[i__4737__auto___20960]));

var G__20961 = (i__4737__auto___20960 + (1));
i__4737__auto___20960 = G__20961;
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
(speclj.reporting.indent.cljs$lang$applyTo = (function (seq20957){
var G__20958 = cljs.core.first(seq20957);
var seq20957__$1 = cljs.core.next(seq20957);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20958,seq20957__$1);
}));

speclj.reporting.report_description_STAR_ = (function speclj$reporting$report_description_STAR_(reporters,description){
var seq__20962 = cljs.core.seq(reporters);
var chunk__20963 = null;
var count__20964 = (0);
var i__20965 = (0);
while(true){
if((i__20965 < count__20964)){
var reporter = chunk__20963.cljs$core$IIndexed$_nth$arity$2(null,i__20965);
speclj.reporting.report_description(reporter,description);


var G__20966 = seq__20962;
var G__20967 = chunk__20963;
var G__20968 = count__20964;
var G__20969 = (i__20965 + (1));
seq__20962 = G__20966;
chunk__20963 = G__20967;
count__20964 = G__20968;
i__20965 = G__20969;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20962);
if(temp__5804__auto__){
var seq__20962__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20962__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__20962__$1);
var G__20970 = cljs.core.chunk_rest(seq__20962__$1);
var G__20971 = c__4556__auto__;
var G__20972 = cljs.core.count(c__4556__auto__);
var G__20973 = (0);
seq__20962 = G__20970;
chunk__20963 = G__20971;
count__20964 = G__20972;
i__20965 = G__20973;
continue;
} else {
var reporter = cljs.core.first(seq__20962__$1);
speclj.reporting.report_description(reporter,description);


var G__20974 = cljs.core.next(seq__20962__$1);
var G__20975 = null;
var G__20976 = (0);
var G__20977 = (0);
seq__20962 = G__20974;
chunk__20963 = G__20975;
count__20964 = G__20976;
i__20965 = G__20977;
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
var seq__20978 = cljs.core.seq(reporters);
var chunk__20979 = null;
var count__20980 = (0);
var i__20981 = (0);
while(true){
if((i__20981 < count__20980)){
var reporter = chunk__20979.cljs$core$IIndexed$_nth$arity$2(null,i__20981);
speclj.reporting.report_runs(reporter,results);


var G__20982 = seq__20978;
var G__20983 = chunk__20979;
var G__20984 = count__20980;
var G__20985 = (i__20981 + (1));
seq__20978 = G__20982;
chunk__20979 = G__20983;
count__20980 = G__20984;
i__20981 = G__20985;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20978);
if(temp__5804__auto__){
var seq__20978__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20978__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__20978__$1);
var G__20986 = cljs.core.chunk_rest(seq__20978__$1);
var G__20987 = c__4556__auto__;
var G__20988 = cljs.core.count(c__4556__auto__);
var G__20989 = (0);
seq__20978 = G__20986;
chunk__20979 = G__20987;
count__20980 = G__20988;
i__20981 = G__20989;
continue;
} else {
var reporter = cljs.core.first(seq__20978__$1);
speclj.reporting.report_runs(reporter,results);


var G__20990 = cljs.core.next(seq__20978__$1);
var G__20991 = null;
var G__20992 = (0);
var G__20993 = (0);
seq__20978 = G__20990;
chunk__20979 = G__20991;
count__20980 = G__20992;
i__20981 = G__20993;
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
var seq__20994 = cljs.core.seq(reporters);
var chunk__20995 = null;
var count__20996 = (0);
var i__20997 = (0);
while(true){
if((i__20997 < count__20996)){
var reporter = chunk__20995.cljs$core$IIndexed$_nth$arity$2(null,i__20997);
speclj.reporting.report_message(reporter,message);


var G__20998 = seq__20994;
var G__20999 = chunk__20995;
var G__21000 = count__20996;
var G__21001 = (i__20997 + (1));
seq__20994 = G__20998;
chunk__20995 = G__20999;
count__20996 = G__21000;
i__20997 = G__21001;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20994);
if(temp__5804__auto__){
var seq__20994__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20994__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__20994__$1);
var G__21002 = cljs.core.chunk_rest(seq__20994__$1);
var G__21003 = c__4556__auto__;
var G__21004 = cljs.core.count(c__4556__auto__);
var G__21005 = (0);
seq__20994 = G__21002;
chunk__20995 = G__21003;
count__20996 = G__21004;
i__20997 = G__21005;
continue;
} else {
var reporter = cljs.core.first(seq__20994__$1);
speclj.reporting.report_message(reporter,message);


var G__21006 = cljs.core.next(seq__20994__$1);
var G__21007 = null;
var G__21008 = (0);
var G__21009 = (0);
seq__20994 = G__21006;
chunk__20995 = G__21007;
count__20996 = G__21008;
i__20997 = G__21009;
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
var seq__21010 = cljs.core.seq(reporters);
var chunk__21011 = null;
var count__21012 = (0);
var i__21013 = (0);
while(true){
if((i__21013 < count__21012)){
var reporter = chunk__21011.cljs$core$IIndexed$_nth$arity$2(null,i__21013);
speclj.reporting.report_error(reporter,exception);


var G__21014 = seq__21010;
var G__21015 = chunk__21011;
var G__21016 = count__21012;
var G__21017 = (i__21013 + (1));
seq__21010 = G__21014;
chunk__21011 = G__21015;
count__21012 = G__21016;
i__21013 = G__21017;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__21010);
if(temp__5804__auto__){
var seq__21010__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21010__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__21010__$1);
var G__21018 = cljs.core.chunk_rest(seq__21010__$1);
var G__21019 = c__4556__auto__;
var G__21020 = cljs.core.count(c__4556__auto__);
var G__21021 = (0);
seq__21010 = G__21018;
chunk__21011 = G__21019;
count__21012 = G__21020;
i__21013 = G__21021;
continue;
} else {
var reporter = cljs.core.first(seq__21010__$1);
speclj.reporting.report_error(reporter,exception);


var G__21022 = cljs.core.next(seq__21010__$1);
var G__21023 = null;
var G__21024 = (0);
var G__21025 = (0);
seq__21010 = G__21022;
chunk__21011 = G__21023;
count__21012 = G__21024;
i__21013 = G__21025;
continue;
}
} else {
return null;
}
}
break;
}
});
