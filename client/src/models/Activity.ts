export class Activity {
    private id: string;
    private name: string;
    private points: number;
  
    constructor(json: JSON) {
      let jsonString = JSON.stringify(json);
      let jsonArray = JSON.parse(jsonString);
      this.id = jsonArray.id;
      this.name = jsonArray.name;
      this.points = jsonArray.points;
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

    // Setters

    setName(name: string){
        this.name = name;
    }

    setPoints(points: number){
        this.points = points;
    }

    // Adders

    addPoints(points: number){
        this.points += points;
    }
    
    // toJson

    toJson(): string{
      let obj = {"id": this.id, "name": this.name, "points": this.points};
      return JSON.stringify(obj);
  }
  }