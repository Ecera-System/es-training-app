import React, { useContext, useState } from 'react';
import { BsCardImage, BsPlayCircle } from 'react-icons/bs';
import { RiErrorWarningFill } from 'react-icons/ri';
import { contextProvider } from '../../Context/ContextProvider';

const CourseMediaForm = ({ step, setStep }) => {
    const { courseState, setCourseState } = useContext(contextProvider);
    const [coverImage, setCoverImage] = useState("");
    const [video, setVideo] = useState("");
    const [formErrors, setFormErrors] = useState({});

    
    const captureImage = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setCoverImage(reader.result);
        };
    };


    // <!-- Validate form function -->
    const validateForm = (data) => {
        let errors = {};
        if (!data) {
            errors.coverImage = 'Cover image is required!';
        };
        if (!video) {
            errors.video = 'Video is required!';
        };
        return errors;
    };


    // <!-- Submit Form -->
    const handleSubmit = async (event) => {
        event.preventDefault();
        const errors = validateForm(coverImage);

        if (Object.keys(errors).length === 0) {
            setFormErrors({});
            setCourseState({
                ...courseState,
                coverImage,
                video,
            });
            setStep((prevState) => prevState + 1);
        }
        else {
            setFormErrors(errors);
        }
    };

    return (
        <div>
            <div className="pt-6 px-8">
                <h2 className="font-semibold text-xl text-violet-600">Courses Media</h2>
                <form onSubmit={handleSubmit} className="mt-5 flex flex-col gap-y-5">
                    <div>
                        <label className="block mb-2 text-content text-base" htmlFor="cover">
                            Course cover image
                        </label>
                        <input
                            className="block w-full border rounded outline-none py-2 px-3 text-sm focus:border-purple-600"
                            type="file"
                            id="cover"
                            onChange={captureImage}
                        />
                    </div>
                    {
                        formErrors?.coverImage &&
                        <p className='mt-1 text-sm text-red-500 flex gap-1 items-start'>
                            <RiErrorWarningFill className="text-base mt-0.5" />
                            {formErrors?.coverImage}
                        </p>
                    }
                    {coverImage ? (
                        <div className="flex items-center justify-center bg-gray-200 min-h-60 rounded-lg">
                            <img
                                className="w-4/5 h-4/5"
                                src={coverImage}
                                alt="course cover"
                            />
                        </div>
                    ) : (
                        <div className="flex items-center justify-center bg-gray-200 h-60 rounded-lg">
                            <BsCardImage className="text-8xl opacity-50 text-gray-500" />
                        </div>
                    )}
                    <div>
                        <input
                            className="block w-full border rounded outline-none py-2 px-3 mb-5 text-sm focus:border-purple-600"
                            type="url"
                            placeholder="Video URL"
                            defaultValue={video}
                            onChange={(e) => setVideo(e.target.value)}
                        />
                        {video ?
                            <iframe
                                width="100%"
                                height="360"
                                src={video}
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                            :
                            <div className="flex items-center justify-center bg-gray-200 h-60 rounded-lg">
                                <BsPlayCircle className="text-8xl cursor-pointer text-gray-500" />
                            </div>
                        }
                        {
                            formErrors?.video &&
                            <p className='mt-1 text-sm text-red-500 flex gap-1 items-start'>
                                <RiErrorWarningFill className="text-base mt-0.5" />
                                {formErrors?.video}
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
                </form>
            </div>
        </div>
    );
};

export default CourseMediaForm;