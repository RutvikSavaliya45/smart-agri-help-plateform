import React, { useState } from "react";

export default function QuestionItem({ q, onAnswer, onDelete, onMarkAnswered, onMarkUnanswered }) {
  const [openReply, setOpenReply] = useState(false);
  const [replyText, setReplyText] = useState(q.a || "");

  const saveAnswer = () => {
    onAnswer(q.id, replyText.trim());
    setOpenReply(false);
  };

  return (
    <div className="qa-card">
      <div className="qa-top">
        <div>
          <div className="qa-meta">
            <strong>{q.farmerName}</strong> <span className="muted">• {q.farmerId}</span>
            <span className="muted"> • {new Date(q.createdAt).toLocaleString()}</span>
            <span className="tag">{q.category}</span>
          </div>
          <div className="qa-question">{q.q}</div>
        </div>

        <div className="qa-actions">
          {q.answered ? (
            <button className="btn" onClick={() => onMarkUnanswered(q.id)}>Mark Unanswered</button>
          ) : (
            <button className="btn btn-green" onClick={() => setOpenReply((s) => !s)}>Reply</button>
          )}
          <button className="btn btn-red" onClick={() => onDelete(q.id)}>Delete</button>
        </div>
      </div>

      <div className="qa-answer">
        <strong>Expert Answer:</strong>
        <div className="answer-text">{q.a || <span className="muted">Not answered yet</span>}</div>
      </div>

      {openReply && (
        <div className="reply-form">
          <textarea
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
            rows={4}
            className="input"
          />
          <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
            <button className="btn btn-green" onClick={saveAnswer}>Save Answer</button>
            <button className="btn" onClick={() => setOpenReply(false)}>Cancel</button>
            <button className="btn" onClick={() => onMarkAnswered(q.id)}>Mark Answered</button>
          </div>
        </div>
      )}
    </div>
  );
}
