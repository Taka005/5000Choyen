import Hoshii from "./Hoshii";
import {
  CanvasRenderingContext2D,
  createCanvas
} from "canvas";
import { Option } from "./@types";

class Drawer{
  public ctx: CanvasRenderingContext2D;
  public actualWidth: { top: number, bottom: number } = { top:0, bottom: 0 };
  public actualHeight: number = 0;
  public logo: Hoshii = new Hoshii();
  public fixedHeight: number = 220;
  public config: Option

  constructor(ctx: CanvasRenderingContext2D, config: Option){
    this.ctx = ctx;
    this.config = config;
  }

  public drawTop(text: string,posX: number,posY: number,bgColor: string): void{
    this.ctx.setTransform(1,0,0,1,0,0);
    this.ctx.font = "100px notobk";
  
    switch(bgColor){
      case "white":
        this.ctx.fillStyle = "white";
        this.ctx.fillRect(0,0,this.ctx.canvas.width,this.ctx.canvas.height/2 + 10);
        break;
      case "transparent":
        this.ctx.clearRect(0,0,this.ctx.canvas.width,this.ctx.canvas.height/2 + 10);
        break;
      case "debug":
        this.ctx.fillStyle = "blue";
        this.ctx.fillRect(0,0,this.ctx.canvas.width,this.ctx.canvas.height/2 + 10);
        break;
    }
  
    this.ctx.setTransform(1,0,-0.45,1,0,0);
    
    this.ctx.strokeStyle = "#000";
    this.ctx.lineWidth = 22;
    this.ctx.strokeText(text,posX + 4,posY + 4);
  
    const silver = this.ctx.createLinearGradient(0, 24, 0, 122);
    silver.addColorStop(0.0,"rgb(0,15,36)");
    silver.addColorStop(0.10,"rgb(255,255,255)");
    silver.addColorStop(0.18,"rgb(55,58,59)");
    silver.addColorStop(0.25,"rgb(55,58,59)");
    silver.addColorStop(0.5,"rgb(200,200,200)");
    silver.addColorStop(0.75,"rgb(55,58,59)");
    silver.addColorStop(0.85,"rgb(25,20,31)");
    silver.addColorStop(0.91,"rgb(240,240,240)");
    silver.addColorStop(0.95,"rgb(166,175,194)");
    silver.addColorStop(1,"rgb(50,50,50)");
    this.ctx.strokeStyle = silver;
    this.ctx.lineWidth = 20;
    this.ctx.strokeText(text,posX + 4,posY + 4);

    this.ctx.strokeStyle = "#000000";
    this.ctx.lineWidth = 16;
    this.ctx.strokeText(text,posX,posY);
 
    const gold = this.ctx.createLinearGradient(0,20,0,100);
    gold.addColorStop(0,"rgb(253,241,0)");
    gold.addColorStop(0.25,"rgb(245,253,187)");
    gold.addColorStop(0.4,"rgb(255,255,255)");
    gold.addColorStop(0.75,"rgb(253,219,9)");
    gold.addColorStop(0.9,"rgb(127,53,0)");
    gold.addColorStop(1,"rgb(243,196,11)");
    this.ctx.strokeStyle = gold;
    this.ctx.lineWidth = 10;
    this.ctx.strokeText(text,posX,posY);

    this.ctx.lineWidth = 6;
    this.ctx.strokeStyle = "#000";
    this.ctx.strokeText(text,posX + 2,posY - 3);
  
    this.ctx.lineWidth = 6;
    this.ctx.strokeStyle ="#FFFFFF";
    this.ctx.strokeText(text,posX,posY - 3);
  
    const red1 = this.ctx.createLinearGradient(0,20,0,100);
    red1.addColorStop(0,"rgb(255,100,0)");
    red1.addColorStop(0.5,"rgb(123,0,0)");
    red1.addColorStop(0.51,"rgb(240,0,0)");
    red1.addColorStop(1,"rgb(5,0,0)");
    this.ctx.lineWidth = 4;
    this.ctx.strokeStyle = red1;
    this.ctx.strokeText(text,posX,posY - 3);

    const red2 = this.ctx.createLinearGradient(0,20,0,100);
    red2.addColorStop(0,"rgb(230,0,0)");
    red2.addColorStop(0.5,"rgb(123,0,0)");
    red2.addColorStop(0.51,"rgb(240,0,0)");
    red2.addColorStop(1,"rgb(5,0,0)");
    this.ctx.fillStyle = red2;
    this.ctx.fillText(text,posX,posY - 3);

    const textWH = this.ctx.measureText(text);
    this.actualWidth.top = textWH.width + posX;
    if(!this.config.single){
      this.actualHeight = 120 + posY;
    }else{
      this.actualHeight = this.fixedHeight;
    }
  }

  public drawTopRainbow(text: string,posX: number,posY: number,bgColor: string): void{
    this.ctx.setTransform(1,0,0,1,0,0);
    this.ctx.font = "100px notobk";
  
    switch(bgColor){
      case "white":
        this.ctx.fillStyle = "white";
        this.ctx.fillRect(0,0,this.ctx.canvas.width,this.ctx.canvas.height/2 + 10);
        break;
      case "transparent":
        this.ctx.clearRect(0,0,this.ctx.canvas.width,this.ctx.canvas.height/2 + 10);
        break;
      case "debug":
        this.ctx.fillStyle = "blue";
        this.ctx.fillRect(0,0,this.ctx.canvas.width,this.ctx.canvas.height/2 + 10);
        break;
    }
  
    this.ctx.setTransform(1,0,-0.45,1,0,0);

    this.ctx.strokeStyle = "#000";
    this.ctx.lineWidth = 22;
    this.ctx.strokeText(text,posX + 4,posY + 4);

    this.ctx.setTransform(1,0,-0.45,1,0,0);
    
    this.ctx.strokeStyle = "#000";
    this.ctx.lineWidth = 22;
    this.ctx.strokeText(text,posX + 4,posY + 4);

    const silver = this.ctx.createLinearGradient(0,24,0,122);
    silver.addColorStop(0,"red");
    silver.addColorStop(0.25,"yellow");
    silver.addColorStop(0.5,"green");
    silver.addColorStop(0.75,"blue");
    silver.addColorStop(1.0,"violet");
    this.ctx.strokeStyle = silver;
    this.ctx.lineWidth = 20;
    this.ctx.strokeText(text,posX + 4,posY + 4);

    this.ctx.strokeStyle = "#000000";
    this.ctx.lineWidth = 16;
    this.ctx.strokeText(text,posX,posY);

    const gold1 = this.ctx.createLinearGradient(0,20,0,100);
    gold1.addColorStop(0,"red");
    gold1.addColorStop(0.25,"yellow");
    gold1.addColorStop(0.5,"green");
    gold1.addColorStop(0.75,"blue");
    gold1.addColorStop(1.0,"violet");
    this.ctx.strokeStyle = gold1;
    this.ctx.lineWidth = 10;
    this.ctx.strokeText(text,posX,posY);

    this.ctx.lineWidth = 6;
    this.ctx.strokeStyle = "#000";
    this.ctx.strokeText(text,posX + 2,posY - 3);
  
    this.ctx.lineWidth = 6;
    this.ctx.strokeStyle = "#FFFFFF";
    this.ctx.strokeText(text,posX,posY - 3);
  
    const red1 = this.ctx.createLinearGradient(0,20,0,100);
    red1.addColorStop(0,"red");
    red1.addColorStop(0.25,"yellow");
    red1.addColorStop(0.5,"green");
    red1.addColorStop(0.75,"blue");
    red1.addColorStop(1.0,"violet");
    this.ctx.lineWidth = 4;
    this.ctx.strokeStyle = red1;
    this.ctx.strokeText(text,posX,posY - 3);

    const red2 = this.ctx.createLinearGradient(0,20,0,100);
    red2.addColorStop(0,"rgb(230,0,0)");
    red2.addColorStop(0.5,"rgb(123,0,0)");
    red2.addColorStop(0.51,"rgb(240,0,0)");
    red2.addColorStop(1,"rgb(5,0,0)");
    this.ctx.fillStyle = red2;
    this.ctx.fillText(text,posX,posY - 3);

    this.ctx.strokeStyle = "#000000";
    this.ctx.lineWidth = 16;
    this.ctx.strokeText(text,posX,posY);

    const gold2 = this.ctx.createLinearGradient(0,20,0,100);
    gold2.addColorStop(0,"rgb(253,241,0)");
    gold2.addColorStop(0.25,"rgb(245,253,187)");
    gold2.addColorStop(0.4,"rgb(255,255,255)");
    gold2.addColorStop(0.75,"rgb(253,219,9)");
    gold2.addColorStop(0.9,"rgb(127,53,0)");
    gold2.addColorStop(1,"rgb(243,196,11)");
    this.ctx.strokeStyle = gold2;
    this.ctx.lineWidth = 10;
    this.ctx.strokeText(text,posX,posY);

    this.ctx.lineWidth = 6;
    this.ctx.strokeStyle = "#000";
    this.ctx.strokeText(text,posX + 2,posY - 3);
  
    this.ctx.lineWidth = 6;
    this.ctx.strokeStyle = "#FFFFFF";
    this.ctx.strokeText(text,posX,posY - 3);
  
    const red3 = this.ctx.createLinearGradient(0,20,0,100);
    red3.addColorStop(0,"rgb(255,100,0)");
    red3.addColorStop(0.5,"rgb(123,0,0)");
    red3.addColorStop(0.51,"rgb(240,0,0)");
    red3.addColorStop(1,"rgb(5,0,0)");
    this.ctx.lineWidth = 4;
    this.ctx.strokeStyle = red3;
    this.ctx.strokeText(text,posX,posY - 3);

    const red4 = this.ctx.createLinearGradient(0,20,0,100);
    red4.addColorStop(0,"rgb(230,0,0)");
    red4.addColorStop(0.5,"rgb(123,0,0)");
    red4.addColorStop(0.51,"rgb(240,0,0)");
    red4.addColorStop(1,"rgb(5,0,0)");
    this.ctx.fillStyle = red4;
    this.ctx.fillText(text,posX,posY - 3);

    const textWH = this.ctx.measureText(text);
    this.actualWidth.top = textWH.width + posX;
    if(!this.config.single){
      this.actualHeight = 120 + posY;
    }else{
      this.actualHeight = this.fixedHeight;
    }
  }

  public drawBottom(text: string,posX: number,posY: number,bgColor: string): void{
    this.ctx.setTransform(1,0,0,1,0,0);
    this.ctx.font = "100px notoserifbk";
  
    if(bgColor === "white"){
      this.ctx.fillStyle = bgColor;
      this.ctx.fillRect(0,130,this.ctx.canvas.width,this.ctx.canvas.height/2 + 10);
    }else if(bgColor === "transparent"){
      this.ctx.clearRect(0,130,this.ctx.canvas.width,this.ctx.canvas.height/2 + 10);
    }else if(bgColor === "debug"){
      this.ctx.fillStyle = "blue";
      this.ctx.fillRect(0,130,this.ctx.canvas.width,this.ctx.canvas.height/2 + 10);
    }

    if(this.config.single){
      this.ctx.clearRect(0,0,this.ctx.canvas.width,this.ctx.canvas.height); 
    }
  
    this.ctx.setTransform(1,0,-0.45,1,0,0);
  
    this.ctx.strokeStyle = "#000";
    this.ctx.lineWidth = 22;
    this.ctx.strokeText(text,posX + 5,posY + 2);

    const silver1 = this.ctx.createLinearGradient(0,posY-80,0,posY+18);
    silver1.addColorStop(0,"rgb(0,15,36)");
    silver1.addColorStop(0.25,"rgb(250,250,250)");
    silver1.addColorStop(0.5,"rgb(150,150,150)");
    silver1.addColorStop(0.75,"rgb(55,58,59)");
    silver1.addColorStop(0.85,"rgb(25,20,31)");
    silver1.addColorStop(0.91,"rgb(240,240,240)");
    silver1.addColorStop(0.95,"rgb(166,175,194)");
    silver1.addColorStop(1,"rgb(50,50,50)");
    this.ctx.strokeStyle = silver1;
    this.ctx.lineWidth = 19;
    this.ctx.strokeText(text,posX + 5,posY + 2);

    this.ctx.strokeStyle = "#10193A";
    this.ctx.lineWidth = 17;
    this.ctx.strokeText(text,posX, posY);

    this.ctx.strokeStyle = "#DDD";
    this.ctx.lineWidth = 8;
    this.ctx.strokeText(text,posX,posY);

    const blue = this.ctx.createLinearGradient(0,posY-80,0,posY);
    blue.addColorStop(0,"rgb(16,25,58)");
    blue.addColorStop(0.03,"rgb(255,255,255)");
    blue.addColorStop(0.08,"rgb(16,25,58)");
    blue.addColorStop(0.2,"rgb(16,25,58)");
    blue.addColorStop(1,"rgb(16,25,58)");
    this.ctx.strokeStyle = blue;
    this.ctx.lineWidth = 7;
    this.ctx.strokeText(text,posX,posY);
  
    const silver2 = this.ctx.createLinearGradient(0,posY-80,0,posY);
    silver2.addColorStop(0,"rgb(245,246,248)");
    silver2.addColorStop(0.15,"rgb(255,255,255)");
    silver2.addColorStop(0.35,"rgb(195,213,220)");
    silver2.addColorStop(0.5,"rgb(160,190,201)");
    silver2.addColorStop(0.51,"rgb(160,190,201)");
    silver2.addColorStop(0.52,"rgb(196,215,222)");
    silver2.addColorStop(1.0,"rgb(255,255,255)");
    this.ctx.fillStyle = silver2;
    this.ctx.fillText(text,posX,posY - 3);

    const textWH = this.ctx.measureText(text);
    this.actualWidth.bottom = textWH.width + posX;
    if(!this.config.single){
      this.actualHeight = 120 + posY;
    }else{
      this.actualHeight = this.fixedHeight - 20;
    }
  }

  public drawBottomRainbow(text: string,posX: number,posY: number,bgColor: string): void{
    this.ctx.setTransform(1,0,0,1,0,0);
    this.ctx.font = "100px notoserifbk";
  
    if(bgColor === "white"){
      this.ctx.fillStyle = bgColor;
      this.ctx.fillRect(0,130,this.ctx.canvas.width,this.ctx.canvas.height/2 + 10);
    }else if (bgColor === "transparent"){
      this.ctx.clearRect(0,130,this.ctx.canvas.width,this.ctx.canvas.height/2 + 10);
    }else if (bgColor === "debug"){
      this.ctx.fillStyle = "blue";
      this.ctx.fillRect(0,130,this.ctx.canvas.width,this.ctx.canvas.height/2 + 10);
    }

    if(this.config.single){
      this.ctx.clearRect(0,0,this.ctx.canvas.width,this.ctx.canvas.height); 
    }
  
    this.ctx.setTransform(1,0,-0.45,1,0,0);
  
    this.ctx.strokeStyle = "#000";
    this.ctx.lineWidth = 22;
    this.ctx.strokeText(text,posX + 5,posY + 2);

    const silver1 = this.ctx.createLinearGradient(0,posY-80,0,posY+18);
    silver1.addColorStop(0,"rgb(0,15,36)");
    silver1.addColorStop(0.25,"rgb(250,250,250)");
    silver1.addColorStop(0.5,"rgb(150,150,150)");
    silver1.addColorStop(0.75,"rgb(55,58,59)");
    silver1.addColorStop(0.85,"rgb(25,20,31)");
    silver1.addColorStop(0.91,"rgb(240,240,240)");
    silver1.addColorStop(0.95,"rgb(166,175,194)");
    silver1.addColorStop(1,"rgb(50,50,50)");
    this.ctx.strokeStyle = silver1;
    this.ctx.lineWidth = 19;
    this.ctx.strokeText(text,posX + 5,posY + 2);

    this.ctx.strokeStyle = "#10193A";
    this.ctx.lineWidth = 17;
    this.ctx.strokeText(text,posX,posY);

    this.ctx.strokeStyle = "#DDD";
    this.ctx.lineWidth = 8;
    this.ctx.strokeText(text,posX,posY);

    const blue = this.ctx.createLinearGradient(0,posY-80,0,posY);
    blue.addColorStop(0,"rgb(16,25,58)");
    blue.addColorStop(0.03,"rgb(255,255,255)");
    blue.addColorStop(0.08,"rgb(16,25,58)");
    blue.addColorStop(0.2,"rgb(16,25,58)");
    blue.addColorStop(1,"rgb(16,25,58)");
    this.ctx.strokeStyle = blue;
    this.ctx.lineWidth = 7;
    this.ctx.strokeText(text, posX, posY);

    const silver2 = this.ctx.createLinearGradient(0,posY-80,0,posY);
    silver2.addColorStop(0,"red");
    silver2.addColorStop(0.25,"yellow");
    silver2.addColorStop(0.5,"green");
    silver2.addColorStop(0.75,"blue");
    silver2.addColorStop(1.0,"violet");
    this.ctx.fillStyle = silver2;
    this.ctx.fillText(text,posX,posY - 3);

    const textWH = this.ctx.measureText(text);
    this.actualWidth.bottom = textWH.width + posX;

    if(!this.config.single){
      this.actualHeight = 120 + posY;
    }else{
      this.actualHeight = this.fixedHeight;
    }
  }

  public drawImage(posX: number,posY: number,bgColor: string): void{
    this.ctx.setTransform(1,0,0,1,0,0);
  
    switch(bgColor){
      case "white":
        this.ctx.fillStyle = "white";
        this.ctx.fillRect(0,130,this.ctx.canvas.width,this.ctx.canvas.height/2 + 10);
        break;
      case "transparent":
        this.ctx.clearRect(0,130,this.ctx.canvas.width,this.ctx.canvas.height/2 + 10);
        break;
    }
  
    if(this.logo.isLoaded()){
      this.logo.drawTo(this.ctx,posX,posY);
    }else{
      this.logo.self.onload = ()=>{
        this.logo.drawTo(this.ctx,posX,posY);
      }      
    }
  
    this.actualWidth.bottom = 370 + posX;
    this.actualHeight = 200 + posY;
  }

  public createBuffer(type: "jpeg" | "png",quality: number): Buffer{
    const width = Math.max(this.actualWidth.top,this.actualWidth.bottom);
    const height = this.actualHeight - 60;

    const data = this.ctx.getImageData(0,0,width,height);
    const canvasWidth = data.width;
    const canvasHeight = data.height - 10;
    const canvas = createCanvas(canvasWidth,canvasHeight);
    const ctx = canvas.getContext("2d");
    ctx.putImageData(data,0,0);
  
    if(quality < 0){
      quality = 10;
    }else if(quality > 100){
      quality = 100;
    }
  
    if(type === "jpeg"){
      return canvas.toBuffer("image/jpeg",{ quality: quality ? quality/100 : 0.8});
    }

    return canvas.toBuffer("image/png",{ compressionLevel: this.calcCompressLevel(quality) });
  }

  private calcCompressLevel(quality: number): 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 {
    const fixedQuality = Math.max(0,Math.min(quality,100));

    return Math.floor((fixedQuality/100)*10) as 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
  }
}

export default Drawer;