


const tween = new TimelineLite();


tween.add(
    TweenLite.to('.gradient', 1, {
        curviness: 1.25,
        ease: Power1.ease
    })
)