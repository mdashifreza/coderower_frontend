import { useState } from 'react';
import axios from 'axios';

const UpdateRemark = () => {
    const [configId, setConfigId] = useState("");
    const [remark, setRemark] = useState("");
    const [responseMessage, setResponseMessage] = useState('');

    const [errMsg, setErrMsg] = useState("");
    const [showErrMsg, setShowErrMsg] = useState(false);

    const handleSubmit = async () => {
        try {
            const response = await axios.put(`https://coderower-backend.vercel.app/api/configurations/${configId}`, remark)
            const data = await response.data;
            setResponseMessage(data.message);
        } catch (error) {
            setShowErrMsg(true);
            setErrMsg(error.message);
            console.error('Error updating configuration:', error);
        }
    };

    return (
        <div className="container mx-auto p-4 border-2 rounded mt-5 mb-5">
            <h2 className="text-3xl font-bold mb-6">Update Remark</h2>
            <div className="mb-4 flex">
                <label className="block text-sm font-bold">Config To Update (configId):</label>
                <input
                    type="text"
                    value={configId}
                    onChange={(e) => setConfigId(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                />
            </div>
            <p className='mb-2'>Update By Config id : <span className='text-red-500'>qwertyuiop</span> or <span className='text-red-500'>qwertyuiop2</span></p>
            <div className="mb-4">
                <label className="block text-sm font-bold mb-2">Remark:</label>
                <textarea
                    value={remark}
                    onChange={(e) => setRemark(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                />
            </div>
            <div className='flex justify-between space-x-12 items-center mr-5'>
                    <button
                        onClick={handleSubmit}
                        className="bg-green-600 text-white py-2 px-4 rounded"
                    >
                        Submit
                    </button>
                    <p>Click the "Submit" button with the configld marked red will update records in Database. </p>
                </div>
            {responseMessage && (
                <div className="mt-6">
                    <h3 className="text-xl font-bold mb-2">Response Message:</h3>
                    <p className="bg-green-200 p-4 rounded">{responseMessage}</p>
                </div>
            )}
            {showErrMsg && (
                <div className="mt-6">
                    <h3 className="text-xl font-bold mb-2">Error Message:</h3>
                    <p className="bg-green-200 p-4 rounded">{errMsg}</p>
                </div>
            )}
        </div>
    );
};

export default UpdateRemark;
