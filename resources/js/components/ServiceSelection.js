 resources/js/components/ServiceSelection.js
import React, { useState } from 'react';
import { setService } from '../services/api';

const ServiceSelection = () => {
    const [service, setServiceOption] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = { service };
        if (service === 'AF') data.representative_email = email;
        await setService(data);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    <input
                        type="radio"
                        value="DSAD"
                        checked={service === 'DSAD'}
                        onChange={(e) => setServiceOption(e.target.value)}
                    />
                    DSAD
                </label>
                <label>
                    <input
                        type="radio"
                        value="AF"
                        checked={service === 'AF'}
                        onChange={(e) => setServiceOption(e.target.value)}
                    />
                    AF
                </label>
            </div>
            {service === 'AF' && (
                <div>
                    <input
                        type="email"
                        placeholder="Representative Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
            )}
            <button type="submit">Submit</button>
        </form>
    );
};

export default ServiceSelection;
