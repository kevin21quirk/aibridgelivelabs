'use client';

import {
  SessionData,
  useReveal,
  rootStyleFromData,
  SessionHero,
  SessionCTA,
} from './SessionExperience';

const HEADLINES = [
  'BREAKING',
  'AI-first startup secures Series A on the back of a single press feature',
  'How a 30-second narrative shift doubled inbound media requests',
  'EXCLUSIVE',
  'Why every IT company is now a media company',
  'From unknown to thought leader in one news cycle',
  'OPINION',
  'The PR playbook for the age of intelligent machines',
];

/* Part 2 — Newsroom / broadcast theme: ticker, pull-quotes, dossier agenda (no cards). */
export default function PRExperience({ data }: { data: SessionData }) {
  const rootRef = useReveal();

  return (
    <div className="fx-root pr-root" ref={rootRef} style={rootStyleFromData(data)}>
      <SessionHero data={data} align="center" />

      {/* Live headline ticker */}
      <div className="pr-ticker" role="marquee" aria-label="Headlines">
        <div className="pr-ticker-track">
          {[...HEADLINES, ...HEADLINES].map((h, i) => (
            <span key={i} className={`pr-ticker-item${h === h.toUpperCase() && h.length < 12 ? ' is-tag' : ''}`}>
              {h}
            </span>
          ))}
        </div>
      </div>

      {/* Giant pull quote */}
      <section style={{ position: 'relative' }}>
        <div className="container">
          <blockquote className="fx-reveal pr-quote">
            <span className="pr-quote-mark" aria-hidden>&ldquo;</span>
            <p>{data.quote?.text ?? data.tagline}</p>
            <cite>{data.quote?.attribution ?? data.presenter}</cite>
          </blockquote>
        </div>
      </section>

      {/* The Brief — editorial two-column */}
      <section style={{ position: 'relative' }}>
        <div className="container">
          <div className="pr-brief">
            <div className="fx-reveal pr-brief-head">
              <div className="pr-kicker">{data.overviewKicker}</div>
              <h2 className="fx-heading">{data.overviewHeading}</h2>
            </div>
            <div className="fx-reveal d2 pr-brief-body">
              {data.overview.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Dossier — numbered agenda with leader dots (no cards) */}
      <section style={{ position: 'relative' }}>
        <div className="container">
          <div className="fx-reveal pr-dossier-head">
            <div className="pr-kicker">{data.learnKicker}</div>
            <h2 className="fx-heading">{data.learnHeading}</h2>
          </div>
          <ol className="pr-dossier">
            {data.learnItems.map((item, i) => (
              <li key={i} className={`fx-reveal d${(i % 3) + 1} pr-row`}>
                <span className="pr-row-num">{String(i + 1).padStart(2, '0')}</span>
                <span className="pr-row-icon" aria-hidden>{item.icon}</span>
                <span className="pr-row-title">{item.title}</span>
                <span className="pr-row-dots" aria-hidden />
                <span className="pr-row-text">{item.text}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Masthead — about the agency */}
      {data.highlight && (
        <section style={{ position: 'relative' }}>
          <div className="container">
            <div className="fx-reveal pr-masthead">
              <div className="pr-masthead-rule" />
              <h3 className="pr-masthead-title">{data.highlight.title}</h3>
              <p className="pr-masthead-text">{data.highlight.text}</p>
            </div>
          </div>
        </section>
      )}

      <SessionCTA data={data} />
    </div>
  );
}
