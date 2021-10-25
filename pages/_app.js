import 'tailwindcss/tailwind.css'
import Layout from '../components/Layout'
import '../styles/global.css'


function MyApp({ Component, pageProps }) {
  return   <Layout title="Next pokedex"> <Component {...pageProps} /></Layout>
}

export default MyApp
