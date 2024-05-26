import { SnapJson } from "snapjson";
import { app } from "../../main";

// const path = `${app.getPath("appData")}/pdv`;
const path = ""; // default path is db/db.json
const orm = new SnapJson(path);

export { orm };