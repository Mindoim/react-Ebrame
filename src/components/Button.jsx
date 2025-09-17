export default function Button({ children, onClick, disabled = false, variant = 'primary' }) {
    const baseClasses = 'px-4 py-2 rounded font-medium transition-colors';
    const variantClasses = {
        primary: 'bg-blue-500 hover:bg-blue-600 text-white',
        secondary: 'bg-gray-500 hover:bg-gray-600 text-white',
        danger: 'bg-red-500 hover:bg-red-600 text-white'
    };

    const className = `${baseClasses} ${variantClasses[variant]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`;

    return (
        <button
            className={className}
            onClick={onClick}
            disabled={disabled}
            data-testid="custom-button"
        >
            {children}
        </button>
    );
}