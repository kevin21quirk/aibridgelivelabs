'use client';

import {
  SessionData,
  useReveal,
  rootStyleFromData,
  NeuralViz,
  SessionHero,
  SessionCTA,
} from './SessionExperience';

/* Part 1 — Editorial "transformation" theme: oversized type, glowing spine timeline. */
export default function RevolutionExperience({ data }: { data: SessionData }) {
  const rootRef = useReveal();

  return (
    <div className="fx-root rv-root" ref={rootRef} style={rootStyleFromData(data)}>
      <SessionHero data={data} align="left" />

      {/* Editorial intro with drop cap + oversized stat ribbon */}
      <section style={{ position: 'relative' }}>
        <div className="container">
          <div className="fx-reveal rv-kicker">{data.overviewKicker}</div>
          <div className="rv-intro-grid">
            <h2 className="fx-reveal rv-statement">{data.overviewHeading}</h2>
            <div className="fx-reveal d2 rv-body">
              {data.overview.map((p, i) => (
                <p key={i} className={i === 0 ? 'rv-dropcap' : undefined}>{p}</p>
              ))}
            </div>
          </div>

          <div className="fx-reveal d2 rv-ribbon">
            {data.stats.map((s, i) => (
              <div key={s.label} className="rv-bignum-item">
                <span className="rv-bignum">{s.value}</span>
                <span className="rv-bignum-label">{s.label}</span>
                {i < data.stats.length - 1 && <span className="rv-ribbon-sep" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Neural network feature — the approved signature visual for this page */}
      <section style={{ position: 'relative' }}>
        <div className="container">
          <div className="rv-neural-grid">
            <div className="fx-reveal rv-neural-copy">
              <div className="rv-kicker">Under the Hood</div>
              <h2 className="fx-heading" style={{ marginBottom: '1rem' }}>
                Intelligence, <span className="gradient-text">visualised</span>
              </h2>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.85 }}>
                Every AI breakthrough rests on networks like this one — layers of simple units
                learning patterns from data. We&apos;ll demystify what&apos;s really happening
                so you can separate genuine capability from hype, and apply it with confidence.
              </p>
            </div>
            <div className="fx-reveal d2 rv-neural-stage">
              <div className="rv-neural-glow" />
              <NeuralViz />
            </div>
          </div>
        </div>
      </section>

      {/* Transformation timeline on a glowing spine (no cards) */}
      <section style={{ position: 'relative' }}>
        <div className="container">
          <div className="fx-reveal" style={{ marginBottom: '2.5rem' }}>
            <div className="rv-kicker">{data.learnKicker}</div>
            <h2 className="fx-heading">{data.learnHeading}</h2>
          </div>

          <div className="rv-spine">
            {data.learnItems.map((item, i) => (
              <div key={i} className={`fx-reveal d${(i % 3) + 1} rv-milestone`}>
                <div className="rv-node">
                  <span className="rv-node-icon" aria-hidden>{item.icon}</span>
                </div>
                <div className="rv-milestone-body">
                  <span className="rv-milestone-index">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="rv-milestone-title">{item.title}</h3>
                  <p className="rv-milestone-text">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SessionCTA data={data} />
    </div>
  );
}
