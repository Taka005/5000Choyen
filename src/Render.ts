import Drawer from "./Drawer";
import { CanvasRenderingContext2D, Canvas } from "canvas";
import { Option } from "./@types";

class Render{
  public canvas: Canvas
  public ctx: CanvasRenderingContext2D;
  public offset: { top:{ x: number, y: number }, bottom:{ x: number, y: number } } = {
    top: { x: 0, y: 0 },
    bottom: { x: 250, y: 130 }
  };
  public fixedX: number = 60;
  public dragging: boolean = false;
  public dragPosition: { x0: number, y0: number } = { x0: 0, y0: 0 };
  public hoshii: boolean;
  public noalpha: boolean;
  public single: boolean;
  public debug: boolean;
  public drawer: Drawer;

  constructor(canvas: Canvas,config: Option){
    this.canvas = canvas;
    
    this.ctx = canvas.getContext("2d");
    this.ctx.lineJoin = "round";
    this.ctx.lineCap = "round";
    this.ctx.fillStyle = "white";
    this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height);
  
    this.hoshii = config.hoshii;
    this.noalpha = config.noalpha;
    this.single = config.single;
    this.debug = config.debug;

    this.drawer = new Drawer(this.ctx,config);
  }

  public drawTop(text: string, isRainbow: boolean): void{
    let posX = 70;
    let posY = 100;
    let order = this.noalpha ? "white" : "transparent";
    if(this.debug) order = "debug";

    if(this.single){
      posX = this.fixedX;
      posY = 100;
    }
  
    if(isRainbow){
      this.drawer.drawTopRainbow(text,posX,posY,order);
    }else{
      this.drawer.drawTop(text,posX,posY,order);
    }
  
    if(this.hoshii){
      this.drawImage();
    }else{
      this.drawBottom(text,null,isRainbow); //fix commendouted
    }
  }
  
  public drawBottom(txt: string,offsetX: number | null,isRainbow: boolean): void{
    const text = txt.replace(/！/,"!");
    let posX = (offsetX || this.offset.bottom.x) + 70;
    let posY = this.offset.bottom.y + 100;
    let order = this.noalpha ? "white" : "transparent";

    if(this.debug) order = "debug";

    if(this.single){
      posX = this.fixedX;
      posY = 100;
    }

    if(isRainbow){
      this.drawer.drawBottomRainbow(text,posX,posY,order);
    }else{
      this.drawer.drawBottom(text,posX,posY,order);
    }
  }
  
  public drawImage(offsetX?: number): void{
    const posX = (offsetX||this.offset.bottom.x) + 70;
    const posY = this.offset.bottom.y;
    let order = this.noalpha ? "white" : "transparent";

    if(this.debug) order = "debug";
    this.drawer.drawImage(posX,posY,order);
  }

  public createBuffer(type: "jpeg" | "png",quality: number): Buffer{
    return this.drawer.createBuffer(type,quality);
  }
}

export default Render;
