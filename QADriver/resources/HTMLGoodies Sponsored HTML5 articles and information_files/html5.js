$(function() {
	var canvas = $("#c");
	var canvasHeight;
	var canvasWidth;
	var ctx;
	var dt = 0.1;
	
	var pointCollection;

	function supports_canvas() {
	  return !!document.createElement('canvas').getContext;
	}

	function init() {
		updateCanvasDimensions();
		
		var g = [new Point(0, 10, 0.0, 45, "#fffdc4"), new Point(0, 10, 0.0, 32, "#ffffff"), new Point(0, 10, 0.0, 30, "#fff195"), new Point(0, 10, 0.0, 17, "#ffffff"), new Point(0, 10, 0.0, 15, "#ffd895"), new Point(0, 0, 0.0, 5, "#00cccc"), new Point(0, 10, 0.0, 5, "#007bd1"), new Point(0, 20, 0.0, 5, "#4f93ef"), new Point(0, 30, 0.0, 5, "#4f7af2"), new Point(0, 40, 0.0, 5, "#11cfb6"), new Point(10, 20, 0.0, 5, "#4976f3"), new Point(20, 20, 0.0, 5, "#269230"), new Point(30, 0, 0.0, 5, "#4f93ef"), new Point(30, 10, 0.0, 5, "#2a56ea"), new Point(30, 20, 0.0, 5, "#3355d8"), new Point(30, 30, 0.0, 5, "#36b641"), new Point(30, 40, 0.0, 5, "#2e5def"), new Point(45, 0, 0.0, 5, "#4f53ef"), new Point(55, 0, 0.0, 5, "#4f93ef"), new Point(65, 0, 0.0, 5, "#0b991a"), new Point(75, 0, 0.0, 5, "#2eabaa"), new Point(60, 10, 0.0, 5, "#2a59f0"), new Point(60, 20, 0.0, 5, "#2eabaa"), new Point(60, 30, 0.0, 5, "#2a59f0"), new Point(98, 10, 0.0, 6, "#00cccc"), new Point(60, 40, 0.0, 5, "#4f93ef"), new Point(90, 0, 0.0, 5, "#5f8af8"), new Point(90, 10, 0.0, 5, "#0b991a"), new Point(90, 20, 0.0, 5, "#2e55e2"), new Point(90, 30, 0.0, 5, "#4167e4"), new Point(90, 40, 0.0, 5, "#0b991a"), new Point(105, 20, 0.0, 5, "#3059e3"), new Point(112, 10, 0.0, 6, "#00cccc"), new Point(120, 0, 0.0, 5, "#2a59f0"), new Point(120, 10, 0.0, 5, "#2eabaa"), new Point(120, 20, 0.0, 5, "#2855ea"), new Point(120, 30, 0.0, 5, "#0b991a"), new Point(120, 40, 0.0, 5, "#2650e1"), new Point(135, 0, 0.0, 5, "#4a7bf9"), new Point(135, 10, 0.0, 5, "#3d65e7"), new Point(135, 20, 0.0, 5, "#0b991a"), new Point(135, 30, 0.0, 5, "#00cccc"), new Point(135, 40, 0.0, 5, "#1d4eeb"), new Point(145, 40, 0.0, 5, "#698bf1"), new Point(155, 40, 0.0, 5, "#4f53ef"), new Point(165, 40, 0.0, 6, "#00cccc"), new Point(40, 70, 0.0, 10, "#f16d6f"), new Point(60, 70, 0.0, 10, "#eb9c31"), new Point(80, 70, 0.0, 10, "#ec4147"), new Point(100, 70, 0.0, 10, "#ff6600"), new Point(120, 70, 0.0, 10, "#f0696c"), new Point(40, 90, 0.0, 10, "#cc6600"), new Point(40, 110, 0.0, 10, "#ff9900"), new Point(60, 110, 0.0, 10, "#f4716e"), new Point(80, 110, 0.0, 10, "#f8c247"), new Point(100, 110, 0.0, 10, "#eb9c31"), new Point(120, 110, 0.0, 10, "#ec4147"), new Point(120, 130, 0.0, 10, "#cc6600"), new Point(120, 150, 0.0, 10, "#ef5c5c"), new Point(100, 160, 0.0, 10, "#ff9900"), new Point(80, 170, 0.0, 10, "#eb9c31"), new Point(60, 160, 0.0, 10, "#ff6600"), new Point(40, 150, 0.0, 10, "#eb9c31")];
		
		gLength = g.length;
		for (var i = 0; i < gLength; i++) {
			//g[i].curPos.x = (canvasWidth/2 ) + g[i].curPos.x;
			//g[i].curPos.y = (canvasHeight/2 ) + g[i].curPos.y;
			//g[i].originalPos.x = (canvasWidth/2 ) + g[i].originalPos.x;
			//g[i].originalPos.y = (canvasHeight/2 ) + g[i].originalPos.y;
			
			
			g[i].curPos.x = 80+g[i].curPos.x;
			g[i].curPos.y = 50+g[i].curPos.y;
			g[i].originalPos.x = 80+g[i].originalPos.x;
			g[i].originalPos.y = 50+g[i].originalPos.y;
		};
		
		pointCollection = new PointCollection();
		pointCollection.points = g;
		
		initEventListeners();
		timeout();
	};
	
	function initEventListeners() {
		$(window).bind('resize', updateCanvasDimensions).bind('mousemove', onMove);
		
		canvas.get(0).ontouchmove = function(e) {
			e.preventDefault();
			onTouchMove(e);
		};
		
		canvas.get(0).ontouchstart = function(e) {
			e.preventDefault();
		};
	};
	
	function updateCanvasDimensions() {
		//canvas.attr({height: $(window).height(), width: $(window).width()});
		canvas.attr({height: 270, width: 300});
		canvasWidth = canvas.width();
		canvasHeight = canvas.height();

		draw();
	};
	function onMove(e) {
		if (pointCollection)
			offset = $("canvas#c").offset();
			pointCollection.mousePos.set(e.pageX-offset.left, e.pageY-offset.top);
	};
	
	function onTouchMove(e) {
		if (pointCollection)
			pointCollection.mousePos.set(e.targetTouches[0].pageX, e.targetTouches[0].pageY);
	};
	
	function timeout() {
		draw();
		update();
		
		setTimeout(function() { timeout() }, 30);
	};
	
	function draw() {
		var tmpCanvas = canvas.get(0);

		if (tmpCanvas.getContext == null) {
			return; 
		};
		
		ctx = tmpCanvas.getContext('2d');
		ctx.clearRect(0, 0, canvasWidth, canvasHeight);
		
		if (pointCollection)
			pointCollection.draw();
	};
	
	function update() {		
		if (pointCollection)
			pointCollection.update();
	};
	
	function Vector(x, y, z) {
		this.x = x;
		this.y = y;
		this.z = z;
 
		this.addX = function(x) {
			this.x += x;
		};
		
		this.addY = function(y) {
			this.y += y;
		};
		
		this.addZ = function(z) {
			this.z += z;
		};
 
		this.set = function(x, y, z) {
			this.x = x; 
			this.y = y;
			this.z = z;
		};
	};
	
	function PointCollection() {
		this.mousePos = new Vector(0, 0);
		this.points = new Array();
		
		this.newPoint = function(x, y, z) {
			var point = new Point(x, y, z);
			this.points.push(point);
			return point;
		};
		
		this.update = function() {		
			var pointsLength = this.points.length;
			
			for (var i = 0; i < pointsLength; i++) {
				var point = this.points[i];
				
				if (point == null)
					continue;
				
				var dx = this.mousePos.x - point.curPos.x;
				var dy = this.mousePos.y - point.curPos.y;
				var dd = (dx * dx) + (dy * dy);
				var d = Math.sqrt(dd);
				
				if (d < 150) {
					point.targetPos.x = (this.mousePos.x < point.curPos.x) ? point.curPos.x - dx : point.curPos.x - dx;
					point.targetPos.y = (this.mousePos.y < point.curPos.y) ? point.curPos.y - dy : point.curPos.y - dy;
				} else {
					point.targetPos.x = point.originalPos.x;
					point.targetPos.y = point.originalPos.y;
				};
				
				point.update();
			};
		};
		
		this.draw = function() {
			var pointsLength = this.points.length;
			for (var i = 0; i < pointsLength; i++) {
				var point = this.points[i];
				
				if (point == null)
					continue;

				point.draw();
			};
		};
	};
	
	function Point(x, y, z, size, colour) {
		this.colour = colour;
		this.curPos = new Vector(x, y, z);
		this.friction = 0.8;
		this.originalPos = new Vector(x, y, z);
		this.radius = size;
		this.size = size;
		this.springStrength = 0.1;
		this.targetPos = new Vector(x, y, z);
		this.velocity = new Vector(0.0, 0.0, 0.0);
		
		this.update = function() {
			var dx = this.targetPos.x - this.curPos.x;
			var ax = dx * this.springStrength;
			this.velocity.x += ax;
			this.velocity.x *= this.friction;
			this.curPos.x += this.velocity.x;
			
			var dy = this.targetPos.y - this.curPos.y;
			var ay = dy * this.springStrength;
			this.velocity.y += ay;
			this.velocity.y *= this.friction;
			this.curPos.y += this.velocity.y;
			
			var dox = this.originalPos.x - this.curPos.x;
			var doy = this.originalPos.y - this.curPos.y;
			var dd = (dox * dox) + (doy * doy);
			var d = Math.sqrt(dd);
			
			this.targetPos.z = d/100 + 1;
			var dz = this.targetPos.z - this.curPos.z;
			var az = dz * this.springStrength;
			this.velocity.z += az;
			this.velocity.z *= this.friction;
			this.curPos.z += this.velocity.z;
			
			this.radius = this.size*this.curPos.z;
			if (this.radius < 1) this.radius = 1;
		};
		
		this.draw = function() {
			ctx.fillStyle = this.colour;
			ctx.beginPath();
			ctx.arc(this.curPos.x, this.curPos.y, this.radius, 0, Math.PI*2, true);
			ctx.fill();
		};
	};
	
	if(supports_canvas()){
		init();
	}else{
		$("div.featured_wrapper div.canvas_wrapper").html("<img src='/img/canvas_logo.jpg' width='300' height='300' />");
	}
});