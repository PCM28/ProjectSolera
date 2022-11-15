const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const teamSchema = new Schema(
  {
    name: { type: String, required: true },
    activities: [{ type: Schema.Types.ObjectId, ref: "Activity" }], //Esto la el populate
  },
  {
    timestamps: true,
  }
);

const Team = mongoose.model("Team", teamSchema);
module.exports = Team;
