// Compiled by ClojureScript 1.10.764 {:static-fns true, :optimize-constants true}
goog.provide('set.settings_spec');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('speclj.core');
goog.require('set.settings');
var description__30016__auto___30829 = speclj.components.new_description("SETtings",false,"set.settings-spec");
var _STAR_parent_description_STAR__orig_val__30823_30830 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__30824_30831 = description__30016__auto___30829;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__30824_30831);

try{var seq__30825_30832 = cljs.core.seq((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.cljs$core$IFn$_invoke$arity$3("has an initial state",((function (_STAR_parent_description_STAR__orig_val__30823_30830,_STAR_parent_description_STAR__temp_val__30824_30831,description__30016__auto___30829){
return (function (){
var expected__30149__auto__ = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color_DASH_blind_DASH_mode_QMARK_,false], null);
var actual__30150__auto__ = cljs.core.deref(set.settings.state);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(expected__30149__auto__,actual__30150__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__30149__auto__ == null))?"nil":cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([expected__30149__auto__], 0))),speclj.platform.endl,"     got: ",(((actual__30150__auto__ == null))?"nil":cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([actual__30150__auto__], 0)))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__30823_30830,_STAR_parent_description_STAR__temp_val__30824_30831,description__30016__auto___30829))
,false)],null)));
var chunk__30826_30833 = null;
var count__30827_30834 = (0);
var i__30828_30835 = (0);
while(true){
if((i__30828_30835 < count__30827_30834)){
var component__30017__auto___30836 = chunk__30826_30833.cljs$core$IIndexed$_nth$arity$2(null,i__30828_30835);
speclj.components.install(component__30017__auto___30836,description__30016__auto___30829);


var G__30837 = seq__30825_30832;
var G__30838 = chunk__30826_30833;
var G__30839 = count__30827_30834;
var G__30840 = (i__30828_30835 + (1));
seq__30825_30832 = G__30837;
chunk__30826_30833 = G__30838;
count__30827_30834 = G__30839;
i__30828_30835 = G__30840;
continue;
} else {
var temp__5804__auto___30841 = cljs.core.seq(seq__30825_30832);
if(temp__5804__auto___30841){
var seq__30825_30842__$1 = temp__5804__auto___30841;
if(cljs.core.chunked_seq_QMARK_(seq__30825_30842__$1)){
var c__4556__auto___30843 = cljs.core.chunk_first(seq__30825_30842__$1);
var G__30844 = cljs.core.chunk_rest(seq__30825_30842__$1);
var G__30845 = c__4556__auto___30843;
var G__30846 = cljs.core.count(c__4556__auto___30843);
var G__30847 = (0);
seq__30825_30832 = G__30844;
chunk__30826_30833 = G__30845;
count__30827_30834 = G__30846;
i__30828_30835 = G__30847;
continue;
} else {
var component__30017__auto___30848 = cljs.core.first(seq__30825_30842__$1);
speclj.components.install(component__30017__auto___30848,description__30016__auto___30829);


var G__30849 = cljs.core.next(seq__30825_30842__$1);
var G__30850 = null;
var G__30851 = (0);
var G__30852 = (0);
seq__30825_30832 = G__30849;
chunk__30826_30833 = G__30850;
count__30827_30834 = G__30851;
i__30828_30835 = G__30852;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__30823_30830);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description(speclj.config.active_runner(),description__30016__auto___30829);
}

