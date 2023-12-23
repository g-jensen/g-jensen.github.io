// Compiled by ClojureScript 1.10.764 {:static-fns true, :optimize-constants true}
goog.provide('set.stats_spec');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('c3kit.wire.spec_helper');
goog.require('set.cards');
goog.require('set.cardsc');
goog.require('speclj.core');
goog.require('set.stats');
var description__30016__auto___30795 = speclj.components.new_description("Stats",false,"set.stats-spec");
var _STAR_parent_description_STAR__orig_val__30785_30796 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__30786_30797 = description__30016__auto___30795;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__30786_30797);

try{var seq__30787_30798 = cljs.core.seq((new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.cljs$core$IFn$_invoke$arity$3("displays stats",((function (_STAR_parent_description_STAR__orig_val__30785_30796,_STAR_parent_description_STAR__temp_val__30786_30797,description__30016__auto___30795){
return (function (){
var set_count_orig_val__30793 = set.cardsc.set_count;
var set_count_temp_val__30794 = cljs.core.constantly((2));
(set.cardsc.set_count = set_count_temp_val__30794);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(set.cards.state,cljs.core.assoc,cljs.core.cst$kw$found_DASH_sets_DASH_count,(1));

c3kit.wire.spec_helper.render.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [set.stats.stats], null));

var expected__30149__auto___30802 = "found: 1 exist: 2";
var actual__30150__auto___30803 = c3kit.wire.spec_helper.html_BANG_.cljs$core$IFn$_invoke$arity$1("#-stats");
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(expected__30149__auto___30802,actual__30150__auto___30803)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__30149__auto___30802 == null))?"nil":cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([expected__30149__auto___30802], 0))),speclj.platform.endl,"     got: ",(((actual__30150__auto___30803 == null))?"nil":cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([actual__30150__auto___30803], 0)))," (using =)"].join('')));
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(set.cards.state,cljs.core.assoc,cljs.core.cst$kw$found_DASH_sets_DASH_count,(2));

c3kit.wire.spec_helper.flush();

var expected__30149__auto__ = "found: 2 exist: 2";
var actual__30150__auto__ = c3kit.wire.spec_helper.html_BANG_.cljs$core$IFn$_invoke$arity$1("#-stats");
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(expected__30149__auto__,actual__30150__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__30149__auto__ == null))?"nil":cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([expected__30149__auto__], 0))),speclj.platform.endl,"     got: ",(((actual__30150__auto__ == null))?"nil":cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([actual__30150__auto__], 0)))," (using =)"].join('')));
}
}finally {(set.cardsc.set_count = set_count_orig_val__30793);
}});})(_STAR_parent_description_STAR__orig_val__30785_30796,_STAR_parent_description_STAR__temp_val__30786_30797,description__30016__auto___30795))
,false)],null)));
var chunk__30788_30799 = null;
var count__30789_30800 = (0);
var i__30790_30801 = (0);
while(true){
if((i__30790_30801 < count__30789_30800)){
var component__30017__auto___30804 = chunk__30788_30799.cljs$core$IIndexed$_nth$arity$2(null,i__30790_30801);
speclj.components.install(component__30017__auto___30804,description__30016__auto___30795);


var G__30805 = seq__30787_30798;
var G__30806 = chunk__30788_30799;
var G__30807 = count__30789_30800;
var G__30808 = (i__30790_30801 + (1));
seq__30787_30798 = G__30805;
chunk__30788_30799 = G__30806;
count__30789_30800 = G__30807;
i__30790_30801 = G__30808;
continue;
} else {
var temp__5804__auto___30809 = cljs.core.seq(seq__30787_30798);
if(temp__5804__auto___30809){
var seq__30787_30810__$1 = temp__5804__auto___30809;
if(cljs.core.chunked_seq_QMARK_(seq__30787_30810__$1)){
var c__4556__auto___30811 = cljs.core.chunk_first(seq__30787_30810__$1);
var G__30812 = cljs.core.chunk_rest(seq__30787_30810__$1);
var G__30813 = c__4556__auto___30811;
var G__30814 = cljs.core.count(c__4556__auto___30811);
var G__30815 = (0);
seq__30787_30798 = G__30812;
chunk__30788_30799 = G__30813;
count__30789_30800 = G__30814;
i__30790_30801 = G__30815;
continue;
} else {
var component__30017__auto___30816 = cljs.core.first(seq__30787_30810__$1);
speclj.components.install(component__30017__auto___30816,description__30016__auto___30795);


var G__30817 = cljs.core.next(seq__30787_30810__$1);
var G__30818 = null;
var G__30819 = (0);
var G__30820 = (0);
seq__30787_30798 = G__30817;
chunk__30788_30799 = G__30818;
count__30789_30800 = G__30819;
i__30790_30801 = G__30820;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__30785_30796);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description(speclj.config.active_runner(),description__30016__auto___30795);
}

