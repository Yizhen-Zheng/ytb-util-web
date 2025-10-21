import type { SectionItem } from "@/lib/type";
import { useState } from "react";

export default function Section({ section }: { section: SectionItem }) {
  const [open, setOpen] = useState(section.defaultOpen ?? true);
  return (
    <div className="section">
      <button className="section-header" onClick={() => setOpen((v) => !v)} aria-expanded={open}>
        <svg
          className={`chevron-icon ${open ? "expanded" : ""}`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden
        >
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
        <span className="section-title">{section.title}</span>
      </button>

      <div className="section-content" style={{ display: open ? "block" : "none" }}>
        {section.items.map((it, i) => (
          <div key={i} className="project-item">
            <span className="project-icon">{it.icon}</span>
            <span className="project-name">{it.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
