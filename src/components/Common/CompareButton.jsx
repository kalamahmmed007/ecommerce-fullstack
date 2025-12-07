const CompareButton = ({ onCompare }) => {
    return (
        <button
            onClick={onCompare}
            className="rounded bg-gray-300 px-3 py-1 text-gray-800 hover:bg-gray-400"
        >
            ⚖ Compare
        </button>
    );
};

export default CompareButton;
