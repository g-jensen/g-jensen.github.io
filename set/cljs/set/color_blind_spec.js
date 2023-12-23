// Compiled by ClojureScript 1.10.764 {:static-fns true, :optimize-constants true}
goog.provide('set.color_blind_spec');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('speclj.core');
goog.require('set.color_blind');
goog.require('c3kit.wire.spec_helper');
var description__30016__auto___30861 = speclj.components.new_description("Color blind mode",false,"set.color-blind-spec");
var _STAR_parent_description_STAR__orig_val__30855_30862 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__30856_30863 = description__30016__auto___30861;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__30856_30863);

try{var seq__30857_30864 = cljs.core.seq((new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[c3kit.wire.spec_helper.with_root_dom(),speclj.components.new_before(((function (_STAR_parent_description_STAR__orig_val__30855_30862,_STAR_parent_description_STAR__temp_val__30856_30863,description__30016__auto___30861){
return (function (){
return cljs.core.reset_BANG_(set.color_blind.color_blind_mode_QMARK_,false);
});})(_STAR_parent_description_STAR__orig_val__30855_30862,_STAR_parent_description_STAR__temp_val__30856_30863,description__30016__auto___30861))
),speclj.components.new_characteristic.cljs$core$IFn$_invoke$arity$3("toggles",((function (_STAR_parent_description_STAR__orig_val__30855_30862,_STAR_parent_description_STAR__temp_val__30856_30863,description__30016__auto___30861){
return (function (){
c3kit.wire.spec_helper.render.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [set.color_blind.button], null));

c3kit.wire.spec_helper.click_BANG_.cljs$core$IFn$_invoke$arity$1("#-color-blind-toggle");

var value__30137__auto___30868 = cljs.core.deref(set.color_blind.color_blind_mode_QMARK_);
if(cljs.core.not(value__30137__auto___30868)){
throw (new speclj.platform.SpecFailure(["Expected truthy but was: ",(((value__30137__auto___30868 == null))?"nil":cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value__30137__auto___30868], 0))),""].join('')));
} else {
}

c3kit.wire.spec_helper.click_BANG_.cljs$core$IFn$_invoke$arity$1("#-color-blind-toggle");

var value__30143__auto__ = cljs.core.deref(set.color_blind.color_blind_mode_QMARK_);
if(cljs.core.truth_(value__30143__auto__)){
throw (new speclj.platform.SpecFailure(["Expected falsy but was: ",(((value__30143__auto__ == null))?"nil":cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value__30143__auto__], 0)))].join('')));
} else {
return null;
}
});})(_STAR_parent_description_STAR__orig_val__30855_30862,_STAR_parent_description_STAR__temp_val__30856_30863,description__30016__auto___30861))
,false)],null)));
var chunk__30858_30865 = null;
var count__30859_30866 = (0);
var i__30860_30867 = (0);
while(true){
if((i__30860_30867 < count__30859_30866)){
var component__30017__auto___30869 = chunk__30858_30865.cljs$core$IIndexed$_nth$arity$2(null,i__30860_30867);
speclj.components.install(component__30017__auto___30869,description__30016__auto___30861);


var G__30870 = seq__30857_30864;
var G__30871 = chunk__30858_30865;
var G__30872 = count__30859_30866;
var G__30873 = (i__30860_30867 + (1));
seq__30857_30864 = G__30870;
chunk__30858_30865 = G__30871;
count__30859_30866 = G__30872;
i__30860_30867 = G__30873;
continue;
} else {
var temp__5804__auto___30874 = cljs.core.seq(seq__30857_30864);
if(temp__5804__auto___30874){
var seq__30857_30875__$1 = temp__5804__auto___30874;
if(cljs.core.chunked_seq_QMARK_(seq__30857_30875__$1)){
var c__4556__auto___30876 = cljs.core.chunk_first(seq__30857_30875__$1);
var G__30877 = cljs.core.chunk_rest(seq__30857_30875__$1);
var G__30878 = c__4556__auto___30876;
var G__30879 = cljs.core.count(c__4556__auto___30876);
var G__30880 = (0);
seq__30857_30864 = G__30877;
chunk__30858_30865 = G__30878;
count__30859_30866 = G__30879;
i__30860_30867 = G__30880;
continue;
} else {
var component__30017__auto___30881 = cljs.core.first(seq__30857_30875__$1);
speclj.components.install(component__30017__auto___30881,description__30016__auto___30861);


var G__30882 = cljs.core.next(seq__30857_30875__$1);
var G__30883 = null;
var G__30884 = (0);
var G__30885 = (0);
seq__30857_30864 = G__30882;
chunk__30858_30865 = G__30883;
count__30859_30866 = G__30884;
i__30860_30867 = G__30885;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__30855_30862);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description(speclj.config.active_runner(),description__30016__auto___30861);
}

