var circle = new ProgressBar.Circle('#demo', {
    color: '#FCB03C',
    duration: 2000
});
circle.animate(1, function() {
    circle.animate(0);
})
