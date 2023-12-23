// Compiled by ClojureScript 1.10.764 {:static-fns true, :optimize-constants true}
goog.provide('speclj.tags');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('speclj.config');
speclj.tags.pass_includes_QMARK_ = (function speclj$tags$pass_includes_QMARK_(includes,tags){
if(cljs.core.empty_QMARK_(includes)){
return true;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(includes,clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(includes,cljs.core.set(tags)));
}
});
speclj.tags.pass_excludes_QMARK_ = (function speclj$tags$pass_excludes_QMARK_(excludes,tags){
if(cljs.core.empty_QMARK_(excludes)){
return true;
} else {
return cljs.core.not(cljs.core.some((function (p1__20681_SHARP_){
return cljs.core.contains_QMARK_(excludes,p1__20681_SHARP_);
}),tags));
}
});
speclj.tags.pass_tag_filter_QMARK_ = (function speclj$tags$pass_tag_filter_QMARK_(var_args){
var G__20683 = arguments.length;
switch (G__20683) {
case 1:
return speclj.tags.pass_tag_filter_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return speclj.tags.pass_tag_filter_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(speclj.tags.pass_tag_filter_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (tags){
return speclj.tags.pass_tag_filter_QMARK_.cljs$core$IFn$_invoke$arity$2(speclj.config._STAR_tag_filter_STAR_,tags);
}));

(speclj.tags.pass_tag_filter_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (filter,tags){
return ((speclj.tags.pass_includes_QMARK_(cljs.core.cst$kw$includes.cljs$core$IFn$_invoke$arity$1(filter),tags)) && (speclj.tags.pass_excludes_QMARK_(cljs.core.cst$kw$excludes.cljs$core$IFn$_invoke$arity$1(filter),tags)));
}));

(speclj.tags.pass_tag_filter_QMARK_.cljs$lang$maxFixedArity = 2);

speclj.tags.tags_for = (function speclj$tags$tags_for(context){
if(cljs.core.truth_(context)){
return clojure.set.union.cljs$core$IFn$_invoke$arity$2((function (){var G__20685 = cljs.core.deref(context.parent);
return (speclj.tags.tags_for.cljs$core$IFn$_invoke$arity$1 ? speclj.tags.tags_for.cljs$core$IFn$_invoke$arity$1(G__20685) : speclj.tags.tags_for.call(null,G__20685));
})(),cljs.core.deref(context.tags));
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
});
speclj.tags.tag_sets_for = (function speclj$tags$tag_sets_for(context){
var context_seq = cljs.core.tree_seq((function (p1__20686_SHARP_){
return (!((p1__20686_SHARP_ == null)));
}),(function (p1__20687_SHARP_){
return cljs.core.deref(p1__20687_SHARP_.children);
}),context);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(speclj.tags.tags_for,context_seq);
});
speclj.tags.context_with_tags_seq = (function speclj$tags$context_with_tags_seq(context){
var context_seq = cljs.core.tree_seq((function (p1__20688_SHARP_){
return (!((p1__20688_SHARP_ == null)));
}),(function (p1__20689_SHARP_){
return cljs.core.deref(p1__20689_SHARP_.children);
}),context);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__20690_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$context,cljs.core.cst$kw$tag_DASH_set],[p1__20690_SHARP_,speclj.tags.tags_for(p1__20690_SHARP_)]);
}),context_seq);
});
speclj.tags.describe_filter = (function speclj$tags$describe_filter(var_args){
var G__20692 = arguments.length;
switch (G__20692) {
case 0:
return speclj.tags.describe_filter.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return speclj.tags.describe_filter.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(speclj.tags.describe_filter.cljs$core$IFn$_invoke$arity$0 = (function (){
return speclj.tags.describe_filter.cljs$core$IFn$_invoke$arity$1(speclj.config._STAR_tag_filter_STAR_);
}));

(speclj.tags.describe_filter.cljs$core$IFn$_invoke$arity$1 = (function (filter){
var includes = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,cljs.core.cst$kw$includes.cljs$core$IFn$_invoke$arity$1(filter)));
var excludes = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,cljs.core.cst$kw$excludes.cljs$core$IFn$_invoke$arity$1(filter)));
if(((includes) || (excludes))){
return ["Filtering tags.",((includes)?[" Including: ",clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",includes),"."].join(''):null),((excludes)?[" Excluding: ",clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",excludes),"."].join(''):null)].join('');
} else {
return null;
}
}));

(speclj.tags.describe_filter.cljs$lang$maxFixedArity = 1);

