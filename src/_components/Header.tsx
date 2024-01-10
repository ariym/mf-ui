import { MagnifyingGlassIcon } from "@radix-ui/react-icons"
import { Input } from "@/_components/ui/input"

const LINKS = [
  {
    title: "📥 content",
    link: "files",
    notifications: 0
  },
  {
    title: "🗂️ metadata",
    link: "tags",
    notifications: 0
  },
  {
    title: "🧮 programs",
    link: "jobs",
    notifications: 3
  },
];

export default function Header() {

  return (
    <header className="mb-5 py-5 px-5 max-w-screen-4xl flex justify-between items-center border-b border-silver">
      <span className="text-4xl font-normal">
        <a href="https://github.com/ariym/mf-catalog" target="_blank">
          {/* mf-catalog */}
          mf-<span className="font-extrabold">catalog</span>
        </a>
      </span>


      <div className="bg-silver">
        <input placeholder="Search..." className="h-10 p-5 w-80" />
      </div>


      <ul className="flex flex-row">

        {
          LINKS.map(({ title, link, notifications },index) => (
            <li key={index} className="ml-10 line-clamp-2  text-2xl leading-snug text-muted-foreground border-1 border-dotted border p-1">
              <a href={link} className="font-extrabold align-center">{title}</a><span> {/*String(notifications)*/}</span>
            </li>
          ))
        }

      </ul>

    </header>
  )
}