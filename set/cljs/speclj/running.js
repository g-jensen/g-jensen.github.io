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
var G__21496 = parent;
component = G__21496;
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

var G__21497 = parent;
component = G__21497;
continue;
} else {
return null;
}
break;
}
});
speclj.running.track_focused_descriptions_BANG_ = (function speclj$running$track_focused_descriptions_BANG_(descriptions){
var seq__21498 = cljs.core.seq(descriptions);
var chunk__21499 = null;
var count__21500 = (0);
var i__21501 = (0);
while(true){
if((i__21501 < count__21500)){
var component = chunk__21499.cljs$core$IIndexed$_nth$arity$2(null,i__21501);
if(cljs.core.truth_(speclj.running.focused_QMARK_(component))){
speclj.running.enable_focus_mode_BANG_(component);

speclj.running.focus_children_BANG_(component);

speclj.running.focus_characteristics_BANG_(component);
} else {
}


var G__21502 = seq__21498;
var G__21503 = chunk__21499;
var G__21504 = count__21500;
var G__21505 = (i__21501 + (1));
seq__21498 = G__21502;
chunk__21499 = G__21503;
count__21500 = G__21504;
i__21501 = G__21505;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__21498);
if(temp__5804__auto__){
var seq__21498__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21498__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__21498__$1);
var G__21506 = cljs.core.chunk_rest(seq__21498__$1);
var G__21507 = c__4556__auto__;
var G__21508 = cljs.core.count(c__4556__auto__);
var G__21509 = (0);
seq__21498 = G__21506;
chunk__21499 = G__21507;
count__21500 = G__21508;
i__21501 = G__21509;
continue;
} else {
var component = cljs.core.first(seq__21498__$1);
if(cljs.core.truth_(speclj.running.focused_QMARK_(component))){
speclj.running.enable_focus_mode_BANG_(component);

speclj.running.focus_children_BANG_(component);

speclj.running.focus_characteristics_BANG_(component);
} else {
}


var G__21510 = cljs.core.next(seq__21498__$1);
var G__21511 = null;
var G__21512 = (0);
var G__21513 = (0);
seq__21498 = G__21510;
chunk__21499 = G__21511;
count__21500 = G__21512;
i__21501 = G__21513;
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
var seq__21514 = cljs.core.seq(characteristics);
var chunk__21516 = null;
var count__21517 = (0);
var i__21518 = (0);
while(true){
if((i__21518 < count__21517)){
var characteristic = chunk__21516.cljs$core$IIndexed$_nth$arity$2(null,i__21518);
if(cljs.core.truth_(speclj.running.focused_QMARK_(characteristic))){
speclj.running.enable_focus_mode_BANG_(characteristic);


var G__21520 = seq__21514;
var G__21521 = chunk__21516;
var G__21522 = count__21517;
var G__21523 = (i__21518 + (1));
seq__21514 = G__21520;
chunk__21516 = G__21521;
count__21517 = G__21522;
i__21518 = G__21523;
continue;
} else {
var G__21524 = seq__21514;
var G__21525 = chunk__21516;
var G__21526 = count__21517;
var G__21527 = (i__21518 + (1));
seq__21514 = G__21524;
chunk__21516 = G__21525;
count__21517 = G__21526;
i__21518 = G__21527;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__21514);
if(temp__5804__auto__){
var seq__21514__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21514__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__21514__$1);
var G__21528 = cljs.core.chunk_rest(seq__21514__$1);
var G__21529 = c__4556__auto__;
var G__21530 = cljs.core.count(c__4556__auto__);
var G__21531 = (0);
seq__21514 = G__21528;
chunk__21516 = G__21529;
count__21517 = G__21530;
i__21518 = G__21531;
continue;
} else {
var characteristic = cljs.core.first(seq__21514__$1);
if(cljs.core.truth_(speclj.running.focused_QMARK_(characteristic))){
speclj.running.enable_focus_mode_BANG_(characteristic);


var G__21532 = cljs.core.next(seq__21514__$1);
var G__21533 = null;
var G__21534 = (0);
var G__21535 = (0);
seq__21514 = G__21532;
chunk__21516 = G__21533;
count__21517 = G__21534;
i__21518 = G__21535;
continue;
} else {
var G__21536 = cljs.core.next(seq__21514__$1);
var G__21537 = null;
var G__21538 = (0);
var G__21539 = (0);
seq__21514 = G__21536;
chunk__21516 = G__21537;
count__21517 = G__21538;
i__21518 = G__21539;
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
var seq__21540_21544 = cljs.core.seq(descriptions);
var chunk__21541_21545 = null;
var count__21542_21546 = (0);
var i__21543_21547 = (0);
while(true){
if((i__21543_21547 < count__21542_21546)){
var description_21548 = chunk__21541_21545.cljs$core$IIndexed$_nth$arity$2(null,i__21543_21547);
speclj.running.scan_for_focus_BANG_(description_21548);


var G__21549 = seq__21540_21544;
var G__21550 = chunk__21541_21545;
var G__21551 = count__21542_21546;
var G__21552 = (i__21543_21547 + (1));
seq__21540_21544 = G__21549;
chunk__21541_21545 = G__21550;
count__21542_21546 = G__21551;
i__21543_21547 = G__21552;
continue;
} else {
var temp__5804__auto___21553 = cljs.core.seq(seq__21540_21544);
if(temp__5804__auto___21553){
var seq__21540_21554__$1 = temp__5804__auto___21553;
if(cljs.core.chunked_seq_QMARK_(seq__21540_21554__$1)){
var c__4556__auto___21555 = cljs.core.chunk_first(seq__21540_21554__$1);
var G__21556 = cljs.core.chunk_rest(seq__21540_21554__$1);
var G__21557 = c__4556__auto___21555;
var G__21558 = cljs.core.count(c__4556__auto___21555);
var G__21559 = (0);
seq__21540_21544 = G__21556;
chunk__21541_21545 = G__21557;
count__21542_21546 = G__21558;
i__21543_21547 = G__21559;
continue;
} else {
var description_21560 = cljs.core.first(seq__21540_21554__$1);
speclj.running.scan_for_focus_BANG_(description_21560);


var G__21561 = cljs.core.next(seq__21540_21554__$1);
var G__21562 = null;
var G__21563 = (0);
var G__21564 = (0);
seq__21540_21544 = G__21561;
chunk__21541_21545 = G__21562;
count__21542_21546 = G__21563;
i__21543_21547 = G__21564;
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
var seq__21565 = cljs.core.seq(components);
var chunk__21566 = null;
var count__21567 = (0);
var i__21568 = (0);
while(true){
if((i__21568 < count__21567)){
var component = chunk__21566.cljs$core$IIndexed$_nth$arity$2(null,i__21568);
var fexpr__21571_21573 = component.body;
(fexpr__21571_21573.cljs$core$IFn$_invoke$arity$0 ? fexpr__21571_21573.cljs$core$IFn$_invoke$arity$0() : fexpr__21571_21573.call(null));


var G__21574 = seq__21565;
var G__21575 = chunk__21566;
var G__21576 = count__21567;
var G__21577 = (i__21568 + (1));
seq__21565 = G__21574;
chunk__21566 = G__21575;
count__21567 = G__21576;
i__21568 = G__21577;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__21565);
if(temp__5804__auto__){
var seq__21565__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21565__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__21565__$1);
var G__21578 = cljs.core.chunk_rest(seq__21565__$1);
var G__21579 = c__4556__auto__;
var G__21580 = cljs.core.count(c__4556__auto__);
var G__21581 = (0);
seq__21565 = G__21578;
chunk__21566 = G__21579;
count__21567 = G__21580;
i__21568 = G__21581;
continue;
} else {
var component = cljs.core.first(seq__21565__$1);
var fexpr__21572_21582 = component.body;
(fexpr__21572_21582.cljs$core$IFn$_invoke$arity$0 ? fexpr__21572_21582.cljs$core$IFn$_invoke$arity$0() : fexpr__21572_21582.call(null));


var G__21583 = cljs.core.next(seq__21565__$1);
var G__21584 = null;
var G__21585 = (0);
var G__21586 = (0);
seq__21565 = G__21583;
chunk__21566 = G__21584;
count__21567 = G__21585;
i__21568 = G__21586;
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
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.first(fns),(function (){var G__21587 = base;
var G__21588 = cljs.core.rest(fns);
return (speclj.running.nested_fns.cljs$core$IFn$_invoke$arity$2 ? speclj.running.nested_fns.cljs$core$IFn$_invoke$arity$2(G__21587,G__21588) : speclj.running.nested_fns.call(null,G__21587,G__21588));
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
var seq__21589 = cljs.core.seq(withs);
var chunk__21590 = null;
var count__21591 = (0);
var i__21592 = (0);
while(true){
if((i__21592 < count__21591)){
var with$ = chunk__21590.cljs$core$IIndexed$_nth$arity$2(null,i__21592);
speclj.components.reset_with(with$);


var G__21593 = seq__21589;
var G__21594 = chunk__21590;
var G__21595 = count__21591;
var G__21596 = (i__21592 + (1));
seq__21589 = G__21593;
chunk__21590 = G__21594;
count__21591 = G__21595;
i__21592 = G__21596;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__21589);
if(temp__5804__auto__){
var seq__21589__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21589__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__21589__$1);
var G__21597 = cljs.core.chunk_rest(seq__21589__$1);
var G__21598 = c__4556__auto__;
var G__21599 = cljs.core.count(c__4556__auto__);
var G__21600 = (0);
seq__21589 = G__21597;
chunk__21590 = G__21598;
count__21591 = G__21599;
i__21592 = G__21600;
continue;
} else {
var with$ = cljs.core.first(seq__21589__$1);
speclj.components.reset_with(with$);


var G__21601 = cljs.core.next(seq__21589__$1);
var G__21602 = null;
var G__21603 = (0);
var G__21604 = (0);
seq__21589 = G__21601;
chunk__21590 = G__21602;
count__21591 = G__21603;
i__21592 = G__21604;
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
var G__21605 = cljs.core.deref(description__$1.parent);
var G__21606 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2((getter.cljs$core$IFn$_invoke$arity$1 ? getter.cljs$core$IFn$_invoke$arity$1(description__$1) : getter.call(null,description__$1)),components);
description__$1 = G__21605;
components = G__21606;
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
var befores = speclj.running.collect_components((function (p1__21607_SHARP_){
return cljs.core.deref(p1__21607_SHARP_.befores);
}),description);
var afters = speclj.running.collect_components((function (p1__21608_SHARP_){
return cljs.core.deref(p1__21608_SHARP_.afters);
}),description);
var core_body = characteristic.body;
var before_and_after_body = (function (){
return speclj.running.eval_characteristic(befores,core_body,afters);
});
var arounds = speclj.running.collect_components((function (p1__21609_SHARP_){
return cljs.core.deref(p1__21609_SHARP_.arounds);
}),description);
var full_body = speclj.running.nested_fns(before_and_after_body,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__21610_SHARP_){
return p1__21610_SHARP_.body;
}),arounds));
var withs = speclj.running.collect_components((function (p1__21611_SHARP_){
return cljs.core.deref(p1__21611_SHARP_.withs);
}),description);
var start_time = speclj.platform.current_time();
try{(full_body.cljs$core$IFn$_invoke$arity$0 ? full_body.cljs$core$IFn$_invoke$arity$0() : full_body.call(null));

return speclj.running.report_result(speclj.results.pass_result,characteristic,start_time,reporters,null);
}catch (e21612){var e = e21612;
if(speclj.platform.pending_QMARK_(e)){
return speclj.running.report_result(speclj.results.pending_result,characteristic,start_time,reporters,e);
} else {
return speclj.running.report_result(speclj.results.fail_result,characteristic,start_time,reporters,e);
}
}finally {speclj.running.reset_withs(withs);
}});
speclj.running.do_characteristics = (function speclj$running$do_characteristics(characteristics,reporters){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function speclj$running$do_characteristics_$_iter__21613(s__21614){
return (new cljs.core.LazySeq(null,(function (){
var s__21614__$1 = s__21614;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__21614__$1);
if(temp__5804__auto__){
var s__21614__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__21614__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__21614__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__21616 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__21615 = (0);
while(true){
if((i__21615 < size__4528__auto__)){
var characteristic = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__21615);
if(cljs.core.truth_(speclj.running.can_run_QMARK_(characteristic))){
cljs.core.chunk_append(b__21616,speclj.running.do_characteristic(characteristic,reporters));

var G__21617 = (i__21615 + (1));
i__21615 = G__21617;
continue;
} else {
var G__21618 = (i__21615 + (1));
i__21615 = G__21618;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21616),speclj$running$do_characteristics_$_iter__21613(cljs.core.chunk_rest(s__21614__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21616),null);
}
} else {
var characteristic = cljs.core.first(s__21614__$2);
if(cljs.core.truth_(speclj.running.can_run_QMARK_(characteristic))){
return cljs.core.cons(speclj.running.do_characteristic(characteristic,reporters),speclj$running$do_characteristics_$_iter__21613(cljs.core.rest(s__21614__$2)));
} else {
var G__21619 = cljs.core.rest(s__21614__$2);
s__21614__$1 = G__21619;
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
var G__21622 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(results__$1,(function (){var G__21620 = cljs.core.first(children);
var G__21621 = reporters;
return (speclj.running.do_description.cljs$core$IFn$_invoke$arity$2 ? speclj.running.do_description.cljs$core$IFn$_invoke$arity$2(G__21620,G__21621) : speclj.running.do_description.call(null,G__21620,G__21621));
})());
var G__21623 = cljs.core.rest(children);
results__$1 = G__21622;
children = G__21623;
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
var var_names = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__21626_SHARP_){
return [ns,".",cljs.core.name(p1__21626_SHARP_.name)].join('');
}),withs);
var unique_names = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__21627_SHARP_){
return [ns,".",cljs.core.name(p1__21627_SHARP_.unique_name)].join('');
}),withs);
var seq__21628_21660 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(var_names,unique_names)));
var chunk__21629_21661 = null;
var count__21630_21662 = (0);
var i__21631_21663 = (0);
while(true){
if((i__21631_21663 < count__21630_21662)){
var vec__21638_21664 = chunk__21629_21661.cljs$core$IIndexed$_nth$arity$2(null,i__21631_21663);
var n_21665 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21638_21664,(0),null);
var un_21666 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21638_21664,(1),null);
var code_21667 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_21665)," = ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(un_21666),";"].join('');
eval(code_21667);


var G__21668 = seq__21628_21660;
var G__21669 = chunk__21629_21661;
var G__21670 = count__21630_21662;
var G__21671 = (i__21631_21663 + (1));
seq__21628_21660 = G__21668;
chunk__21629_21661 = G__21669;
count__21630_21662 = G__21670;
i__21631_21663 = G__21671;
continue;
} else {
var temp__5804__auto___21672 = cljs.core.seq(seq__21628_21660);
if(temp__5804__auto___21672){
var seq__21628_21673__$1 = temp__5804__auto___21672;
if(cljs.core.chunked_seq_QMARK_(seq__21628_21673__$1)){
var c__4556__auto___21674 = cljs.core.chunk_first(seq__21628_21673__$1);
var G__21675 = cljs.core.chunk_rest(seq__21628_21673__$1);
var G__21676 = c__4556__auto___21674;
var G__21677 = cljs.core.count(c__4556__auto___21674);
var G__21678 = (0);
seq__21628_21660 = G__21675;
chunk__21629_21661 = G__21676;
count__21630_21662 = G__21677;
i__21631_21663 = G__21678;
continue;
} else {
var vec__21641_21679 = cljs.core.first(seq__21628_21673__$1);
var n_21680 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21641_21679,(0),null);
var un_21681 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21641_21679,(1),null);
var code_21682 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_21680)," = ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(un_21681),";"].join('');
eval(code_21682);


var G__21683 = cljs.core.next(seq__21628_21673__$1);
var G__21684 = null;
var G__21685 = (0);
var G__21686 = (0);
seq__21628_21660 = G__21683;
chunk__21629_21661 = G__21684;
count__21630_21662 = G__21685;
i__21631_21663 = G__21686;
continue;
}
} else {
}
}
break;
}

try{return (body.cljs$core$IFn$_invoke$arity$0 ? body.cljs$core$IFn$_invoke$arity$0() : body.call(null));
}finally {var seq__21644_21687 = cljs.core.seq(var_names);
var chunk__21645_21688 = null;
var count__21646_21689 = (0);
var i__21647_21690 = (0);
while(true){
if((i__21647_21690 < count__21646_21689)){
var vec__21654_21691 = chunk__21645_21688.cljs$core$IIndexed$_nth$arity$2(null,i__21647_21690);
var n_21692 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21654_21691,(0),null);
var code_21693 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_21692)," = null;"].join('');
eval(code_21693);


var G__21694 = seq__21644_21687;
var G__21695 = chunk__21645_21688;
var G__21696 = count__21646_21689;
var G__21697 = (i__21647_21690 + (1));
seq__21644_21687 = G__21694;
chunk__21645_21688 = G__21695;
count__21646_21689 = G__21696;
i__21647_21690 = G__21697;
continue;
} else {
var temp__5804__auto___21698 = cljs.core.seq(seq__21644_21687);
if(temp__5804__auto___21698){
var seq__21644_21699__$1 = temp__5804__auto___21698;
if(cljs.core.chunked_seq_QMARK_(seq__21644_21699__$1)){
var c__4556__auto___21700 = cljs.core.chunk_first(seq__21644_21699__$1);
var G__21701 = cljs.core.chunk_rest(seq__21644_21699__$1);
var G__21702 = c__4556__auto___21700;
var G__21703 = cljs.core.count(c__4556__auto___21700);
var G__21704 = (0);
seq__21644_21687 = G__21701;
chunk__21645_21688 = G__21702;
count__21646_21689 = G__21703;
i__21647_21690 = G__21704;
continue;
} else {
var vec__21657_21705 = cljs.core.first(seq__21644_21699__$1);
var n_21706 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21657_21705,(0),null);
var code_21707 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_21706)," = null;"].join('');
eval(code_21707);


var G__21708 = cljs.core.next(seq__21644_21699__$1);
var G__21709 = null;
var G__21710 = (0);
var G__21711 = (0);
seq__21644_21687 = G__21708;
chunk__21645_21688 = G__21709;
count__21646_21689 = G__21710;
i__21647_21690 = G__21711;
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
var fexpr__21713 = speclj.running.nested_fns(run_characteristics_fn,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__21712_SHARP_){
return p1__21712_SHARP_.body;
}),cljs.core.deref(description.around_alls)));
return (fexpr__21713.cljs$core$IFn$_invoke$arity$0 ? fexpr__21713.cljs$core$IFn$_invoke$arity$0() : fexpr__21713.call(null));
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

var G__21714 = error_result;
var G__21715 = speclj.config.active_reporters();
return (speclj.reporting.report_run.cljs$core$IFn$_invoke$arity$2 ? speclj.reporting.report_run.cljs$core$IFn$_invoke$arity$2(G__21714,G__21715) : speclj.reporting.report_run.call(null,G__21714,G__21715));
});

/**
 * @interface
 */
speclj.running.Runner = function(){};

var speclj$running$Runner$run_directories$dyn_21716 = (function (this$,directories,reporters){
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
return speclj$running$Runner$run_directories$dyn_21716(this$,directories,reporters);
}
});

var speclj$running$Runner$submit_description$dyn_21717 = (function (this$,description){
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
return speclj$running$Runner$submit_description$dyn_21717(this$,description);
}
});

var speclj$running$Runner$run_description$dyn_21718 = (function (this$,description,reporters){
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
return speclj$running$Runner$run_description$dyn_21718(this$,description,reporters);
}
});

var speclj$running$Runner$run_and_report$dyn_21719 = (function (this$,reporters){
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
return speclj$running$Runner$run_and_report$dyn_21719(this$,reporters);
}
});

