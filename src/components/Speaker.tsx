interface SpeakerProps {
  name: string;
  role: string;
  company: string;
  bio: string;
  image?: string;
}

export default function Speaker({ name, role, company, bio, image }: SpeakerProps) {
  return (
    <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', height: '100%' }}>
      <div
        style={{
          width: '4rem',
          height: '4rem',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #4f46e5, #06b6d4)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 700,
          fontSize: '1.25rem',
          flexShrink: 0,
        }}
      >
        {image ? (
          <img src={image} alt={name} style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }} />
        ) : (
          name.split(' ').map((n) => n[0]).join('').slice(0, 2).toUpperCase()
        )}
      </div>
      <div>
        <h3 style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>{name}</h3>
        <p style={{ color: 'var(--accent)', fontWeight: 600, marginBottom: '0.75rem' }}>
          {role}, {company}
        </p>
        <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>{bio}</p>
      </div>
    </div>
  );
}
