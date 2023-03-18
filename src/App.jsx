import React from 'react';

export function Main() {
  return (
    <>
      <main>
        <div className="mx-2">
          <div className="w-11/12 border m-auto">
            <h1 className="text-3xl">Main content</h1>
          </div>
        </div>
      </main>
    </>
  );
}

function App() {
  return (
    <>
      <Main />
    </>
  );
}

export default App;
