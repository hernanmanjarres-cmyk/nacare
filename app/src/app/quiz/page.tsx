import type { Metadata } from "next";
import { QuizFlow } from "@/components/quiz/quiz-flow";

export const metadata: Metadata = {
  title: "Tu pieza ideal · Nacaré",
  description:
    "Descubre qué joya artesanal de Nacaré va con tu energía. Quiz de 5 preguntas. 🐚",
};

export default function QuizPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <QuizFlow />
    </div>
  );
}
