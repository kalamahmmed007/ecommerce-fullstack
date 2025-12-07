const Card = ({
    children,
    className = '',
    hover = false,
    ...props
}) => {
    return (
        <div
            className={`
        bg-white rounded-lg shadow-md p-6
        ${hover ? 'transition-shadow hover:shadow-lg' : ''}
        ${className}
      `}
            {...props}
        >
            {children}
        </div>
    );
};

export default Card;