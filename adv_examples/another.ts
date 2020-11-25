enum Movement {
    UP = 1,
    DOWN = 2,
    LEFT = 3, 
    RIGHT = 4,
}

const sendMovement = function( movement ) {
    console.log(movement)
}

sendMovement(Movement.UP)