import {ErrorBoundary} from "react-error-boundary";

function App() {

    function ErrorFallback({ error, resetErrorBoundary }: any) {
        return (
            <div role="alert">
                <p>Something went wrong:</p>
                <pre>{error.message}</pre>
                <button onClick={resetErrorBoundary}>Try again</button>
            </div>
        )
    }

  return (
    <>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
            <main className="">
                <h1 className="app-title">Blocky Manager</h1>
            </main>
        </ErrorBoundary>
    </>
  )
}

export default App
