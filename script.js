//complete this code
class Rectangle {
	constructor(width,height){
		this.width=width;
		this.height=height;
	}
	get getWidth(){
		return width;
	}
	get getHeight(){
		return height;
	}
	getArea(){
		return (this.width*this.height);
	}
}

class Square extends Rectangle {
	getPerimeter(){
		return 2*(this.width+this.height);
	}
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
