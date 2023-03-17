import React from 'react'

/* export function Header() {
  return (
    <>
      <header>
        <div className="bg-color-top">
          <div className="flex flex-row border border-red-100 w-11/12 space-x-2">
            <div className="flex-none border">My profile</div>
            <div className="flex-none border">Location</div>
            <div className="flex-none border">Customer service</div>
            <div className="flex-1 border text-right">Cart</div>
          </div>
        </div>
        <div>
          <h1>Header with logo and nav menu</h1>
        </div>
      </header>
    </>
  )
} */

export function Main() {
  return (
    <>
      <main>
        <div>
        <h1 className="text-3xl">Main content</h1>
        </div>
      </main>
    </>
  )
}

export function Footer() {
  return (
    <>
      <footer>
        <div className="bg-slate-700">
          <h1>Footer content with links</h1>
        </div>
      </footer>
    </>
  )
}


function App() {

  return (
    <>
      <Main />
    </>
  )
}

export default App
