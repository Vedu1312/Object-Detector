function preload()
{
    loadImage("frame.jpeg")
}
function setup()
{
    createCanvas = center;
    objectDetector("cocossd", modelLoaded())
}