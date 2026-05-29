import { useState, useEffect } from 'react';

/**
 * TrackerEmbed — Embeds the IWT dashboard for a specific tab.
 *
 * For the initial integration, this loads the full IWT dashboard via iframe
 * from the existing Cloudflare Worker deployment. This gives us:
 * - SEO-friendly Astro pages with real URLs per tab
 * - The full working dashboard without porting 7,200 lines of React
 * - A clear migration path to native Astro islands later
 *
 * Props:
 *   tab - The tab to display (maps to IWT's internal tab names)
 */
export default function TrackerEmbed({ tab = 'War Room' }) {
  const [loaded, setLoaded] = useState(false);

  // The existing IWT deployment on Cloudflare
  const iwtUrl = 'https://iranwartracker.royal-rice-7384.workers.dev';

  return (
    <div style={{
      width: '100%',
      minHeight: '80vh',
      position: 'relative',
      background: '#080b12',
    }}>
      {!loaded && (
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
          fontFamily: "'JetBrains Mono', monospace",
        }}>
          <div style={{
            width: 40,
            height: 40,
            border: '2px solid #1c2433',
            borderTop: '2px solid #22d3ee',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite',
            margin: '0 auto 12px',
          }} />
          <div style={{ fontSize: 12, color: '#5a6478' }}>Loading dashboard...</div>
          <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
        </div>
      )}
      <iframe
        src={iwtUrl}
        style={{
          width: '100%',
          height: '85vh',
          border: 'none',
          opacity: loaded ? 1 : 0,
          transition: 'opacity 0.3s',
        }}
        onLoad={() => setLoaded(true)}
        title={`VegaReady Dashboard — ${tab}`}
        allow="clipboard-write"
      />
    </div>
  );
}
