'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface TickerItem {
  sport: string
  home: string
  away: string
  prob: string
  edge: string
  confidence: string
  color: string
  dotColor: string
}

const tickerData: TickerItem[][] = [
  // Row 1: Soccer + NFL mix
  [
    { sport: 'Soccer', home: 'Man City', away: 'Arsenal', prob: '58.3%', edge: '+2.1%', confidence: 'High', color: 'border-green-500/30', dotColor: 'bg-green-400' },
    { sport: 'NFL', home: 'KC Chiefs', away: 'PHI Eagles', prob: '67.2%', edge: '+4.8%', confidence: 'High', color: 'border-blue-500/30', dotColor: 'bg-blue-400' },
    { sport: 'Soccer', home: 'Barcelona', away: 'Real Madrid', prob: '44.1%', edge: '-1.2%', confidence: 'Medium', color: 'border-green-500/30', dotColor: 'bg-green-400' },
    { sport: 'NFL', home: 'DAL Cowboys', away: 'SF 49ers', prob: '41.7%', edge: '+3.2%', confidence: 'High', color: 'border-blue-500/30', dotColor: 'bg-blue-400' },
    { sport: 'Soccer', home: 'Liverpool', away: 'Chelsea', prob: '62.8%', edge: '+1.9%', confidence: 'High', color: 'border-green-500/30', dotColor: 'bg-green-400' },
    { sport: 'NFL', home: 'BUF Bills', away: 'MIA Dolphins', prob: '71.3%', edge: '+5.1%', confidence: 'Very High', color: 'border-blue-500/30', dotColor: 'bg-blue-400' },
    { sport: 'Soccer', home: 'Bayern', away: 'Dortmund', prob: '55.6%', edge: '+0.8%', confidence: 'Medium', color: 'border-green-500/30', dotColor: 'bg-green-400' },
    { sport: 'NFL', home: 'DET Lions', away: 'GB Packers', prob: '53.9%', edge: '+2.7%', confidence: 'Medium', color: 'border-blue-500/30', dotColor: 'bg-blue-400' },
  ],
  // Row 2: NBA + MLB mix
  [
    { sport: 'NBA', home: 'LAL Lakers', away: 'BOS Celtics', prob: '46.2%', edge: '-1.4%', confidence: 'Medium', color: 'border-orange-500/30', dotColor: 'bg-orange-400' },
    { sport: 'MLB', home: 'NY Yankees', away: 'BOS Red Sox', prob: '57.8%', edge: '+3.5%', confidence: 'High', color: 'border-red-500/30', dotColor: 'bg-red-400' },
    { sport: 'NBA', home: 'GS Warriors', away: 'PHX Suns', prob: '61.4%', edge: '+2.3%', confidence: 'High', color: 'border-orange-500/30', dotColor: 'bg-orange-400' },
    { sport: 'MLB', home: 'LA Dodgers', away: 'SF Giants', prob: '64.1%', edge: '+4.2%', confidence: 'High', color: 'border-red-500/30', dotColor: 'bg-red-400' },
    { sport: 'NBA', home: 'DEN Nuggets', away: 'OKC Thunder', prob: '55.7%', edge: '+1.8%', confidence: 'Medium', color: 'border-orange-500/30', dotColor: 'bg-orange-400' },
    { sport: 'MLB', home: 'HOU Astros', away: 'TEX Rangers', prob: '52.3%', edge: '+1.1%', confidence: 'Medium', color: 'border-red-500/30', dotColor: 'bg-red-400' },
    { sport: 'NBA', home: 'MIL Bucks', away: 'PHI 76ers', prob: '58.9%', edge: '+3.1%', confidence: 'High', color: 'border-orange-500/30', dotColor: 'bg-orange-400' },
    { sport: 'MLB', home: 'ATL Braves', away: 'NYM Mets', prob: '59.6%', edge: '+2.8%', confidence: 'High', color: 'border-red-500/30', dotColor: 'bg-red-400' },
  ],
  // Row 3: All sports mix
  [
    { sport: 'Soccer', home: 'PSG', away: 'Marseille', prob: '68.4%', edge: '+3.7%', confidence: 'Very High', color: 'border-green-500/30', dotColor: 'bg-green-400' },
    { sport: 'NBA', home: 'BKN Nets', away: 'NY Knicks', prob: '38.5%', edge: '-2.1%', confidence: 'Low', color: 'border-orange-500/30', dotColor: 'bg-orange-400' },
    { sport: 'NFL', home: 'BAL Ravens', away: 'CIN Bengals', prob: '63.7%', edge: '+6.2%', confidence: 'Very High', color: 'border-blue-500/30', dotColor: 'bg-blue-400' },
    { sport: 'MLB', home: 'CHI Cubs', away: 'STL Cards', prob: '51.2%', edge: '+0.9%', confidence: 'Low', color: 'border-red-500/30', dotColor: 'bg-red-400' },
    { sport: 'Soccer', home: 'Juventus', away: 'AC Milan', prob: '49.8%', edge: '+0.3%', confidence: 'Medium', color: 'border-green-500/30', dotColor: 'bg-green-400' },
    { sport: 'NFL', home: 'LV Raiders', away: 'LA Chargers', prob: '44.6%', edge: '+1.5%', confidence: 'Medium', color: 'border-blue-500/30', dotColor: 'bg-blue-400' },
    { sport: 'NBA', home: 'DAL Mavs', away: 'MIN Wolves', prob: '56.3%', edge: '+2.4%', confidence: 'High', color: 'border-orange-500/30', dotColor: 'bg-orange-400' },
    { sport: 'MLB', home: 'SD Padres', away: 'ARI D-backs', prob: '54.7%', edge: '+1.6%', confidence: 'Medium', color: 'border-red-500/30', dotColor: 'bg-red-400' },
  ],
]

const TickerCard = ({ item }: { item: TickerItem }) => (
  <div className={`flex-shrink-0 flex items-center space-x-4 px-5 py-3.5 rounded-xl bg-white/[0.04] border ${item.color} backdrop-blur-sm hover:bg-white/[0.08] transition-colors duration-300 mr-4`}>
    <div className="flex items-center space-x-2">
      <div className={`w-2 h-2 rounded-full ${item.dotColor} relative signal-dot`} />
      <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wider w-12">{item.sport}</span>
    </div>
    <span className="text-sm font-semibold text-white whitespace-nowrap">{item.home} vs {item.away}</span>
    <span className="text-sm font-black text-amber-400">{item.prob}</span>
    <span className={`text-xs font-bold ${item.edge.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>{item.edge}</span>
    <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
      item.confidence === 'Very High' ? 'bg-green-500/20 text-green-300' :
      item.confidence === 'High' ? 'bg-amber-500/20 text-amber-300' :
      item.confidence === 'Medium' ? 'bg-yellow-500/20 text-yellow-300' :
      'bg-gray-500/20 text-gray-400'
    }`}>{item.confidence}</span>
  </div>
)

const sportCards = [
  {
    sport: 'Soccer',
    emoji: '\u26BD',
    color: 'sport-card-soccer',
    accentColor: 'from-green-400 to-emerald-500',
    headline: 'Where Bookmakers Disagree, We Find Value',
    description: 'We ingest odds from 5 bookmakers. When they disagree, our model finds the signal in the noise. Covering 8 leagues from the Premier League to the Eredivisie.',
    stat: '45,007 games',
    statLabel: 'trained on',
  },
  {
    sport: 'NFL',
    emoji: '\u{1F3C8}',
    color: 'sport-card-nfl',
    accentColor: 'from-blue-400 to-indigo-500',
    headline: 'The 25% Edge the Spread Doesn\'t See',
    description: 'Weather at the stadium. Rest days between games. Spread conversions the market underprices. Our NFL model shows statistically significant improvement over Vegas lines.',
    stat: '25.36%',
    statLabel: 'Brier improvement',
  },
  {
    sport: 'NBA',
    emoji: '\u{1F3C0}',
    color: 'sport-card-nba',
    accentColor: 'from-orange-400 to-amber-500',
    headline: 'Back-to-Backs Are the Market\'s Blind Spot',
    description: 'When a team plays two nights in a row, fatigue is real but underpriced. Our model tracks rest patterns and game-to-game fatigue the odds don\'t fully reflect.',
    stat: 'Building',
    statLabel: 'more data coming',
  },
  {
    sport: 'MLB',
    emoji: '\u26BE',
    color: 'sport-card-mlb',
    accentColor: 'from-red-400 to-rose-500',
    headline: '162 Games Is a Feature, Not a Bug',
    description: 'Baseball\'s long season creates rich patterns. Pythagorean expectation, bullpen usage in doubleheaders, and 35,000 games of training data make every series predictable.',
    stat: '34,913 games',
    statLabel: 'trained on',
  },
]

const PulseGridSection = () => {
  const tickerAnimations = ['ticker-left', 'ticker-right', 'ticker-left-slow']

  return (
    <section className="relative py-24 bg-[#0a0a0f] overflow-hidden" id="sports">
      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern" />
      {/* Gradient overlays */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#0a0a0f] to-transparent z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0f] to-transparent z-10 pointer-events-none" />
      {/* Ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-amber-500/[0.03] rounded-full blur-3xl" />

      <div className="relative z-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 px-6"
        >
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="inline-block text-sm font-semibold text-amber-400 tracking-widest uppercase mb-4"
          >
            Live Coverage
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
            Every Game. Every Edge.{' '}
            <span className="gradient-text-white">Every Signal.</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Four sports. Thousands of matchups per season. Every prediction built from six intelligence layers — not gut feeling.
          </p>
        </motion.div>

        {/* Ticker strips */}
        <div className="space-y-4 mb-20">
          {tickerData.map((row, rowIndex) => (
            <div key={rowIndex} className="ticker-strip overflow-hidden">
              <div className={`flex ${tickerAnimations[rowIndex]}`} style={{ width: 'max-content' }}>
                {/* Duplicate for seamless loop */}
                {[...row, ...row].map((item, i) => (
                  <TickerCard key={`${rowIndex}-${i}`} item={item} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Sport story cards */}
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {sportCards.map((card, index) => (
                <motion.div
                  key={card.sport}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className={`group ${card.color} bg-white/[0.04] backdrop-blur-sm rounded-2xl p-6 border border-white/[0.06] hover:bg-white/[0.08] hover:border-white/[0.12] transition-all duration-500`}
                >
                  {/* Sport emoji */}
                  <div className="flex items-center space-x-3 mb-5">
                    <span className="text-3xl group-hover:scale-110 transition-transform duration-300">{card.emoji}</span>
                    <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">{card.sport}</span>
                  </div>

                  {/* Headline */}
                  <h3 className="text-lg font-bold text-white mb-3 leading-snug group-hover:text-amber-200 transition-colors duration-300">
                    {card.headline}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-400 leading-relaxed mb-6">
                    {card.description}
                  </p>

                  {/* Stat */}
                  <div className="pt-4 border-t border-white/[0.06]">
                    <p className="text-2xl font-black gradient-text-white">{card.stat}</p>
                    <p className="text-[11px] font-medium text-gray-500 uppercase tracking-wider mt-0.5">{card.statLabel}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PulseGridSection
