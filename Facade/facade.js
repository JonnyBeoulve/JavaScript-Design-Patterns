/*========================================================================
// This facade design pattern will check compatibility for an event
// listener to determine which syntax it should use to comply with the
// user's browser constraints. No matter which browser the user is using
// they won't notice that the facade is occurring, hence the name.
========================================================================*/
let addEvent = (element, event, fn) => {
  if (element.addEventListener) {
    element.addEventListener(event, fn, false); // Modern browser. False is for a Firefox specific parameter
  } else if (element.attachEvent) {
    element.attachEvent("on" + event, fn); // IE and Opera
  } else {
    element["on" + event] = fn;
  }
};
