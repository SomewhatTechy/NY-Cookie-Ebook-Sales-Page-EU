import React, { useMemo, useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'

type GalleryItem = {
  key: string
  imageSrc: string
  alt: string
}

const BonusStackGallery: React.FC = () => {
  const { t, language } = useLanguage()
  const [active, setActive] = useState<GalleryItem | null>(null)

  // Supports /public/bonuses/gallery/{fr|de|it|nl|pl}
  // If an asset is missing, the <img onError> fallback loads FR.
  const langFolder = language
  const img = (filename: string) => `/bonuses/gallery/${langFolder}/${filename}`
  const fallbackImg = (filename: string) => `/bonuses/gallery/fr/${filename}`

  const galleryAriaLabel =
    typeof t === 'function' ? t('bonusGalleryAriaLabel') : 'Bonus Stack Gallery'

  const closeLabel =
    typeof t === 'function' ? t('close') : 'Close'

  const items: GalleryItem[] = useMemo(
    () => [
      {
        key: 'bonus1',
        imageSrc: img('bonus-kids-healthy.webp'),
        alt: typeof t === 'function' ? t('bonus1Title') : 'Bonus 1',
      },
      {
        key: 'bonus2',
        imageSrc: img('bonus-no-bake.webp'),
        alt: typeof t === 'function' ? t('bonus2Title') : 'Bonus 2',
      },
      {
        key: 'bonus3',
        imageSrc: img('bonus-flavor-combos.webp'),
        alt: typeof t === 'function' ? t('bonus3Title') : 'Bonus 3',
      },
      {
        key: 'bonus4',
        imageSrc: img('bonus-dessert-encyclopedia.webp'),
        alt: typeof t === 'function' ? t('bonus4Title') : 'Bonus 4',
      },
      {
        key: 'bonus5',
        imageSrc: img('bonus-vegan-desserts.webp'),
        alt: typeof t === 'function' ? t('bonus5Title') : 'Bonus 5',
      },
      {
        key: 'bonus6',
        imageSrc: img('bonus-low-sugar-chilled.webp'),
        alt: typeof t === 'function' ? t('bonus6Title') : 'Bonus 6',
      },
      {
        key: 'bonus7',
        imageSrc: img('bonus-science-art-selling.webp'),
        alt: typeof t === 'function' ? t('bonus7Title') : 'Bonus 7',
      },
      {
        key: 'bonus8',
        imageSrc: img('bonus-allergy-friendly.webp'),
        alt: typeof t === 'function' ? t('bonus8Title') : 'Bonus 8',
      },
    ],
    [t, language]
  )

  const handleImgError = (e: React.SyntheticEvent<HTMLImageElement, Event>, filename: string) => {
    const target = e.currentTarget
    const fallback = fallbackImg(filename)
    // Prevent infinite loop if fallback is also missing
    if (target.src.endsWith(fallback)) return
    target.src = fallback
  }

  return (
    // Use padding-bottom (not margin) so spacing can't collapse into the next block.
    <div className="mt-8 pb-16 sm:pb-20">
      <div
        className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4"
        aria-label={galleryAriaLabel || 'Bonus Stack Gallery'}
      >
        {items.map((item) => {
          const filename = item.imageSrc.split('/').pop() || ''
          return (
            <button
              key={item.key}
              type="button"
              onClick={() => setActive(item)}
              className="group overflow-hidden rounded-2xl border border-border/50 bg-white/70 shadow-sm transition hover:shadow-md"
            >
              {/* Square tiles with edge-to-edge covers (fills the tile). */}
              <div className="aspect-square w-full bg-muted/20">
                <img
                  src={item.imageSrc}
                  alt={item.alt}
                  loading="lazy"
                  onError={(e) => handleImgError(e, filename)}
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
                />
              </div>
              <div className="px-3 pb-3">
                <div className="text-left text-[12px] font-semibold text-foreground/90">
                  {item.alt}
                </div>
              </div>
            </button>
          )
        })}
      </div>

      {active && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={active.alt}
          onClick={() => setActive(null)}
        >
          <div
            className="relative w-full max-w-3xl overflow-hidden rounded-2xl bg-white shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              aria-label={closeLabel || 'Close'}
              className="absolute right-3 top-3 rounded-full bg-black/70 px-3 py-2 text-sm font-semibold text-white hover:bg-black/80"
              onClick={() => setActive(null)}
            >
              ×
            </button>
            <img
              src={active.imageSrc}
              alt={active.alt}
              className="w-full object-contain"
              onError={(e) => {
                const filename = active.imageSrc.split('/').pop() || ''
                handleImgError(e, filename)
              }}
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default BonusStackGallery
