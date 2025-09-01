import PricingCard from '@/components/homepage-07/PricingCard'
import CTA from '@/components/shared/CTA'
import CtaImageSlider from '@/components/shared/CtaImageSlider'
import LayoutOne from '@/components/shared/LayoutOne'
import PageHero from '@/components/shared/PageHero'

export const metadata = {
  title: 'Pricing',
}

const PricingPage = () => {
  return (
    <LayoutOne>
      <PageHero
        title="Pricing"
        italicTitle="Plans"
        badgeTitle="Restaurant Web Solutions"
        description="Simple, transparent packages built for restaurants in the GTA. From quick launch websites to full-service digital growth, our plans help you attract more diners and keep your community engaged."
        scale
      />
      <PricingCard />
      <CTA>
        Let’s grow your restaurant online
        <CtaImageSlider
          slides={[
            { id: '1', img: '/images/agent/11.png' },
            { id: '2', img: '/images/agent/01.jpg' },
            { id: '3', img: '/images/agent/10.png' },
          ]}
        />
        together.
        <i className="block font-instrument italic max-md:inline-block max-sm:pl-2 sm:mt-10">
          Book a free strategy call today.
        </i>
      </CTA>
    </LayoutOne>
  )
}

export default PricingPage
