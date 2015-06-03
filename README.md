# Touch Marker

A nice looking touch cursor that fades in and out on touchstart/touchmove/touchend document events. Perfect for showing 
touches on a tabletop device, iPad, TUIO project, etc.

## Usage

`meteor add zlot:touch-marker`

Then, call `TouchMarker.start()` on the client in `Meteor.startup(function(){})`. This will allow a max of 5 touch markers 
with a colour of `rgba(0,200,200,0.5)`.

## Options
Currently the max number of touch markers allowed and the colour of the markers can be changed.
Pass in an object to set options like so:

```
TouchMarker.start({
    maxMarkers: 2,
    color: 'rgba(255,0,0,0.8)'
});
```

Animation based off one of the "subtle click feedback effects" in [this codrops article](http://tympanus.net/codrops/2015/02/11/subtle-click-feedback-effects/).