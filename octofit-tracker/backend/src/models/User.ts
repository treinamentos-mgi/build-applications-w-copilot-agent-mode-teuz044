import { Schema, model } from 'mongoose';

const userSchema = new Schema({
  name: { type: String, required: true, trim: true },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, 'E-mail inválido'],
  },
  team: { type: Schema.Types.ObjectId, ref: 'Team' },
  fitnessGoal: {
    type: String,
    required: true,
    enum: { values: ['endurance', 'strength', 'mobility'], message: 'Objetivo de condicionamento inválido' },
  },
});

export const User = model('User', userSchema);
