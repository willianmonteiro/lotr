import { NavLink } from "react-router-dom"

export function Nav({ links, dark = false }: TNavProps) {
  return (
    <nav className="flex space-x-4 justify-center mt-8">
      {links.map(({ slug, label }) => (
        <NavLink 
          key={slug}
          to={slug} 
          className={`text-${dark ? 'secondary' : 'primary'}-400 hover:text-${dark ? 'secondary' : 'primary'}-700`}
        >
          {label}
        </NavLink>
      ))}
    </nav>
  )
}

type TNavProps = {
  dark?: boolean
  links: TLink[]
}

type TLink = {
  slug: string
  label: string
}