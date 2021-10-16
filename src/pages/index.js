import Head from 'next/head'

import HomeBanner from '../components/Home/HomeBanner'
import HomeText from '../components/Home/HomeText'
import HomeNumbers from '../components/Home/HomeNumbers'
import HomeDonate from '../components/Home/HomeDonate'
import HomeSlider from '../components/Home/HomeSlider'

export default function Home() {
  return (
    <>
      <Head>
        <title>Einstein Floripa</title>
      </Head>
      <HomeBanner />
      <HomeText />
      <HomeNumbers />
      <HomeDonate />
      <HomeSlider />
    </>
  )
}
