import { backendurl } from "../utils/constant";

export function handleLoginWithGithub(){
    window.open(backendurl+"/api/auth/github", "_self");

  }