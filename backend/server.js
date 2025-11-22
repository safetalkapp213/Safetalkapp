import express from "express"
import { ConnectDB } from "./config/db.js"


const app = express();
ConnectDB();