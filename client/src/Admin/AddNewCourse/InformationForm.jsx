import { Editor } from '@tinymce/tinymce-react';
import React, { useContext, useRef, useState } from 'react';
import { RiErrorWarningFill } from 'react-icons/ri';
import { contextProvider } from '../../Context/ContextProvider';

const InformationForm = ({ step, setStep }) => {
    const { setCourseState } = useContext(contextProvider);
    const editorRef = useRef(null);
    const [othersCategory, setOthersCategory] = useState(false);
    const [formData, setFormData] = useState({
        title: '',
        category: '',
        level: '',
    });
    const [formErrors, setFormErrors] = useState({});


    // <!-- onChange input -->
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
        if (name === 'category' && value === 'others') {
            setOthersCategory(true);
        }
    };

    // <!-- Validate form function -->
    const validateForm = (data) => {
        let errors = {};
        if (!data.title) {
            errors.title = 'Title is required!';
        };
        if (!data.category) {
            errors.category = 'Category is required!';
        };
        if (data.category === 'others') {
            errors.category = 'Category is required!';
        };
        if (!data.level) {
            errors.level = 'Level is required!';
        };
        if (!editorRef.current.getContent()) {
            errors.description = 'Description is required!';
        };
        return errors;
    };


    // <!-- Submit Form -->
    const handleSubmit = async (event) => {
        event.preventDefault();
        const errors = validateForm(formData);
        if (Object.keys(errors).length === 0) {
            setFormErrors({});
            setCourseState({
                title: formData.title,
                category: formData.category,
                level: formData.level,
                description: editorRef.current.getContent(),
            });
            setStep((prevState) => prevState + 1);
        }
        else {
            setFormErrors(errors);
        }
    };

    return (
        <div className="pt-6 px-8">
            <h2 className="font-semibold text-xl text-violet-600">
                Basic Information
            </h2>
            <form onSubmit={handleSubmit} className="mt-5 flex flex-col gap-y-5">
                <div>
                    <label className="block mb-2 text-content text-base" htmlFor="title">
                        Course Title
                    </label>
                    <input
                        className={`block w-full border rounded outline-none py-2 px-3 text-sm focus:border-violet-600 ${formErrors?.title && 'border-red-500'}`}
                        type="text"
                        id="title" name="title"
                        placeholder="Course Title"
                        onChange={handleChange}
                    />
                    {
                        formErrors?.title &&
                        <p className='mt-1 text-sm text-red-500 flex gap-1 items-start'>
                            <RiErrorWarningFill className="text-base mt-0.5" />
                            {formErrors?.title}
                        </p>
                    }
                </div>
                <div>
                    <label
                        className="block mb-2 text-content text-base"
                        htmlFor="category"
                    >
                        Courses Category
                    </label>
                    {
                        othersCategory ?
                            <input
                                className={`block w-full border rounded outline-none py-2 px-3 text-sm focus:border-violet-600 ${formErrors?.title && 'border-red-500'}`}
                                type="text"
                                id="category" name="category"
                                placeholder=""
                                onChange={handleChange}
                            /> :
                            <select
                                name="category" id="category"
                                className={`block w-full border rounded outline-none py-2 px-3 text-sm focus:border-violet-600 ${formErrors?.category && 'border-red-500'}`}
                                onChange={handleChange}
                            >
                                <option>Select Category</option>
                                <option value="web design">Web Design</option>
                                <option value="programming">Web Development</option>
                                <option value="programming">Programming</option>
                                <option value="graphic design">Graphic Design</option>
                                <option value="others">Others</option>
                            </select>
                    }
                    {
                        formErrors?.category &&
                        <p className='mt-1 text-sm text-red-500 flex gap-1 items-start'>
                            <RiErrorWarningFill className="text-base mt-0.5" />
                            {formErrors?.category}
                        </p>
                    }
                </div>
                <div>
                    <label className="block mb-2 text-content text-base" htmlFor="level">
                        Courses Level
                    </label>
                    <select
                        name="level" id="level"
                        className={`block w-full border rounded outline-none py-2 px-3 text-sm focus:border-violet-600 ${formErrors?.level && 'border-red-500'}`}
                        onChange={handleChange}
                    >
                        <option>Select Level</option>
                        <option value="beginner">Beginner</option>
                        <option value="intermediate">Intermediate</option>
                        <option value="expert">Expert</option>
                    </select>
                    {
                        formErrors?.level &&
                        <p className='mt-1 text-sm text-red-500 flex gap-1 items-start'>
                            <RiErrorWarningFill className="text-base mt-0.5" />
                            {formErrors?.level}
                        </p>
                    }
                </div>
                <div>
                    <Editor
                        onInit={(evt, editor) => (editorRef.current = editor)}
                        className='border border-red-600'
                        init={{
                            height: 300,
                            menubar: false,
                            plugins: [
                                "advlist autolink lists link image charmap print preview anchor",
                                "searchreplace visualblocks code fullscreen",
                                "insertdatetime media table paste code help wordcount",
                            ],
                            toolbar:
                                "undo redo | formatselect | " +
                                "bold italic backcolor | alignleft aligncenter " +
                                "alignright alignjustify | bullist numlist outdent indent | " +
                                "removeformat | help",
                            content_style:
                                "body { font-family: Inter var, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif; font-size:16px }",
                            statusbar: false,
                        }}
                    />
                    {
                        formErrors?.description &&
                        <p className='mt-1 text-sm text-red-500 flex gap-1 items-start'>
                            <RiErrorWarningFill className="text-base mt-0.5" />
                            {formErrors?.description}
                        </p>
                    }
                </div>
                {step !== 4 && (
                    <div className="pt-5 pb-10 flex flex-wrap gap-2 items-center justify-between">
                        <button
                            className={`block py-2.5 px-12 rounded text-base font-medium bg-slate-800 ${step === 1 ? 'bg-gray-400' : 'hover:bg-slate-900'} duration-300 text-white`}
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
    );
};

export default InformationForm;