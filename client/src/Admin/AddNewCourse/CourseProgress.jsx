import React from 'react';
import { MdCheckCircle } from 'react-icons/md';

const CourseProgress = ({ step }) => {
    return (
        <div className="sticky top-0 left-0 backdrop-blur-md rounded-t-lg flex items-center gap-7 p-6 border-b">
            <div>
                <div
                    className={`h-[3px] w-32 mb-4 ${step >= 1 ? "bg-emerald-500 " : "bg-[#C1C9D2]"
                        }`}
                ></div>
                <div className="flex items-center gap-1">
                    {step > 1 ? (
                        <MdCheckCircle className='text-emerald-500' />
                    ) : (
                        <div
                            className={`w-3 h-3 box-border rounded-full ${step === 1
                                ? "border-4 border-emerald-500"
                                : "border-2 border-inherit"
                                }`}
                        ></div>
                    )}
                    <span className="text-xs font-medium">Basic Information</span>
                </div>
            </div>
            <div>
                <div
                    className={`h-[3px] w-32 mb-4 ${step >= 2 ? "bg-emerald-500 " : "bg-[#C1C9D2]"
                        }`}
                ></div>
                <div className="flex items-center gap-1">
                    {step > 2 ? (
                        <MdCheckCircle className='text-emerald-500' />
                    ) : (
                        <div
                            className={`w-3 h-3 box-border rounded-full ${step === 2
                                ? "border-4 border-emerald-500"
                                : "border-2 border-inherit"
                                }`}
                        ></div>
                    )}
                    <span className="text-xs font-medium">Courses Media</span>
                </div>
            </div>
            <div>
                <div
                    className={`h-[3px] w-32 mb-4 ${step >= 3 ? "bg-emerald-500 " : "bg-[#C1C9D2]"
                        }`}
                ></div>
                <div className="flex items-center gap-1">
                    {step > 3 ? (
                        <MdCheckCircle className='text-emerald-500' />
                    ) : (
                        <div
                            className={`w-3 h-3 box-border rounded-full ${step === 3
                                ? "border-4 border-emerald-500"
                                : "border-2 border-inherit"
                                }`}
                        ></div>
                    )}
                    <span className="text-xs font-medium">Settings</span>
                </div>
            </div>
        </div>
    );
};

export default CourseProgress;