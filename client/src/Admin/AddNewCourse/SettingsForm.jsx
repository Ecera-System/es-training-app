import axios from 'axios';
import React, { useContext, useState } from 'react';
import { MdClose } from 'react-icons/md';
import { RiErrorWarningFill } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';
import { contextProvider } from '../../Context/ContextProvider';
import Spinner from '../../Pages/Shared/Spinner/Spinner';

const SettingsForm = ({ step, setStep }) => {
    const { courseState, showToast } = useContext(contextProvider);
    const navigate = useNavigate();
    const [tags, setTags] = useState([]);
    const [tagsValue, setTagsValue] = useState("");
    const [price, setPrice] = useState("");
    const [formErrors, setFormErrors] = useState({});
    const [loading, setLoading] = useState(false);

    // <!-- Input Key Down -->
    const handleInputKeyDown = (event) => {
        if (event.key === "Enter" && tagsValue) {
            if (tags.find((tag) => tag.toLowerCase() === tagsValue.toLowerCase())) return;
            setTags([...tags, tagsValue]);
            setTagsValue("");
        } else if (event.key === "Backspace" && !tagsValue) {
            setTags(tags.slice(0, tags.length - 1));
        }
    };
    // <!-- Remove Tag -->
    const handleRemoveTag = (tagToRemove) => {
        setTags(tags.filter((tag) => tag !== tagToRemove));
    };



    // <!-- Validate form function -->
    const validateForm = ({ requirements, price }) => {
        let errors = {};
        if (requirements.length === 0) {
            errors.requirements = "Requirements is required!";
        };
        if (!price) {
            errors.price = "Price is required!";
        }
        return errors;
    };



    // <!-- Handle Submit -->
    const handleSubmit = async (event) => {
        event.preventDefault();

        const errors = validateForm({
            requirements: tags,
            price: price,
        });

        if (Object.keys(errors).length === 0) {
            setLoading(true);
            setFormErrors({});
            try {
                const res = await axios.post(`${process.env.REACT_APP_API_V1_URL}/course`, {
                    ...courseState,
                    requirements: tags,
                    price,
                }, {
                    method: 'POST',
                    headers: {
                        'Authorization': localStorage.getItem('auth_token')
                    }
                });

                const success = res.data.success;
                showToast({
                    success: success,
                    error: ''
                });
                success && setStep((prevState) => prevState + 1)
            } catch (err) {
                showToast({
                    succuss: '', error: err?.response?.data?.error,
                });
                if (err?.response?.data?.notExist) {
                    localStorage.removeItem('auth_token');
                    return navigate('/sign-in');
                }
            };
            setLoading(false);
        }
        else {
            setFormErrors(errors);
        };
    };

    return (<>
        <div>
            <div className="pt-6 px-8 border-b">
                <h2 className="font-semibold text-xl text-violet-600">Requirements</h2>
                <div className="mt-5 flex flex-col gap-y-5">
                    <div>
                        <div className='flex flex-wrap items-center gap-2 mb-2'>
                            {tags.map((tag, index) =>
                                <span
                                    onClick={() => handleRemoveTag(tag)}
                                    key={index}
                                    className="w-max border px-2 py-px bg-violet-50 hover:bg-violet-100 duration-300 rounded text-sm flex items-center gap-1 cursor-pointer"
                                >
                                    {tag}
                                    <MdClose className='text-base' />
                                </span>)
                            }
                        </div>
                        <input
                            type="text"
                            value={tagsValue}
                            onKeyDown={handleInputKeyDown}
                            onChange={(e) => setTagsValue(e.target.value)}
                            placeholder="Write requirements and press 'Enter' key"
                            className="block w-full border rounded outline-none py-2 px-3 text-sm focus:border-violet-600"
                        />
                        {
                            formErrors?.requirements &&
                            <p className='mt-1 text-sm text-red-500 flex gap-1 items-start'>
                                <RiErrorWarningFill className="text-base mt-0.5" />
                                {formErrors?.requirements}
                            </p>
                        }
                    </div>
                    <div>
                        <label className="block mb-2 text-content text-base" htmlFor="price">
                            Price
                        </label>
                        <input
                            className="block w-full border rounded outline-none py-2 px-3 text-sm focus:border-violet-600"
                            type="text" id="price"
                            placeholder="$10.00"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                        />
                        {
                            formErrors?.price &&
                            <p className='mt-1 text-sm text-red-500 flex gap-1 items-start'>
                                <RiErrorWarningFill className="text-base mt-0.5" />
                                {formErrors?.price}
                            </p>
                        }
                    </div>
                    {step !== 4 && (
                        <div className="pt-5 pb-10 flex flex-wrap gap-2 items-center justify-between">
                            <button
                                className={`block py-2.5 px-12 rounded text-base font-medium bg-slate-800 hover:bg-slate-900 duration-300 text-white`}
                                disabled={step === 1}
                                onClick={() => setStep((prevState) => prevState - 1)}
                            >
                                Back
                            </button>
                            <button
                                className={`block py-2.5 px-12 rounded text-base font-medium bg-violet-600 hover:bg-violet-700 duration-300 text-white`}
                                onClick={handleSubmit}
                            >
                                Continue
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
        {loading && <Spinner />}
    </>);
};

export default SettingsForm;