//Aquí se establecen los métodos GET, POST, PUT, DELETE
import { Router } from "express"; 
import {methods as languageControllers} from "./../controllers/languages_controllers";
const router = Router();

router.get("/", languageControllers.getLanguages);
router.get("/:id", languageControllers.getLanguage);
router.post("/", languageControllers.addLanguage);
router.delete("/:id", languageControllers.deleteLanguage);
router.put("/:id", languageControllers.updateLanguage);

export default router; 