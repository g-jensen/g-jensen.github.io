// Compiled by ClojureScript 1.10.764 {:static-fns true, :optimize-constants true}
goog.provide('c3kit.wire.flashc');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('c3kit.apron.corec');
goog.require('c3kit.apron.schema');
c3kit.wire.flashc.flash_schema = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$level,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$keyword], null),cljs.core.cst$kw$text,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$ignore], null),cljs.core.cst$kw$persist,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$boolean], null),cljs.core.cst$kw$id,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$string,cljs.core.cst$kw$coerce,(function (p1__23383_SHARP_){
var or__4126__auto__ = p1__23383_SHARP_;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(c3kit.apron.corec.new_uuid());
}
})], null)], null);
c3kit.wire.flashc.conform_BANG_ = (function c3kit$wire$flashc$conform_BANG_(flash){
return c3kit.apron.schema.conform_BANG_(c3kit.wire.flashc.flash_schema,flash);
});
c3kit.wire.flashc.create = (function c3kit$wire$flashc$create(var_args){
var G__23385 = arguments.length;
switch (G__23385) {
case 2:
return c3kit.wire.flashc.create.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return c3kit.wire.flashc.create.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.wire.flashc.create.cljs$core$IFn$_invoke$arity$2 = (function (class$,txt){
return c3kit.wire.flashc.create.cljs$core$IFn$_invoke$arity$3(class$,txt,false);
}));

(c3kit.wire.flashc.create.cljs$core$IFn$_invoke$arity$3 = (function (class$,txt,persist){
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$level,class$,cljs.core.cst$kw$text,txt,cljs.core.cst$kw$id,cljs.core.str.cljs$core$IFn$_invoke$arity$1(c3kit.apron.corec.new_uuid()),cljs.core.cst$kw$persist,persist], null);
}));

(c3kit.wire.flashc.create.cljs$lang$maxFixedArity = 3);

c3kit.wire.flashc.error = (function c3kit$wire$flashc$error(txt){
return c3kit.wire.flashc.create.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$error,txt);
});
c3kit.wire.flashc.warn = (function c3kit$wire$flashc$warn(txt){
return c3kit.wire.flashc.create.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$warn,txt);
});
c3kit.wire.flashc.success = (function c3kit$wire$flashc$success(txt){
return c3kit.wire.flashc.create.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$success,txt);
});
c3kit.wire.flashc.success_QMARK_ = (function c3kit$wire$flashc$success_QMARK_(flash){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$success,cljs.core.cst$kw$level.cljs$core$IFn$_invoke$arity$1(flash));
});
c3kit.wire.flashc.warn_QMARK_ = (function c3kit$wire$flashc$warn_QMARK_(flash){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$warn,cljs.core.cst$kw$level.cljs$core$IFn$_invoke$arity$1(flash));
});
c3kit.wire.flashc.error_QMARK_ = (function c3kit$wire$flashc$error_QMARK_(flash){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$error,cljs.core.cst$kw$level.cljs$core$IFn$_invoke$arity$1(flash));
});
c3kit.wire.flashc.text = (function c3kit$wire$flashc$text(flash){
return cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(flash);
});
c3kit.wire.flashc.level = (function c3kit$wire$flashc$level(flash){
return cljs.core.cst$kw$level.cljs$core$IFn$_invoke$arity$1(flash);
});
c3kit.wire.flashc.id = (function c3kit$wire$flashc$id(flash){
return cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(flash);
});
c3kit.wire.flashc.flash_class = (function c3kit$wire$flashc$flash_class(flash){
if(c3kit.wire.flashc.error_QMARK_(flash)){
return "error";
} else {
if(c3kit.wire.flashc.warn_QMARK_(flash)){
return "warn";
} else {
return "success";

}
}
});
