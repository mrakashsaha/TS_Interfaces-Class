type UserID = string | number;


let userId: UserID;

userId= "user123";
userId= 123456;


type Point = {
    x:number;
    y:number;
};

type Circle = {
    center: Point;
    radius: number;
}


const circle: Circle = {
    center: {x: 0, y: 0},
    radius: 10,
}