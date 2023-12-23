(ns set.state
  (:require [reagent.core :as reagent]))

(def state (reagent/atom {}))

(defn cursor [path]
  (reagent/cursor state path))