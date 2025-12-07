export const notify = (message, type = 'info') => {
    switch (type) {
        case 'success':
            console.log(`✅ Success: ${message}`);
            break;
        case 'error':
            console.error(`❌ Error: ${message}`);
            break;
        default:
            console.log(`ℹ️ Info: ${message}`);
    }
};
