import { useState, useEffect } from 'react';
import { settingsApi } from '@/api/settingsApi';
import Button from '@/components/UI/Button';
import Input from '@/components/UI/Input';
import Card from '@/components/UI/Card';
import toast from 'react-hot-toast';

const Settings = () => {
    const [settings, setSettings] = useState({
        storeName: '',
        storeEmail: '',
        storePhone: '',
        storeAddress: '',
    });
    const [loading, setLoading] = useState(false);

    const fetchSettings = async () => {
        try {
            setLoading(true);
            const response = await settingsApi.getSettings();
            setSettings(response.data);
        } catch (error) {
            toast.error(error.message || 'Failed to fetch settings');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchSettings();
    }, []);

    const handleChange = (e) => {
        setSettings({ ...settings, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            await settingsApi.updateSettings(settings);
            toast.success('Settings updated successfully!');
        } catch (error) {
            toast.error(error.message || 'Failed to update settings');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="mb-6 text-3xl font-bold">Store Settings</h1>

            <Card>
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <Input
                        name="storeName"
                        label="Store Name"
                        value={settings.storeName}
                        onChange={handleChange}
                    />
                    <Input
                        name="storeEmail"
                        label="Store Email"
                        type="email"
                        value={settings.storeEmail}
                        onChange={handleChange}
                    />
                    <Input
                        name="storePhone"
                        label="Store Phone"
                        value={settings.storePhone}
                        onChange={handleChange}
                    />
                    <Input
                        name="storeAddress"
                        label="Store Address"
                        value={settings.storeAddress}
                        onChange={handleChange}
                    />

                    <Button type="submit" loading={loading} size="lg">
                        Save Settings
                    </Button>
                </form>
            </Card>
        </div>
    );
};

export default Settings;
