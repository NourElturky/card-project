import { Html, Head,  NextScript } from 'next/document'
import Card from './Card'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
       <div className='flex '>
        <NextScript />
       {/* <Card/>
       <Card/> */}

       </div>
      </body>
    </Html>
  )
}
