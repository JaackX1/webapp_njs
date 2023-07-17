/* Components */

import Hero from '@/components/PageSection/home/hero.jsx';
import Info from '@/components/PageSection/home/info.jsx';
import Clients from '@/components/PageSection/home/clients.jsx';

export default function Home() {
  
  return (
    <main className="min-h-screen">
      <Hero/>
      <Info/>
      <Clients/>
    </main>
  )
}
