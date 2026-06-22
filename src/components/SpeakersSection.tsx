import Image from 'next/image';

export default function SpeakersSection() {
  return (
    <section style={{ padding: '5rem 0', background: 'var(--bg-dark)' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ 
            fontSize: 'clamp(2rem, 4vw, 3rem)', 
            marginBottom: '1rem', 
            fontWeight: 700,
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            Meet Your Speakers
          </h2>
          <p style={{ 
            fontSize: '1.25rem', 
            color: 'var(--text-muted)', 
            maxWidth: '600px', 
            margin: '0 auto',
            lineHeight: 1.6
          }}>
            Learn from industry experts at the forefront of AI innovation and strategic communications
          </p>
        </div>

        {/* Speakers Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '3rem',
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          {/* Kevin Quirk */}
          <div style={{ 
            textAlign: 'center',
            background: 'rgba(255, 255, 255, 0.02)',
            borderRadius: '20px',
            padding: '2rem',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease'
          }}>
            <div style={{ 
              width: '200px', 
              height: '200px', 
              margin: '0 auto 1.5rem',
              borderRadius: '50%',
              overflow: 'hidden',
              border: '4px solid rgba(79, 70, 229, 0.3)',
              boxShadow: '0 8px 32px rgba(79, 70, 229, 0.2)'
            }}>
              <Image 
                src="/kq.png" 
                alt="Kevin Quirk" 
                width={200} 
                height={200}
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover',
                  objectPosition: 'center'
                }}
              />
            </div>
            <h3 style={{ 
              fontSize: '1.5rem', 
              marginBottom: '0.5rem', 
              fontWeight: 600,
              color: 'var(--text-primary)'
            }}>
              Kevin Quirk
            </h3>
            <p style={{ 
              color: 'var(--accent)', 
              marginBottom: '1rem', 
              fontWeight: 500,
              fontSize: '1.1rem'
            }}>
              AI Bridge Solutions
            </p>
            <p style={{ 
              color: 'var(--text-muted)', 
              lineHeight: 1.6,
              fontSize: '0.95rem'
            }}>
              Leading AI strategist with extensive experience in implementing cutting-edge AI solutions for businesses. Passionate about making AI accessible and practical for organizations of all sizes.
            </p>
          </div>

          {/* Crawford Warnock */}
          <div style={{ 
            textAlign: 'center',
            background: 'rgba(255, 255, 255, 0.02)',
            borderRadius: '20px',
            padding: '2rem',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease'
          }}>
            <div style={{ 
              width: '200px', 
              height: '200px', 
              margin: '0 auto 1.5rem',
              borderRadius: '50%',
              overflow: 'hidden',
              border: '4px solid rgba(6, 182, 212, 0.3)',
              boxShadow: '0 8px 32px rgba(6, 182, 212, 0.2)'
            }}>
              <Image 
                src="/CJW pic.jpg" 
                alt="Crawford Warnock" 
                width={200} 
                height={200}
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover',
                  objectPosition: 'center'
                }}
              />
            </div>
            <h3 style={{ 
              fontSize: '1.5rem', 
              marginBottom: '0.5rem', 
              fontWeight: 600,
              color: 'var(--text-primary)'
            }}>
              Crawford Warnock
            </h3>
            <p style={{ 
              color: 'var(--accent)', 
              marginBottom: '1rem', 
              fontWeight: 500,
              fontSize: '1.1rem'
            }}>
              Firstname Communications
            </p>
            <p style={{ 
              color: 'var(--text-muted)', 
              lineHeight: 1.6,
              fontSize: '0.95rem'
            }}>
              Strategic communications expert specializing in brand development and digital transformation. Helping businesses navigate the intersection of technology and effective communication strategies.
            </p>
          </div>
        </div>

        {/* Partnership Note */}
        <div style={{ 
          textAlign: 'center', 
          marginTop: '4rem',
          padding: '2rem',
          background: 'linear-gradient(135deg, rgba(79, 70, 229, 0.1), rgba(6, 182, 212, 0.1))',
          borderRadius: '15px',
          border: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
          <p style={{ 
            fontSize: '1.1rem', 
            color: 'var(--text-muted)',
            fontStyle: 'italic',
            margin: 0
          }}>
            This event is proudly presented by <strong style={{ color: 'var(--accent)' }}>AI Bridge Solutions</strong> in partnership with <strong style={{ color: 'var(--accent)' }}>Firstname Communications</strong>
          </p>
        </div>
      </div>
    </section>
  );
}
