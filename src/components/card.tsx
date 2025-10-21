import React, { useEffect, useMemo, useRef, useState } from "react";

interface CardProps {
  title: string;
  thumbnail: string;
  tags?: string[];
}

export default function Card({ title, thumbnail, tags = [] }: CardProps) {
  const [open, setOpen] = useState(false);
  const btnRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      console.log(e.target);
    }
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, [open]);

  return (
    <div className="card">
      <div className="thumbnail" style={{ backgroundImage: `url('${thumbnail}')` }} />

      <button
        ref={btnRef}
        className="more-btn"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        ⋮
      </button>

      <div ref={menuRef} className="more-menu" style={{ display: open ? "flex" : "none" }} role="menu">
        {menu.map((m, i) => (
          <a key={i} href={m.href} role="menuitem">
            {m.label}
          </a>
        ))}
      </div>

      <div className="card-content">
        <div className="card-title">{title}</div>
        {!!tags.length && (
          <div className="tags">
            {tags.map((t, i) => (
              <span className="tag" key={i}>
                {t}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
