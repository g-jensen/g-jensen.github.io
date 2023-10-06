// Compiled by ClojureScript 1.10.764 {:static-fns true, :optimize-constants true}
goog.provide('speclj.running');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('speclj.components');
goog.require('speclj.config');
goog.require('speclj.platform');
goog.require('speclj.reporting');
goog.require('speclj.results');
goog.require('speclj.tags');
speclj.running.focusable_QMARK_ = (function speclj$running$focusable_QMARK_(component){
return (((!((component == null)))) && (((speclj.components.is_description_QMARK_(component)) || (speclj.components.is_characteristic_QMARK_(component)))));
});
speclj.running.focused_QMARK_ = (function speclj$running$focused_QMARK_(component){
return cljs.core.deref(component.is_focused_QMARK_);
});
speclj.running.has_focus_QMARK_ = (function speclj$running$has_focus_QMARK_(component){
if(speclj.components.is_description_QMARK_(component)){
return cljs.core.deref(component.has_focus_QMARK_);
} else {
return false;
}
});
speclj.running.focus_mode_QMARK_ = (function speclj$running$focus_mode_QMARK_(component){
while(true){
var or__4126__auto__ = speclj.running.focused_QMARK_(component);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = speclj.running.has_focus_QMARK_(component);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
var temp__5804__auto__ = cljs.core.deref(component.parent);
if(cljs.core.truth_(temp__5804__auto__)){
var parent = temp__5804__auto__;
var G__17876 = parent;
component = G__17876;
continue;
} else {
return null;
}
}
}
break;
}
});
speclj.running.can_run_QMARK_ = (function speclj$running$can_run_QMARK_(component){
var or__4126__auto__ = speclj.running.focused_QMARK_(component);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = speclj.running.has_focus_QMARK_(component);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return cljs.core.not(speclj.running.focus_mode_QMARK_(component));
}
}
});
speclj.running.all_children = (function speclj$running$all_children(component){
if(speclj.components.is_description_QMARK_(component)){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(component.characteristics),cljs.core.deref(component.children));
} else {
return cljs.core.PersistentVector.EMPTY;
}
});
speclj.running.focus_BANG_ = (function speclj$running$focus_BANG_(component){
return cljs.core.reset_BANG_(component.is_focused_QMARK_,true);
});
speclj.running.focus_characteristics_BANG_ = (function speclj$running$focus_characteristics_BANG_(component){
speclj.running.focus_BANG_(component);

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(speclj.running.focus_BANG_,cljs.core.deref(component.characteristics)));
});
speclj.running.focus_children_BANG_ = (function speclj$running$focus_children_BANG_(component){
speclj.running.focus_BANG_(component);

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(speclj.running.focus_children_BANG_,cljs.core.deref(component.children)));
});
speclj.running.enable_focus_mode_BANG_ = (function speclj$running$enable_focus_mode_BANG_(component){
while(true){
var temp__5804__auto__ = cljs.core.deref(component.parent);
if(cljs.core.truth_(temp__5804__auto__)){
var parent = temp__5804__auto__;
cljs.core.reset_BANG_(parent.has_focus_QMARK_,true);

var G__17877 = parent;
component = G__17877;
continue;
} else {
return null;
}
break;
}
});
speclj.running.track_focused_descriptions_BANG_ = (function speclj$running$track_focused_descriptions_BANG_(descriptions){
var seq__17878 = cljs.core.seq(descriptions);
var chunk__17879 = null;
var count__17880 = (0);
var i__17881 = (0);
while(true){
if((i__17881 < count__17880)){
var component = chunk__17879.cljs$core$IIndexed$_nth$arity$2(null,i__17881);
if(cljs.core.truth_(speclj.running.focused_QMARK_(component))){
speclj.running.enable_focus_mode_BANG_(component);

speclj.running.focus_children_BANG_(component);

speclj.running.focus_characteristics_BANG_(component);
} else {
}


var G__17882 = seq__17878;
var G__17883 = chunk__17879;
var G__17884 = count__17880;
var G__17885 = (i__17881 + (1));
seq__17878 = G__17882;
chunk__17879 = G__17883;
count__17880 = G__17884;
i__17881 = G__17885;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17878);
if(temp__5804__auto__){
var seq__17878__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17878__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__17878__$1);
var G__17886 = cljs.core.chunk_rest(seq__17878__$1);
var G__17887 = c__4556__auto__;
var G__17888 = cljs.core.count(c__4556__auto__);
var G__17889 = (0);
seq__17878 = G__17886;
chunk__17879 = G__17887;
count__17880 = G__17888;
i__17881 = G__17889;
continue;
} else {
var component = cljs.core.first(seq__17878__$1);
if(cljs.core.truth_(speclj.running.focused_QMARK_(component))){
speclj.running.enable_focus_mode_BANG_(component);

speclj.running.focus_children_BANG_(component);

speclj.running.focus_characteristics_BANG_(component);
} else {
}


var G__17890 = cljs.core.next(seq__17878__$1);
var G__17891 = null;
var G__17892 = (0);
var G__17893 = (0);
seq__17878 = G__17890;
chunk__17879 = G__17891;
count__17880 = G__17892;
i__17881 = G__17893;
continue;
}
} else {
return null;
}
}
break;
}
});
speclj.running.track_focused_characteristics_BANG_ = (function speclj$running$track_focused_characteristics_BANG_(characteristics){
var seq__17894 = cljs.core.seq(characteristics);
var chunk__17896 = null;
var count__17897 = (0);
var i__17898 = (0);
while(true){
if((i__17898 < count__17897)){
var characteristic = chunk__17896.cljs$core$IIndexed$_nth$arity$2(null,i__17898);
if(cljs.core.truth_(speclj.running.focused_QMARK_(characteristic))){
speclj.running.enable_focus_mode_BANG_(characteristic);


var G__17900 = seq__17894;
var G__17901 = chunk__17896;
var G__17902 = count__17897;
var G__17903 = (i__17898 + (1));
seq__17894 = G__17900;
chunk__17896 = G__17901;
count__17897 = G__17902;
i__17898 = G__17903;
continue;
} else {
var G__17904 = seq__17894;
var G__17905 = chunk__17896;
var G__17906 = count__17897;
var G__17907 = (i__17898 + (1));
seq__17894 = G__17904;
chunk__17896 = G__17905;
count__17897 = G__17906;
i__17898 = G__17907;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17894);
if(temp__5804__auto__){
var seq__17894__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17894__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__17894__$1);
var G__17908 = cljs.core.chunk_rest(seq__17894__$1);
var G__17909 = c__4556__auto__;
var G__17910 = cljs.core.count(c__4556__auto__);
var G__17911 = (0);
seq__17894 = G__17908;
chunk__17896 = G__17909;
count__17897 = G__17910;
i__17898 = G__17911;
continue;
} else {
var characteristic = cljs.core.first(seq__17894__$1);
if(cljs.core.truth_(speclj.running.focused_QMARK_(characteristic))){
speclj.running.enable_focus_mode_BANG_(characteristic);


var G__17912 = cljs.core.next(seq__17894__$1);
var G__17913 = null;
var G__17914 = (0);
var G__17915 = (0);
seq__17894 = G__17912;
chunk__17896 = G__17913;
count__17897 = G__17914;
i__17898 = G__17915;
continue;
} else {
var G__17916 = cljs.core.next(seq__17894__$1);
var G__17917 = null;
var G__17918 = (0);
var G__17919 = (0);
seq__17894 = G__17916;
chunk__17896 = G__17917;
count__17897 = G__17918;
i__17898 = G__17919;
continue;
}
}
} else {
return null;
}
}
break;
}
});
speclj.running.scan_for_focus_BANG_ = (function speclj$running$scan_for_focus_BANG_(description){
var all = cljs.core.tree_seq(cljs.core.some_QMARK_,speclj.running.all_children,description);
speclj.running.track_focused_descriptions_BANG_(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(speclj.components.is_description_QMARK_,all));

speclj.running.track_focused_characteristics_BANG_(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(speclj.components.is_characteristic_QMARK_,all));

return description;
});
speclj.running.filter_focused = (function speclj$running$filter_focused(descriptions){
var seq__17920_17924 = cljs.core.seq(descriptions);
var chunk__17921_17925 = null;
var count__17922_17926 = (0);
var i__17923_17927 = (0);
while(true){
if((i__17923_17927 < count__17922_17926)){
var description_17928 = chunk__17921_17925.cljs$core$IIndexed$_nth$arity$2(null,i__17923_17927);
speclj.running.scan_for_focus_BANG_(description_17928);


var G__17929 = seq__17920_17924;
var G__17930 = chunk__17921_17925;
var G__17931 = count__17922_17926;
var G__17932 = (i__17923_17927 + (1));
seq__17920_17924 = G__17929;
chunk__17921_17925 = G__17930;
count__17922_17926 = G__17931;
i__17923_17927 = G__17932;
continue;
} else {
var temp__5804__auto___17933 = cljs.core.seq(seq__17920_17924);
if(temp__5804__auto___17933){
var seq__17920_17934__$1 = temp__5804__auto___17933;
if(cljs.core.chunked_seq_QMARK_(seq__17920_17934__$1)){
var c__4556__auto___17935 = cljs.core.chunk_first(seq__17920_17934__$1);
var G__17936 = cljs.core.chunk_rest(seq__17920_17934__$1);
var G__17937 = c__4556__auto___17935;
var G__17938 = cljs.core.count(c__4556__auto___17935);
var G__17939 = (0);
seq__17920_17924 = G__17936;
chunk__17921_17925 = G__17937;
count__17922_17926 = G__17938;
i__17923_17927 = G__17939;
continue;
} else {
var description_17940 = cljs.core.first(seq__17920_17934__$1);
speclj.running.scan_for_focus_BANG_(description_17940);


var G__17941 = cljs.core.next(seq__17920_17934__$1);
var G__17942 = null;
var G__17943 = (0);
var G__17944 = (0);
seq__17920_17924 = G__17941;
chunk__17921_17925 = G__17942;
count__17922_17926 = G__17943;
i__17923_17927 = G__17944;
continue;
}
} else {
}
}
break;
}

var or__4126__auto__ = cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(speclj.running.focus_mode_QMARK_,descriptions));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return descriptions;
}
});
speclj.running.eval_components = (function speclj$running$eval_components(components){
var seq__17945 = cljs.core.seq(components);
var chunk__17946 = null;
var count__17947 = (0);
var i__17948 = (0);
while(true){
if((i__17948 < count__17947)){
var component = chunk__17946.cljs$core$IIndexed$_nth$arity$2(null,i__17948);
var fexpr__17951_17953 = component.body;
(fexpr__17951_17953.cljs$core$IFn$_invoke$arity$0 ? fexpr__17951_17953.cljs$core$IFn$_invoke$arity$0() : fexpr__17951_17953.call(null));


var G__17954 = seq__17945;
var G__17955 = chunk__17946;
var G__17956 = count__17947;
var G__17957 = (i__17948 + (1));
seq__17945 = G__17954;
chunk__17946 = G__17955;
count__17947 = G__17956;
i__17948 = G__17957;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17945);
if(temp__5804__auto__){
var seq__17945__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17945__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__17945__$1);
var G__17958 = cljs.core.chunk_rest(seq__17945__$1);
var G__17959 = c__4556__auto__;
var G__17960 = cljs.core.count(c__4556__auto__);
var G__17961 = (0);
seq__17945 = G__17958;
chunk__17946 = G__17959;
count__17947 = G__17960;
i__17948 = G__17961;
continue;
} else {
var component = cljs.core.first(seq__17945__$1);
var fexpr__17952_17962 = component.body;
(fexpr__17952_17962.cljs$core$IFn$_invoke$arity$0 ? fexpr__17952_17962.cljs$core$IFn$_invoke$arity$0() : fexpr__17952_17962.call(null));


var G__17963 = cljs.core.next(seq__17945__$1);
var G__17964 = null;
var G__17965 = (0);
var G__17966 = (0);
seq__17945 = G__17963;
chunk__17946 = G__17964;
count__17947 = G__17965;
i__17948 = G__17966;
continue;
}
} else {
return null;
}
}
break;
}
});
speclj.running.nested_fns = (function speclj$running$nested_fns(base,fns){
if(cljs.core.seq(fns)){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.first(fns),(function (){var G__17967 = base;
var G__17968 = cljs.core.rest(fns);
return (speclj.running.nested_fns.cljs$core$IFn$_invoke$arity$2 ? speclj.running.nested_fns.cljs$core$IFn$_invoke$arity$2(G__17967,G__17968) : speclj.running.nested_fns.call(null,G__17967,G__17968));
})());
} else {
return base;
}
});
speclj.running.eval_characteristic = (function speclj$running$eval_characteristic(befores,body,afters){
speclj.running.eval_components(befores);

try{return (body.cljs$core$IFn$_invoke$arity$0 ? body.cljs$core$IFn$_invoke$arity$0() : body.call(null));
}finally {speclj.running.eval_components(afters);
}});
speclj.running.reset_withs = (function speclj$running$reset_withs(withs){
var seq__17969 = cljs.core.seq(withs);
var chunk__17970 = null;
var count__17971 = (0);
var i__17972 = (0);
while(true){
if((i__17972 < count__17971)){
var with$ = chunk__17970.cljs$core$IIndexed$_nth$arity$2(null,i__17972);
speclj.components.reset_with(with$);


var G__17973 = seq__17969;
var G__17974 = chunk__17970;
var G__17975 = count__17971;
var G__17976 = (i__17972 + (1));
seq__17969 = G__17973;
chunk__17970 = G__17974;
count__17971 = G__17975;
i__17972 = G__17976;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17969);
if(temp__5804__auto__){
var seq__17969__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17969__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__17969__$1);
var G__17977 = cljs.core.chunk_rest(seq__17969__$1);
var G__17978 = c__4556__auto__;
var G__17979 = cljs.core.count(c__4556__auto__);
var G__17980 = (0);
seq__17969 = G__17977;
chunk__17970 = G__17978;
count__17971 = G__17979;
i__17972 = G__17980;
continue;
} else {
var with$ = cljs.core.first(seq__17969__$1);
speclj.components.reset_with(with$);


var G__17981 = cljs.core.next(seq__17969__$1);
var G__17982 = null;
var G__17983 = (0);
var G__17984 = (0);
seq__17969 = G__17981;
chunk__17970 = G__17982;
count__17971 = G__17983;
i__17972 = G__17984;
continue;
}
} else {
return null;
}
}
break;
}
});
speclj.running.collect_components = (function speclj$running$collect_components(getter,description){
var description__$1 = description;
var components = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.truth_(description__$1)){
var G__17985 = cljs.core.deref(description__$1.parent);
var G__17986 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2((getter.cljs$core$IFn$_invoke$arity$1 ? getter.cljs$core$IFn$_invoke$arity$1(description__$1) : getter.call(null,description__$1)),components);
description__$1 = G__17985;
components = G__17986;
continue;
} else {
return components;
}
break;
}
});
speclj.running.report_result = (function speclj$running$report_result(result_constructor,characteristic,start_time,reporters,failure){
var present_args = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [characteristic,speclj.platform.secs_since(start_time),failure], null));
var result = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(result_constructor,present_args);
(speclj.reporting.report_run.cljs$core$IFn$_invoke$arity$2 ? speclj.reporting.report_run.cljs$core$IFn$_invoke$arity$2(result,reporters) : speclj.reporting.report_run.call(null,result,reporters));

return result;
});
speclj.running.do_characteristic = (function speclj$running$do_characteristic(characteristic,reporters){
var description = cljs.core.deref(characteristic.parent);
var befores = speclj.running.collect_components((function (p1__17987_SHARP_){
return cljs.core.deref(p1__17987_SHARP_.befores);
}),description);
var afters = speclj.running.collect_components((function (p1__17988_SHARP_){
return cljs.core.deref(p1__17988_SHARP_.afters);
}),description);
var core_body = characteristic.body;
var before_and_after_body = (function (){
return speclj.running.eval_characteristic(befores,core_body,afters);
});
var arounds = speclj.running.collect_components((function (p1__17989_SHARP_){
return cljs.core.deref(p1__17989_SHARP_.arounds);
}),description);
var full_body = speclj.running.nested_fns(before_and_after_body,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__17990_SHARP_){
return p1__17990_SHARP_.body;
}),arounds));
var withs = speclj.running.collect_components((function (p1__17991_SHARP_){
return cljs.core.deref(p1__17991_SHARP_.withs);
}),description);
var start_time = speclj.platform.current_time();
try{(full_body.cljs$core$IFn$_invoke$arity$0 ? full_body.cljs$core$IFn$_invoke$arity$0() : full_body.call(null));

return speclj.running.report_result(speclj.results.pass_result,characteristic,start_time,reporters,null);
}catch (e17992){var e = e17992;
if(speclj.platform.pending_QMARK_(e)){
return speclj.running.report_result(speclj.results.pending_result,characteristic,start_time,reporters,e);
} else {
return speclj.running.report_result(speclj.results.fail_result,characteristic,start_time,reporters,e);
}
}finally {speclj.running.reset_withs(withs);
}});
speclj.running.do_characteristics = (function speclj$running$do_characteristics(characteristics,reporters){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function speclj$running$do_characteristics_$_iter__17993(s__17994){
return (new cljs.core.LazySeq(null,(function (){
var s__17994__$1 = s__17994;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__17994__$1);
if(temp__5804__auto__){
var s__17994__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__17994__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__17994__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__17996 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__17995 = (0);
while(true){
if((i__17995 < size__4528__auto__)){
var characteristic = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__17995);
if(cljs.core.truth_(speclj.running.can_run_QMARK_(characteristic))){
cljs.core.chunk_append(b__17996,speclj.running.do_characteristic(characteristic,reporters));

var G__17997 = (i__17995 + (1));
i__17995 = G__17997;
continue;
} else {
var G__17998 = (i__17995 + (1));
i__17995 = G__17998;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17996),speclj$running$do_characteristics_$_iter__17993(cljs.core.chunk_rest(s__17994__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17996),null);
}
} else {
var characteristic = cljs.core.first(s__17994__$2);
if(cljs.core.truth_(speclj.running.can_run_QMARK_(characteristic))){
return cljs.core.cons(speclj.running.do_characteristic(characteristic,reporters),speclj$running$do_characteristics_$_iter__17993(cljs.core.rest(s__17994__$2)));
} else {
var G__17999 = cljs.core.rest(s__17994__$2);
s__17994__$1 = G__17999;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(characteristics);
})());
});
speclj.running.do_child_contexts = (function speclj$running$do_child_contexts(context,results,reporters){
var results__$1 = results;
var children = cljs.core.deref(context.children);
while(true){
if(cljs.core.seq(children)){
var G__18002 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(results__$1,(function (){var G__18000 = cljs.core.first(children);
var G__18001 = reporters;
return (speclj.running.do_description.cljs$core$IFn$_invoke$arity$2 ? speclj.running.do_description.cljs$core$IFn$_invoke$arity$2(G__18000,G__18001) : speclj.running.do_description.call(null,G__18000,G__18001));
})());
var G__18003 = cljs.core.rest(children);
results__$1 = G__18002;
children = G__18003;
continue;
} else {
speclj.running.eval_components(cljs.core.deref(context.after_alls));

return results__$1;
}
break;
}
});
speclj.running.results_for_context = (function speclj$running$results_for_context(context,reporters){
if(cljs.core.truth_(speclj.tags.pass_tag_filter_QMARK_.cljs$core$IFn$_invoke$arity$1(speclj.tags.tags_for(context)))){
return speclj.running.do_characteristics(cljs.core.deref(context.characteristics),reporters);
} else {
return cljs.core.PersistentVector.EMPTY;
}
});
speclj.running.with_withs_bound = (function speclj$running$with_withs_bound(description,body){
var withs = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(description.withs),cljs.core.deref(description.with_alls));
var ns = clojure.string.replace(description.ns,"-","_");
var var_names = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__18006_SHARP_){
return [ns,".",cljs.core.name(p1__18006_SHARP_.name)].join('');
}),withs);
var unique_names = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__18007_SHARP_){
return [ns,".",cljs.core.name(p1__18007_SHARP_.unique_name)].join('');
}),withs);
var seq__18008_18040 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(var_names,unique_names)));
var chunk__18009_18041 = null;
var count__18010_18042 = (0);
var i__18011_18043 = (0);
while(true){
if((i__18011_18043 < count__18010_18042)){
var vec__18018_18044 = chunk__18009_18041.cljs$core$IIndexed$_nth$arity$2(null,i__18011_18043);
var n_18045 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18018_18044,(0),null);
var un_18046 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18018_18044,(1),null);
var code_18047 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_18045)," = ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(un_18046),";"].join('');
eval(code_18047);


var G__18048 = seq__18008_18040;
var G__18049 = chunk__18009_18041;
var G__18050 = count__18010_18042;
var G__18051 = (i__18011_18043 + (1));
seq__18008_18040 = G__18048;
chunk__18009_18041 = G__18049;
count__18010_18042 = G__18050;
i__18011_18043 = G__18051;
continue;
} else {
var temp__5804__auto___18052 = cljs.core.seq(seq__18008_18040);
if(temp__5804__auto___18052){
var seq__18008_18053__$1 = temp__5804__auto___18052;
if(cljs.core.chunked_seq_QMARK_(seq__18008_18053__$1)){
var c__4556__auto___18054 = cljs.core.chunk_first(seq__18008_18053__$1);
var G__18055 = cljs.core.chunk_rest(seq__18008_18053__$1);
var G__18056 = c__4556__auto___18054;
var G__18057 = cljs.core.count(c__4556__auto___18054);
var G__18058 = (0);
seq__18008_18040 = G__18055;
chunk__18009_18041 = G__18056;
count__18010_18042 = G__18057;
i__18011_18043 = G__18058;
continue;
} else {
var vec__18021_18059 = cljs.core.first(seq__18008_18053__$1);
var n_18060 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18021_18059,(0),null);
var un_18061 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18021_18059,(1),null);
var code_18062 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_18060)," = ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(un_18061),";"].join('');
eval(code_18062);


var G__18063 = cljs.core.next(seq__18008_18053__$1);
var G__18064 = null;
var G__18065 = (0);
var G__18066 = (0);
seq__18008_18040 = G__18063;
chunk__18009_18041 = G__18064;
count__18010_18042 = G__18065;
i__18011_18043 = G__18066;
continue;
}
} else {
}
}
break;
}

try{return (body.cljs$core$IFn$_invoke$arity$0 ? body.cljs$core$IFn$_invoke$arity$0() : body.call(null));
}finally {var seq__18024_18067 = cljs.core.seq(var_names);
var chunk__18025_18068 = null;
var count__18026_18069 = (0);
var i__18027_18070 = (0);
while(true){
if((i__18027_18070 < count__18026_18069)){
var vec__18034_18071 = chunk__18025_18068.cljs$core$IIndexed$_nth$arity$2(null,i__18027_18070);
var n_18072 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18034_18071,(0),null);
var code_18073 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_18072)," = null;"].join('');
eval(code_18073);


var G__18074 = seq__18024_18067;
var G__18075 = chunk__18025_18068;
var G__18076 = count__18026_18069;
var G__18077 = (i__18027_18070 + (1));
seq__18024_18067 = G__18074;
chunk__18025_18068 = G__18075;
count__18026_18069 = G__18076;
i__18027_18070 = G__18077;
continue;
} else {
var temp__5804__auto___18078 = cljs.core.seq(seq__18024_18067);
if(temp__5804__auto___18078){
var seq__18024_18079__$1 = temp__5804__auto___18078;
if(cljs.core.chunked_seq_QMARK_(seq__18024_18079__$1)){
var c__4556__auto___18080 = cljs.core.chunk_first(seq__18024_18079__$1);
var G__18081 = cljs.core.chunk_rest(seq__18024_18079__$1);
var G__18082 = c__4556__auto___18080;
var G__18083 = cljs.core.count(c__4556__auto___18080);
var G__18084 = (0);
seq__18024_18067 = G__18081;
chunk__18025_18068 = G__18082;
count__18026_18069 = G__18083;
i__18027_18070 = G__18084;
continue;
} else {
var vec__18037_18085 = cljs.core.first(seq__18024_18079__$1);
var n_18086 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18037_18085,(0),null);
var code_18087 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_18086)," = null;"].join('');
eval(code_18087);


var G__18088 = cljs.core.next(seq__18024_18079__$1);
var G__18089 = null;
var G__18090 = (0);
var G__18091 = (0);
seq__18024_18067 = G__18088;
chunk__18025_18068 = G__18089;
count__18026_18069 = G__18090;
i__18027_18070 = G__18091;
continue;
}
} else {
}
}
break;
}
}});
speclj.running.nested_results_for_context = (function speclj$running$nested_results_for_context(description,reporters){
var results = speclj.running.results_for_context(description,reporters);
return speclj.running.do_child_contexts(description,results,reporters);
});
speclj.running.with_around_alls = (function speclj$running$with_around_alls(description,run_characteristics_fn){
var fexpr__18093 = speclj.running.nested_fns(run_characteristics_fn,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__18092_SHARP_){
return p1__18092_SHARP_.body;
}),cljs.core.deref(description.around_alls)));
return (fexpr__18093.cljs$core$IFn$_invoke$arity$0 ? fexpr__18093.cljs$core$IFn$_invoke$arity$0() : fexpr__18093.call(null));
});
speclj.running.do_description = (function speclj$running$do_description(description,reporters){
if(cljs.core.truth_(speclj.running.can_run_QMARK_(description))){
var tag_sets = speclj.tags.tag_sets_for(description);
if(cljs.core.truth_(cljs.core.some(speclj.tags.pass_tag_filter_QMARK_,tag_sets))){
speclj.reporting.report_description_STAR_(reporters,description);

return speclj.running.with_withs_bound(description,(function (){
speclj.running.eval_components(cljs.core.deref(description.before_alls));

try{return speclj.running.with_around_alls(description,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(speclj.running.nested_results_for_context,description,reporters));
}finally {speclj.running.reset_withs(cljs.core.deref(description.with_alls));
}}));
} else {
return null;
}
} else {
return null;
}
});
speclj.running.process_compile_error = (function speclj$running$process_compile_error(runner,e){
var error_result = speclj.results.error_result(e);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(runner.results,cljs.core.conj,error_result);

var G__18094 = error_result;
var G__18095 = speclj.config.active_reporters();
return (speclj.reporting.report_run.cljs$core$IFn$_invoke$arity$2 ? speclj.reporting.report_run.cljs$core$IFn$_invoke$arity$2(G__18094,G__18095) : speclj.reporting.report_run.call(null,G__18094,G__18095));
});

/**
 * @interface
 */
speclj.running.Runner = function(){};

var speclj$running$Runner$run_directories$dyn_18096 = (function (this$,directories,reporters){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (speclj.running.run_directories[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(this$,directories,reporters) : m__4429__auto__.call(null,this$,directories,reporters));
} else {
var m__4426__auto__ = (speclj.running.run_directories["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(this$,directories,reporters) : m__4426__auto__.call(null,this$,directories,reporters));
} else {
throw cljs.core.missing_protocol("Runner.run-directories",this$);
}
}
});
speclj.running.run_directories = (function speclj$running$run_directories(this$,directories,reporters){
if((((!((this$ == null)))) && ((!((this$.speclj$running$Runner$run_directories$arity$3 == null)))))){
return this$.speclj$running$Runner$run_directories$arity$3(this$,directories,reporters);
} else {
return speclj$running$Runner$run_directories$dyn_18096(this$,directories,reporters);
}
});

var speclj$running$Runner$submit_description$dyn_18097 = (function (this$,description){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (speclj.running.submit_description[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(this$,description) : m__4429__auto__.call(null,this$,description));
} else {
var m__4426__auto__ = (speclj.running.submit_description["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(this$,description) : m__4426__auto__.call(null,this$,description));
} else {
throw cljs.core.missing_protocol("Runner.submit-description",this$);
}
}
});
speclj.running.submit_description = (function speclj$running$submit_description(this$,description){
if((((!((this$ == null)))) && ((!((this$.speclj$running$Runner$submit_description$arity$2 == null)))))){
return this$.speclj$running$Runner$submit_description$arity$2(this$,description);
} else {
return speclj$running$Runner$submit_description$dyn_18097(this$,description);
}
});

var speclj$running$Runner$run_description$dyn_18098 = (function (this$,description,reporters){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (speclj.running.run_description[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(this$,description,reporters) : m__4429__auto__.call(null,this$,description,reporters));
} else {
var m__4426__auto__ = (speclj.running.run_description["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(this$,description,reporters) : m__4426__auto__.call(null,this$,description,reporters));
} else {
throw cljs.core.missing_protocol("Runner.run-description",this$);
}
}
});
speclj.running.run_description = (function speclj$running$run_description(this$,description,reporters){
if((((!((this$ == null)))) && ((!((this$.speclj$running$Runner$run_description$arity$3 == null)))))){
return this$.speclj$running$Runner$run_description$arity$3(this$,description,reporters);
} else {
return speclj$running$Runner$run_description$dyn_18098(this$,description,reporters);
}
});

var speclj$running$Runner$run_and_report$dyn_18099 = (function (this$,reporters){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (speclj.running.run_and_report[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(this$,reporters) : m__4429__auto__.call(null,this$,reporters));
} else {
var m__4426__auto__ = (speclj.running.run_and_report["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(this$,reporters) : m__4426__auto__.call(null,this$,reporters));
} else {
throw cljs.core.missing_protocol("Runner.run-and-report",this$);
}
}
});
speclj.running.run_and_report = (function speclj$running$run_and_report(this$,reporters){
if((((!((this$ == null)))) && ((!((this$.speclj$running$Runner$run_and_report$arity$2 == null)))))){
return this$.speclj$running$Runner$run_and_report$arity$2(this$,reporters);
} else {
return speclj$running$Runner$run_and_report$dyn_18099(this$,reporters);
}
});

