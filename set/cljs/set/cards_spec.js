// Compiled by ClojureScript 1.10.764 {:static-fns true, :optimize-constants true}
goog.provide('set.cards_spec');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('speclj.core');
goog.require('set.utilc');
goog.require('set.card_pickerc');
goog.require('set.cards');
goog.require('c3kit.wire.spec_helper');
goog.require('c3kit.wire.js');
set.cards_spec.cards = cljs.core.cst$kw$cards.cljs$core$IFn$_invoke$arity$1(set.cards.initial_state);
set.cards_spec.card_0 = cljs.core.first(set.cards_spec.cards);
set.cards_spec.card_1 = cljs.core.second(set.cards_spec.cards);
var description__23430__auto___24590 = speclj.components.new_description("Cards",false,"set.cards-spec");
var _STAR_parent_description_STAR__orig_val__24512_24591 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__24513_24592 = description__23430__auto___24590;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__24513_24592);

try{var seq__24514_24593 = cljs.core.seq((new cljs.core.PersistentVector(null,6,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_before(((function (_STAR_parent_description_STAR__orig_val__24512_24591,_STAR_parent_description_STAR__temp_val__24513_24592,description__23430__auto___24590){
return (function (){
return cljs.core.reset_BANG_(set.cards.state,set.cards.initial_state);
});})(_STAR_parent_description_STAR__orig_val__24512_24591,_STAR_parent_description_STAR__temp_val__24513_24592,description__23430__auto___24590))
),speclj.components.new_characteristic.cljs$core$IFn$_invoke$arity$3("on card click",((function (_STAR_parent_description_STAR__orig_val__24512_24591,_STAR_parent_description_STAR__temp_val__24513_24592,description__23430__auto___24590){
return (function (){
set.cards.on_click_card_BANG_((0));

var expected__23563__auto___24597 = set.card_pickerc.pick(set.cards.initial_state,(0));
var actual__23564__auto___24598 = cljs.core.deref(set.cards.state);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(expected__23563__auto___24597,actual__23564__auto___24598)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__23563__auto___24597 == null))?"nil":cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([expected__23563__auto___24597], 0))),speclj.platform.endl,"     got: ",(((actual__23564__auto___24598 == null))?"nil":cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([actual__23564__auto___24598], 0)))," (using =)"].join('')));
}

set.cards.on_click_card_BANG_((3));

var expected__23563__auto__ = set.card_pickerc.pick(set.card_pickerc.pick(set.cards.initial_state,(0)),(3));
var actual__23564__auto__ = cljs.core.deref(set.cards.state);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(expected__23563__auto__,actual__23564__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__23563__auto__ == null))?"nil":cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([expected__23563__auto__], 0))),speclj.platform.endl,"     got: ",(((actual__23564__auto__ == null))?"nil":cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([actual__23564__auto__], 0)))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__24512_24591,_STAR_parent_description_STAR__temp_val__24513_24592,description__23430__auto___24590))
,false),speclj.components.new_characteristic.cljs$core$IFn$_invoke$arity$3("card -> file path",((function (_STAR_parent_description_STAR__orig_val__24512_24591,_STAR_parent_description_STAR__temp_val__24513_24592,description__23430__auto___24590){
return (function (){
var expected__23563__auto___24599 = "cards/green-one-diamond-open.png";
var actual__23564__auto___24600 = set.cards.card__GT_path(set.utilc.card(cljs.core.cst$kw$green,cljs.core.cst$kw$one,cljs.core.cst$kw$diamond,cljs.core.cst$kw$open));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(expected__23563__auto___24599,actual__23564__auto___24600)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__23563__auto___24599 == null))?"nil":cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([expected__23563__auto___24599], 0))),speclj.platform.endl,"     got: ",(((actual__23564__auto___24600 == null))?"nil":cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([actual__23564__auto___24600], 0)))," (using =)"].join('')));
}

var expected__23563__auto___24601 = "cards/red-one-diamond-open.png";
var actual__23564__auto___24602 = set.cards.card__GT_path(set.utilc.card(cljs.core.cst$kw$red,cljs.core.cst$kw$one,cljs.core.cst$kw$diamond,cljs.core.cst$kw$open));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(expected__23563__auto___24601,actual__23564__auto___24602)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__23563__auto___24601 == null))?"nil":cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([expected__23563__auto___24601], 0))),speclj.platform.endl,"     got: ",(((actual__23564__auto___24602 == null))?"nil":cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([actual__23564__auto___24602], 0)))," (using =)"].join('')));
}

var expected__23563__auto___24603 = "cards/red-two-diamond-open.png";
var actual__23564__auto___24604 = set.cards.card__GT_path(set.utilc.card(cljs.core.cst$kw$red,cljs.core.cst$kw$two,cljs.core.cst$kw$diamond,cljs.core.cst$kw$open));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(expected__23563__auto___24603,actual__23564__auto___24604)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__23563__auto___24603 == null))?"nil":cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([expected__23563__auto___24603], 0))),speclj.platform.endl,"     got: ",(((actual__23564__auto___24604 == null))?"nil":cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([actual__23564__auto___24604], 0)))," (using =)"].join('')));
}

var expected__23563__auto___24605 = "cards/red-two-squiggle-open.png";
var actual__23564__auto___24606 = set.cards.card__GT_path(set.utilc.card(cljs.core.cst$kw$red,cljs.core.cst$kw$two,cljs.core.cst$kw$squiggle,cljs.core.cst$kw$open));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(expected__23563__auto___24605,actual__23564__auto___24606)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__23563__auto___24605 == null))?"nil":cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([expected__23563__auto___24605], 0))),speclj.platform.endl,"     got: ",(((actual__23564__auto___24606 == null))?"nil":cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([actual__23564__auto___24606], 0)))," (using =)"].join('')));
}

var expected__23563__auto__ = "cards/red-two-squiggle-solid.png";
var actual__23564__auto__ = set.cards.card__GT_path(set.utilc.card(cljs.core.cst$kw$red,cljs.core.cst$kw$two,cljs.core.cst$kw$squiggle,cljs.core.cst$kw$solid));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(expected__23563__auto__,actual__23564__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__23563__auto__ == null))?"nil":cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([expected__23563__auto__], 0))),speclj.platform.endl,"     got: ",(((actual__23564__auto__ == null))?"nil":cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([actual__23564__auto__], 0)))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__24512_24591,_STAR_parent_description_STAR__temp_val__24513_24592,description__23430__auto___24590))
,false),(function (){var description__23430__auto____$1 = speclj.components.new_description("card -> button",false,"set.cards-spec");
var _STAR_parent_description_STAR__orig_val__24554_24607 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__24555_24608 = description__23430__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__24555_24608);

try{var seq__24556_24609 = cljs.core.seq((new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.cljs$core$IFn$_invoke$arity$3("for a basic card",((function (_STAR_parent_description_STAR__orig_val__24554_24607,_STAR_parent_description_STAR__temp_val__24555_24608,description__23430__auto____$1,_STAR_parent_description_STAR__orig_val__24512_24591,_STAR_parent_description_STAR__temp_val__24513_24592,description__23430__auto___24590){
return (function (){
var vec__24572 = set.cards.card__GT_button((0),set.cards_spec.card_0);
var but_outerhtml = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24572,(0),null);
var but_attribs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24572,(1),null);
var expected__23563__auto___24613 = cljs.core.cst$kw$input$card;
var actual__23564__auto___24614 = but_outerhtml;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(expected__23563__auto___24613,actual__23564__auto___24614)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__23563__auto___24613 == null))?"nil":cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([expected__23563__auto___24613], 0))),speclj.platform.endl,"     got: ",(((actual__23564__auto___24614 == null))?"nil":cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([actual__23564__auto___24614], 0)))," (using =)"].join('')));
}

var expected__23563__auto___24615 = null;
var actual__23564__auto___24616 = cljs.core.cst$kw$class.cljs$core$IFn$_invoke$arity$1(but_attribs);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(expected__23563__auto___24615,actual__23564__auto___24616)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__23563__auto___24615 == null))?"nil":cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([expected__23563__auto___24615], 0))),speclj.platform.endl,"     got: ",(((actual__23564__auto___24616 == null))?"nil":cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([actual__23564__auto___24616], 0)))," (using =)"].join('')));
}

var expected__23563__auto___24617 = "-card-0";
var actual__23564__auto___24618 = cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(but_attribs);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(expected__23563__auto___24617,actual__23564__auto___24618)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__23563__auto___24617 == null))?"nil":cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([expected__23563__auto___24617], 0))),speclj.platform.endl,"     got: ",(((actual__23564__auto___24618 == null))?"nil":cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([actual__23564__auto___24618], 0)))," (using =)"].join('')));
}

var expected__23563__auto___24619 = "image";
var actual__23564__auto___24620 = cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(but_attribs);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(expected__23563__auto___24619,actual__23564__auto___24620)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__23563__auto___24619 == null))?"nil":cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([expected__23563__auto___24619], 0))),speclj.platform.endl,"     got: ",(((actual__23564__auto___24620 == null))?"nil":cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([actual__23564__auto___24620], 0)))," (using =)"].join('')));
}

var expected__23563__auto___24621 = set.cards.card__GT_path(set.cards_spec.card_0);
var actual__23564__auto___24622 = cljs.core.cst$kw$src.cljs$core$IFn$_invoke$arity$1(but_attribs);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(expected__23563__auto___24621,actual__23564__auto___24622)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__23563__auto___24621 == null))?"nil":cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([expected__23563__auto___24621], 0))),speclj.platform.endl,"     got: ",(((actual__23564__auto___24622 == null))?"nil":cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([actual__23564__auto___24622], 0)))," (using =)"].join('')));
}

var expected__23587__auto__ = null;
var actual__23588__auto__ = cljs.core.cst$kw$on_DASH_click.cljs$core$IFn$_invoke$arity$1(but_attribs);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(expected__23587__auto__,actual__23588__auto__)){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__23587__auto__ == null))?"nil":cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([expected__23587__auto__], 0))),speclj.platform.endl,"not to =: ",(((actual__23588__auto__ == null))?"nil":cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([actual__23588__auto__], 0)))].join('')));
} else {
return null;
}
});})(_STAR_parent_description_STAR__orig_val__24554_24607,_STAR_parent_description_STAR__temp_val__24555_24608,description__23430__auto____$1,_STAR_parent_description_STAR__orig_val__24512_24591,_STAR_parent_description_STAR__temp_val__24513_24592,description__23430__auto___24590))
,false),speclj.components.new_characteristic.cljs$core$IFn$_invoke$arity$3("for a different card",((function (_STAR_parent_description_STAR__orig_val__24554_24607,_STAR_parent_description_STAR__temp_val__24555_24608,description__23430__auto____$1,_STAR_parent_description_STAR__orig_val__24512_24591,_STAR_parent_description_STAR__temp_val__24513_24592,description__23430__auto___24590){
return (function (){
var vec__24575 = set.cards.card__GT_button((1),set.cards_spec.card_1);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24575,(0),null);
var but_attribs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24575,(1),null);
var expected__23563__auto__ = set.cards.card__GT_path(set.cards_spec.card_1);
var actual__23564__auto__ = cljs.core.cst$kw$src.cljs$core$IFn$_invoke$arity$1(but_attribs);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(expected__23563__auto__,actual__23564__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__23563__auto__ == null))?"nil":cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([expected__23563__auto__], 0))),speclj.platform.endl,"     got: ",(((actual__23564__auto__ == null))?"nil":cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([actual__23564__auto__], 0)))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__24554_24607,_STAR_parent_description_STAR__temp_val__24555_24608,description__23430__auto____$1,_STAR_parent_description_STAR__orig_val__24512_24591,_STAR_parent_description_STAR__temp_val__24513_24592,description__23430__auto___24590))
,false),speclj.components.new_characteristic.cljs$core$IFn$_invoke$arity$3("for a card at a different index",((function (_STAR_parent_description_STAR__orig_val__24554_24607,_STAR_parent_description_STAR__temp_val__24555_24608,description__23430__auto____$1,_STAR_parent_description_STAR__orig_val__24512_24591,_STAR_parent_description_STAR__temp_val__24513_24592,description__23430__auto___24590){
return (function (){
var vec__24578 = set.cards.card__GT_button((1),set.cards_spec.card_1);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24578,(0),null);
var but_attribs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24578,(1),null);
var expected__23563__auto__ = "-card-1";
var actual__23564__auto__ = cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(but_attribs);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(expected__23563__auto__,actual__23564__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__23563__auto__ == null))?"nil":cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([expected__23563__auto__], 0))),speclj.platform.endl,"     got: ",(((actual__23564__auto__ == null))?"nil":cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([actual__23564__auto__], 0)))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__24554_24607,_STAR_parent_description_STAR__temp_val__24555_24608,description__23430__auto____$1,_STAR_parent_description_STAR__orig_val__24512_24591,_STAR_parent_description_STAR__temp_val__24513_24592,description__23430__auto___24590))
,false),speclj.components.new_characteristic.cljs$core$IFn$_invoke$arity$3("for a selected card",((function (_STAR_parent_description_STAR__orig_val__24554_24607,_STAR_parent_description_STAR__temp_val__24555_24608,description__23430__auto____$1,_STAR_parent_description_STAR__orig_val__24512_24591,_STAR_parent_description_STAR__temp_val__24513_24592,description__23430__auto___24590){
return (function (){
set.cards.on_click_card_BANG_((1));

var vec__24581 = set.cards.card__GT_button((1),set.cards_spec.card_1);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24581,(0),null);
var but_attribs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24581,(1),null);
var expected__23563__auto__ = "card-selected";
var actual__23564__auto__ = cljs.core.cst$kw$class.cljs$core$IFn$_invoke$arity$1(but_attribs);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(expected__23563__auto__,actual__23564__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__23563__auto__ == null))?"nil":cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([expected__23563__auto__], 0))),speclj.platform.endl,"     got: ",(((actual__23564__auto__ == null))?"nil":cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([actual__23564__auto__], 0)))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__24554_24607,_STAR_parent_description_STAR__temp_val__24555_24608,description__23430__auto____$1,_STAR_parent_description_STAR__orig_val__24512_24591,_STAR_parent_description_STAR__temp_val__24513_24592,description__23430__auto___24590))
,false)],null)));
var chunk__24557_24610 = null;
var count__24558_24611 = (0);
var i__24559_24612 = (0);
while(true){
if((i__24559_24612 < count__24558_24611)){
var component__23431__auto___24623 = chunk__24557_24610.cljs$core$IIndexed$_nth$arity$2(null,i__24559_24612);
speclj.components.install(component__23431__auto___24623,description__23430__auto____$1);


var G__24624 = seq__24556_24609;
var G__24625 = chunk__24557_24610;
var G__24626 = count__24558_24611;
var G__24627 = (i__24559_24612 + (1));
seq__24556_24609 = G__24624;
chunk__24557_24610 = G__24625;
count__24558_24611 = G__24626;
i__24559_24612 = G__24627;
continue;
} else {
var temp__5804__auto___24628 = cljs.core.seq(seq__24556_24609);
if(temp__5804__auto___24628){
var seq__24556_24629__$1 = temp__5804__auto___24628;
if(cljs.core.chunked_seq_QMARK_(seq__24556_24629__$1)){
var c__4556__auto___24630 = cljs.core.chunk_first(seq__24556_24629__$1);
var G__24631 = cljs.core.chunk_rest(seq__24556_24629__$1);
var G__24632 = c__4556__auto___24630;
var G__24633 = cljs.core.count(c__4556__auto___24630);
var G__24634 = (0);
seq__24556_24609 = G__24631;
chunk__24557_24610 = G__24632;
count__24558_24611 = G__24633;
i__24559_24612 = G__24634;
continue;
} else {
var component__23431__auto___24635 = cljs.core.first(seq__24556_24629__$1);
speclj.components.install(component__23431__auto___24635,description__23430__auto____$1);


var G__24636 = cljs.core.next(seq__24556_24629__$1);
var G__24637 = null;
var G__24638 = (0);
var G__24639 = (0);
seq__24556_24609 = G__24636;
chunk__24557_24610 = G__24637;
count__24558_24611 = G__24638;
i__24559_24612 = G__24639;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__24554_24607);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description(speclj.config.active_runner(),description__23430__auto____$1);
}

return description__23430__auto____$1;
})(),speclj.components.new_characteristic.cljs$core$IFn$_invoke$arity$3("creates buttons element",((function (_STAR_parent_description_STAR__orig_val__24512_24591,_STAR_parent_description_STAR__temp_val__24513_24592,description__23430__auto___24590){
return (function (){
var vec__24584 = set.cards.buttons();
var outerhtml = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24584,(0),null);
var innerhtml = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24584,(1),null);
var expected__23563__auto___24640 = cljs.core.cst$kw$div$card_DASH_container;
var actual__23564__auto___24641 = outerhtml;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(expected__23563__auto___24640,actual__23564__auto___24641)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__23563__auto___24640 == null))?"nil":cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([expected__23563__auto___24640], 0))),speclj.platform.endl,"     got: ",(((actual__23564__auto___24641 == null))?"nil":cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([actual__23564__auto___24641], 0)))," (using =)"].join('')));
}

var expected__23563__auto__ = (12);
var actual__23564__auto__ = cljs.core.count(innerhtml);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(expected__23563__auto__,actual__23564__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__23563__auto__ == null))?"nil":cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([expected__23563__auto__], 0))),speclj.platform.endl,"     got: ",(((actual__23564__auto__ == null))?"nil":cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([actual__23564__auto__], 0)))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__24512_24591,_STAR_parent_description_STAR__temp_val__24513_24592,description__23430__auto___24590))
,false),speclj.components.new_characteristic.cljs$core$IFn$_invoke$arity$3("creates stats element",((function (_STAR_parent_description_STAR__orig_val__24512_24591,_STAR_parent_description_STAR__temp_val__24513_24592,description__23430__auto___24590){
return (function (){
var vec__24587 = set.cards.stats();
var outerhtml = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24587,(0),null);
var innerhtml = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24587,(1),null);
var expected__23563__auto___24642 = cljs.core.cst$kw$div;
var actual__23564__auto___24643 = outerhtml;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(expected__23563__auto___24642,actual__23564__auto___24643)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__23563__auto___24642 == null))?"nil":cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([expected__23563__auto___24642], 0))),speclj.platform.endl,"     got: ",(((actual__23564__auto___24643 == null))?"nil":cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([actual__23564__auto___24643], 0)))," (using =)"].join('')));
}

var expected__23587__auto__ = null;
var actual__23588__auto__ = innerhtml;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(expected__23587__auto__,actual__23588__auto__)){
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__23587__auto__ == null))?"nil":cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([expected__23587__auto__], 0))),speclj.platform.endl,"not to =: ",(((actual__23588__auto__ == null))?"nil":cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([actual__23588__auto__], 0)))].join('')));
} else {
return null;
}
});})(_STAR_parent_description_STAR__orig_val__24512_24591,_STAR_parent_description_STAR__temp_val__24513_24592,description__23430__auto___24590))
,false)],null)));
var chunk__24515_24594 = null;
var count__24516_24595 = (0);
var i__24517_24596 = (0);
while(true){
if((i__24517_24596 < count__24516_24595)){
var component__23431__auto___24644 = chunk__24515_24594.cljs$core$IIndexed$_nth$arity$2(null,i__24517_24596);
speclj.components.install(component__23431__auto___24644,description__23430__auto___24590);


var G__24645 = seq__24514_24593;
var G__24646 = chunk__24515_24594;
var G__24647 = count__24516_24595;
var G__24648 = (i__24517_24596 + (1));
seq__24514_24593 = G__24645;
chunk__24515_24594 = G__24646;
count__24516_24595 = G__24647;
i__24517_24596 = G__24648;
continue;
} else {
var temp__5804__auto___24649 = cljs.core.seq(seq__24514_24593);
if(temp__5804__auto___24649){
var seq__24514_24650__$1 = temp__5804__auto___24649;
if(cljs.core.chunked_seq_QMARK_(seq__24514_24650__$1)){
var c__4556__auto___24651 = cljs.core.chunk_first(seq__24514_24650__$1);
var G__24652 = cljs.core.chunk_rest(seq__24514_24650__$1);
var G__24653 = c__4556__auto___24651;
var G__24654 = cljs.core.count(c__4556__auto___24651);
var G__24655 = (0);
seq__24514_24593 = G__24652;
chunk__24515_24594 = G__24653;
count__24516_24595 = G__24654;
i__24517_24596 = G__24655;
continue;
} else {
var component__23431__auto___24656 = cljs.core.first(seq__24514_24650__$1);
speclj.components.install(component__23431__auto___24656,description__23430__auto___24590);


var G__24657 = cljs.core.next(seq__24514_24650__$1);
var G__24658 = null;
var G__24659 = (0);
var G__24660 = (0);
seq__24514_24593 = G__24657;
chunk__24515_24594 = G__24658;
count__24516_24595 = G__24659;
i__24517_24596 = G__24660;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__24512_24591);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description(speclj.config.active_runner(),description__23430__auto___24590);
}

