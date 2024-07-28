export default function MenuButton({ children, onSelect, isSelected }) {
    let className = null
    if (isSelected) {
        className = 'active'
    }

    return (
        <button className={className} onClick={onSelect}>{children}</button>
    )
}