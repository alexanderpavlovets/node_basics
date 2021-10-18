
// Really old examples - use mine previous they are much better/relevant 

/*
  Main point - the same:
  - we have subject (observable)
  - we have observer 

  Good one phrase from GangOfFour:

  "One or more observers are interested in the state of a subject and register their 
  interest with the subject by attaching themselves. 
  When something changes in our subject that the observer may be interested in, 
  a notify message is sent which calls the update method in each observer. 
  When the observer is no longer interested in the subject's state, 
  they can simply detach themselves."

  INTERESTING:
  Definition above says that observers are attaching to subject, this is in mine old implementation also,
  while in this old book - Subject adds observers - contradiction in description from GoF and example.
*/


/*
  Difference between Observer and PubSub:

  Observer - each observer attaches directly to subject 
  PubSub - separate pubsub entity that handles connections. Main goal - remove dependency between subject and observer
*/