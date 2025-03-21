import express, { Express, Request, Response, NextFunction } from "express";
import cors from "cors";
import Render from "./Render";
import {
  createCanvas,
  registerFont
} from "canvas";
import { Option } from "./@types";
import Config from "./config";

const app: Express = express();

registerFont("./src/font/notobk-subset.otf",{ family: "notobk" });
registerFont("./src/font/notoserifbk-subset.otf",{ family: "notoserifbk" });

app.listen(Config.port,()=>{
  console.log(`${Config.port}番ポートで起動しました`);
});

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors());

app.use((req: Request,res: Response,next: NextFunction)=>{
  console.log(`${req.ip} - [${req.method}] ${req.originalUrl}`);

  next();
});

app.get("/",(req: Request,res: Response)=>{
  res.status(200).send("5000兆円欲しい!API\nhttps://github.com/Taka005/5000Choyen");
});

app.post("/generate",(req: Request,res: Response)=>{
  const { top, bottom } = req.params;
  const option: Option = req.body;

  const render: Render = new Render(createCanvas(3840,1080),option);

  if(!option.single){
    render.drawTop(top,Boolean(option.rainbow));

    if(!option.hoshii){
      render.drawBottom(bottom,null,Boolean(option.rainbow));
    }else{
      render.drawImage();
    }
  }else{
    if(top){
      render.drawTop(top,Boolean(option.rainbow));
    }else{
      render.drawBottom(bottom,null,Boolean(option.rainbow));
    }
  }

  res.set("Content-Type",`image/${option.imgtype}`);
  res.status(200).send(render.createBuffer(option.imgtype,100));
});
