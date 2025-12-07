const ShareButton = ({ url, text = "Share this page" }) => {
    const handleShare = async () => {
        if (navigator.share) {
            await navigator.share({ title: text, url });
        } else {
            navigator.clipboard.writeText(url);
            alert("Link copied to clipboard!");
        }
    };

    return (
        <button onClick={handleShare} className="rounded bg-blue-500 px-3 py-1 text-white hover:bg-blue-600">
            🔗 Share
        </button>
    );
};

export default ShareButton;
