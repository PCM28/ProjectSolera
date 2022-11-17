import { Activity } from "./Activity";

export class Team {
    private id: string;
    private name: string;
    private points: number
    private activities: Activity[];
  
    constructor(json: JSON) {
        let jsonString = JSON.stringify(json);
        let jsonArray = JSON.parse(jsonString);
        this.id = jsonArray.id;
        this.name = jsonArray.name;
        this.activities = jsonArray.activities;
    }
    

    // Getters

    getId(): string {
        return this.id;
    }
  
    getName(): string {
      return this.name;
    }
  
    
    getActivities(): Activity[]{
        return this.activities;
    }

    // Setters

    setName(name: string){
        this.name = name;
    }

    setActivities(activities: Activity[]){
        this.activities = activities;
    }

    // Adders


    addActivity(activity: Activity){
        this.activities.push(activity);
    }

    // toJSON

    toJson(): string{
        let obj = {"id": this.id, "name": this.name, "activities": this.activities};
        return JSON.stringify(obj);
    }
    
}