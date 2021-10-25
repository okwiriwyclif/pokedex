// import 'tailwindcss/tailwind.css'
import React from 'react'
import Layout from '../components/Layout'
import '../styles/global.css'
import NProgress from 'nprogress'; //nprogress module
import 'nprogress/nprogress.css'; //styles of nprogress

import Router from 'next/router'



//Binding events. 
Router.events.on('routeChangeStart', () => NProgress.start()); Router.events.on('routeChangeComplete', () => NProgress.done()); Router.events.on('routeChangeError', () => NProgress.done());  



function MyApp({ Component, pageProps }) {
  return   <Layout title="Next pokedex"> <Component {...pageProps} /></Layout>
}

export default MyApp
