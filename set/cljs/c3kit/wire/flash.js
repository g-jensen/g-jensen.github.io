// Compiled by ClojureScript 1.10.764 {:static-fns true, :optimize-constants true}
goog.provide('c3kit.wire.flash');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('c3kit.apron.corec');
goog.require('c3kit.apron.log');
goog.require('c3kit.wire.flashc');
goog.require('c3kit.wire.js');
goog.require('c3kit.wire.util');
goog.require('reagent.core');
c3kit.wire.flash.flash_timeout_millis = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((5000));
c3kit.wire.flash.state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
c3kit.wire.flash.clear_BANG_ = (function c3kit$wire$flash$clear_BANG_(){
return cljs.core.reset_BANG_(c3kit.wire.flash.state,cljs.core.PersistentArrayMap.EMPTY);
});
c3kit.wire.flash.first_msg = (function c3kit$wire$flash$first_msg(){
return c3kit.wire.flashc.text(cljs.core.first(cljs.core.deref(c3kit.wire.flash.state)));
});
c3kit.wire.flash.last_msg = (function c3kit$wire$flash$last_msg(){
return c3kit.wire.flashc.text(cljs.core.last(cljs.core.deref(c3kit.wire.flash.state)));
});
c3kit.wire.flash.all_msg = (function c3kit$wire$flash$all_msg(){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$text,cljs.core.deref(c3kit.wire.flash.state));
});
c3kit.wire.flash.flash_EQ_ = (function c3kit$wire$flash$flash_EQ_(f1,f2){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c3kit.wire.flashc.id(f1),c3kit.wire.flashc.id(f2));
});
c3kit.wire.flash.do_flash_remove = (function c3kit$wire$flash$do_flash_remove(flashes,flash){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(c3kit.wire.flash.flash_EQ_,flash),flashes);
});
c3kit.wire.flash.remove_BANG_ = (function c3kit$wire$flash$remove_BANG_(flash){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(c3kit.wire.flash.state,c3kit.wire.flash.do_flash_remove,flash);
});
c3kit.wire.flash.active_QMARK_ = (function c3kit$wire$flash$active_QMARK_(flash){
if(cljs.core.truth_(cljs.core.some(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(c3kit.wire.flash.flash_EQ_,flash),cljs.core.deref(c3kit.wire.flash.state)))){
return true;
} else {
return false;
}
});
c3kit.wire.flash.add_no_dups = (function c3kit$wire$flash$add_no_dups(flashes,flash){
if(cljs.core.truth_(cljs.core.some(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(c3kit.wire.flash.flash_EQ_,flash),flashes))){
return flashes;
} else {
return c3kit.apron.corec.conjv(flashes,flash);
}
});
c3kit.wire.flash.add_BANG_ = (function c3kit$wire$flash$add_BANG_(f){
var f__$1 = c3kit.wire.flashc.conform_BANG_(f);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,cljs.core.cst$kw$debug,"c3kit.wire.flash",null,null,cljs.core.cst$kw$p,cljs.core.cst$kw$auto,(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["adding flash: ",f__$1], null);
}),null)),null,(27),null);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(c3kit.wire.flash.state,c3kit.wire.flash.add_no_dups,f__$1);

if(cljs.core.truth_(cljs.core.cst$kw$persist.cljs$core$IFn$_invoke$arity$1(f__$1))){
} else {
c3kit.wire.js.timeout(cljs.core.deref(c3kit.wire.flash.flash_timeout_millis),(function (){
return c3kit.wire.flash.remove_BANG_(f__$1);
}));
}

return f__$1;
});
c3kit.wire.flash.add_success_BANG_ = (function c3kit$wire$flash$add_success_BANG_(msg){
return c3kit.wire.flash.add_BANG_(c3kit.wire.flashc.success(msg));
});
c3kit.wire.flash.add_warn_BANG_ = (function c3kit$wire$flash$add_warn_BANG_(msg){
return c3kit.wire.flash.add_BANG_(c3kit.wire.flashc.warn(msg));
});
c3kit.wire.flash.add_error_BANG_ = (function c3kit$wire$flash$add_error_BANG_(msg){
return c3kit.wire.flash.add_BANG_(c3kit.wire.flashc.error(msg));
});
c3kit.wire.flash.flash_message = (function c3kit$wire$flash$flash_message(flash){
var text = c3kit.wire.flashc.text(flash);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$flash_DASH_message,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,c3kit.wire.flashc.flash_class(flash)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$container,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (){
return c3kit.wire.flash.remove_BANG_(flash);
})], null),"\u2715"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span$flash_DASH_message_DASH_text,((cljs.core.seq_QMARK_(text))?c3kit.wire.util.with_react_keys(text):text)], null)], null)], null)], null);
});
c3kit.wire.flash.flash_root = (function c3kit$wire$flash$flash_root(){
var temp__5804__auto__ = cljs.core.seq(cljs.core.deref(c3kit.wire.flash.state));
if(temp__5804__auto__){
var flashes = temp__5804__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$flash_DASH_root,(function (){var iter__4529__auto__ = (function c3kit$wire$flash$flash_root_$_iter__20186(s__20187){
return (new cljs.core.LazySeq(null,(function (){
var s__20187__$1 = s__20187;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__20187__$1);
if(temp__5804__auto____$1){
var s__20187__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__20187__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__20187__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__20189 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__20188 = (0);
while(true){
if((i__20188 < size__4528__auto__)){
var f = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4527__auto__,i__20188);
cljs.core.chunk_append(b__20189,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c3kit.wire.flash.flash_message,f], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,c3kit.wire.flashc.id(f)], null)));

var G__20190 = (i__20188 + (1));
i__20188 = G__20190;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20189),c3kit$wire$flash$flash_root_$_iter__20186(cljs.core.chunk_rest(s__20187__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20189),null);
}
} else {
var f = cljs.core.first(s__20187__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c3kit.wire.flash.flash_message,f], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,c3kit.wire.flashc.id(f)], null)),c3kit$wire$flash$flash_root_$_iter__20186(cljs.core.rest(s__20187__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(flashes);
})()], null);
} else {
return null;
}
});
