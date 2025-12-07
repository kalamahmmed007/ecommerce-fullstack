const Drawer = ({ isOpen, onClose, children, position = "right" }) => {
    return (
        <div
            className={`fixed inset-0 z-40 transition-transform ${isOpen ? "translate-x-0" : position === "right" ? "translate-x-full" : "-translate-x-full"
                }`}
        >
            <div className="absolute inset-0 bg-black opacity-50" onClick={onClose}></div>
            <div className={`absolute ${position}-0 top-0 bottom-0 bg-white w-80 shadow p-4 overflow-y-auto`}>
                {children}
            </div>
        </div>
    );
};

export default Drawer;
