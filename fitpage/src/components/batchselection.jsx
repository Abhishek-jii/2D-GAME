import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BatchSelection = () => {
    const [batches, setBatches] = useState([]);
    const [selectedBatch, setSelectedBatch] = useState('');

    useEffect(() => {
        const fetchBatches = async () => {
            const response = await axios.get('/api/batches');
            setBatches(response.data);
        };
        fetchBatches();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/register-batch', { batchId: selectedBatch });
            alert('Batch selected successfully');
        } catch (err) {
            alert('Error during batch selection');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Select a Batch</h2>
            <select onChange={(e) => setSelectedBatch(e.target.value)} required>
                <option value="">-- Select a Batch --</option>
                {batches.map((batch) => (
                    <option key={batch.id} value={batch.id}>
                        {batch.batch_name} ({batch.timing})
                    </option>
                ))}
            </select>
            <button type="submit">Submit</button>
        </form>
    );
};

export default BatchSelection;
