(ns set.components)

(defn main []
  [:div
   #_(-> (map-indexed card->button (:cards @state)) (vec)
       (vec-insert [:br] 4) (vec)
       (vec-insert [:br] 9))])