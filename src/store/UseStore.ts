import { create } from "zustand";

export interface StoreState {
  answers: (number | null)[];
  currentQuestion: number;
  score: number | null;
  setAnswer: (index: number, value: number) => void;
  nextQuestion: () => void;
  prevQuestion: () => void;
  calculateScore: () => void;
}

export const questions: string[] = [
  "In the last month, how often have you been upset because of something that happened unexpectedly?",
  "In the last month, how often have you felt that you were unable to control the important things in your life?",
  "In the last month, how often have you felt nervous and stressed?",
  "In the last month, how often have you felt confident about your ability to handle your personal problems?",
  "In the last month, how often have you felt that things were going your way?",
  "In the last month, how often have you found that you could not cope with all the things that you had to do?",
  "In the last month, how often have you been able to control irritations in your life?",
  "In the last month, how often have you felt that you were on top of things?",
  "In the last month, how often have you been angered because of things that happened that were outside of your control?",
  "In the last month, how often have you felt difficulties were piling up so high that you could not overcome them?",
];

const reverseScoredQuestions: number[] = [3, 4, 6, 7];

export const useStore = create<StoreState>((set) => ({
  answers: Array(questions.length).fill(null),
  currentQuestion: 0,
  score: null,
  setAnswer: (index, value) =>
    set((state) => {
      const updatedAnswers = [...state.answers];
      updatedAnswers[index] = value;
      return { answers: updatedAnswers };
    }),
  nextQuestion: () => set((state) => ({ currentQuestion: state.currentQuestion + 1 })),
  prevQuestion: () => set((state) => ({ currentQuestion: state.currentQuestion - 1 })),
  calculateScore: () =>
    set((state) => {
      const total = state.answers.reduce((acc, val, idx) => {
        if (val === null) return acc;
        return acc + (reverseScoredQuestions.includes(idx) ? 4 - val : val);
      }, 0);
      return { score: total };
    }),
}));
