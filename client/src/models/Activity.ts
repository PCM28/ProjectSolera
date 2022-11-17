export class Activity {
    private _id: string;
    private _name: string;
    private _points: number;
  
    constructor(json: JSON) {
      let jsonString = JSON.stringify(json);
      let jsonArray = JSON.parse(jsonString);
      this._id = jsonArray.id;
      this._name = jsonArray.name;
      this._points = jsonArray.points;
  }
  
    // Getters
    
    public get id(): string {
        return this._id;
    }
  
    get name(): string {
      return this._name;
    }
  
    get points(): number {
      return this._points;
    }

    // Setters

    set name(name: string){
        this._name = name;
    }

    set points(points: number){
        this._points = points;
    }

    // Adders

    addPoints(points: number){
        this._points += points;
    }
    
    // toJson

    toJson(): string{
      let obj = {"id": this._id, "name": this._name, "points": this._points};
      return JSON.stringify(obj);
  }
  }