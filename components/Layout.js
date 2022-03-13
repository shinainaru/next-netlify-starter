import Footer from "./Footer"

function Layout({ children }) {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <div className="max-w-7xl p-4 xl:m-auto">
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  )
}

export default Layout
