'use client';

import {
  SessionData,
  useReveal,
  rootStyleFromData,
  SessionHero,
  SessionCTA,
} from './SessionExperience';

const PIPELINE = ['Concept', 'Design', 'Build', 'Debug', 'Deploy'];

const TERMINAL_LINES: { prompt: boolean; text: string; muted?: boolean }[] = [
  { prompt: true, text: 'npx create-app awesome-idea' },
  { prompt: false, text: '✓ scaffolding project…', muted: true },
  { prompt: true, text: 'ai build --feature "user dashboard"' },
  { prompt: false, text: '✓ generated 14 components in 6.2s', muted: true },
  { prompt: false, text: '✓ tests passing  ·  0 errors', muted: true },
  { prompt: true, text: 'ai deploy --prod' },
  { prompt: false, text: '▲ live at https://your-app.live  🚀', muted: false },
];

/* Part 3 — IDE / terminal theme: live terminal, build pipeline, log lines (no cards). */
export default function LiveBuildExperience({ data }: { data: SessionData }) {
  const rootRef = useReveal();

  return (
    <div className="fx-root lb-root" ref={rootRef} style={rootStyleFromData(data)}>
      <SessionHero data={data} align="left" />

      {/* Live terminal window */}
      <section style={{ position: 'relative' }}>
        <div className="container">
          <div className="lb-split">
            <div className="fx-reveal lb-terminal" aria-label="Live build terminal">
              <div className="lb-term-bar">
                <span className="lb-dot red" />
                <span className="lb-dot amber" />
                <span className="lb-dot green" />
                <span className="lb-term-title">build — zsh</span>
              </div>
              <div className="lb-term-body">
                {TERMINAL_LINES.map((l, i) => (
                  <div
                    key={i}
                    className={`lb-term-line${l.muted ? ' muted' : ''}`}
                    style={{ animationDelay: `${0.4 + i * 0.55}s` }}
                  >
                    {l.prompt && <span className="lb-prompt">➜</span>}
                    <span>{l.text}</span>
                  </div>
                ))}
                <div className="lb-term-line lb-cursor-line" style={{ animationDelay: `${0.4 + TERMINAL_LINES.length * 0.55}s` }}>
                  <span className="lb-prompt">➜</span>
                  <span className="lb-cursor" />
                </div>
              </div>
            </div>

            <div className="fx-reveal d2 lb-intro">
              <div className="lb-kicker">{data.overviewKicker}</div>
              <h2 className="fx-heading" style={{ marginBottom: '1rem' }}>{data.overviewHeading}</h2>
              {data.overview.map((p, i) => (
                <p key={i} style={{ color: 'var(--text-muted)', lineHeight: 1.85, marginBottom: i === 0 ? '1rem' : 0 }}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Build pipeline */}
      <section style={{ position: 'relative' }}>
        <div className="container">
          <div className="fx-reveal" style={{ marginBottom: '2rem' }}>
            <div className="lb-kicker">The Pipeline</div>
            <h2 className="fx-heading">Concept to deployment, in real time</h2>
          </div>
          <div className="fx-reveal d2 lb-pipeline">
            <div className="lb-pipeline-line"><span className="lb-pipeline-fill" /></div>
            {PIPELINE.map((step, i) => (
              <div key={step} className="lb-step" style={{ animationDelay: `${i * 0.4}s` }}>
                <span className="lb-step-dot">{i + 1}</span>
                <span className="lb-step-label">{step}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Log-style "what you'll see" (no cards) */}
      <section style={{ position: 'relative' }}>
        <div className="container">
          <div className="fx-reveal lb-log-head">
            <div className="lb-kicker">{data.learnKicker}</div>
            <h2 className="fx-heading">{data.learnHeading}</h2>
          </div>
          <div className="lb-log">
            {data.learnItems.map((item, i) => (
              <div key={i} className={`fx-reveal d${(i % 3) + 1} lb-log-line`}>
                <span className="lb-log-check">✓</span>
                <span className="lb-log-icon" aria-hidden>{item.icon}</span>
                <span className="lb-log-title">{item.title}</span>
                <span className="lb-log-text">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Finale banner */}
      {data.highlight && (
        <section style={{ position: 'relative' }}>
          <div className="container">
            <div className="fx-reveal lb-finale">
              <span className="lb-finale-emoji" aria-hidden>{data.highlight.emoji}</span>
              <div>
                <h3 className="lb-finale-title">{data.highlight.title}</h3>
                <p className="lb-finale-text">{data.highlight.text}</p>
              </div>
            </div>
          </div>
        </section>
      )}

      <SessionCTA data={data} />
    </div>
  );
}
