(ns set.state-spec
  (:require-macros [speclj.core :refer [describe context it should= should-contain should should-not before should-be-nil]])
  (:require [speclj.core]
            [set.state :as sut]))

(describe "State"
  (before (reset! sut/state {}))

  (it "has an initial state"
    (should= {} @sut/state))

  (context "cursor"
    (it "with a path and initial value"
      (let [cursor (sut/cursor [:my-path])]
        (should-be-nil @cursor)
        (reset! sut/state {:my-path :value})
        (should= :value @cursor)))))