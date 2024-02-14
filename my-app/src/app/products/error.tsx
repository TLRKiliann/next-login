"use client";

export function ErrorBoundary({error}: {error: Error}, {reset}: {reset: () => void}) {
    return (
        <div>
            <p>
                {error.message}
            </p>
            <button type="button" onClick={() => reset()}>
                Try again
            </button>
        </div>
    )
}