export default function Header() {

  return (
    <header className="py-5 px-5 max-w-screen-md mx-auto flex justify-between items-center">
      <span className="text-4xl"><a href="/">mf-catalog</a></span>
      <span className="text-lg"><a href="ingest">ingest</a> | <a href="process">process</a> | <a href="queue">jobs</a></span>
    </header>
  )
}