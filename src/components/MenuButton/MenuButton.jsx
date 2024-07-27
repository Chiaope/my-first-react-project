export default function MenuButton({ children, onSelect }) {
    return (
        <button onClick={onSelect}>{children}</button>
    )
}