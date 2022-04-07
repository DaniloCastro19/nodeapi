//archivo mediante el cual se ejecuta la aplicación.
import app from "./app"
const main=()=>{
    app.listen(app.get("port"));
    console.log(`Server on port ${app.get("port")}`);
}; 

main();