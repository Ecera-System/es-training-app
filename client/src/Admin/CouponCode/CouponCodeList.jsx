import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useGetAllCouponCode from '../../API/useGetAllCouponCode';
import { contextProvider } from '../../Context/ContextProvider';
import PageTitle from '../../Pages/Shared/PageTitle';
import Spinner from '../../Pages/Shared/Spinner/Spinner';

const CouponCodeList = () => {
    const { showToast } = useContext(contextProvider);
    const [couponData, loading] = useGetAllCouponCode();
    const [coLoading, setCoLoading] = useState(false);
    const navigate = useNavigate();

    if (loading) return <Spinner />

    
    // <!-- Handle Change Status -->
    const handleStatus = async (e, id) => {
        const data = e.target.value;
        if (!data) return;
        try {
            setCoLoading(true);
            const res = await axios.patch(`${process.env.REACT_APP_API_V1_URL}/coupon-code`, {
                status: data,
                id: id,
            }, {
                method: 'PATCH',
                headers: {
                    'Authorization': localStorage.getItem('auth_token')
                }
            });
            const success = res.data.success;
            showToast({
                success: success,
                error: ''
            });
        } catch (err) {
            showToast({
                succuss: '', error: err?.response?.data?.error,
            });
            if (err?.response?.data?.notExist) {
                localStorage.removeItem('auth_token');
                return navigate('/sign-in');
            }
        };
        setCoLoading(false);
    };

    return (<>
        <PageTitle title="All Coupon Code" />
        {couponData.length !== 0 ?
            <div className="border-b bg-white text-gray-600 rounded-lg border overflow-x-auto">
                <table className="table-auto w-full">
                    <thead className="bg-violet-100 text-left uppercase">
                        <tr>
                            <th className="text-sm py-3 px-5">Coupon Name</th>
                            <th className="text-sm py-3 pr-5">Code</th>
                            <th className="text-sm py-3 pr-5">Course</th>
                            <th className="text-sm py-3 pr-5">Discount</th>
                            <th className="text-sm py-3 pr-5">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {couponData.map(({ _id, name, couponCode, courseId, discount, status }) =>
                            <tr key={_id} className="border-b">
                                <td className='py-3 px-5'>
                                    <p className='w-40'>
                                        {name}
                                    </p>
                                </td>
                                <td className="py-3 pr-5">
                                    <p className='w-max'>
                                        {couponCode}
                                    </p>
                                </td>
                                <td className="py-3 pr-5">
                                    <p className='w-80'>
                                        {courseId.title}
                                    </p>
                                </td>
                                <td className="py-3 pr-5">
                                    {discount}
                                </td>
                                <td className="py-3 pr-5 ">
                                    <select
                                        name="status"
                                        id="status"
                                        className="py-2 px-4 border border-violet-500 rounded bg-none cursor-pointer outline-none"
                                        onChange={(e) => handleStatus(e, _id)}
                                    >
                                        <option value="">Change Status</option>
                                        <option selected={status === "pending"} value="pending">
                                            Pending
                                        </option>
                                        <option selected={status === "active"} value="active">
                                            Active
                                        </option>
                                        <option selected={status === "inactive"} value="inactive">
                                            Inactive
                                        </option>
                                        <option selected={status === "delete"} value="delete">
                                            Delete
                                        </option>
                                    </select>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div> :
            <div className='mt-32 w-full grid place-items-center'>
                <p className='text-4xl font-medium text-gray-400'>No Coupon code has been created yet!</p>
            </div>
        }
        {
            coLoading && <Spinner />
        }
    </>);
};

export default CouponCodeList;