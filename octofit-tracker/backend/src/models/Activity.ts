import { Schema, model } from 'mongoose';

const activitySchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  team: { type: Schema.Types.ObjectId, ref: 'Team', required: true },
  type: {
    type: String,
    required: true,
    enum: { values: ['run', 'walk', 'cycle', 'strength'], message: 'Tipo de atividade inválido' },
  },
  minutes: { type: Number, required: true, min: [1, 'Os minutos devem ser maiores que zero'] },
  points: { type: Number, required: true, min: [0, 'Os pontos não podem ser negativos'] },
  occurredAt: { type: Date, required: true },
});

export const Activity = model('Activity', activitySchema);
