import Header from '../../components/Header'
import '../../styles/globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body >
        <Header/>
        {/* Banner */}

        <div className='max-w-7xl mx-auto'>
          {children}
        </div>
      </body>
    </html>
  )
}
