import { Activity } from "./Activity";
export class Team {
    private id: string;
    private name: string;
    private points: number;
    private activities: Activity[];
  
    constructor(id: string, name: string, points: number, activities: Activity[]) {
      this.id = id;
      this.name = name;
      this.points = points;
      this.activities = activities;
    }

    // Getters

    getId(): string {
        return this.id;
    }
  
    getName(): string {
      return this.name;
    }
  
    getPoints(): number {
      return this.points;
    }
    
    getActivities(): Activity[]{
        return this.activities;
    }

    // Setters

    setName(name: string){
        this.name = name;
    }

    setPoints(points: number){
        this.points = points;
    }

    setActivities(activities: Activity[]){
        this.activities = activities;
    }

    // Adders

    addPoints(points: number){
        this.points += points;
    }

    addActivity(activity: Activity){
        this.activities.push(activity);
    }
    
  }