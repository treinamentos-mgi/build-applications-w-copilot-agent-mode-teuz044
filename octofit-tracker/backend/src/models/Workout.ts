import { Schema, model } from 'mongoose';

const workoutSchema = new Schema({
  title: { type: String, required: true, unique: true, trim: true },
  focus: {
    type: String,
    required: true,
    enum: { values: ['endurance', 'strength', 'mobility'], message: 'Foco de treino inválido' },
  },
  minutes: { type: Number, required: true, min: [1, 'Os minutos devem ser maiores que zero'] },
  difficulty: {
    type: String,
    required: true,
    enum: { values: ['easy', 'moderate', 'hard'], message: 'Dificuldade inválida' },
  },
});

export const Workout = model('Workout', workoutSchema);
