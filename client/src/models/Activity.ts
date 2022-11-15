export class Activity {
    private id: string;
    private name: string;
    private points: number;
  
    constructor(id: string, name: string, points: number) {
      this.id = id;
      this.name = name;
      this.points = points;
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

  }