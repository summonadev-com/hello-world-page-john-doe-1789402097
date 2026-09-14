import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: HomePage,
});

function HomePage() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-100 px-6 py-16">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-indigo-200/40 blur-3xl sm:h-[28rem] sm:w-[28rem]"
      />
      <div className="relative text-center">
        <h1 className="text-5xl font-bold tracking-tight text-slate-900 sm:text-7xl lg:text-8xl">
          Hello World
        </h1>
        <p className="mt-4 text-sm text-slate-500 sm:mt-6 sm:text-base">
          A quiet little page, freshly built.
        </p>
      </div>
    </main>
  );
}
