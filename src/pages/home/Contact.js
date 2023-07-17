import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { apiPost } from '../../services/apiServices';
import { API_URL } from '../../constant/url';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

export default function Contact() {
    const { register, handleSubmit, reset } = useForm();
    const [submittedForms, setSubmittedForms] = useState(0);

    const onSubForm = (_bodyData) => {
        console.log(_bodyData);
        doApiPost(_bodyData);
    };

    const doApiPost = async (_bodyData) => {
        try {
            const url = API_URL + '/contact';
            const data = await apiPost(url, _bodyData);
            console.log(data);

            if (data._id) {
                toast.success('הפרטים נשלחו בהצלחה, ניצור קשר בהקדם');
                reset();
                setSubmittedForms((prevCount) => prevCount + 1);
            }
        } catch (error) {
            console.log(error);
            toast.error('ישנה בעיה, נסה שנית');
        }
    };

    return (
        <div className='md:px-36 contact px-10 pb-20 pt-20' id='contact'>
            <Row className='md:mb-5'>
                <Col lg='8'>
                    <h1 className='font-bold md:text-7xl text-3xl md:mb-4 text-gray-500 border-b border-b-gray-400'>שמרו על קשר</h1>
                </Col>
            </Row>
            <Row className='rounded-lg'>
                <Col lg='5' className=' mb-5'>
                    <div className='text-white text-xl pb-2'>אנחנו מאמינים שהכל מתחיל בחיוך ושירות</div>
                    <address>
                        <div className='font-bold text-gray-200'>
                            אימייל:
                            <p className='text-white'>Exemple@gmail.com</p>
                        </div>
                        <br />
                        <div className='font-bold text-gray-200'>
                            <p className='text-white'>טלפון:</p>
                            <p>0528857298 \ 0584767470</p>
                        </div>
                    </address>
                </Col>
                <Col lg='7' className='flex align-middle'>
                    <form className='w-full' onSubmit={handleSubmit(onSubForm)}>
                        <Row>
                            <Col lg='3' className='mb-3 md:mb-2'>
                                <input {...register('name', { required: true, minLength: 2 })} className='form-control border-1 border-gray-400 focus:outline-none focus:border-slate-700 shadow bg-slate-200' name='name' placeholder='שם:' type='text' />
                            </Col>
                            <Col lg='6' className='mb-3'>
                                <input {...register('email', { required: true, minLength: 2 })} className='form-control border-1 border-gray-400 focus:outline-none focus:border-slate-700 shadow bg-slate-200' name='email' placeholder='מייל:' type='email' />
                            </Col>
                            <Col lg='3' className='mb-3 '>
                                <input {...register('phone', { required: true, minLength: 2 })} className='form-control border-1 border-gray-400 focus:outline-none focus:border-slate-700 shadow bg-slate-200' name='phone' placeholder='טל:' type='phone' />
                            </Col>
                        </Row>

                        <textarea {...register('message', { required: true, minLength: 2 })} className='form-control border-1 border-gray-400 focus:outline-none focus:border-slate-700 shadow bg-slate-200' id='message' name='message' placeholder='הודעה:' rows={5}></textarea>
                        <br />
                        <Row>
                            <Col lg='12' className='form-group items-start flex justify-start'>
                                <button className='text-white hover:bg-gray-700 rounded-md  border-[0.1px] bg-slate-900 bg-opacity-60 shadow p-1 px-4' type='submit'>שליחה</button>
                            </Col>
                        </Row>
                    </form>
                </Col>
                <div className='md:border-b border-b-gray-400 w-1/5 mx-3'></div>
            </Row>
        </div>
    );
}
