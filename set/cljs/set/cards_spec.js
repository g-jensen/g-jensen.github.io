// Compiled by ClojureScript 1.10.764 {:static-fns true, :optimize-constants true}
goog.provide('set.cards_spec');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('set.color_blind');
goog.require('set.settings');
goog.require('speclj.core');
goog.require('set.cardsc');
goog.require('set.card_pickerc');
goog.require('set.cards');
goog.require('c3kit.wire.spec_helper');
set.cards_spec.cards = cljs.core.cst$kw$cards.cljs$core$IFn$_invoke$arity$1(set.cards.initial_state);
set.cards_spec.card_0 = cljs.core.first(set.cards_spec.cards);
set.cards_spec.card_1 = cljs.core.second(set.cards_spec.cards);
var description__30016__auto___30975 = speclj.components.new_description("Cards",false,"set.cards-spec");
var _STAR_parent_description_STAR__orig_val__30949_30976 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__30950_30977 = description__30016__auto___30975;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__30950_30977);

try{var seq__30951_30978 = cljs.core.seq((new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,[c3kit.wire.spec_helper.with_root_dom(),speclj.components.new_before(((function (_STAR_parent_description_STAR__orig_val__30949_30976,_STAR_parent_description_STAR__temp_val__30950_30977,description__30016__auto___30975){
return (function (){
return cljs.core.reset_BANG_(set.cards.state,set.cards.initial_state);
});})(_STAR_parent_description_STAR__orig_val__30949_30976,_STAR_parent_description_STAR__temp_val__30950_30977,description__30016__auto___30975))
),speclj.components.new_characteristic.cljs$core$IFn$_invoke$arity$3("on card click",((function (_STAR_parent_description_STAR__orig_val__30949_30976,_STAR_parent_description_STAR__temp_val__30950_30977,description__30016__auto___30975){
return (function (){
set.cards.on_click_card_BANG_((0));

var expected__30149__auto___30982 = set.card_pickerc.pick(set.cards.initial_state,(0));
var actual__30150__auto___30983 = cljs.core.deref(set.cards.state);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(expected__30149__auto___30982,actual__30150__auto___30983)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__30149__auto___30982 == null))?"nil":cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([expected__30149__auto___30982], 0))),speclj.platform.endl,"     got: ",(((actual__30150__auto___30983 == null))?"nil":cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([actual__30150__auto___30983], 0)))," (using =)"].join('')));
}

set.cards.on_click_card_BANG_((3));

var expected__30149__auto__ = set.card_pickerc.pick(set.card_pickerc.pick(set.cards.initial_state,(0)),(3));
var actual__30150__auto__ = cljs.core.deref(set.cards.state);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(expected__30149__auto__,actual__30150__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__30149__auto__ == null))?"nil":cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([expected__30149__auto__], 0))),speclj.platform.endl,"     got: ",(((actual__30150__auto__ == null))?"nil":cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([actual__30150__auto__], 0)))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__30949_30976,_STAR_parent_description_STAR__temp_val__30950_30977,description__30016__auto___30975))
,false),(function (){var description__30016__auto____$1 = speclj.components.new_description("card->button",false,"set.cards-spec");
var _STAR_parent_description_STAR__orig_val__30965_30984 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__30966_30985 = description__30016__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__30966_30985);

try{var seq__30967_30986 = cljs.core.seq((new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_before(((function (_STAR_parent_description_STAR__orig_val__30965_30984,_STAR_parent_description_STAR__temp_val__30966_30985,description__30016__auto____$1,_STAR_parent_description_STAR__orig_val__30949_30976,_STAR_parent_description_STAR__temp_val__30950_30977,description__30016__auto___30975){
return (function (){
return c3kit.wire.spec_helper.render.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [set.cards.card__GT_button,(0),set.cards_spec.card_0,set.settings.state], null));
});})(_STAR_parent_description_STAR__orig_val__30965_30984,_STAR_parent_description_STAR__temp_val__30966_30985,description__30016__auto____$1,_STAR_parent_description_STAR__orig_val__30949_30976,_STAR_parent_description_STAR__temp_val__30950_30977,description__30016__auto___30975))
),speclj.components.new_characteristic.cljs$core$IFn$_invoke$arity$3("on-click",((function (_STAR_parent_description_STAR__orig_val__30965_30984,_STAR_parent_description_STAR__temp_val__30966_30985,description__30016__auto____$1,_STAR_parent_description_STAR__orig_val__30949_30976,_STAR_parent_description_STAR__temp_val__30950_30977,description__30016__auto___30975){
return (function (){
var expected__30149__auto___30990 = "card";
var actual__30150__auto___30991 = c3kit.wire.spec_helper.class_name.cljs$core$IFn$_invoke$arity$1("#-card-0");
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(expected__30149__auto___30990,actual__30150__auto___30991)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__30149__auto___30990 == null))?"nil":cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([expected__30149__auto___30990], 0))),speclj.platform.endl,"     got: ",(((actual__30150__auto___30991 == null))?"nil":cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([actual__30150__auto___30991], 0)))," (using =)"].join('')));
}

c3kit.wire.spec_helper.click_BANG_.cljs$core$IFn$_invoke$arity$1("#-card-0");

var expected__30149__auto___30992 = set.card_pickerc.pick(set.cards.initial_state,(0));
var actual__30150__auto___30993 = cljs.core.deref(set.cards.state);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(expected__30149__auto___30992,actual__30150__auto___30993)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__30149__auto___30992 == null))?"nil":cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([expected__30149__auto___30992], 0))),speclj.platform.endl,"     got: ",(((actual__30150__auto___30993 == null))?"nil":cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([actual__30150__auto___30993], 0)))," (using =)"].join('')));
}

var expected__30149__auto__ = "card card-selected";
var actual__30150__auto__ = c3kit.wire.spec_helper.class_name.cljs$core$IFn$_invoke$arity$1("#-card-0");
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(expected__30149__auto__,actual__30150__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__30149__auto__ == null))?"nil":cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([expected__30149__auto__], 0))),speclj.platform.endl,"     got: ",(((actual__30150__auto__ == null))?"nil":cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([actual__30150__auto__], 0)))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__30965_30984,_STAR_parent_description_STAR__temp_val__30966_30985,description__30016__auto____$1,_STAR_parent_description_STAR__orig_val__30949_30976,_STAR_parent_description_STAR__temp_val__30950_30977,description__30016__auto___30975))
,false),speclj.components.new_characteristic.cljs$core$IFn$_invoke$arity$3("updates with colorblind mode",((function (_STAR_parent_description_STAR__orig_val__30965_30984,_STAR_parent_description_STAR__temp_val__30966_30985,description__30016__auto____$1,_STAR_parent_description_STAR__orig_val__30949_30976,_STAR_parent_description_STAR__temp_val__30950_30977,description__30016__auto___30975){
return (function (){
var value__30917__auto___30994 = "#-color-blind-0";
var node__30918__auto___30995 = c3kit.wire.spec_helper.select.cljs$core$IFn$_invoke$arity$1(value__30917__auto___30994);
if(cljs.core.truth_(node__30918__auto___30995)){
throw (new speclj.platform.SpecFailure(["Expected selector NOT to find node: ",(((value__30917__auto___30994 == null))?"nil":cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value__30917__auto___30994], 0)))].join('')));
} else {
}

cljs.core.reset_BANG_(set.color_blind.color_blind_mode_QMARK_,true);

c3kit.wire.spec_helper.flush();

var expected__30149__auto__ = set.cardsc.color_label(set.cards_spec.card_0);
var actual__30150__auto__ = c3kit.wire.spec_helper.html_BANG_.cljs$core$IFn$_invoke$arity$1("#-color-blind-0");
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(expected__30149__auto__,actual__30150__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__30149__auto__ == null))?"nil":cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([expected__30149__auto__], 0))),speclj.platform.endl,"     got: ",(((actual__30150__auto__ == null))?"nil":cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([actual__30150__auto__], 0)))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__30965_30984,_STAR_parent_description_STAR__temp_val__30966_30985,description__30016__auto____$1,_STAR_parent_description_STAR__orig_val__30949_30976,_STAR_parent_description_STAR__temp_val__30950_30977,description__30016__auto___30975))
,false)],null)));
var chunk__30968_30987 = null;
var count__30969_30988 = (0);
var i__30970_30989 = (0);
while(true){
if((i__30970_30989 < count__30969_30988)){
var component__30017__auto___30996 = chunk__30968_30987.cljs$core$IIndexed$_nth$arity$2(null,i__30970_30989);
speclj.components.install(component__30017__auto___30996,description__30016__auto____$1);


var G__30997 = seq__30967_30986;
var G__30998 = chunk__30968_30987;
var G__30999 = count__30969_30988;
var G__31000 = (i__30970_30989 + (1));
seq__30967_30986 = G__30997;
chunk__30968_30987 = G__30998;
count__30969_30988 = G__30999;
i__30970_30989 = G__31000;
continue;
} else {
var temp__5804__auto___31001 = cljs.core.seq(seq__30967_30986);
if(temp__5804__auto___31001){
var seq__30967_31002__$1 = temp__5804__auto___31001;
if(cljs.core.chunked_seq_QMARK_(seq__30967_31002__$1)){
var c__4556__auto___31003 = cljs.core.chunk_first(seq__30967_31002__$1);
var G__31004 = cljs.core.chunk_rest(seq__30967_31002__$1);
var G__31005 = c__4556__auto___31003;
var G__31006 = cljs.core.count(c__4556__auto___31003);
var G__31007 = (0);
seq__30967_30986 = G__31004;
chunk__30968_30987 = G__31005;
count__30969_30988 = G__31006;
i__30970_30989 = G__31007;
continue;
} else {
var component__30017__auto___31008 = cljs.core.first(seq__30967_31002__$1);
speclj.components.install(component__30017__auto___31008,description__30016__auto____$1);


var G__31009 = cljs.core.next(seq__30967_31002__$1);
var G__31010 = null;
var G__31011 = (0);
var G__31012 = (0);
seq__30967_30986 = G__31009;
chunk__30968_30987 = G__31010;
count__30969_30988 = G__31011;
i__30970_30989 = G__31012;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__30965_30984);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description(speclj.config.active_runner(),description__30016__auto____$1);
}

return description__30016__auto____$1;
})(),(function (){var iter__4529__auto__ = ((function (_STAR_parent_description_STAR__orig_val__30949_30976,_STAR_parent_description_STAR__temp_val__30950_30977,description__30016__auto___30975){
return (function set$cards_spec$iter__30971(s__30972){
return (new cljs.core.LazySeq(null,(function (){
var s__30972__$1 = s__30972;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__30972__$1);
if(temp__5804__auto__){
var s__30972__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__30972__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__30972__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__30974 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__30973 = (0);
while(true){
if((i__30973 < size__4528__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__30973);
cljs.core.chunk_append(b__30974,speclj.components.new_characteristic.cljs$core$IFn$_invoke$arity$3(["creates button element ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''),((function (i__30973,i,c__4527__auto__,size__4528__auto__,b__30974,s__30972__$2,temp__5804__auto__,_STAR_parent_description_STAR__orig_val__30949_30976,_STAR_parent_description_STAR__temp_val__30950_30977,description__30016__auto___30975){
return (function (){
c3kit.wire.spec_helper.render.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [set.cards.buttons,set.settings.state], null));

var value__30908__auto__ = ["#-card-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('');
var node__30909__auto__ = c3kit.wire.spec_helper.select.cljs$core$IFn$_invoke$arity$1(value__30908__auto__);
if(cljs.core.truth_(node__30909__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected selector to find node: ",(((value__30908__auto__ == null))?"nil":cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value__30908__auto__], 0)))].join('')));
}
});})(i__30973,i,c__4527__auto__,size__4528__auto__,b__30974,s__30972__$2,temp__5804__auto__,_STAR_parent_description_STAR__orig_val__30949_30976,_STAR_parent_description_STAR__temp_val__30950_30977,description__30016__auto___30975))
,false));

var G__31013 = (i__30973 + (1));
i__30973 = G__31013;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__30974),set$cards_spec$iter__30971(cljs.core.chunk_rest(s__30972__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__30974),null);
}
} else {
var i = cljs.core.first(s__30972__$2);
return cljs.core.cons(speclj.components.new_characteristic.cljs$core$IFn$_invoke$arity$3(["creates button element ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''),((function (i,s__30972__$2,temp__5804__auto__,_STAR_parent_description_STAR__orig_val__30949_30976,_STAR_parent_description_STAR__temp_val__30950_30977,description__30016__auto___30975){
return (function (){
c3kit.wire.spec_helper.render.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [set.cards.buttons,set.settings.state], null));

var value__30908__auto__ = ["#-card-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('');
var node__30909__auto__ = c3kit.wire.spec_helper.select.cljs$core$IFn$_invoke$arity$1(value__30908__auto__);
if(cljs.core.truth_(node__30909__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected selector to find node: ",(((value__30908__auto__ == null))?"nil":cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value__30908__auto__], 0)))].join('')));
}
});})(i,s__30972__$2,temp__5804__auto__,_STAR_parent_description_STAR__orig_val__30949_30976,_STAR_parent_description_STAR__temp_val__30950_30977,description__30016__auto___30975))
,false),set$cards_spec$iter__30971(cljs.core.rest(s__30972__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(_STAR_parent_description_STAR__orig_val__30949_30976,_STAR_parent_description_STAR__temp_val__30950_30977,description__30016__auto___30975))
;
return iter__4529__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),(12)));
})()],null)));
var chunk__30952_30979 = null;
var count__30953_30980 = (0);
var i__30954_30981 = (0);
while(true){
if((i__30954_30981 < count__30953_30980)){
var component__30017__auto___31014 = chunk__30952_30979.cljs$core$IIndexed$_nth$arity$2(null,i__30954_30981);
speclj.components.install(component__30017__auto___31014,description__30016__auto___30975);


var G__31015 = seq__30951_30978;
var G__31016 = chunk__30952_30979;
var G__31017 = count__30953_30980;
var G__31018 = (i__30954_30981 + (1));
seq__30951_30978 = G__31015;
chunk__30952_30979 = G__31016;
count__30953_30980 = G__31017;
i__30954_30981 = G__31018;
continue;
} else {
var temp__5804__auto___31019 = cljs.core.seq(seq__30951_30978);
if(temp__5804__auto___31019){
var seq__30951_31020__$1 = temp__5804__auto___31019;
if(cljs.core.chunked_seq_QMARK_(seq__30951_31020__$1)){
var c__4556__auto___31021 = cljs.core.chunk_first(seq__30951_31020__$1);
var G__31022 = cljs.core.chunk_rest(seq__30951_31020__$1);
var G__31023 = c__4556__auto___31021;
var G__31024 = cljs.core.count(c__4556__auto___31021);
var G__31025 = (0);
seq__30951_30978 = G__31022;
chunk__30952_30979 = G__31023;
count__30953_30980 = G__31024;
i__30954_30981 = G__31025;
continue;
} else {
var component__30017__auto___31026 = cljs.core.first(seq__30951_31020__$1);
speclj.components.install(component__30017__auto___31026,description__30016__auto___30975);


var G__31027 = cljs.core.next(seq__30951_31020__$1);
var G__31028 = null;
var G__31029 = (0);
var G__31030 = (0);
seq__30951_30978 = G__31027;
chunk__30952_30979 = G__31028;
count__30953_30980 = G__31029;
i__30954_30981 = G__31030;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__30949_30976);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description(speclj.config.active_runner(),description__30016__auto___30975);
}

