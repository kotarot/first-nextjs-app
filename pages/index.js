import Head from 'next/head'
import Image from 'next/image'

import Header from '../components/Header'
import Footer from '../components/Footer'
import TwistyPlayer from '../components/TwistyPlayer'

const Index = () => {

  const algForm = {
    algorithm: "U R2 F B R B2 R U2 L B2 R U' D' R2 F R' L B2 U2 F2", // superflip
  }

  return (
    <div>
      <Header />

      <div className="hero">
        <TwistyPlayer formId="alg-form" algForm={algForm} />
      </div>

      <Footer />
    </div>
  )
}

export default Index
