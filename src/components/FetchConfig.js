import { useState } from 'react';
import axios from "axios";

const FetchConfig = () => {
    const [configId, setConfigId] = useState("");
    const [configData, setConfigData] = useState(null);

    const [showErrMsg, setShowErrMsg] = useState(false)
    const [errMsg, setErrMsg] = useState("");

    const handleSubmit = async () => {
        try {
            const response = await axios.get(`https://coderower-backend.vercel.app/api/configurations/${configId}`);
            const data = await response.data;
            // console.log("ashif", response.data.remark)
            setConfigData(data.data);
        } catch (error) {
            setErrMsg(error.message);
            console.log(error.message)
            setShowErrMsg(true)
            console.error('Error fetching configuration:', error);
        }
    };

    return (
        <div className="container mx-auto p-2 mt-5">
            <div className='border-2 p-2 rounded'>
                <h2 className="text-3xl font-bold mb-6">Fetch Config</h2>
                <div className="mb-4 flex">
                    <label className="block text-sm font-bold">Config To Load(configId):</label>
                    <input
                        type="text"
                        value={configId}
                        onChange={(e) => setConfigId(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                    />
                </div>
                <p className='mb-2'>Fetch By Config id : <span className='text-red-500'>qwertyuiop</span> or <span className='text-red-500'>qwertyuiop2</span></p>
                <div className='flex justify-between space-x-12 items-center mr-5'>
                    <button
                        onClick={handleSubmit}
                        className="bg-green-600 text-white py-2 px-4 rounded"
                    >
                        Submit
                    </button>
                    <p>Click the "Submit" button with the configld (qwertyuiop/qwertyuiop2) fetched data from the mongoDB will be displayed below</p>
                </div>
                {configData && (
                    <div className="mt-6">
                        <h3 className="text-xl font-bold mb-2">Fetched Configuration:</h3>
                        <div className="bg-gray-200 p-4 rounded">
                        {
                            configData.flatMap((item)=>{
                                return(<div key={item}>{item}</div>)
                            })
                        }
                        </div>
                    </div>
                )}
                {showErrMsg && (
                    <div className="mt-6">
                        <h3 className="text-xl font-bold mb-2">Error Message:</h3>
                        <div className="bg-gray-200 p-4 rounded">
                            {errMsg}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default FetchConfig;
