import React, { useState } from 'react';
import PageTitle from '../../Pages/Shared/PageTitle';
import CourseProgress from './CourseProgress';
import CourseMediaForm from './CourseMediaForm';
import InformationForm from './InformationForm';
import SettingsForm from './SettingsForm';
import SuccessMessage from './SuccessMessage';

const screen = {
    1: InformationForm,
    2: CourseMediaForm,
    3: SettingsForm,
    4: SuccessMessage,
};

const AddNewCourse = () => {
    const [step, setStep] = useState(1);
    const Layout = screen[step];

    return (<>
        <PageTitle
            title={
                (step === 1 && 'Basic Information - Add New Course') ||
                (step === 2 && 'Courses Media - Add New Course') ||
                (step === 3 && 'Settings - Add New Course')||
                (step === 4 && 'The Course Added Successfully - Add New Course')
            }
        />
        <div className="text-gray-600 mb-20">
            <h3 className="font-semibold text-3xl my-10">Add New Course</h3>
            <div className="border rounded-lg bg-white">
                <CourseProgress step={step} />
                <Layout step={step} setStep={setStep} />
            </div>
        </div>
    </>);
};

export default AddNewCourse;