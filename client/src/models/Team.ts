import { Activity } from "./Activity";

export class Team {
    private _id: string;
    private _name: string;
    private _activities: Activity[];
  
    constructor(json: JSON) {
        let jsonString = JSON.stringify(json);
        let jsonArray = JSON.parse(jsonString);
        this._id = jsonArray.id;
        this._name = jsonArray.name;
        this._activities = jsonArray.activities;
    }
    

    // Getters

    get id(): string {
        return this._id;
    }
  
    get name(): string {
      return this._name;
    }
  
    
    get activities(): Activity[]{
        return this._activities;
    }

    // Setters

    set name(name: string){
        this._name = name;
    }

    set activities(activities: Activity[]){
        this._activities = activities;
    }

    // Adders


    addActivity(activity: Activity){
        this._activities.push(activity);
    }

    // toJSON

    toJson(): string{
        let obj = {"id": this._id, "name": this._name, "activities": this._activities};
        return JSON.stringify(obj);
    }
    
}