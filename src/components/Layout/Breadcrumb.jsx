import { Link } from "react-router-dom";

const Breadcrumb = ({ paths }) => {
    return (
        <nav className="mb-4 text-sm text-gray-500">
            {paths.map((path, i) => (
                <span key={i}>
                    {i > 0 && " / "}
                    {path.link ? <Link to={path.link} className="hover:text-red-600">{path.label}</Link> : path.label}
                </span>
            ))}
        </nav>
    );
};

export default Breadcrumb;
