function distanceFromHqInBlocks(location) {
    let numberOfBlocks = Math.abs(location - 42);
    return numberOfBlocks;
}

function distanceFromHqInFeet(location) {
    let numberOfBlocks = distanceFromHqInBlocks(location);
    let feet = numberOfBlocks * 264;
    return feet;
}

function distanceTravelledInFeet(start, destination) {
    let feetTravelled = Math.abs(start - destination) * 264;
    return feetTravelled;
}

function calculatesFarePrice(start, destination) {
    let feetTravelled = distanceTravelledInFeet(start, destination);
    if (feetTravelled <= 400) {
        return 0;
    } else if (feetTravelled <= 2000) {
        return (feetTravelled - 400) * 0.02;
    } else if (feetTravelled <= 2500) {
        return 25;
    } else {
        return 'cannot travel that far'
    }
}