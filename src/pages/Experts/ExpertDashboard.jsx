import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ExpertDashboard.css";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import StatsCards from "./components/StatsCards";
import Filters from "./components/Filters";
import QuestionsList from "./components/QuestionsList";

/**
 * ExpertDashboard (parent) - manages questions state and passes handlers
 */
export default function ExpertDashboard() {
  const navigate = useNavigate();

  // Load from localStorage or use example data
  const [questions, setQuestions] = useState(() => {
    const saved = localStorage.getItem("expert_questions");
    if (saved) return JSON.parse(saved);
    return [
      {
        id: 1,
        farmerName: "Ramesh",
        farmerId: "F-101",
        q: "ઘઉંમાં પીળાશ કેમ આવે છે?",
        category: "Wheat",
        createdAt: Date.now() - 1000 * 60 * 60 * 24,
        a: "",
        answered: false,
      },
      {
        id: 2,
        farmerName: "Suresh",
        farmerId: "F-205",
        q: "કપાસના ખાતરનું પ્રમાણ કેટલું હોવું જોઈએ?",
        category: "Cotton",
        createdAt: Date.now() - 1000 * 60 * 60 * 5,
        a: "ઉત્તમ માટે N-P-K 80-40-20નો અંદાજ કરી શકો છો.",
        answered: true,
      },
    ];
  });

  // filters / search states
  const [statusFilter, setStatusFilter] = useState("all"); // all | pending | answered
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [searchText, setSearchText] = useState("");

  // persist to localStorage whenever questions change
  useEffect(() => {
    localStorage.setItem("expert_questions", JSON.stringify(questions));
  }, [questions]);

  // handlers
  const handleLogout = () => {
    // clear any auth/session here if required
    navigate("/login");
  };

  const addAnswer = (id, answerText) => {
    setQuestions((prev) =>
      prev.map((q) =>
        q.id === id ? { ...q, a: answerText, answered: !!answerText } : q
      )
    );
  };

  const markAnswered = (id) => {
    setQuestions((prev) => prev.map((q) => (q.id === id ? { ...q, answered: true } : q)));
  };

  const markUnanswered = (id) => {
    setQuestions((prev) => prev.map((q) => (q.id === id ? { ...q, answered: false } : q)));
  };

  const deleteQuestion = (id) => {
    if (!window.confirm("Delete this question?")) return;
    setQuestions((prev) => prev.filter((q) => q.id !== id));
  };

  const addQuestion = (questionObj) => {
    // questionObj must include: farmerName, q, category
    const newQ = {
      id: Date.now(),
      farmerName: questionObj.farmerName || "Unknown",
      farmerId: questionObj.farmerId || "F-000",
      q: questionObj.q,
      category: questionObj.category || "General",
      createdAt: Date.now(),
      a: "",
      answered: false,
    };
    setQuestions((prev) => [newQ, ...prev]);
  };

  // compute filtered list
  const filtered = questions.filter((qq) => {
    if (statusFilter === "pending" && qq.answered) return false;
    if (statusFilter === "answered" && !qq.answered) return false;
    if (categoryFilter !== "all" && qq.category !== categoryFilter) return false;
    if (
      searchText &&
      !(
        qq.q.toLowerCase().includes(searchText.toLowerCase()) ||
        qq.farmerName.toLowerCase().includes(searchText.toLowerCase())
      )
    )
      return false;
    return true;
  });

  return (
    <div className="expert-wrap">
      <Sidebar onLogout={handleLogout} setStatusFilter={setStatusFilter} />

      <main className="expert-main">
        <Header />
        <StatsCards questions={questions} />

        <div className="controls-row">
          <Filters
            statusFilter={statusFilter}
            setStatusFilter={setStatusFilter}
            categoryFilter={categoryFilter}
            setCategoryFilter={setCategoryFilter}
            searchText={searchText}
            setSearchText={setSearchText}
            allCategories={[
              "all",
              ...Array.from(new Set(questions.map((q) => q.category))).filter((c) => c),
            ]}
          />
          {/* small quick add for demo (expert can add sample question) */}
          <div className="quick-add">
            <button
              className="btn btn-green"
              onClick={() =>
                addQuestion({
                  farmerName: "Demo Farmer",
                  farmerId: "F-999",
                  q: "This is a demo question added by expert.",
                  category: "General",
                })
              }
            >
              + Add Demo Question
            </button>
          </div>
        </div>

        <QuestionsList
          questions={filtered}
          onAnswer={addAnswer}
          onDelete={deleteQuestion}
          onMarkAnswered={markAnswered}
          onMarkUnanswered={markUnanswered}
        />
      </main>
    </div>
  );
}
