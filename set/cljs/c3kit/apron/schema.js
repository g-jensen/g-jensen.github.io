// Compiled by ClojureScript 1.10.764 {:static-fns true, :optimize-constants true}
goog.provide('c3kit.apron.schema');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('c3kit.apron.corec');
goog.require('clojure.edn');
goog.require('clojure.string');
goog.require('com.cognitect.transit.types');
c3kit.apron.schema.stdex = cljs.core.ExceptionInfo;
c3kit.apron.schema.coerce_ex = (function c3kit$apron$schema$coerce_ex(v,type){
return cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["can't convert ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0))," to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,v,cljs.core.cst$kw$type,type], null));
});
c3kit.apron.schema.coerce_ex_QMARK_ = (function c3kit$apron$schema$coerce_ex_QMARK_(e){
if((e instanceof c3kit.apron.schema.stdex)){
return cljs.core.cst$kw$coerce_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(e));
} else {
return false;
}
});
c3kit.apron.schema.date = Date;
c3kit.apron.schema.exmessage = (function c3kit$apron$schema$exmessage(e){
if(cljs.core.truth_(e)){
return cljs.core.ex_message(e);
} else {
return null;
}
});
c3kit.apron.schema.present_QMARK_ = (function c3kit$apron$schema$present_QMARK_(v){
return (!((((v == null)) || (((typeof v === 'string') && (clojure.string.blank_QMARK_(v)))))));
});
c3kit.apron.schema.nil_or = (function c3kit$apron$schema$nil_or(f){
return (function (v){
var or__4126__auto__ = (v == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f.call(null,v));
}
});
});
c3kit.apron.schema.email_pattern = /[A-Za-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[A-Za-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?\.)+[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?/;
c3kit.apron.schema.email_QMARK_ = (function c3kit$apron$schema$email_QMARK_(value){
if(cljs.core.truth_(cljs.core.re_matches(c3kit.apron.schema.email_pattern,value))){
return true;
} else {
return false;
}
});
c3kit.apron.schema.bigdec_QMARK_ = (function c3kit$apron$schema$bigdec_QMARK_(v){
return typeof v === 'number';
});
c3kit.apron.schema.uri_QMARK_ = (function c3kit$apron$schema$uri_QMARK_(value){
return typeof value === 'string';
});
c3kit.apron.schema.is_enum_QMARK_ = (function c3kit$apron$schema$is_enum_QMARK_(enum$){
var enum_set = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__23163_SHARP_){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(cljs.core.name(cljs.core.cst$kw$enum.cljs$core$IFn$_invoke$arity$1(enum$)),cljs.core.name(p1__23163_SHARP_));
}),cljs.core.cst$kw$values.cljs$core$IFn$_invoke$arity$1(enum$)));
return (function (value){
return (((value == null)) || (cljs.core.contains_QMARK_(enum_set,value)));
});
});
c3kit.apron.schema.parse_BANG_ = (function c3kit$apron$schema$parse_BANG_(f,v){
var result = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f.call(null,v));
if(cljs.core.truth_(isNaN(result))){
throw Error("parsed NaN");
} else {
return result;
}
});
c3kit.apron.schema.__GT_boolean = (function c3kit$apron$schema$__GT_boolean(value){
if((value == null)){
return null;
} else {
if(cljs.core.boolean_QMARK_(value)){
return value;
} else {
if(typeof value === 'string'){
return (!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("false",clojure.string.lower_case(value))));
} else {
return cljs.core.boolean$(value);

}
}
}
});
c3kit.apron.schema.__GT_string = (function c3kit$apron$schema$__GT_string(value){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,value)){
return null;
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(value);
}
});
c3kit.apron.schema.__GT_keyword = (function c3kit$apron$schema$__GT_keyword(value){
if((value == null)){
return null;
} else {
if((value instanceof cljs.core.Keyword)){
return value;
} else {
var s = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value);
if(clojure.string.starts_with_QMARK_(s,":")){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(1)));
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(s);
}

}
}
});
c3kit.apron.schema.__GT_float = (function c3kit$apron$schema$__GT_float(v){
if((v == null)){
return null;
} else {
if(typeof v === 'string'){
if(clojure.string.blank_QMARK_(v)){
return null;
} else {
try{return c3kit.apron.schema.parse_BANG_(parseFloat,v);
}catch (e23164){var _ = e23164;
throw c3kit.apron.schema.coerce_ex(v,"float");
}}
} else {
if(cljs.core.truth_(isNaN(v))){
return null;
} else {
if(cljs.core.integer_QMARK_(v)){
return v;
} else {
if(typeof v === 'number'){
return v;
} else {
if(c3kit.apron.schema.bigdec_QMARK_(v)){
return v;
} else {
throw c3kit.apron.schema.coerce_ex(v,"float");

}
}
}
}
}
}
});
c3kit.apron.schema.__GT_int = (function c3kit$apron$schema$__GT_int(v){
if((v == null)){
return null;
} else {
if(typeof v === 'string'){
if(clojure.string.blank_QMARK_(v)){
return null;
} else {
try{return c3kit.apron.schema.parse_BANG_(parseInt,v);
}catch (e23165){var _ = e23165;
throw c3kit.apron.schema.coerce_ex(v,"int");
}}
} else {
if(cljs.core.truth_(isNaN(v))){
return null;
} else {
if(cljs.core.integer_QMARK_(v)){
return v;
} else {
if(typeof v === 'number'){
return cljs.core.long$(v);
} else {
if(c3kit.apron.schema.bigdec_QMARK_(v)){
return v;
} else {
throw c3kit.apron.schema.coerce_ex(v,"inv");

}
}
}
}
}
}
});
c3kit.apron.schema.__GT_bigdec = (function c3kit$apron$schema$__GT_bigdec(v){
if((v == null)){
return null;
} else {
if(typeof v === 'string'){
if(clojure.string.blank_QMARK_(v)){
return null;
} else {
try{return c3kit.apron.schema.parse_BANG_(parseFloat,v);
}catch (e23166){var _ = e23166;
throw c3kit.apron.schema.coerce_ex(v,"bigdec");
}}
} else {
if(cljs.core.truth_(isNaN(v))){
return null;
} else {
if(cljs.core.integer_QMARK_(v)){
return v;
} else {
if(typeof v === 'number'){
return v;
} else {
throw c3kit.apron.schema.coerce_ex(v,"bigdec");

}
}
}
}
}
});
c3kit.apron.schema.__GT_date = (function c3kit$apron$schema$__GT_date(v){
if((v == null)){
return null;
} else {
if((v instanceof c3kit.apron.schema.date)){
return v;
} else {
if(cljs.core.integer_QMARK_(v)){
var G__23167 = (new Date());
G__23167.setTime(v);

return G__23167;
} else {
if((v instanceof goog.date.Date)){
return (new Date(v.getTime()));
} else {
if(typeof v === 'string'){
if(clojure.string.blank_QMARK_(v)){
return null;
} else {
if(clojure.string.starts_with_QMARK_(v,"#inst")){
return clojure.edn.read_string.cljs$core$IFn$_invoke$arity$1(v);
} else {
throw c3kit.apron.schema.coerce_ex(v,"date");

}
}
} else {
throw c3kit.apron.schema.coerce_ex(v,"date");

}
}
}
}
}
});
c3kit.apron.schema.__GT_sql_date = (function c3kit$apron$schema$__GT_sql_date(v){
if((v == null)){
return null;
} else {
if((v instanceof Date)){
return v;
} else {
if(cljs.core.integer_QMARK_(v)){
var G__23168 = (new Date());
G__23168.setTime(v);

return G__23168;
} else {
if((v instanceof goog.date.Date)){
return (new Date(v.getTime()));
} else {
if(typeof v === 'string'){
if(clojure.string.blank_QMARK_(v)){
return null;
} else {
if(clojure.string.starts_with_QMARK_(v,"#inst")){
return clojure.edn.read_string.cljs$core$IFn$_invoke$arity$1(v);
} else {
throw c3kit.apron.schema.coerce_ex(v,"sql-date");

}
}
} else {
throw c3kit.apron.schema.coerce_ex(v,"sql-date");

}
}
}
}
}
});
c3kit.apron.schema.__GT_timestamp = (function c3kit$apron$schema$__GT_timestamp(v){
if((v == null)){
return null;
} else {
if((v instanceof Date)){
return v;
} else {
if(cljs.core.integer_QMARK_(v)){
var G__23169 = (new Date());
G__23169.setTime(v);

return G__23169;
} else {
if((v instanceof goog.date.Date)){
return (new Date(v.getTime()));
} else {
if(typeof v === 'string'){
if(clojure.string.blank_QMARK_(v)){
return null;
} else {
if(clojure.string.starts_with_QMARK_(v,"#inst")){
return clojure.edn.read_string.cljs$core$IFn$_invoke$arity$1(v);
} else {
throw c3kit.apron.schema.coerce_ex(v,"timestamp");

}
}
} else {
throw c3kit.apron.schema.coerce_ex(v,"timestamp");

}
}
}
}
}
});
c3kit.apron.schema.__GT_uri = (function c3kit$apron$schema$__GT_uri(v){
if((v == null)){
return null;
} else {
if(typeof v === 'string'){
return v;
} else {
throw c3kit.apron.schema.coerce_ex(v,"uri");

}
}
});
(com.cognitect.transit.types.UUID.prototype.cljs$core$IUUID$ = cljs.core.PROTOCOL_SENTINEL);
c3kit.apron.schema.__GT_uuid = (function c3kit$apron$schema$__GT_uuid(v){
if((v == null)){
return null;
} else {
if(cljs.core.uuid_QMARK_(v)){
return v;
} else {
if(typeof v === 'string'){
return cljs.core.uuid(v);
} else {
throw c3kit.apron.schema.coerce_ex(v,"uuid");

}
}
}
});
c3kit.apron.schema.type_validators = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$date,cljs.core.cst$kw$long,cljs.core.cst$kw$double,cljs.core.cst$kw$instant,cljs.core.cst$kw$int,cljs.core.cst$kw$ref,cljs.core.cst$kw$float,cljs.core.cst$kw$string,cljs.core.cst$kw$ignore,cljs.core.cst$kw$kw_DASH_ref,cljs.core.cst$kw$keyword,cljs.core.cst$kw$bigdec,cljs.core.cst$kw$uri,cljs.core.cst$kw$uuid,cljs.core.cst$kw$timestamp,cljs.core.cst$kw$boolean],[c3kit.apron.schema.nil_or((function (p1__23173_SHARP_){
return (p1__23173_SHARP_ instanceof c3kit.apron.schema.date);
})),c3kit.apron.schema.nil_or(cljs.core.integer_QMARK_),c3kit.apron.schema.nil_or(cljs.core.number_QMARK_),c3kit.apron.schema.nil_or((function (p1__23171_SHARP_){
return (p1__23171_SHARP_ instanceof c3kit.apron.schema.date);
})),c3kit.apron.schema.nil_or(cljs.core.integer_QMARK_),c3kit.apron.schema.nil_or(cljs.core.integer_QMARK_),c3kit.apron.schema.nil_or(cljs.core.number_QMARK_),c3kit.apron.schema.nil_or(cljs.core.string_QMARK_),cljs.core.constantly(true),c3kit.apron.schema.nil_or(cljs.core.keyword_QMARK_),c3kit.apron.schema.nil_or(cljs.core.keyword_QMARK_),c3kit.apron.schema.nil_or(c3kit.apron.schema.bigdec_QMARK_),c3kit.apron.schema.nil_or(c3kit.apron.schema.uri_QMARK_),c3kit.apron.schema.nil_or(cljs.core.uuid_QMARK_),c3kit.apron.schema.nil_or((function (p1__23175_SHARP_){
return (p1__23175_SHARP_ instanceof c3kit.apron.schema.date);
})),c3kit.apron.schema.nil_or((function (p1__23170_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,p1__23170_SHARP_)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,p1__23170_SHARP_)));
}))]);
c3kit.apron.schema.type_coercers = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$date,cljs.core.cst$kw$long,cljs.core.cst$kw$double,cljs.core.cst$kw$instant,cljs.core.cst$kw$int,cljs.core.cst$kw$ref,cljs.core.cst$kw$float,cljs.core.cst$kw$string,cljs.core.cst$kw$ignore,cljs.core.cst$kw$kw_DASH_ref,cljs.core.cst$kw$keyword,cljs.core.cst$kw$bigdec,cljs.core.cst$kw$uri,cljs.core.cst$kw$uuid,cljs.core.cst$kw$timestamp,cljs.core.cst$kw$boolean],[c3kit.apron.schema.__GT_sql_date,c3kit.apron.schema.__GT_int,c3kit.apron.schema.__GT_float,c3kit.apron.schema.__GT_date,c3kit.apron.schema.__GT_int,c3kit.apron.schema.__GT_int,c3kit.apron.schema.__GT_float,c3kit.apron.schema.__GT_string,cljs.core.identity,c3kit.apron.schema.__GT_keyword,c3kit.apron.schema.__GT_keyword,c3kit.apron.schema.__GT_bigdec,c3kit.apron.schema.__GT_uri,c3kit.apron.schema.__GT_uuid,c3kit.apron.schema.__GT_timestamp,c3kit.apron.schema.__GT_boolean]);
/**
 * Used as a :present value to remove the entry from presentation
 */
c3kit.apron.schema.omit = cljs.core.constantly(null);
c3kit.apron.schema.kind = (function c3kit$apron$schema$kind(key){
return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,cljs.core.cst$kw$keyword,cljs.core.cst$kw$value,key,cljs.core.cst$kw$validate,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (p1__23176_SHARP_){
return (((p1__23176_SHARP_ == null)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,p1__23176_SHARP_)));
})], null),cljs.core.cst$kw$coerce,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (p1__23177_SHARP_){
var or__4126__auto__ = p1__23177_SHARP_;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return key;
}
})], null),cljs.core.cst$kw$message,["mismatch; must be ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)].join('')], null);
});
c3kit.apron.schema.id = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$ref], null);
c3kit.apron.schema.str_or_nil = (function c3kit$apron$schema$str_or_nil(v){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,v)){
return null;
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(v);
}
});
c3kit.apron.schema.multiple_QMARK_ = (function c3kit$apron$schema$multiple_QMARK_(thing){
return ((cljs.core.sequential_QMARK_(thing)) || (cljs.core.set_QMARK_(thing)));
});
c3kit.apron.schema.__GT_vec = (function c3kit$apron$schema$__GT_vec(v){
if((v == null)){
return cljs.core.PersistentVector.EMPTY;
} else {
if(c3kit.apron.schema.multiple_QMARK_(v)){
return cljs.core.vec(v);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null);

}
}
});
c3kit.apron.schema.__GT_seq = (function c3kit$apron$schema$__GT_seq(v){
if((v == null)){
return cljs.core.PersistentVector.EMPTY;
} else {
if(c3kit.apron.schema.multiple_QMARK_(v)){
return v;
} else {
return (new cljs.core.List(null,v,null,(1),null));

}
}
});
c3kit.apron.schema.type_coercer_BANG_ = (function c3kit$apron$schema$type_coercer_BANG_(type){
var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(c3kit.apron.schema.type_coercers,type);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["unhandled coersion type: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type], 0))].join(''),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$coerce_QMARK_,true], null));
}
});
c3kit.apron.schema.type_validator_BANG_ = (function c3kit$apron$schema$type_validator_BANG_(type){
var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(c3kit.apron.schema.type_validators,type);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["unhandled validation type: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type], 0))].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
});
c3kit.apron.schema._coerce_value_BANG_ = (function c3kit$apron$schema$_coerce_value_BANG_(coerce_fn,value,_QMARK_seq){
if(cljs.core.truth_(_QMARK_seq)){
if((value == null)){
return null;
} else {
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__23178_SHARP_){
return (coerce_fn.cljs$core$IFn$_invoke$arity$1 ? coerce_fn.cljs$core$IFn$_invoke$arity$1(p1__23178_SHARP_) : coerce_fn.call(null,p1__23178_SHARP_));
}),c3kit.apron.schema.__GT_seq(value));
}
} else {
return (coerce_fn.cljs$core$IFn$_invoke$arity$1 ? coerce_fn.cljs$core$IFn$_invoke$arity$1(value) : coerce_fn.call(null,value));
}
});
c3kit.apron.schema.do_coersion = (function c3kit$apron$schema$do_coersion(p__23181,value){
var map__23182 = p__23181;
var map__23182__$1 = (((((!((map__23182 == null))))?(((((map__23182.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23182.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23182):map__23182);
var spec = map__23182__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23182__$1,cljs.core.cst$kw$type);
var coerce = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23182__$1,cljs.core.cst$kw$coerce);
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23182__$1,cljs.core.cst$kw$message);
var _QMARK_seq = c3kit.apron.schema.multiple_QMARK_(type);
var type__$1 = ((_QMARK_seq)?cljs.core.first(type):type);
var coerce_type = c3kit.apron.schema.type_coercer_BANG_(type__$1);
var value__$1 = (cljs.core.truth_(coerce)?((c3kit.apron.schema.multiple_QMARK_(coerce))?cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__23180_SHARP_,p2__23179_SHARP_){
return c3kit.apron.schema._coerce_value_BANG_(p2__23179_SHARP_,p1__23180_SHARP_,_QMARK_seq);
}),value,coerce):c3kit.apron.schema._coerce_value_BANG_(coerce,value,_QMARK_seq)):value);
return c3kit.apron.schema._coerce_value_BANG_(coerce_type,value__$1,_QMARK_seq);
});
c3kit.apron.schema.validation_ex = (function c3kit$apron$schema$validation_ex(message,value){
return cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid",new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$invalid_QMARK_,true,cljs.core.cst$kw$message,(function (){var or__4126__auto__ = message;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "is invalid";
}
})(),cljs.core.cst$kw$value,value], null));
});
c3kit.apron.schema.validation_ex_QMARK_ = (function c3kit$apron$schema$validation_ex_QMARK_(e){
if((e instanceof c3kit.apron.schema.stdex)){
return cljs.core.cst$kw$invalid_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(e));
} else {
return false;
}
});
c3kit.apron.schema._validate_value_BANG_ = (function c3kit$apron$schema$_validate_value_BANG_(valid_QMARK_,message,value,_QMARK_seq){
if(cljs.core.truth_((function (){var and__4115__auto__ = _QMARK_seq;
if(cljs.core.truth_(and__4115__auto__)){
return (!((value == null)));
} else {
return and__4115__auto__;
}
})())){
var seq__23184 = cljs.core.seq(value);
var chunk__23185 = null;
var count__23186 = (0);
var i__23187 = (0);
while(true){
if((i__23187 < count__23186)){
var v = chunk__23185.cljs$core$IIndexed$_nth$arity$2(null,i__23187);
if(cljs.core.truth_((valid_QMARK_.cljs$core$IFn$_invoke$arity$1 ? valid_QMARK_.cljs$core$IFn$_invoke$arity$1(v) : valid_QMARK_.call(null,v)))){
} else {
throw c3kit.apron.schema.validation_ex(message,v);
}


var G__23188 = seq__23184;
var G__23189 = chunk__23185;
var G__23190 = count__23186;
var G__23191 = (i__23187 + (1));
seq__23184 = G__23188;
chunk__23185 = G__23189;
count__23186 = G__23190;
i__23187 = G__23191;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__23184);
if(temp__5804__auto__){
var seq__23184__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23184__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__23184__$1);
var G__23192 = cljs.core.chunk_rest(seq__23184__$1);
var G__23193 = c__4556__auto__;
var G__23194 = cljs.core.count(c__4556__auto__);
var G__23195 = (0);
seq__23184 = G__23192;
chunk__23185 = G__23193;
count__23186 = G__23194;
i__23187 = G__23195;
continue;
} else {
var v = cljs.core.first(seq__23184__$1);
if(cljs.core.truth_((valid_QMARK_.cljs$core$IFn$_invoke$arity$1 ? valid_QMARK_.cljs$core$IFn$_invoke$arity$1(v) : valid_QMARK_.call(null,v)))){
} else {
throw c3kit.apron.schema.validation_ex(message,v);
}


var G__23196 = cljs.core.next(seq__23184__$1);
var G__23197 = null;
var G__23198 = (0);
var G__23199 = (0);
seq__23184 = G__23196;
chunk__23185 = G__23197;
count__23186 = G__23198;
i__23187 = G__23199;
continue;
}
} else {
return null;
}
}
break;
}
} else {
if(cljs.core.truth_((valid_QMARK_.cljs$core$IFn$_invoke$arity$1 ? valid_QMARK_.cljs$core$IFn$_invoke$arity$1(value) : valid_QMARK_.call(null,value)))){
return null;
} else {
throw c3kit.apron.schema.validation_ex(message,value);
}
}
});
c3kit.apron.schema._validate_STAR__QMARK__value_BANG_ = (function c3kit$apron$schema$_validate_STAR__QMARK__value_BANG_(validate_fn,message,value,_QMARK_seq){
if(c3kit.apron.schema.multiple_QMARK_(validate_fn)){
var seq__23200 = cljs.core.seq(validate_fn);
var chunk__23201 = null;
var count__23202 = (0);
var i__23203 = (0);
while(true){
if((i__23203 < count__23202)){
var v_fn = chunk__23201.cljs$core$IIndexed$_nth$arity$2(null,i__23203);
c3kit.apron.schema._validate_value_BANG_(v_fn,message,value,_QMARK_seq);


var G__23204 = seq__23200;
var G__23205 = chunk__23201;
var G__23206 = count__23202;
var G__23207 = (i__23203 + (1));
seq__23200 = G__23204;
chunk__23201 = G__23205;
count__23202 = G__23206;
i__23203 = G__23207;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__23200);
if(temp__5804__auto__){
var seq__23200__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23200__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__23200__$1);
var G__23208 = cljs.core.chunk_rest(seq__23200__$1);
var G__23209 = c__4556__auto__;
var G__23210 = cljs.core.count(c__4556__auto__);
var G__23211 = (0);
seq__23200 = G__23208;
chunk__23201 = G__23209;
count__23202 = G__23210;
i__23203 = G__23211;
continue;
} else {
var v_fn = cljs.core.first(seq__23200__$1);
c3kit.apron.schema._validate_value_BANG_(v_fn,message,value,_QMARK_seq);


var G__23212 = cljs.core.next(seq__23200__$1);
var G__23213 = null;
var G__23214 = (0);
var G__23215 = (0);
seq__23200 = G__23212;
chunk__23201 = G__23213;
count__23202 = G__23214;
i__23203 = G__23215;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return c3kit.apron.schema._validate_value_BANG_(validate_fn,message,value,_QMARK_seq);
}
});
c3kit.apron.schema.do_validation = (function c3kit$apron$schema$do_validation(p__23216,value){
var map__23217 = p__23216;
var map__23217__$1 = (((((!((map__23217 == null))))?(((((map__23217.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23217.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23217):map__23217);
var spec = map__23217__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23217__$1,cljs.core.cst$kw$type);
var validate = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23217__$1,cljs.core.cst$kw$validate);
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23217__$1,cljs.core.cst$kw$message);
var validations = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23217__$1,cljs.core.cst$kw$validations);
var _QMARK_seq = c3kit.apron.schema.multiple_QMARK_(type);
var type__$1 = ((_QMARK_seq)?cljs.core.first(type):type);
if(cljs.core.truth_(((_QMARK_seq)?(((!(c3kit.apron.schema.multiple_QMARK_(value))))?value:false):false))){
throw c3kit.apron.schema.validation_ex(["[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type__$1),"] expected"].join(''),value);
} else {
}

c3kit.apron.schema._validate_value_BANG_(c3kit.apron.schema.type_validator_BANG_(type__$1),message,value,_QMARK_seq);

if(cljs.core.truth_(validate)){
c3kit.apron.schema._validate_STAR__QMARK__value_BANG_(validate,message,value,_QMARK_seq);
} else {
}

var seq__23219 = cljs.core.seq(validations);
var chunk__23220 = null;
var count__23221 = (0);
var i__23222 = (0);
while(true){
if((i__23222 < count__23221)){
var map__23227 = chunk__23220.cljs$core$IIndexed$_nth$arity$2(null,i__23222);
var map__23227__$1 = (((((!((map__23227 == null))))?(((((map__23227.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23227.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23227):map__23227);
var validate__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23227__$1,cljs.core.cst$kw$validate);
var message__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23227__$1,cljs.core.cst$kw$message);
c3kit.apron.schema._validate_STAR__QMARK__value_BANG_(validate__$1,message__$1,value,_QMARK_seq);


var G__23231 = seq__23219;
var G__23232 = chunk__23220;
var G__23233 = count__23221;
var G__23234 = (i__23222 + (1));
seq__23219 = G__23231;
chunk__23220 = G__23232;
count__23221 = G__23233;
i__23222 = G__23234;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__23219);
if(temp__5804__auto__){
var seq__23219__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23219__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__23219__$1);
var G__23235 = cljs.core.chunk_rest(seq__23219__$1);
var G__23236 = c__4556__auto__;
var G__23237 = cljs.core.count(c__4556__auto__);
var G__23238 = (0);
seq__23219 = G__23235;
chunk__23220 = G__23236;
count__23221 = G__23237;
i__23222 = G__23238;
continue;
} else {
var map__23229 = cljs.core.first(seq__23219__$1);
var map__23229__$1 = (((((!((map__23229 == null))))?(((((map__23229.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23229.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23229):map__23229);
var validate__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23229__$1,cljs.core.cst$kw$validate);
var message__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23229__$1,cljs.core.cst$kw$message);
c3kit.apron.schema._validate_STAR__QMARK__value_BANG_(validate__$1,message__$1,value,_QMARK_seq);


var G__23239 = cljs.core.next(seq__23219__$1);
var G__23240 = null;
var G__23241 = (0);
var G__23242 = (0);
seq__23219 = G__23239;
chunk__23220 = G__23240;
count__23221 = G__23241;
i__23222 = G__23242;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {c3kit.apron.schema.Object}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
c3kit.apron.schema.SchemaError = (function (errors,schema,before,after,__meta,__extmap,__hash){
this.errors = errors;
this.schema = schema;
this.before = before;
this.after = after;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(c3kit.apron.schema.SchemaError.prototype.toString = (function (){
var self__ = this;
var _ = this;
return ["SchemaError: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.errors)].join('');
}));

(c3kit.apron.schema.SchemaError.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(c3kit.apron.schema.SchemaError.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k23244,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__23248 = k23244;
var G__23248__$1 = (((G__23248 instanceof cljs.core.Keyword))?G__23248.fqn:null);
switch (G__23248__$1) {
case "errors":
return self__.errors;

break;
case "schema":
return self__.schema;

break;
case "before":
return self__.before;

break;
case "after":
return self__.after;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k23244,else__4383__auto__);

}
}));

(c3kit.apron.schema.SchemaError.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__23249){
var vec__23250 = p__23249;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23250,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23250,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(c3kit.apron.schema.SchemaError.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#c3kit.apron.schema.SchemaError{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$errors,self__.errors],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$schema,self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$before,self__.before],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$after,self__.after],null))], null),self__.__extmap));
}));

(c3kit.apron.schema.SchemaError.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__23243){
var self__ = this;
var G__23243__$1 = this;
return (new cljs.core.RecordIter((0),G__23243__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$errors,cljs.core.cst$kw$schema,cljs.core.cst$kw$before,cljs.core.cst$kw$after], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(c3kit.apron.schema.SchemaError.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(c3kit.apron.schema.SchemaError.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new c3kit.apron.schema.SchemaError(self__.errors,self__.schema,self__.before,self__.after,self__.__meta,self__.__extmap,self__.__hash));
}));

(c3kit.apron.schema.SchemaError.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
}));

(c3kit.apron.schema.SchemaError.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (){var fexpr__23253 = (function (coll__4377__auto__){
return (-138826815 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
});
return fexpr__23253(this__4376__auto____$1);
})();
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(c3kit.apron.schema.SchemaError.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this23245,other23246){
var self__ = this;
var this23245__$1 = this;
return (((!((other23246 == null)))) && ((this23245__$1.constructor === other23246.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23245__$1.errors,other23246.errors)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23245__$1.schema,other23246.schema)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23245__$1.before,other23246.before)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23245__$1.after,other23246.after)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this23245__$1.__extmap,other23246.__extmap)));
}));

(c3kit.apron.schema.SchemaError.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$schema,null,cljs.core.cst$kw$errors,null,cljs.core.cst$kw$after,null,cljs.core.cst$kw$before,null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new c3kit.apron.schema.SchemaError(self__.errors,self__.schema,self__.before,self__.after,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(c3kit.apron.schema.SchemaError.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__23243){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__23254 = cljs.core.keyword_identical_QMARK_;
var expr__23255 = k__4388__auto__;
if(cljs.core.truth_((function (){var G__23257 = cljs.core.cst$kw$errors;
var G__23258 = expr__23255;
return (pred__23254.cljs$core$IFn$_invoke$arity$2 ? pred__23254.cljs$core$IFn$_invoke$arity$2(G__23257,G__23258) : pred__23254.call(null,G__23257,G__23258));
})())){
return (new c3kit.apron.schema.SchemaError(G__23243,self__.schema,self__.before,self__.after,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__23259 = cljs.core.cst$kw$schema;
var G__23260 = expr__23255;
return (pred__23254.cljs$core$IFn$_invoke$arity$2 ? pred__23254.cljs$core$IFn$_invoke$arity$2(G__23259,G__23260) : pred__23254.call(null,G__23259,G__23260));
})())){
return (new c3kit.apron.schema.SchemaError(self__.errors,G__23243,self__.before,self__.after,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__23261 = cljs.core.cst$kw$before;
var G__23262 = expr__23255;
return (pred__23254.cljs$core$IFn$_invoke$arity$2 ? pred__23254.cljs$core$IFn$_invoke$arity$2(G__23261,G__23262) : pred__23254.call(null,G__23261,G__23262));
})())){
return (new c3kit.apron.schema.SchemaError(self__.errors,self__.schema,G__23243,self__.after,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__23263 = cljs.core.cst$kw$after;
var G__23264 = expr__23255;
return (pred__23254.cljs$core$IFn$_invoke$arity$2 ? pred__23254.cljs$core$IFn$_invoke$arity$2(G__23263,G__23264) : pred__23254.call(null,G__23263,G__23264));
})())){
return (new c3kit.apron.schema.SchemaError(self__.errors,self__.schema,self__.before,G__23243,self__.__meta,self__.__extmap,null));
} else {
return (new c3kit.apron.schema.SchemaError(self__.errors,self__.schema,self__.before,self__.after,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__23243),null));
}
}
}
}
}));

(c3kit.apron.schema.SchemaError.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$errors,self__.errors,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$schema,self__.schema,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$before,self__.before,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$after,self__.after,null))], null),self__.__extmap));
}));

(c3kit.apron.schema.SchemaError.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__23243){
var self__ = this;
var this__4379__auto____$1 = this;
return (new c3kit.apron.schema.SchemaError(self__.errors,self__.schema,self__.before,self__.after,G__23243,self__.__extmap,self__.__hash));
}));

(c3kit.apron.schema.SchemaError.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(c3kit.apron.schema.SchemaError.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$errors,cljs.core.cst$sym$schema,cljs.core.cst$sym$before,cljs.core.cst$sym$after], null);
}));

(c3kit.apron.schema.SchemaError.cljs$lang$type = true);

(c3kit.apron.schema.SchemaError.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"c3kit.apron.schema/SchemaError",null,(1),null));
}));

(c3kit.apron.schema.SchemaError.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"c3kit.apron.schema/SchemaError");
}));

/**
 * Positional factory function for c3kit.apron.schema/SchemaError.
 */
c3kit.apron.schema.__GT_SchemaError = (function c3kit$apron$schema$__GT_SchemaError(errors,schema,before,after){
return (new c3kit.apron.schema.SchemaError(errors,schema,before,after,null,null,null));
});

/**
 * Factory function for c3kit.apron.schema/SchemaError, taking a map of keywords to field values.
 */
c3kit.apron.schema.map__GT_SchemaError = (function c3kit$apron$schema$map__GT_SchemaError(G__23247){
var extmap__4419__auto__ = (function (){var G__23265 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__23247,cljs.core.cst$kw$errors,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$schema,cljs.core.cst$kw$before,cljs.core.cst$kw$after], 0));
if(cljs.core.record_QMARK_(G__23247)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__23265);
} else {
return G__23265;
}
})();
return (new c3kit.apron.schema.SchemaError(cljs.core.cst$kw$errors.cljs$core$IFn$_invoke$arity$1(G__23247),cljs.core.cst$kw$schema.cljs$core$IFn$_invoke$arity$1(G__23247),cljs.core.cst$kw$before.cljs$core$IFn$_invoke$arity$1(G__23247),cljs.core.cst$kw$after.cljs$core$IFn$_invoke$arity$1(G__23247),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

c3kit.apron.schema.make_error = (function c3kit$apron$schema$make_error(errors,schema,before,after){
return (new c3kit.apron.schema.SchemaError(errors,schema,before,after,null,null,null));
});
c3kit.apron.schema.error_QMARK_ = (function c3kit$apron$schema$error_QMARK_(result){
return (((result instanceof c3kit.apron.schema.SchemaError)) || (((cljs.core.map_QMARK_(result)) && (cljs.core.contains_QMARK_(result,cljs.core.cst$kw$errors)) && (cljs.core.contains_QMARK_(result,cljs.core.cst$kw$schema)) && (cljs.core.contains_QMARK_(result,cljs.core.cst$kw$before)) && (cljs.core.contains_QMARK_(result,cljs.core.cst$kw$after)))));
});
/**
 * replace exceptions with ex-data
 */
c3kit.apron.schema.without_ex = (function c3kit$apron$schema$without_ex(result){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(result,cljs.core.cst$kw$errors,(function (p1__23267_SHARP_){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (r,p__23268){
var vec__23269 = p__23268;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23269,(0),null);
var ex = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23269,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(r,k,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.ex_data(ex),cljs.core.cst$kw$schema));
}),cljs.core.PersistentArrayMap.EMPTY,p1__23267_SHARP_);
}));
});
/**
 * Nil when there are no errors, otherwise a map {<field> <message>} .
 */
c3kit.apron.schema.error_message_map = (function c3kit$apron$schema$error_message_map(result){
if(c3kit.apron.schema.error_QMARK_(result)){
var temp__5804__auto__ = cljs.core.seq(cljs.core.cst$kw$errors.cljs$core$IFn$_invoke$arity$1(result));
if(temp__5804__auto__){
var errors = temp__5804__auto__;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__23272){
var vec__23273 = p__23272;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23273,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23273,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.cst$kw$message.cljs$core$IFn$_invoke$arity$2(cljs.core.ex_data(e),"is invalid")], null);
}),errors));
} else {
return null;
}
} else {
return null;
}
});
/**
 * Sequence of error messages in a validate/coerce/conform result; nil if none.
 */
c3kit.apron.schema.messages = (function c3kit$apron$schema$messages(result){
var temp__5804__auto__ = c3kit.apron.schema.error_message_map(result);
if(cljs.core.truth_(temp__5804__auto__)){
var errors = temp__5804__auto__;
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__23276){
var vec__23277 = p__23276;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23277,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23277,(1),null);
return [cljs.core.name(k)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('');
}),errors);
} else {
return null;
}
});
/**
 * returns coerced value or throws an exception
 */
c3kit.apron.schema.coerce_value = (function c3kit$apron$schema$coerce_value(var_args){
var G__23281 = arguments.length;
switch (G__23281) {
case 3:
return c3kit.apron.schema.coerce_value.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return c3kit.apron.schema.coerce_value.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.apron.schema.coerce_value.cljs$core$IFn$_invoke$arity$3 = (function (schema,key,value){
return c3kit.apron.schema.coerce_value.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(schema,key),value);
}));

(c3kit.apron.schema.coerce_value.cljs$core$IFn$_invoke$arity$2 = (function (spec,value){
try{return c3kit.apron.schema.do_coersion(spec,value);
}catch (e23282){var e = e23282;
if(cljs.core.truth_(c3kit.apron.schema.coerce_ex_QMARK_(e))){
throw e;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3("coersion failed",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$message,cljs.core.cst$kw$message.cljs$core$IFn$_invoke$arity$2(spec,"coersion failed"),cljs.core.cst$kw$value,value], null),e);
}
}}));

(c3kit.apron.schema.coerce_value.cljs$lang$maxFixedArity = 3);

/**
 * throws an exception when validation fails, value otherwise
 */
c3kit.apron.schema.validate_value_BANG_ = (function c3kit$apron$schema$validate_value_BANG_(var_args){
var G__23285 = arguments.length;
switch (G__23285) {
case 3:
return c3kit.apron.schema.validate_value_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return c3kit.apron.schema.validate_value_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.apron.schema.validate_value_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (schema,key,value){
return c3kit.apron.schema.validate_value_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(schema,key),value);
}));

(c3kit.apron.schema.validate_value_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (spec,value){
c3kit.apron.schema.do_validation(spec,value);

return value;
}));

(c3kit.apron.schema.validate_value_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * return true or false
 */
c3kit.apron.schema.valid_value_QMARK_ = (function c3kit$apron$schema$valid_value_QMARK_(var_args){
var G__23288 = arguments.length;
switch (G__23288) {
case 3:
return c3kit.apron.schema.valid_value_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return c3kit.apron.schema.valid_value_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.apron.schema.valid_value_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (schema,key,value){
return c3kit.apron.schema.valid_value_QMARK_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(schema,key),value);
}));

(c3kit.apron.schema.valid_value_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (spec,value){
try{c3kit.apron.schema.validate_value_BANG_.cljs$core$IFn$_invoke$arity$2(spec,value);

return true;
}catch (e23289){var _ = e23289;
return false;
}}));

(c3kit.apron.schema.valid_value_QMARK_.cljs$lang$maxFixedArity = 3);

/**
 * throws an exception when validation fails, value otherwise.
 */
c3kit.apron.schema.validate_coerced_value_BANG_ = (function c3kit$apron$schema$validate_coerced_value_BANG_(spec,value,coerced){
try{c3kit.apron.schema.validate_value_BANG_.cljs$core$IFn$_invoke$arity$2(spec,coerced);

return coerced;
}catch (e23291){var e = e23291;
if(cljs.core.truth_(c3kit.apron.schema.validation_ex_QMARK_(e))){
throw e;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3("validation error",new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$message,cljs.core.cst$kw$message.cljs$core$IFn$_invoke$arity$2(spec,"is invalid"),cljs.core.cst$kw$value,value,cljs.core.cst$kw$coerced,coerced], null),e);
}
}});
/**
 * coerce and validate, returns coerced value or throws
 */
c3kit.apron.schema.conform_value = (function c3kit$apron$schema$conform_value(var_args){
var G__23293 = arguments.length;
switch (G__23293) {
case 3:
return c3kit.apron.schema.conform_value.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return c3kit.apron.schema.conform_value.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.apron.schema.conform_value.cljs$core$IFn$_invoke$arity$3 = (function (schema,key,value){
return c3kit.apron.schema.conform_value.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(schema,key),value);
}));

(c3kit.apron.schema.conform_value.cljs$core$IFn$_invoke$arity$2 = (function (spec,value){
var coerced = c3kit.apron.schema.coerce_value.cljs$core$IFn$_invoke$arity$2(spec,value);
return c3kit.apron.schema.validate_coerced_value_BANG_(spec,value,coerced);
}));

(c3kit.apron.schema.conform_value.cljs$lang$maxFixedArity = 3);

/**
 * returns a presentable representation of the value
 */
c3kit.apron.schema.present_value = (function c3kit$apron$schema$present_value(var_args){
var G__23298 = arguments.length;
switch (G__23298) {
case 3:
return c3kit.apron.schema.present_value.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return c3kit.apron.schema.present_value.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(c3kit.apron.schema.present_value.cljs$core$IFn$_invoke$arity$3 = (function (schema,key,value){
return c3kit.apron.schema.present_value.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(schema,key),value);
}));

(c3kit.apron.schema.present_value.cljs$core$IFn$_invoke$arity$2 = (function (spec,value){
var presenters = c3kit.apron.schema.__GT_vec(cljs.core.cst$kw$present.cljs$core$IFn$_invoke$arity$1(spec));
var presenter_fn = (function (v){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__23296_SHARP_,p2__23295_SHARP_){
return (p2__23295_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p2__23295_SHARP_.cljs$core$IFn$_invoke$arity$1(p1__23296_SHARP_) : p2__23295_SHARP_.call(null,p1__23296_SHARP_));
}),v,presenters);
});
if(cljs.core.sequential_QMARK_(cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(spec))){
if((value == null)){
return null;
} else {
return cljs.core.vec(c3kit.apron.corec.map_some.cljs$core$IFn$_invoke$arity$2(presenter_fn,value));
}
} else {
return presenter_fn(value);
}
}));

(c3kit.apron.schema.present_value.cljs$lang$maxFixedArity = 3);

c3kit.apron.schema.result_or_ex = (function c3kit$apron$schema$result_or_ex(f,spec,value){
try{return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(spec,value) : f.call(null,spec,value));
}catch (e23300){var e = e23300;
return e;
}});
c3kit.apron.schema.error_or_result = (function c3kit$apron$schema$error_or_result(errors,schema,entity,result){
if(cljs.core.seq(errors)){
return (new c3kit.apron.schema.SchemaError(errors,schema,entity,result,null,null,null));
} else {
return result;
}
});
c3kit.apron.schema.process_fields = (function c3kit$apron$schema$process_fields(processor,schema,entity){
var errors = cljs.core.PersistentArrayMap.EMPTY;
var result = cljs.core.PersistentArrayMap.EMPTY;
var specs = schema;
while(true){
if(cljs.core.seq(specs)){
var vec__23304 = cljs.core.first(specs);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23304,(0),null);
var spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23304,(1),null);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(entity,key);
var field_result = c3kit.apron.schema.result_or_ex(processor,spec,value);
if(c3kit.apron.corec.ex_QMARK_(field_result)){
var G__23307 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(errors,key,field_result);
var G__23308 = result;
var G__23309 = cljs.core.rest(specs);
errors = G__23307;
result = G__23308;
specs = G__23309;
continue;
} else {
var result__$1 = (((field_result == null))?result:cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,key,field_result));
var G__23310 = errors;
var G__23311 = result__$1;
var G__23312 = cljs.core.rest(specs);
errors = G__23310;
result = G__23311;
specs = G__23312;
continue;
}
} else {
return c3kit.apron.schema.error_or_result(errors,schema,entity,result);
}
break;
}
});
c3kit.apron.schema.coerce_whole_entity = (function c3kit$apron$schema$coerce_whole_entity(result,schema,entity){
var errors = cljs.core.PersistentArrayMap.EMPTY;
var result__$1 = result;
var specs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (errors,result__$1){
return (function (p__23320){
var vec__23321 = p__23320;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23321,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23321,(1),null);
return cljs.core.cst$kw$coerce.cljs$core$IFn$_invoke$arity$1(s);
});})(errors,result__$1))
,cljs.core.cst$kw$_STAR_.cljs$core$IFn$_invoke$arity$1(schema));
while(true){
if(cljs.core.seq(specs)){
var vec__23324 = cljs.core.first(specs);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23324,(0),null);
var spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23324,(1),null);
var value = c3kit.apron.schema.result_or_ex(c3kit.apron.schema.coerce_value,spec,result__$1);
if(c3kit.apron.corec.ex_QMARK_(value)){
var G__23327 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(errors,key,value);
var G__23328 = result__$1;
var G__23329 = cljs.core.rest(specs);
errors = G__23327;
result__$1 = G__23328;
specs = G__23329;
continue;
} else {
var G__23330 = errors;
var G__23331 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result__$1,key,value);
var G__23332 = cljs.core.rest(specs);
errors = G__23330;
result__$1 = G__23331;
specs = G__23332;
continue;
}
} else {
return c3kit.apron.schema.error_or_result(errors,schema,entity,result__$1);
}
break;
}
});
c3kit.apron.schema.validate_whole_entity = (function c3kit$apron$schema$validate_whole_entity(result,schema,entity){
var specs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__23333){
var vec__23334 = p__23333;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23334,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23334,(1),null);
var or__4126__auto__ = cljs.core.cst$kw$validate.cljs$core$IFn$_invoke$arity$1(s);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.cst$kw$validations.cljs$core$IFn$_invoke$arity$1(s);
}
}),cljs.core.cst$kw$_STAR_.cljs$core$IFn$_invoke$arity$1(schema));
var errors = cljs.core.PersistentArrayMap.EMPTY;
var result__$1 = result;
var specs__$1 = specs;
while(true){
if(cljs.core.seq(specs__$1)){
var vec__23341 = cljs.core.first(specs__$1);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23341,(0),null);
var spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23341,(1),null);
var value = c3kit.apron.schema.result_or_ex(((function (errors,result__$1,specs__$1,vec__23341,key,spec,specs){
return (function (spec__$1,value){
try{c3kit.apron.schema.validate_value_BANG_.cljs$core$IFn$_invoke$arity$2(spec__$1,value);

return cljs.core.get.cljs$core$IFn$_invoke$arity$2(result__$1,key);
}catch (e23344){var ex = e23344;
return ex;
}});})(errors,result__$1,specs__$1,vec__23341,key,spec,specs))
,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(spec,cljs.core.cst$kw$type,cljs.core.cst$kw$ignore),result__$1);
if(c3kit.apron.corec.ex_QMARK_(value)){
var G__23345 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(errors,key,value);
var G__23346 = result__$1;
var G__23347 = cljs.core.rest(specs__$1);
errors = G__23345;
result__$1 = G__23346;
specs__$1 = G__23347;
continue;
} else {
var G__23348 = errors;
var G__23349 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result__$1,key,value);
var G__23350 = cljs.core.rest(specs__$1);
errors = G__23348;
result__$1 = G__23349;
specs__$1 = G__23350;
continue;
}
} else {
return c3kit.apron.schema.error_or_result(errors,schema,entity,result__$1);
}
break;
}
});
c3kit.apron.schema.present_whole_entity = (function c3kit$apron$schema$present_whole_entity(result,schema,entity){
var errors = cljs.core.PersistentArrayMap.EMPTY;
var result__$1 = result;
var specs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (errors,result__$1){
return (function (p__23358){
var vec__23359 = p__23358;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23359,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23359,(1),null);
return cljs.core.cst$kw$present.cljs$core$IFn$_invoke$arity$1(s);
});})(errors,result__$1))
,cljs.core.cst$kw$_STAR_.cljs$core$IFn$_invoke$arity$1(schema));
while(true){
if(cljs.core.seq(specs)){
var vec__23362 = cljs.core.first(specs);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23362,(0),null);
var spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23362,(1),null);
var value = c3kit.apron.schema.result_or_ex(c3kit.apron.schema.present_value,spec,result__$1);
if(c3kit.apron.corec.ex_QMARK_(value)){
var G__23365 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(errors,key,value);
var G__23366 = result__$1;
var G__23367 = cljs.core.rest(specs);
errors = G__23365;
result__$1 = G__23366;
specs = G__23367;
continue;
} else {
var G__23368 = errors;
var G__23369 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result__$1,key,value);
var G__23370 = cljs.core.rest(specs);
errors = G__23368;
result__$1 = G__23369;
specs = G__23370;
continue;
}
} else {
return c3kit.apron.schema.error_or_result(errors,schema,entity,result__$1);
}
break;
}
});
/**
 * Returns coerced entity or SchemaError if any coersion failed. Use error? to check result.
 *   Use Case: 'I want to change my data into the types specified by the schema.'
 */
c3kit.apron.schema.coerce = (function c3kit$apron$schema$coerce(schema,entity){
var result = c3kit.apron.schema.process_fields(c3kit.apron.schema.coerce_value,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(schema,cljs.core.cst$kw$_STAR_),entity);
if(c3kit.apron.schema.error_QMARK_(result)){
return result;
} else {
return c3kit.apron.schema.coerce_whole_entity(result,schema,entity);
}
});
/**
 * Returns entity with all values true, or SchemaError when one or more invalid fields. Use error? to check result.
 *   Use Case: 'I want to make sure all the data is valid according to the schema.'
 */
c3kit.apron.schema.validate = (function c3kit$apron$schema$validate(schema,entity){
var result = c3kit.apron.schema.process_fields(c3kit.apron.schema.validate_value_BANG_,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(schema,cljs.core.cst$kw$_STAR_),entity);
if(c3kit.apron.schema.error_QMARK_(result)){
return result;
} else {
return c3kit.apron.schema.validate_whole_entity(result,schema,entity);
}
});
/**
 * Returns coerced entity or SchemaError upon any coersion or validation failure. Use error? to check result.
 *   Use Case: 'I want to coerce my data then validate the coerced data, all according to the schema.'
 *   Use Case: Data comes in from a web-form so strings have to be coerced into numbers, etc., then
 *          we need to validate that the data is good.
 */
c3kit.apron.schema.conform = (function c3kit$apron$schema$conform(schema,entity){
var result = c3kit.apron.schema.process_fields(c3kit.apron.schema.conform_value,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(schema,cljs.core.cst$kw$_STAR_),entity);
if(c3kit.apron.schema.error_QMARK_(result)){
return result;
} else {
var coerced = c3kit.apron.schema.coerce_whole_entity(result,schema,entity);
if(c3kit.apron.schema.error_QMARK_(result)){
return result;
} else {
return c3kit.apron.schema.validate_whole_entity(coerced,schema,entity);
}
}
});
/**
 * Returns presentable entity or SchemaError upon any presentation failure. Use error? to check result.
 */
c3kit.apron.schema.present = (function c3kit$apron$schema$present(schema,entity){
var result = c3kit.apron.schema.process_fields(c3kit.apron.schema.present_value,schema,entity);
if(c3kit.apron.schema.error_QMARK_(result)){
return result;
} else {
var result__$1 = c3kit.apron.schema.present_whole_entity(result,schema,entity);
if(c3kit.apron.schema.error_QMARK_(result__$1)){
return result__$1;
} else {
return c3kit.apron.corec.remove_nils(result__$1);
}
}
});
c3kit.apron.schema.validation_errors = (function c3kit$apron$schema$validation_errors(schema,entity){
return c3kit.apron.schema.error_message_map(c3kit.apron.schema.validate(schema,entity));
});
c3kit.apron.schema.conform_errors = (function c3kit$apron$schema$conform_errors(schema,entity){
return c3kit.apron.schema.error_message_map(c3kit.apron.schema.conform(schema,entity));
});
c3kit.apron.schema.validate_BANG_ = (function c3kit$apron$schema$validate_BANG_(schema,entity){
var result = c3kit.apron.schema.validate(schema,entity);
if(c3kit.apron.schema.error_QMARK_(result)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid entity",result);
} else {
return result;
}
});
c3kit.apron.schema.coerce_BANG_ = (function c3kit$apron$schema$coerce_BANG_(schema,entity){
var result = c3kit.apron.schema.coerce(schema,entity);
if(c3kit.apron.schema.error_QMARK_(result)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Uncoercable entity",result);
} else {
return result;
}
});
c3kit.apron.schema.conform_BANG_ = (function c3kit$apron$schema$conform_BANG_(schema,entity){
var result = c3kit.apron.schema.conform(schema,entity);
if(c3kit.apron.schema.error_QMARK_(result)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Unconformable entity",result);
} else {
return result;
}
});
c3kit.apron.schema.conform_all_BANG_ = (function c3kit$apron$schema$conform_all_BANG_(schema,entities){
var conforms = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__23371_SHARP_){
return c3kit.apron.schema.conform(schema,p1__23371_SHARP_);
}),entities);
var errors = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(c3kit.apron.schema.error_QMARK_,conforms);
if(cljs.core.seq(errors)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Unconformable entities",c3kit.apron.schema.make_error(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__23372_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__23372_SHARP_,cljs.core.cst$kw$errors);
}),errors)),schema,entities,conforms));
} else {
return conforms;
}
});
c3kit.apron.schema.present_BANG_ = (function c3kit$apron$schema$present_BANG_(schema,entity){
var result = c3kit.apron.schema.present(schema,entity);
if(c3kit.apron.schema.error_QMARK_(result)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Unpresentable entity",result);
} else {
return result;
}
});
c3kit.apron.schema.validate__GT_validations = (function c3kit$apron$schema$validate__GT_validations(p__23373){
var map__23374 = p__23373;
var map__23374__$1 = (((((!((map__23374 == null))))?(((((map__23374.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23374.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23374):map__23374);
var spec = map__23374__$1;
var validate = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23374__$1,cljs.core.cst$kw$validate);
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23374__$1,cljs.core.cst$kw$message);
if(cljs.core.truth_(validate)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(spec,cljs.core.cst$kw$validate),cljs.core.cst$kw$validations,c3kit.apron.corec.conjv,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$validate,validate,cljs.core.cst$kw$message,message], null));
} else {
return spec;
}
});
c3kit.apron.schema.merge_specs = (function c3kit$apron$schema$merge_specs(a,b){
var a__$1 = c3kit.apron.schema.validate__GT_validations(a);
var b__$1 = c3kit.apron.schema.validate__GT_validations(b);
var temp__5802__auto__ = cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$validations.cljs$core$IFn$_invoke$arity$2(a__$1,cljs.core.PersistentVector.EMPTY),cljs.core.cst$kw$validations.cljs$core$IFn$_invoke$arity$2(b__$1,cljs.core.PersistentVector.EMPTY)));
if(temp__5802__auto__){
var validations = temp__5802__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a__$1,b__$1], 0)),cljs.core.cst$kw$validations,cljs.core.vec(validations));
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a__$1,b__$1], 0));
}
});
c3kit.apron.schema.merge_schemas = (function c3kit$apron$schema$merge_schemas(var_args){
var args__4742__auto__ = [];
var len__4736__auto___23378 = arguments.length;
var i__4737__auto___23379 = (0);
while(true){
if((i__4737__auto___23379 < len__4736__auto___23378)){
args__4742__auto__.push((arguments[i__4737__auto___23379]));

var G__23380 = (i__4737__auto___23379 + (1));
i__4737__auto___23379 = G__23380;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return c3kit.apron.schema.merge_schemas.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(c3kit.apron.schema.merge_schemas.cljs$core$IFn$_invoke$arity$variadic = (function (schemas){
var entity_specs = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.merge_with,c3kit.apron.schema.merge_specs,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$_STAR_,schemas));
var attr_specs = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.merge_with,c3kit.apron.schema.merge_specs,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__23376_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__23376_SHARP_,cljs.core.cst$kw$_STAR_);
}),schemas));
if(cljs.core.seq(entity_specs)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(attr_specs,cljs.core.cst$kw$_STAR_,entity_specs);
} else {
return attr_specs;
}
}));

(c3kit.apron.schema.merge_schemas.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(c3kit.apron.schema.merge_schemas.cljs$lang$applyTo = (function (seq23377){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq23377));
}));

