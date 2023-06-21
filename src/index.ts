import * as p5 from "p5";

export const sketch = (p: p5) => {
  let outputScale = 2;
  let strokeColor = "#6355C0";
  let strokeW = 0.8;
  let bgColor = "#292A41";

  p.setup = () => {
    p.pixelDensity();
    p.createCanvas(1000 * outputScale, 1000 * outputScale, p.WEBGL);
    p.background(bgColor);
  };

  p.draw = () => {
    p.scale(outputScale);
    p.noFill();
    p.rotateY(p.mouseY * 400);
    p.rect(100, 100, 100, 100, 5);
    p.stroke(strokeColor);
    p.strokeWeight(strokeW);

    p.rotateY(p.mouseY * 400);
    p.rect(0, -200, 100, 100, 5);
    p.stroke(strokeColor);
    p.strokeWeight(strokeW);

    p.rotateY(p.mouseY * 100);
    p.rect(200, 100, 100, 100, 20);
    p.stroke(strokeColor);
    p.strokeWeight(strokeW);

    p.rotateY(p.mouseY * 200);
    p.rect(200, -200, 100, 100, 10);
    p.stroke(strokeColor);
    p.strokeWeight(strokeW);
  };
};

export const myp5 = new p5(sketch, document.body);
