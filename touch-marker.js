
TouchMarker = {
    start: function(opts) {
        var opts = opts !== undefined ? opts : {};

        var opts = _.defaults(opts, {
            maxMarkers: 5,
            color: 'rgba(0,200,200,0.5)'
        });
        document.addEventListener('touchstart', onTouchStart, false);
        document.addEventListener('touchmove', onTouchMove, false);
        document.addEventListener('touchend', onTouchEnd, false);

        var markers = [];
        var activeMarkers = {};
        var animateClasses = 'touch-marker-animate touch-marker-animate-partner';

        // create markers, append to dom, and add to markers[].
        for(var i=0; i<opts.maxMarkers; i++) {
            var $touchMarker = $(document.createElement('div'));
            $touchMarker.addClass('touch-marker').addClass(animateClasses).css('box-shadow', opts.color);
            $('body').append($touchMarker);
            $touchMarker.hide();
            markers.push($touchMarker);
        }

        function onTouchStart(e) {
            if(markers.length <= 0) return;

            // splice a marker out
            var $activeMarker = markers.splice(0, 1)[0];
            $activeMarker.fadeIn('fast');
            activeMarkers[e.changedTouches[0].identifier] = $activeMarker;
        }

        function onTouchMove(e) {
            for(var i=0; i< e.touches.length; i++) {
                var currTouch = e.touches[i];
                if(currTouch.identifier in activeMarkers) {
                    activeMarkers[currTouch.identifier].css({
                        left: currTouch.clientX,
                        top: currTouch.clientY
                    });
                }
            }
        }

        function onTouchEnd(e) {
            if(Object.keys(activeMarkers).length == 0) {
                return;
            }
            if(activeMarkers[e.changedTouches[0].identifier] === undefined) {
                return;
            }
            activeMarkers[e.changedTouches[0].identifier].fadeOut();
            // put back in markers
            markers.push(activeMarkers[e.changedTouches[0].identifier]);
            // delete from active
            delete activeMarkers[e.changedTouches[0].identifier];
        }
    }
};