const StatsCard = ({ title, value, icon, color }) => {
    return (
        <div className={`flex items-center p-4 rounded shadow ${color}`}>
            <div className="mr-4 text-3xl">{icon}</div>
            <div>
                <h4 className="text-gray-600">{title}</h4>
                <p className="text-xl font-bold">{value}</p>
            </div>
        </div>
    );
};

export default StatsCard;
