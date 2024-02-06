export default function NoteCard() {
  return (
    <button className="rounded-md bg-slate-800 text-left p-5 space-y-3 overflow-hidden relative hover:ring-2 outline-none hover:ring-slate-400 focus-visible:ring-2 focus-visible:ring-lime-600">
      <span className="text-sm font-medium text-slate-600 focus-visible:ring-2">
        há 2 dias
      </span>
      <p className="text-sm leading-6 text-slate-400">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, dicta! Laudantium rem mollitia corrupti? Aut, porro voluptate omnis laborum temporibus quas consequatur sed facilis optio iusto libero tempora veniam aliquid.
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus est facilis a pariatur tenetur id impedit, nostrum aliquid ea. Voluptatum odit reiciendis amet maxime animi, odio officia saepe sint temporibus!
      </p>

      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none" />
    </button>
  )
}