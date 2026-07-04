import useReveal from '../hooks/useReveal'

/**
 * Wraps children in a gentle fade/rise-on-scroll animation.
 * Use `as` to control the rendered element (default: div).
 */
export default function Reveal({ as: Tag = 'div', className = '', children, ...rest }) {
  const [ref, visible] = useReveal()
  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`.trim()}
      {...rest}
    >
      {children}
    </Tag>
  )
}
