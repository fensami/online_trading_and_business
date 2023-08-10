import Image from 'next/image'
import Footer from './Home/Footer'
import SubLogin from './Home/SubLogin'

export default function Home() {
  return (
    <main className="mt-12">
      <SubLogin />
      <Footer />
    </main>
  )
}
