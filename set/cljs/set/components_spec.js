// Compiled by ClojureScript 1.10.764 {}
goog.provide('set.components_spec');
goog.require('cljs.core');
goog.require('speclj.core');
var description__8742__auto___9211 = speclj.components.new_description.call(null,"A Collection of TicTacToe Components",false,"set.components-spec");
var _STAR_parent_description_STAR__orig_val__9205_9212 = speclj.config._STAR_parent_description_STAR_;
var _STAR_parent_description_STAR__temp_val__9206_9213 = description__8742__auto___9211;
(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__temp_val__9206_9213);

try{var seq__9207_9214 = cljs.core.seq.call(null,cljs.core.PersistentVector.EMPTY);
var chunk__9208_9215 = null;
var count__9209_9216 = (0);
var i__9210_9217 = (0);
while(true){
if((i__9210_9217 < count__9209_9216)){
var component__8743__auto___9218 = cljs.core._nth.call(null,chunk__9208_9215,i__9210_9217);
speclj.components.install.call(null,component__8743__auto___9218,description__8742__auto___9211);


var G__9219 = seq__9207_9214;
var G__9220 = chunk__9208_9215;
var G__9221 = count__9209_9216;
var G__9222 = (i__9210_9217 + (1));
seq__9207_9214 = G__9219;
chunk__9208_9215 = G__9220;
count__9209_9216 = G__9221;
i__9210_9217 = G__9222;
continue;
} else {
var temp__5804__auto___9223 = cljs.core.seq.call(null,seq__9207_9214);
if(temp__5804__auto___9223){
var seq__9207_9224__$1 = temp__5804__auto___9223;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9207_9224__$1)){
var c__4556__auto___9225 = cljs.core.chunk_first.call(null,seq__9207_9224__$1);
var G__9226 = cljs.core.chunk_rest.call(null,seq__9207_9224__$1);
var G__9227 = c__4556__auto___9225;
var G__9228 = cljs.core.count.call(null,c__4556__auto___9225);
var G__9229 = (0);
seq__9207_9214 = G__9226;
chunk__9208_9215 = G__9227;
count__9209_9216 = G__9228;
i__9210_9217 = G__9229;
continue;
} else {
var component__8743__auto___9230 = cljs.core.first.call(null,seq__9207_9224__$1);
speclj.components.install.call(null,component__8743__auto___9230,description__8742__auto___9211);


var G__9231 = cljs.core.next.call(null,seq__9207_9224__$1);
var G__9232 = null;
var G__9233 = (0);
var G__9234 = (0);
seq__9207_9214 = G__9231;
chunk__9208_9215 = G__9232;
count__9209_9216 = G__9233;
i__9210_9217 = G__9234;
continue;
}
} else {
}
}
break;
}
}finally {(speclj.config._STAR_parent_description_STAR_ = _STAR_parent_description_STAR__orig_val__9205_9212);
}
if(cljs.core.truth_(speclj.config._STAR_parent_description_STAR_)){
} else {
speclj.running.submit_description.call(null,speclj.config.active_runner.call(null),description__8742__auto___9211);
}


//# sourceMappingURL=components_spec.js.map
