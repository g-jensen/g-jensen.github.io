// Compiled by ClojureScript 1.10.764 {}
goog.provide('set.state_spec');
goog.require('cljs.core');
goog.require('speclj.core');
goog.require('set.state');
var description__6962__auto___7357 = speclj.components.new_description.call(null,"State","set.state-spec");
var _STAR_parent_description_STAR__orig_val__7339_7358 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__7340_7359 = description__6962__auto___7357;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__7340_7359);

try{var seq__7341_7360 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_before.call(null,((function (_STAR_parent_description_STAR__orig_val__7339_7358,_STAR_parent_description_STAR__temp_val__7340_7359,description__6962__auto___7357){
return (function (){
return cljs.core.reset_BANG_.call(null,set.state.state,cljs.core.PersistentArrayMap.EMPTY);
});})(_STAR_parent_description_STAR__orig_val__7339_7358,_STAR_parent_description_STAR__temp_val__7340_7359,description__6962__auto___7357))
),speclj.components.new_characteristic.call(null,"has an initial state",((function (_STAR_parent_description_STAR__orig_val__7339_7358,_STAR_parent_description_STAR__temp_val__7340_7359,description__6962__auto___7357){
return (function (){
var expected__7047__auto__ = cljs.core.PersistentArrayMap.EMPTY;
var actual__7048__auto__ = cljs.core.deref.call(null,set.state.state);
if(cljs.core._EQ_.call(null,expected__7047__auto__,actual__7048__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7047__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__7047__auto__)),speclj.platform.endl,"     got: ",(((actual__7048__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__7048__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__7339_7358,_STAR_parent_description_STAR__temp_val__7340_7359,description__6962__auto___7357))
),(function (){var description__6962__auto____$1 = speclj.components.new_description.call(null,"cursor","set.state-spec");
var _STAR_parent_description_STAR__orig_val__7351_7364 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__7352_7365 = description__6962__auto____$1;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__7352_7365);

try{var seq__7353_7366 = cljs.core.seq.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[speclj.components.new_characteristic.call(null,"with a path and initial value",((function (_STAR_parent_description_STAR__orig_val__7351_7364,_STAR_parent_description_STAR__temp_val__7352_7365,description__6962__auto____$1,_STAR_parent_description_STAR__orig_val__7339_7358,_STAR_parent_description_STAR__temp_val__7340_7359,description__6962__auto___7357){
return (function (){
var cursor = set.state.cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"my-path","my-path",1079352756)], null));
var expected__7047__auto___7370 = null;
var actual__7048__auto___7371 = cljs.core.deref.call(null,cursor);
if(cljs.core._EQ_.call(null,expected__7047__auto___7370,actual__7048__auto___7371)){
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7047__auto___7370 == null))?"nil":cljs.core.pr_str.call(null,expected__7047__auto___7370)),speclj.platform.endl,"     got: ",(((actual__7048__auto___7371 == null))?"nil":cljs.core.pr_str.call(null,actual__7048__auto___7371))," (using =)"].join('')));
}

cljs.core.reset_BANG_.call(null,set.state.state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"my-path","my-path",1079352756),new cljs.core.Keyword(null,"value","value",305978217)], null));

var expected__7047__auto__ = new cljs.core.Keyword(null,"value","value",305978217);
var actual__7048__auto__ = cljs.core.deref.call(null,cursor);
if(cljs.core._EQ_.call(null,expected__7047__auto__,actual__7048__auto__)){
return null;
} else {
throw (new speclj.platform.SpecFailure(["Expected: ",(((expected__7047__auto__ == null))?"nil":cljs.core.pr_str.call(null,expected__7047__auto__)),speclj.platform.endl,"     got: ",(((actual__7048__auto__ == null))?"nil":cljs.core.pr_str.call(null,actual__7048__auto__))," (using =)"].join('')));
}
});})(_STAR_parent_description_STAR__orig_val__7351_7364,_STAR_parent_description_STAR__temp_val__7352_7365,description__6962__auto____$1,_STAR_parent_description_STAR__orig_val__7339_7358,_STAR_parent_description_STAR__temp_val__7340_7359,description__6962__auto___7357))
)],null)));
var chunk__7354_7367 = null;
var count__7355_7368 = (0);
var i__7356_7369 = (0);
while(true){
if((i__7356_7369 < count__7355_7368)){
var component__6963__auto___7372 = cljs.core._nth.call(null,chunk__7354_7367,i__7356_7369);
speclj.components.install.call(null,component__6963__auto___7372,description__6962__auto____$1);


var G__7373 = seq__7353_7366;
var G__7374 = chunk__7354_7367;
var G__7375 = count__7355_7368;
var G__7376 = (i__7356_7369 + (1));
seq__7353_7366 = G__7373;
chunk__7354_7367 = G__7374;
count__7355_7368 = G__7375;
i__7356_7369 = G__7376;
continue;
} else {
var temp__5804__auto___7377 = cljs.core.seq.call(null,seq__7353_7366);
if(temp__5804__auto___7377){
var seq__7353_7378__$1 = temp__5804__auto___7377;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7353_7378__$1)){
var c__4556__auto___7379 = cljs.core.chunk_first.call(null,seq__7353_7378__$1);
var G__7380 = cljs.core.chunk_rest.call(null,seq__7353_7378__$1);
var G__7381 = c__4556__auto___7379;
var G__7382 = cljs.core.count.call(null,c__4556__auto___7379);
var G__7383 = (0);
seq__7353_7366 = G__7380;
chunk__7354_7367 = G__7381;
count__7355_7368 = G__7382;
i__7356_7369 = G__7383;
continue;
} else {
var component__6963__auto___7384 = cljs.core.first.call(null,seq__7353_7378__$1);
speclj.components.install.call(null,component__6963__auto___7384,description__6962__auto____$1);


var G__7385 = cljs.core.next.call(null,seq__7353_7378__$1);
var G__7386 = null;
var G__7387 = (0);
var G__7388 = (0);
seq__7353_7366 = G__7385;
chunk__7354_7367 = G__7386;
count__7355_7368 = G__7387;
i__7356_7369 = G__7388;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__7351_7364);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__6962__auto____$1);
}

return description__6962__auto____$1;
})()],null)));
var chunk__7342_7361 = null;
var count__7343_7362 = (0);
var i__7344_7363 = (0);
while(true){
if((i__7344_7363 < count__7343_7362)){
var component__6963__auto___7389 = cljs.core._nth.call(null,chunk__7342_7361,i__7344_7363);
speclj.components.install.call(null,component__6963__auto___7389,description__6962__auto___7357);


var G__7390 = seq__7341_7360;
var G__7391 = chunk__7342_7361;
var G__7392 = count__7343_7362;
var G__7393 = (i__7344_7363 + (1));
seq__7341_7360 = G__7390;
chunk__7342_7361 = G__7391;
count__7343_7362 = G__7392;
i__7344_7363 = G__7393;
continue;
} else {
var temp__5804__auto___7394 = cljs.core.seq.call(null,seq__7341_7360);
if(temp__5804__auto___7394){
var seq__7341_7395__$1 = temp__5804__auto___7394;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7341_7395__$1)){
var c__4556__auto___7396 = cljs.core.chunk_first.call(null,seq__7341_7395__$1);
var G__7397 = cljs.core.chunk_rest.call(null,seq__7341_7395__$1);
var G__7398 = c__4556__auto___7396;
var G__7399 = cljs.core.count.call(null,c__4556__auto___7396);
var G__7400 = (0);
seq__7341_7360 = G__7397;
chunk__7342_7361 = G__7398;
count__7343_7362 = G__7399;
i__7344_7363 = G__7400;
continue;
} else {
var component__6963__auto___7401 = cljs.core.first.call(null,seq__7341_7395__$1);
speclj.components.install.call(null,component__6963__auto___7401,description__6962__auto___7357);


var G__7402 = cljs.core.next.call(null,seq__7341_7395__$1);
var G__7403 = null;
var G__7404 = (0);
var G__7405 = (0);
seq__7341_7360 = G__7402;
chunk__7342_7361 = G__7403;
count__7343_7362 = G__7404;
i__7344_7363 = G__7405;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__7339_7358);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__6962__auto___7357);
}


//# sourceMappingURL=state_spec.js.map
